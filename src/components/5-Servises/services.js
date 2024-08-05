import React from "react";
import { services } from "../../data";
import Service from "./service";
import { Container } from "react-bootstrap";

const Services = () => {
  return (
    <Container>
      <section className="section services" id="services">
     <h1 className="section-header">Our Services</h1>
        <div className="main-services service-center">
          {services.map((service) => {
            return <Service key={service.id} {...service} />;
          })}
        </div>
      </section>
    </Container>
  );
};

export default Services;

