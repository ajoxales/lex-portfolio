"use client";
import React from "react";
import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import { motion } from "framer-motion";

import mockup1 from "@/app/assets/mock1.svg";
import mockup2 from "@/app/assets/mock2.svg";
import mockup3 from "@/app/assets/mockup-3.svg";

const Page = () => {
	return (
		<div>
			<Container className="py-5">
				<div className="py-5">
					<motion.h1
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							ease: "easeOut",
						}}
						className="text-white text-3xl font-bold underline pb-2"
						style={{ fontSize: "50px" }}>
						Recent Projects
					</motion.h1>
					<Row
						xs={1}
						md={2}
						lg={3}
						className="gy-2 gx-2 d-flex justify-content-center">
						<Col>
							<motion.div
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{
									ease: "easeOut",
									delay: 0.2,
								}}
								className="border-0 rounded bg-gradient"
								style={{
									overflow: "hidden",
									height: "300px",
									backgroundColor: "#21324E",
								}}>
								<div
									className="text-white p-4"
									style={{
										position: "absolute",
										zIndex: "1000",
										lineHeight: "400px",
									}}>
									<h2>WeatherMap</h2>
									<p>
										<a href="/projects/weathermap">
											<i className="bi bi-box-arrow-up-right"></i>
										</a>
									</p>
								</div>
								<Link href="/projects/weathermap">
									<div className="zoom-on-hover">
										<Image
											className=" pb-5 ms-4"
											src={mockup1}
											height={420}
											style={{
												objectFit: "cover",
											}}
										/>
									</div>
								</Link>
							</motion.div>
						</Col>
						<Col>
							<motion.div
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{
									ease: "easeOut",
									delay: 0.4,
								}}
								className="border-0 rounded bg-gradient"
								style={{
									overflow: "hidden",
									height: "300px",
									backgroundColor: "#21324E",
								}}>
								<div
									className="text-white p-4"
									style={{
										position: "absolute",
										zIndex: "1000",
										lineHeight: "400px",
									}}>
									<h2>Calculator</h2>
									<p>
										<a href="/projects/calculator">
											<i className="bi bi-box-arrow-up-right"></i>
										</a>
									</p>
								</div>
								<Link href="/projects/calculator">
									<div className="zoom-on-hover">
										<Image
											className="ms-4 pb-5"
											src={mockup2}
											height={420}
											style={{
												position: "relative",
												objectFit: "cover",
											}}
										/>
									</div>
								</Link>
							</motion.div>
						</Col>
						<Col>
							<motion.div
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{
									ease: "easeOut",
									delay: 0.6,
								}}
								className="border-0 rounded bg-gradient"
								style={{
									overflow: "hidden",
									height: "300px",
									backgroundColor: "#21324E",
								}}>
								<div
									className="text-white p-4"
									style={{
										position: "absolute",
										zIndex: "1000",
										lineHeight: "325px",
									}}>
									<h2>
										IP Subnet <br />
										Calculator
									</h2>
									<p>
										<a href="/projects/ip-subnet">
											<i class="bi bi-box-arrow-up-right"></i>
										</a>
									</p>
								</div>
								<Link href="/projects/ip-subnet">
									<div className="zoom-on-hover">
										<Image
											className="ms-4 pb-5"
											src={mockup3}
											height={420}
											style={{
												objectFit: "cover",
											}}
										/>
									</div>
								</Link>
							</motion.div>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	);
};

export default Page;
