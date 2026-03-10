import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple">Dhave Barsalote</span>, a Software Engineer based in the Philippines specializing in <span className="purple">Flutter mobile development and enterprise system integrations.</span>
            <br />
            I have over <span className="purple">4 years of experience building production-grade mobile applications</span>, including contributions to the <span className="purple" >Peddlr POS platform</span> used by small businesses, <span className="purple">learning applications from WebFuelAgency</span> based in Gibraltar. My background also includes <span className="purple">IT infrastructure and SAP Business One administration</span>, giving me strong experience in backend systems and enterprise environments.
            <br />
            I hold a <span className="purple">Bachelor’s Degree in Information Technology from Mindanao University of Science and Technology (now USTP).</span>
            <br />
            <br />
            Outside of coding, I enjoy ministry work, traveling with family, and continuously learning new technologies.
            <br />
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Not perfection, but progression!"{" "}
          </p>
          <footer className="blockquote-footer">Dhave B.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
