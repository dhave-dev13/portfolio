import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dhave Barsalote </span>
            from <span className="purple"> Cagayan de Oro, Philippines.</span>
            <br />
            I am a former Employee of <a href="https://www.peddlr.io/" className="purple"> Peddlr Philippines Inc.</a> as Senior Flutter Developer.
            <br />
            I have completed my Bachelors Degree of Information Technology at Mindanao University of Schience and Technology now known as USTP.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ministry
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling with family
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep progressing, until perfection!"{" "}
          </p>
          <footer className="blockquote-footer">Dhave B.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
