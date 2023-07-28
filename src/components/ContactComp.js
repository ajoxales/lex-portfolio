import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import Image from "next/image";
import telephone from "../app/assets/telephone.svg";
import email from "../app/assets/envelope-at.svg";
import location from "../app/assets/geo-alt.svg";

const ContactComp = () => {
	return (
		<div>
			<div className="py-5">
				<div>
					<h1 className="text-center text-white text-3xl font-bold underline pb-2">
						Get in Touch.
					</h1>
				</div>
				<p className="text-center mx-5">
					Hello there! I'm delighted to connect with you. Feel free to
					drop me a line, and I'll get back to you as soon as
					possible.
				</p>

				<Row xs={1} sm={3} className="gx-5">
					<Col>
						<Card className="bg-transparent text-light fw-semibold border-0 text-center">
							<Card.Body className="d-flex flex-column justify-content-center ">
								<div
									className="bg-info rounded-circle my-3 d-flex flex-column justify-content-center align-items-center"
									style={{
										width: "60px",
										height: "60px",
										margin: "auto",
									}}>
									{" "}
									<Image src={telephone} width={30} />
								</div>

								<div className="fs-3 mb-2">Phone</div>
								<p>+63 956 059 6550 </p>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="bg-transparent text-light fw-semibold border-0 text-center">
							<Card.Body className="d-flex flex-column justify-content-center ">
								<div
									className="bg-info rounded-circle my-3 d-flex flex-column justify-content-center align-items-center"
									style={{
										width: "60px",
										height: "60px",
										margin: "auto",
									}}>
									<Image src={email} width={30} />
								</div>

								<div className="fs-3 mb-2">Email</div>
								<p>alexoxales.03@gmail.com</p>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="bg-transparent text-light fw-semibold border-0 text-center">
							<Card.Body className="d-flex flex-column justify-content-center ">
								<div
									className="bg-info rounded-circle my-3 d-flex flex-column justify-content-center align-items-center"
									style={{
										width: "60px",
										height: "60px",
										margin: "auto",
									}}>
									<Image src={location} width={30} />
								</div>

								<div className="fs-3 mb-2">Location</div>
								<p>Dasmarinas, Cavite</p>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default ContactComp;
