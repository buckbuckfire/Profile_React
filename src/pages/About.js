import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://media.giphy.com/media/FY9chKp6rulXy/giphy.gif">
        <h1>Matt Valle</h1>
        <h2>Where Fun Meets Coding!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <p>Hey Y'all! The name is Matt. Im as Florida as it gets. Ive lived in various parts of
            Florida my whole life. I love my Jacksonville Jaguars and my Florida Gators. I've been fishing fresh water
            lakes and ponds for as long as i can remember. Nothing against salt water, thats just my prefered type of
            fishing. I have traveled a bit and once joined the greatest military branch to walk this planet. "Once a
            Marine, always a Marine.
            </p>

          <p>Please feel free to click away.</p>
          <p>- Discover Your Pup: Will allow you to find your future forever PUP.</p>
          <p>- Conact: Allow you to leave your contact information.</p>
          <p>- Protfolio: See other projects created by MV!</p>
          

          <h1> NOW GO HAVE SOME FUN!</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
