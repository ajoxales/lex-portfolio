import React from "react";
import { useRef, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import mockup1 from "@/app/assets/mock1.svg";
import mockup2 from "@/app/assets/mock2.svg";
import mockup3 from "@/app/assets/mockup3.png";

const Projects = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { triggerOnce: true });

	useEffect(() => {
		console.log("Element is in view: ", isInView);
	}, [isInView]);

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}>
			<Row
				xs={1}
				md={2}
				lg={3}
				className="gy-2 gx-2 d-flex justify-content-center">
				<Col>
					<div
						className="border-0 rounded bg-gradient"
						style={{
							overflow: "hidden",
							height: "300px",
							backgroundColor: "#21324E",
						}}>
						<h2
							className="text-white p-4"
							style={{
								position: "absolute",
								zIndex: "1000",
							}}>
							WeatherMap
						</h2>
						<div className="zoom-on-hover">
							<Image
								className=" pb-5"
								src={mockup1}
								height={450}
								style={{
									objectFit: "cover",
								}}
							/>
						</div>
					</div>
				</Col>
				<Col>
					<div
						className="border-0 rounded bg-gradient"
						style={{
							overflow: "hidden",
							height: "300px",
							backgroundColor: "#21324E",
						}}>
						<h2
							className="text-white p-4"
							style={{
								position: "absolute",
								zIndex: "1000",
							}}>
							Calculator
						</h2>
						<div className="zoom-on-hover">
							<Image
								className="ms-4	 mt-2 pb-5"
								src={mockup2}
								height={430}
								style={{
									position: "relative",
									objectFit: "cover",
								}}
							/>
						</div>
					</div>
				</Col>
				<Col>
					<div
						className="border-0 rounded bg-gradient"
						style={{
							overflow: "hidden",
							height: "300px",
							backgroundColor: "#21324E",
						}}>
						<h2
							className="text-white p-4"
							style={{
								position: "absolute",
								zIndex: "1000",
							}}>
							IP Subnet <br />
							Calculator
						</h2>
						<div className="zoom-on-hover">
							<Image
								className="ms-1 pb-5 "
								src={mockup3}
								height={450}
								style={{
									objectFit: "cover",
								}}
							/>
						</div>
					</div>
				</Col>
			</Row>
		</motion.div>
	);
};

export default Projects;
