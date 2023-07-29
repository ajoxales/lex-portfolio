"use client";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const Socials = () => {
	return (
		<div>
			{" "}
			<Navbar bg="transparent" data-bs-theme="dark" id="nav">
				<Nav as="ul" className="ms-1">
					<Nav.Item as="li">
						<Nav.Link
							href="https://www.facebook.com/lex.oxales"
							target="_blank">
							<i class="bi bi-facebook fs-5 text-white me-2"></i>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link
							href="https://www.instagram.com/_jowsep_/"
							target="_blank">
							<i class="bi bi-instagram fs-5 text-white me-2"></i>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link
							href="https://github.com/ajoxales"
							target="_blank">
							<i class="bi bi-github fs-5 text-white me-2"></i>
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar>
		</div>
	);
};

export default Socials;
