import React from "react";
import Image from "next/image";
import icon from "../assets/calculator.png";

const HeaderComponent = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 mb-4 ">
				<div className="container d-flex justify-content-center justify-content-sm-start">
					<Image src={icon} height={30} width={30} className="me-3" />
					<span className={`text-light`}>IP Subnet Calculator</span>
				</div>
			</nav>
		</>
	);
};

export default HeaderComponent;
