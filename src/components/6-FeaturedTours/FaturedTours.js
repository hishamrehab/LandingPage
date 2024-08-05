import React from "react";

import { tours } from "../../data";
import FeturedTour from "./FeturedTour";
import { Container } from "react-bootstrap";
const FatureTours = () => {
  return (
    <Container>
      <section className="section" id="tours">
        <h1 className="section-header">FeaturedTours</h1>
        <div className="featured-center">
          {tours.map((tour) => {
            return <FeturedTour key={tour.id} {...tour} />;
          })}
        </div>
      </section>
    </Container>
  );
};

export default FatureTours;
