"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HeaderComponent from "@/app/projects/calculator/components/HeaderComponent";
import Calculator from "@/app/projects/calculator/components/Calculator";
import styles from "@/app/projects/calculator/styles/styles.module.css";

const Page = () => {
	return (
		<div className={styles.className}>
			<HeaderComponent />
			<Calculator />
		</div>
	);
};

export default Page;
