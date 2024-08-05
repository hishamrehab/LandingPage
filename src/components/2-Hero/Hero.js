import React from "react";
import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <Container>
      <section className="hero" id="home">
        <div className="hero-banner">
          <h1>Smart, Simple,</h1>

          <h1>Growth,</h1>
          <p>
            Grow your international e-commerce sales quickly <br /> and simple
            in more than 200 destination with <br />
            our end-to-end cross-border solutions
          </p>
          <a href="#tours" className="btn hero-btn">
            Request Demo
          </a>
        </div>
      </section>
    </Container>
  );
};

export default Hero;
