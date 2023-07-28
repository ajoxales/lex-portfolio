import React from "react";
import { motion, useInView } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import html from "../app/assets/html.png";
import css from "../app/assets/css-3.png";
import js from "../app/assets/js.png";
import reactjs from "../app/assets/react.png";
import bootstrap from "../app/assets/bootstrap.png";

const Skills = () => {
	return (
		<div>
			<div>
				<div
					className="rounded-3 p-3 fw-light text-light"
					style={{ backgroundColor: "#21324E" }}>
					<Row className="px-2 justify-content-center align-items-center">
						<Col
							className="text-center p-4 shadow-lg rounded-2 m-1"
							style={{
								backgroundColor: "#21324E",
							}}>
							<Image src={html} width={50} />

							<h3 className="fs-6 pt-3">HTML5</h3>
						</Col>
						<Col
							className="text-center p-4 shadow-lg rounded-2 m-1"
							style={{
								backgroundColor: "#21324E",
							}}>
							<Image src={css} width={50} />
							<h3 className="fs-6 pt-3">CSS3</h3>
						</Col>
						<Col
							className="text-center p-4 shadow-lg rounded-2 m-1"
							style={{
								backgroundColor: "#21324E",
							}}>
							<Image src={js} width={50} />
							<h3 className="fs-6 pt-3">Javascript</h3>
						</Col>
						<Col
							className="text-center p-4 shadow-lg rounded-2 m-1"
							style={{
								backgroundColor: "#21324E",
							}}>
							<Image src={reactjs} width={55} />
							<h3 className="fs-6 pt-3">ReactJS</h3>
						</Col>

						<Col
							className="text-center p-4 shadow-lg rounded-2 m-1"
							style={{
								backgroundColor: "#21324E",
							}}>
							<Image src={bootstrap} width={60} />
							<h3 className="fs-6 pt-3">Bootstrap</h3>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
};

export default Skills;
