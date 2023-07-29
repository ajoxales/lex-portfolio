"use client";
import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

const Footer = () => {
	return (
		<div>
			<Container>
				<div className="container">
					<footer className="d-flex flex-wrap justify-content-between align-items-center py-4 my-2 border-top border-secondary">
						<div className="col-md-4 d-flex align-items-center">
							<a
								href="/"
								className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1"></a>
							<Link
								href="/"
								className=" fw-bold fs-5 text-secondary text-decoration-none ms-3">
								aj
							</Link>
						</div>

						<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
							<li className="ms-3">
								<a
									className="text-muted"
									href="https://www.facebook.com/lex.oxales">
									<i className="bi bi-facebook text-secondary me-2"></i>
								</a>
							</li>
							<li className="ms-3">
								<a
									className="text-muted"
									href="https://www.instagram.com/_jowsep_/">
									<i className="bi bi-instagram text-secondary me-2"></i>
								</a>
							</li>
							<li className="ms-3">
								<a
									className="text-muted"
									href="https://github.com/ajoxales">
									<i className="bi bi-github text-secondary me-2"></i>
								</a>
							</li>
						</ul>
					</footer>
				</div>
			</Container>
		</div>
	);
};

export default Footer;
