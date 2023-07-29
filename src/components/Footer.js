"use client";
import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
	return (
		<div>
			<Container>
				<div class="container">
					<footer class="d-flex flex-wrap justify-content-between align-items-center py-4 my-2 border-top border-secondary">
						<div class="col-md-4 d-flex align-items-center">
							<a
								href="/"
								class="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1"></a>
							<a href="/">
								<div className=" fw-bold fs-4 text-secondary">
									aj
								</div>
							</a>
						</div>

						<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
							<li class="ms-3">
								<a
									class="text-muted"
									href="https://www.facebook.com/lex.oxales">
									<i class="bi bi-facebook text-secondary me-2"></i>
								</a>
							</li>
							<li class="ms-3">
								<a
									class="text-muted"
									href="https://www.instagram.com/_jowsep_/">
									<i class="bi bi-instagram text-secondary me-2"></i>
								</a>
							</li>
							<li class="ms-3">
								<a
									class="text-muted"
									href="https://github.com/ajoxales">
									<i class="bi bi-github text-secondary me-2"></i>
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
