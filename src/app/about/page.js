"use client";
import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import avatar from "@/app/assets/about2.svg";
import { motion } from "framer-motion";

const Page = () => {
	return (
		<div className="text-white pt-5">
			<Container>
				<div className="d-flex mx-3">
					<motion.div
						initial={{ x: -20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{
							ease: "easeOut",
							delay: 0.2,
						}}>
						<Image
							src={avatar}
							height={720}
							className="me-5 mb-5 about-avatar"
						/>
					</motion.div>
					<div className="mx-lg-5">
						<motion.h1
							initial={{ x: -40, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								ease: "easeOut",
							}}
							className="alex mb-4">
							Alexander Joseph <br /> Oxales
						</motion.h1>
						<div>
							<article className="me-2 fs-5">
								<motion.p
									initial={{ x: -40, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{
										ease: "easeOut",
										delay: 0.2,
									}}
									className="text-white"
									style={{ fontWeight: 600 }}>
									I'm a 3rd-year college student pursuing
									Bachelor of Science in Information
									Technology at De La Salle University -
									Dasmarinas.
								</motion.p>
								<motion.p
									initial={{ x: -40, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{
										ease: "easeOut",
										delay: 0.3,
									}}>
									Working on projects that challenge my skills
									and creativity is incredibly motivating. I
									love brainstorming innovative solutions to
									tackle real-world problems.
								</motion.p>
								<motion.p
									initial={{ x: -40, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{
										ease: "easeOut",
										delay: 0.4,
									}}
									className="mb-4">
									Aside from coding, I find joy in editing and
									layout design. I'm proficient in tools like
									Photoshop and Premiere Pro, allowing me to
									express my creativity in various ways.
								</motion.p>

								<motion.p
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{
										ease: "easeOut",
										delay: 0.5,
									}}
									className="fw-bold">
									Checkout my other works!
								</motion.p>
								<a
									href="https://www.behance.net/alexandoxales"
									target="_blank">
									<motion.button
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{
											ease: "easeOut",
											delay: 0.6,
										}}
										className="btn btn-dark">
										<span>Behance</span>
										<i class="bi bi-behance text-white ms-3"></i>
									</motion.button>
								</a>
								<a
									href="https://www.youtube.com/channel/UC1ByiXZwxTWkfhoGzCDpAuA"
									target="_blank">
									<motion.button
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{
											ease: "easeOut",
											delay: 0.7,
										}}
										className="btn btn-danger ms-2">
										<span className="pb-2">YouTube</span>
										<i class="bi bi-youtube text-white ms-3"></i>
									</motion.button>
								</a>
							</article>

							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									ease: "easeOut",
									delay: 0.9,
								}}>
								<h1
									className="pt-5"
									style={{ fontSize: "2rem" }}>
									Skills
								</h1>
								<h2
									className="fs-4"
									style={{ color: "#D0D0D0" }}>
									<i class="bi bi-code-square me-2"></i> Web
									Development
								</h2>
								<h3 className="fs-5">
									<div className="badge text-bg-info">
										HTML5
									</div>
									<div className="badge text-bg-info">
										CSS3
									</div>
									<div className="badge text-bg-info">
										Javascript
									</div>
									<div className="badge text-bg-info">
										ReactJS
									</div>
									<div className="badge text-bg-info">
										Bootstrap
									</div>
									<div className="badge text-bg-info">
										Git
									</div>
									<div className="badge text-bg-info">
										Github
									</div>
									<div className="badge text-bg-info">
										Figma
									</div>
								</h3>
							</motion.div>

							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									ease: "easeOut",
									delay: 0.9,
								}}>
								<h2
									className="fs-4 mt-3"
									style={{ color: "#D0D0D0" }}>
									<i class="bi bi-camera-reels me-2"></i>{" "}
									Multimedia
								</h2>
								<h3 className="fs-5">
									<div className="badge text-bg-info">
										Photoshop
									</div>
									<div className="badge text-bg-info">
										Premiere Pro
									</div>
									<div className="badge text-bg-info">
										After Effects
									</div>
									<div className="badge text-bg-info">
										Illustrator
									</div>
									<div className="badge text-bg-info">
										Lightroom
									</div>
								</h3>
							</motion.div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Page;
