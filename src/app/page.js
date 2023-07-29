"use client";
import React from "react";
//components
import { Container, Col, Row } from "react-bootstrap";
import Skills from "@/components/Skills";
import ContactComp from "@/components/ContactComp.js";
import Socials from "@/components/Socials";
import Image from "next/image";
import Link from "next/link";

//third-party
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../app/globals.css";
import { motion } from "framer-motion";

//images
import about from "../app/assets/about_photo.jpg";
import hero from "../app/assets/hero-1.svg";
import mockup1 from "../app/assets/mockup1.png";
import mockup2 from "../app/assets/mockup2.png";
import mockup3 from "../app/assets/mockup-3.svg";

export default function Home() {
	return (
		<>
			<div>
				<div id="hero" className="pt-5">
					<Container>
						<div className="d-flex justify-content-between pb-5 pt-3">
							<div>
								<div
									id="title"
									className="mx-2 text-center text-sm-start">
									<motion.div
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{
											delay: 0.1,
											ease: "easeOut",
										}}
										className="fs-3 text-white ms-2 "
										style={{
											fontWeight: "500",
											letterSpacing: "-1px",
										}}>
										Welcome! I'm
									</motion.div>

									<div
										className={`ms-1 mb-3 `}
										style={{
											fontWeight: 700,
											letterSpacing: "-2px",
										}}>
										<motion.h1
											initial={{ x: -50, opacity: 0 }}
											animate={{ x: 0, opacity: 1 }}
											transition={{
												ease: "easeOut",
												delay: 0.2,
											}}
											className="alex">
											Lex Oxales
										</motion.h1>
									</div>

									<motion.p
										initial={{ x: -50, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{
											ease: "easeOut",
											delay: 0.3,
										}}
										className="ms-1">
										An aspiring{" "}
										<strong>web developer</strong> focused
										in transforming ideas into visually
										stunning and functional websites.
									</motion.p>
								</div>
								<motion.div
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{
										ease: "easeOut",
										delay: 0.5,
									}}
									className="d-flex justify-content-center justify-content-sm-start">
									<Socials />
								</motion.div>
							</div>

							<div>
								<motion.div
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{
										ease: "easeOut",
										delay: 0.1,
									}}>
									<Image
										id="hero-img"
										src={hero}
										width={570}
										className="me-5 ms-3 pe-3 mt-3"
									/>
								</motion.div>
							</div>
						</div>
					</Container>
				</div>

				<Container className="py-lg-5 px-2 px-md-4 mt-5">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: "easeOut",
							delay: 1,
						}}
						className="d-flex align-items-center p-3 p-lg-5 flex-lg-row-reverse flex-column rounded-4 bg-gradient-dark"
						style={{ backgroundColor: "#21324E" }}>
						<article className="ms-2 py-5">
							<div className="text-white pb-2 mb-3">
								<h1
									style={{
										fontSize: "3rem",
										lineHeight: "1.5",
									}}>
									About Me
								</h1>
								<h3 className="fs-5 text-secondary">
									who am i?
								</h3>
							</div>
							<p class="pb-3" style={{ fontWeight: 600 }}>
								I'm a 3rd-year college student pursuing Bachelor
								of Science in Information Technology at De La
								Salle University - Dasmarinas. Since childhood,
								I've had a keen interest in technology, which
								led me to explore the fascinating world of web
								development.
							</p>
							<p>
								Working on projects that challenge my skills and
								creativity is incredibly motivating. I love
								brainstorming innovative solutions to tackle
								real-world problems.
							</p>

							<button className="btn bg-info-subtle text-info-emphasis mt-4 fw-medium">
								<Link href="/about">
									Learn More{" "}
									<i class="bi bi-arrow-right-short"></i>
								</Link>
							</button>
						</article>

						<Image
							src={about}
							width={400}
							className="rounded-3 img-fluid shadow-lg mt-3 me-4 ms-4 mb-4"
						/>
					</motion.div>
				</Container>

				<Container className="py-5">
					<div className="text-white pt-5 pb-1 mb-3">
						<h1 style={{ fontSize: "3rem" }}>Skills</h1>
						<p>
							I've been working on projects using these
							technologies.
						</p>
					</div>
					<Skills />
				</Container>

				<Container className="py-5">
					<div className="py-5">
						<h1
							className="text-white text-3xl font-bold underline pb-2"
							style={{ fontSize: "50px" }}>
							Recent Projects
						</h1>
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
									<Link href="/projects/weathermap">
										<h2
											className="text-white p-4"
											style={{
												position: "absolute",
												zIndex: "1000",
											}}>
											WeatherMap
										</h2>
									</Link>
									<Link href="/projects/weathermap">
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
									</Link>
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
									<Link href="/projects/calculator">
										<h2
											className="text-white p-4"
											style={{
												position: "absolute",
												zIndex: "1000",
											}}>
											Calculator
										</h2>
									</Link>

									<Link href="/projects/calculator">
										<div className="zoom-on-hover">
											<Image
												className="ms-3	mt-2 pb-5"
												src={mockup2}
												height={435}
												style={{
													position: "relative",
													objectFit: "cover",
												}}
											/>
										</div>
									</Link>
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
									<Link href="/projects/ip-subnet">
										<h2
											className="text-white p-4"
											style={{
												position: "absolute",
												zIndex: "1000",
											}}>
											IP Subnet <br />
											Calculator
										</h2>
									</Link>
									<Link href="/projects/ip-subnet">
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
									</Link>
								</div>
							</Col>
						</Row>
					</div>
				</Container>

				<Container className="py-5">
					<ContactComp />
				</Container>

				<footer></footer>
			</div>
		</>
	);
}
