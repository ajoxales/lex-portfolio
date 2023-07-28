import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/styles.module.css";

const WeatherComponent = (props) => {
	return (
		<div className={`container`}>
			<div
				id="details"
				className="rounded-2"
				style={{
					fontSize: "13px",
					color: "#F1F1F1",
				}}>
				<div className="container border-bottom border-secondary mb-2 py-1 w-100">
					3-DAY FORECAST
				</div>
				<div
					className="text-white fs-5 p-1"
					style={{ fontWeight: "500" }}>
					<span>
						<i className="bi bi-geo-alt-fill me-2"></i>
					</span>
					{props.loc}
				</div>
				<Row className="gx-2 d-flex justify-content-center">
					<Col className="p-3">
						<div
							className="rounded-3 text-center mb-2"
							style={{
								fontSize: "13px",
								width: "70px",
								backgroundColor: "rgb(43,41,73)",
								color: "#A8A8A8",
							}}>
							TODAY
						</div>

						<div className={`${styles.text} text-white d-flex`}>
							<Image src={props.icon0} width={50} height={50} />
							<div className="mt-2 ms-3">
								<div>
									{props.day0High} /
									<span className="text-secondary">
										{props.day0Low}
									</span>
								</div>
								<div>{props.day0Cond}</div>
							</div>
						</div>
					</Col>

					<Col className="p-3">
						<div
							className="rounded-3 text-center mb-2 px-2 me-5"
							style={{
								fontSize: "13px",
								width: "100px",
								backgroundColor: "rgb(43,41,73)",
								color: "#A8A8A8",
							}}>
							TOMORROW
						</div>

						<div className={`${styles.text} text-white d-flex`}>
							<Image src={props.icon1} width={50} height={50} />
							<div className="mt-2 ms-3">
								<div>
									{props.day1High} /
									<span className="text-secondary">
										{props.day1Low}
									</span>
								</div>
								<div>{props.day1Cond}</div>
							</div>
						</div>
					</Col>
					<Col className="p-3">
						<div
							className=" text-start mb-2 ms-2"
							style={{
								fontSize: "13px",
								color: "#A8A8A8",
							}}>
							{props.day2}
						</div>

						<div className={`${styles.text} text-white d-flex`}>
							<Image src={props.icon2} width={50} height={50} />
							<div className="mt-2 ms-3">
								<div>
									{props.day2High} /
									<span className="text-secondary">
										{props.day2Low}
									</span>
								</div>
								<div>{props.day2Cond}</div>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default WeatherComponent;
