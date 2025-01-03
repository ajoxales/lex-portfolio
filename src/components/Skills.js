"use client";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import html from "../app/assets/html.png";
import css from "../app/assets/css-3.png";
import js from "../app/assets/js.png";
import reactjs from "../app/assets/react.png";
import bootstrap from "../app/assets/bootstrap.png";
import nextjs from "../app/assets/nextjs.png";
import tailwind from "../app/assets/tailwind.png";
import git from "../app/assets/git.png";
import github from "../app/assets/github.png";
import node from "../app/assets/node.png";

const Skills = () => {
  return (
    <div>
      <div>
        <div
          className="rounded-3 p-3 fw-light text-light"
          style={{ backgroundColor: "#21324E" }}
        >
          <Row className="px-2 justify-content-center align-items-center">
            <Col
              className="text-center p-4 shadow-lg rounded-2 m-1"
              style={{
                backgroundColor: "#21324E",
              }}
            >
              <Image src={html} width={50} />

              <h3 className="fs-6 pt-3">HTML5</h3>
            </Col>
            <Col
              className="text-center p-4 shadow-lg rounded-2 m-1"
              style={{
                backgroundColor: "#21324E",
              }}
            >
              <Image src={css} width={50} />
              <h3 className="fs-6 pt-3">CSS3</h3>
            </Col>
            <Col
              className="text-center p-4 shadow-lg rounded-2 m-1"
              style={{
                backgroundColor: "#21324E",
              }}
            >
              <Image src={js} width={50} />
              <h3 className="fs-6 pt-3">Javascript</h3>
            </Col>
            <Col
              className="text-center p-4 shadow-lg rounded-2 m-1"
              style={{
                backgroundColor: "#21324E",
              }}
            >
              <Image src={reactjs} width={55} />
              <h3 className="fs-6 pt-3">ReactJS</h3>
            </Col>

            <Col
              className="text-center p-4 shadow-lg rounded-2 m-1"
              style={{
                backgroundColor: "#21324E",
              }}
            >
              <Image src={nextjs} width={50} />
              <h3 className="fs-6 pt-3">Next.js</h3>
            </Col>
          </Row>
          <Row className="px-2 justify-content-center align-items-center">
            <Col
              className="text-center p-4 shadow-lg rounded-2 m-1"
              style={{
                backgroundColor: "#21324E",
              }}
            >
              <Image src={node} width={60} />
              <h3 className="fs-6 pt-3">Node.js</h3>
            </Col>
            <Col
              className="text-center p-4 shadow-lg rounded-2 m-1"
              style={{
                backgroundColor: "#21324E",
              }}
            >
              <Image src={git} width={60} />
              <h3 className="fs-6 pt-3">Git</h3>
            </Col>
            <Col
              className="text-center p-4 shadow-lg rounded-2 m-1"
              style={{
                backgroundColor: "#21324E",
              }}
            >
              <Image src={github} width={60} />
              <h3 className="fs-6 pt-3">Github</h3>
            </Col>
            <Col
              className="text-center p-4 shadow-lg rounded-2 m-1"
              style={{
                backgroundColor: "#21324E",
              }}
            >
              <Image src={bootstrap} height={60} />
              <h3 className="fs-6 pt-3">Bootstrap</h3>
            </Col>
            <Col
              className="text-center p-4 shadow-lg rounded-2 m-1"
              style={{
                backgroundColor: "#21324E",
              }}
            >
              <Image src={tailwind} height={60} />
              <h3 className="fs-6 pt-3">Tailwind CSS</h3>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Skills;
