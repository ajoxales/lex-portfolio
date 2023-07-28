"use client";
import React from "react";
import Image from "next/image";
import icon from "../assets/map.png";
import styles from "@/app/projects/weathermap/styles/styles.module.css";

const HeaderComponent = () => {
	return (
		<>
			<nav
				className={` ${styles.nav} navbar navbar-expand-lg navbar-dark bg-transparent py-3`}>
				<div className="container d-flex justify-content-center align-items-center">
					<Image src={icon} height={30} width={30} className="me-3" />
					<div className={`text-light`}>WeatherMap</div>
				</div>
			</nav>
		</>
	);
};

export default HeaderComponent;
