"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import styles from "@/app/projects/ip-subnet/styles/styles.module.css";
import { Row, Col, InputGroup, Form, Button, Table } from "react-bootstrap";
import HeaderComponent from "@/app/projects/ip-subnet/components/HeaderComponent";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useState } from "react";

const Page = () => {
	const [networkAddress, setNetworkAddress] = useState("");
	const [firstUsable, setFirstUsable] = useState("");
	const [lastUsable, setLastUsable] = useState("");
	const [broadcastAddress, setBroadcastAddress] = useState("");
	const [nextNetwork, setNextNetwork] = useState("");
	const [prefix, setPrefix] = useState("");
	const [ipAddress, setIpAddress] = useState("");
	const [subnetMask, setSubnetMask] = useState("");
	const [subnetMaskOctet, setSubnetMaskOctet] = useState("");
	const [totalHosts, setTotalHosts] = useState("");
	const [usableHosts, setUsableHosts] = useState("");
	const [ipClass, setIPClass] = useState("");

	function getNetworkAddress(ipAddress, prefix) {
		// Convert IP address to binary
		const ipBinary = ipAddress
			.split(".")
			.map((octet) =>
				("00000000" + parseInt(octet, 10).toString(2)).slice(-8)
			);

		// Calculate the subnet mask based on the prefix
		const subnetMaskBinary = "1".repeat(prefix).padEnd(32, "0");

		// Calculate the network address
		const networkAddressBinary = ipBinary.map((octet, i) =>
			octet.split("").map((bit, j) => bit & subnetMaskBinary[i * 8 + j])
		);

		// Convert network address back to decimal
		const networkAddress = networkAddressBinary.map((octet) =>
			parseInt(octet.join(""), 2)
		);

		return networkAddress.join(".");
	}

	function getBroadcastAddress(ipAddress, prefix) {
		const ipBinary = ipAddress.split(".").map((octet) => {
			return ("00000000" + parseInt(octet, 10).toString(2)).slice(-8);
		});

		// Calculate the subnet mask based on the prefix
		const subnetMaskBinary = [];
		for (let i = 0; i < 32; i++) {
			if (i < prefix) {
				subnetMaskBinary.push("1");
			} else {
				subnetMaskBinary.push("0");
			}
		}

		// Split the subnet mask binary into octets
		const subnetMaskOctets = [];
		for (let i = 0; i < 32; i += 8) {
			const octetBinary = subnetMaskBinary.slice(i, i + 8).join("");
			subnetMaskOctets.push(parseInt(octetBinary, 2));
		}

		// Calculate the network address
		const networkAddressBinary = ipBinary.map((octet, i) =>
			octet.split("").map((bit, j) => bit & subnetMaskBinary[i * 8 + j])
		);

		// Convert network address back to decimal
		const networkAddress = networkAddressBinary.map((octet) => {
			return parseInt(octet.join(""), 2);
		});

		// Calculate broadcast address
		const broadcastAddressBinary = [];
		for (let i = 0; i < 4; i++) {
			const networkOctet = networkAddressBinary[i];
			const subnetMaskOctet = subnetMaskOctets[i];
			let broadcastOctet = "";
			for (let j = 0; j < 8; j++) {
				const networkBit = networkOctet[j];
				const subnetMaskBit =
					subnetMaskOctet & (1 << (7 - j)) ? "1" : "0";
				if (subnetMaskBit === "1") {
					broadcastOctet += networkBit;
				} else {
					broadcastOctet += "1";
				}
			}
			broadcastAddressBinary.push(broadcastOctet);
		}

		// Convert broadcast address back to decimal
		const broadcastAddress = broadcastAddressBinary.map((octet) => {
			return parseInt(octet, 2);
		});

		return broadcastAddress.join(".");
	}

	function getNextNetworkAddress(broadcastAddress) {
		// Convert the network address to an array of octets
		var octets = broadcastAddress.split(".");

		// Initialize the carry variable
		var carry = 1;

		// Iterate through the octets in reverse order
		for (var i = octets.length - 1; i >= 0; i--) {
			// Convert the octet to an integer
			var octet = parseInt(octets[i]);

			// Add the carry to the current octet
			var sum = octet + carry;

			// Check if the sum exceeds 255
			if (sum > 255) {
				// Carry over to the next octet
				carry = 1;
				octet = sum - 256;
			} else {
				// No carry needed
				carry = 0;
				octet = sum;
			}

			// Update the octet in the array
			octets[i] = octet.toString();

			// Break the loop if no carry is needed
			if (carry === 0) {
				break;
			}
		}

		// Join the octets into a string and return the next network address
		return octets.join(".");
	}

	function getFirstUsable(ipAddress, increment) {
		var octets = ipAddress.split(".");
		var lastIndex = octets.length - 1;

		// Convert last octet to integer
		var lastOctet = parseInt(octets[lastIndex]);

		// Increment last octet
		lastOctet += increment;

		// Handle carryover to previous octets
		for (var i = lastIndex; i >= 0; i--) {
			if (lastOctet > 255) {
				// Carryover to previous octet
				lastOctet -= 256;
				octets[i] = "0";
				if (i > 0) {
					// Increment previous octet
					octets[i - 1] = String(parseInt(octets[i - 1]) + 1);
				} else {
					// First octet reached, invalid
					return "Invalid";
				}
			} else {
				// Update last octet
				octets[lastIndex] = String(lastOctet);
				break;
			}
		}

		return octets.join(".");
	}

	function getLastUsable(ipAddress, decrement) {
		var octets = ipAddress.split(".");
		var lastIndex = octets.length - 1;

		// Convert last octet to integer
		var lastOctet = parseInt(octets[lastIndex]);

		// Decrement last octet
		lastOctet -= decrement;

		// Handle borrow from previous octets
		for (var i = lastIndex; i >= 0; i--) {
			if (lastOctet < 0) {
				// Borrow from previous octet
				lastOctet += 256;
				octets[i] = "255";
				if (i > 0) {
					// Decrement previous octet
					octets[i - 1] = String(parseInt(octets[i - 1]) - 1);
				} else {
					// First octet reached, invalid
					return "Invalid";
				}
			} else {
				// Update last octet
				octets[lastIndex] = String(lastOctet);
				break;
			}
		}

		return octets.join(".");
	}

	function getSubnetMask(hostBits) {
		let mask = [],
			i,
			n;
		for (i = 0; i < 4; i++) {
			n = Math.min(hostBits, 8);
			mask.push(256 - Math.pow(2, 8 - n));
			hostBits -= n;
		}

		return mask.join(".");
	}

	function getSubnetBinary(prefix) {
		let subnetMaskBinary = [];
		for (let i = 0; i < 32; i++) {
			if (i < prefix) {
				subnetMaskBinary.push("1");
			} else {
				subnetMaskBinary.push("0");
			}
		}

		let subnetMaskOctets = [];
		for (let i = 0; i < 32; i += 8) {
			const octetBinary = subnetMaskBinary.slice(i, i + 8).join("");
			subnetMaskOctets.push(octetBinary);
		}

		const subnetMaskOctetsFormatted = subnetMaskOctets.join(".");
		return subnetMaskOctetsFormatted;
	}

	function getUsableHosts(prefix) {
		let hostBits = 32 - prefix;
		let usableHosts = Math.pow(2, hostBits) - 2;
		if (usableHosts <= 0) {
			usableHosts = 0;
		}
		return usableHosts;
	}

	function getTotalHosts(prefix) {
		let hostBits = 32 - prefix;
		let totalHosts = Math.pow(2, hostBits);
		if (totalHosts <= 0) {
			totalHosts = 0;
		}
		return totalHosts;
	}

	function getIPClass(ipAddress, prefix) {
		let ipSplit = ipAddress.split(".");
		let firstOctet = ipSplit[0];
		let ipClass;

		if (firstOctet >= 1 && firstOctet <= 126 && prefix == 8) {
			ipClass = "A";
		} else if (firstOctet >= 128 && firstOctet <= 191 && prefix == 16) {
			ipClass = "B";
		} else if (firstOctet >= 192 && firstOctet <= 223 && prefix == 24) {
			ipClass = "C";
		} else {
			ipClass = "Classless";
		}
		return ipClass;
	}

	const handleCalculate = (event) => {
		event.preventDefault();

		const subnetMask = getSubnetMask(prefix);
		const subnetMaskBinary = getSubnetBinary(prefix);
		const networkAddress = getNetworkAddress(ipAddress, prefix);
		const broadcastAddress = getBroadcastAddress(ipAddress, prefix);
		const nextNetwork = getNextNetworkAddress(broadcastAddress);
		const firstUsable = getFirstUsable(networkAddress, 1);
		const lastUsable = getLastUsable(broadcastAddress, 1);
		const totalHosts = getTotalHosts(prefix);
		const ipClass = getIPClass(ipAddress, prefix);
		const usableHosts = getUsableHosts(prefix);

		setNetworkAddress(networkAddress);
		setSubnetMask(subnetMask);
		setSubnetMaskOctet(subnetMaskBinary.toString());
		setBroadcastAddress(broadcastAddress);
		setNextNetwork(nextNetwork);
		setFirstUsable(firstUsable);
		setLastUsable(lastUsable);
		setTotalHosts(totalHosts);
		setIPClass(ipClass);
		setUsableHosts(usableHosts);
	};

	return (
		<div>
			<div className="container d-flex flex-column justify-content-center align-items-center m-auto text-white">
				<h1 className="container text-center my-3 ">
					IPv4 Subnet Calculator
				</h1>
				<p className="w-75 text-center mb-4">
					This IP Subnet Calculator takes an IP address and netmask
					and calculates the resulting broadcast and network
					addresses, usable hosts, subnet mask, IP class, and other
					essential details. With the ability to handle CIDR notation
					and dotted decimals, this calculator simplifies the process
					of designing subnets ensuring efficient network planning and
					management.
				</p>

				<Form
					data-bs-theme="dark"
					className="container-sm d-flex justify-content-center row gx-0"
					onSubmit={handleCalculate}>
					<Form.Group
						className={`${styles.ipText} mx-2 col-8 col-sm-6 my-2 mt-sm-2`}>
						<InputGroup>
							<InputGroup.Text id="inputGroupPrepend">
								IP Address
							</InputGroup.Text>
							<Form.Control
								type="text"
								placeholder="192.168.1.1"
								aria-describedby="inputGroupPrepend"
								onChange={(e) => setIpAddress(e.target.value)}
								required
							/>
						</InputGroup>
						<Form.Control.Feedback type="invalid">
							Please enter a valid IP Address.
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group
						className={`${styles.cidrText} col-8 col-sm-2 my-2 mt-sm-2`}>
						<InputGroup>
							<InputGroup.Text id="inputGroupPrepend">
								/
							</InputGroup.Text>
							<Form.Control
								type="text"
								placeholder="24"
								min="1"
								max="32"
								maxLength={2}
								onChange={(e) => setPrefix(e.target.value)}
								aria-describedby="inputGroupPrepend"
								required
							/>
						</InputGroup>
						<Form.Control.Feedback type="invalid">
							Please choose a username.
						</Form.Control.Feedback>
					</Form.Group>

					<Button
						type="submit"
						variant="light"
						className={`${styles.calcBtn} mx-2 col-12 col-sm-2 my-2`}>
						Calculate
					</Button>
				</Form>
			</div>

			<div className="container table-responsive ">
				<div className="bg-dark px-1 rounded-2">
					<Table variant="dark" className="container mt-3 mb-5 table">
						<thead>
							<tr className="text-center">
								<th>Network Address</th>
								<th>First Usable</th>
								<th>Last Usable</th>
								<th>Broadcast Address</th>
								<th>Next Network Address</th>
							</tr>
						</thead>
						<tbody>
							<tr className={`${styles.row} text-center`}>
								<td>{networkAddress}</td>
								<td>{firstUsable}</td>
								<td>{lastUsable}</td>
								<td>{broadcastAddress}</td>
								<td>{nextNetwork}</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</div>

			<div className="container bg-dark px-1 rounded-2 w-50 m-auto">
				<Table variant="dark" className="container">
					<tbody className={styles.table}>
						<tr>
							<td className="w-50 text-break">Subnet Mask:</td>
							<td className="table-dark text-break  ">
								{subnetMask}
							</td>
						</tr>
						<tr>
							<td className="w-50 text-break">
								Binary Subnet Mask:
							</td>
							<td className="table-dark text-break  ">
								{subnetMaskOctet}
							</td>
						</tr>
						<tr>
							<td className="w-50">IP Class:</td>
							<td className="table-dark text-break  ">
								{ipClass}
							</td>
						</tr>
						<tr>
							<td className="w-50">Total Number of Hosts:</td>
							<td className="table-dark text-break  ">
								{totalHosts}
							</td>
						</tr>
						<tr>
							<td className="w-50">Usable Hosts:</td>
							<td className="table-dark text-break  ">
								{usableHosts}
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default Page;
