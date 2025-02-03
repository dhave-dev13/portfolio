import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgMonday } from "react-icons/cg";
import { DiJavascript1, DiNodejs } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { PiFileCSharp } from "react-icons/pi";
import { SiAndroid, SiFirebase, SiFlutter, SiGithub, SiMake, SiSap } from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <PiFileCSharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrReactjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgMonday />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMake />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSap />
      </Col>
    </Row>
  );
}

export default Techstack;
