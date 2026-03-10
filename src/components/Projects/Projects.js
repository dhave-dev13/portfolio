import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import regalatop from "../../Assets/Projects/mobile-app-preview.png";
import peddlr from "../../Assets/Projects/banner-pos-model.webp";
import inspiredLearningAi from "../../Assets/Projects/inspiredLearningAi.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={peddlr}
              isBlog={true}
              title="Peddlr"
              description="Peddlr is an all-in-one point of sale (POS) system perfect for any business. You can quickly process your business transactions, monitor sales, track expenses, manage inventory, and even send load offline with just your smartphone - it's like you have your own cashier system. Proudly made in the Philippines."
              demoLink="https://peddlr.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inspiredLearningAi}
              isBlog={true}
              title="Inspired Learning AI"
              description="Ace your GCSEs with Inspired Learning! Discover a revolutionary way to prepare for your GCSE exams. Our app is designed for your own learning style and to keep you motivated every step of the way. With personalised impactful learning, quizzes and live AI marking, it’s your perfect study guide. Don’t just use it for GCSE revision, use it to learn in the first place!"
              demoLink="https://inspiredlearning.ai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={regalatop}
              isBlog={true}
              title="regalatop"
              description="Regala Top is everyone's favorite app for virtual gift registries, whether you're planning a baby shower, birthday, wedding, or any other special occasion. With Regala Top, creating your gift registry is simple, sharing it is instant, and receiving gifts becomes magical."
              demoLink="https://regalatop.cl/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
