import React from "react";
import { useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface props {
	children: JSX.Element;
	width?: "fit-content" | "100%";
}

const Reveal = ({ children, width = "fit-content" }: props) => {
	return (
		<div style={{ position: "relative", width, overflow: "hidden" }}>
			<div>{children}</div>
		</div>
	);
};

export default Reveal;
