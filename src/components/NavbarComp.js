"use client";
import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavbarComp = () => {
	return (
		<div>
			<header>
				<Navbar
					key="sm"
					expand="sm"
					className="justify-content-between pt-5 pb-2"
					bg="transparent"
					data-bs-theme="dark">
					<Container>
						<Navbar.Brand className="ms-3">
							<a href="/">
								<div className=" fw-bold fs-3">aj</div>
							</a>
						</Navbar.Brand>
						<Navbar.Toggle
							aria-controls={`offcanvasNavbar-expand-sm`}
						/>
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-sm`}
							aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
							placement="end"
							data-bs-theme="dark">
							<Offcanvas.Body>
								<Offcanvas.Header closeButton>
									<Offcanvas.Title>
										<div className=" fw-bold fs-2">aj</div>
									</Offcanvas.Title>
								</Offcanvas.Header>
								<Nav className="justify-content-end flex-grow-1 pe-3">
									<Nav.Item className="py-2 ps-3 fs-6">
										<Nav.Link href="/">Home</Nav.Link>
									</Nav.Item>
									<Nav.Item className="py-2 ps-3 fs-6">
										<Nav.Link href="/about">About</Nav.Link>
									</Nav.Item>
									<Nav.Item className="py-2 ps-3 fs-6">
										<Nav.Link href="/projects">
											Projects
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			</header>
		</div>
	);
};

export default NavbarComp;
