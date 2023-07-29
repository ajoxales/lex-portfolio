"use client";
import React from "react";
import Image from "next/image";
import icon from "../assets/calculator1.png";

const HeaderComponent = () => {
	return (
		<>
			<nav
				className={`navbar navbar-expand-lg navbar-dark bg-transparent py-2`}>
				<div className="container d-flex justify-content-center align-items-center">
					<Image src={icon} height={30} width={30} className="me-3" />
					<div className={`text-light fs-4 fw-semibold`}>
						Calculator
					</div>
				</div>
			</nav>
		</>
	);
};

export default HeaderComponent;
