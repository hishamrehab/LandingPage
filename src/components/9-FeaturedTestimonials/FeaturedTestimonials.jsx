import React from "react";
import { Container } from "react-bootstrap";
import { featuredtestimonials } from "../../data";
import awerds from "../../images/awards.png";
const FeaturedTestimonials = () => {
  return (
    <Container>
      <div
        style={{
          backgroundColor: "white",
          padding: "50px",
        }}
      >
        <h1
          style={{
            color: "#000",
          }}
        >
          Featured Testimonials
        </h1>
        <p
          style={{
            color: "#777",
          }}
        >
          DISCOVER YOUR NEXT EXPERIENCES, AND PLACES.
        </p>
        {featuredtestimonials.map((timonial) => {
          return (
            <div className="timonials-section">
              <div className="timonials-content">
                <p
                  className="timonial-desc"
                  style={{
                    fontFamily: "Cursive",
                    color: "#777",
                  }}
                >
                  {timonial.desc1}
                </p>

                <h4
                  className="timonial-name"
                  style={{
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {timonial.name1}
                </h4>
              </div>

              <div className="timonials-content">
                <p
                  className="timonial-desc"
                  style={{
                    fontFamily: "Cursive",
                    color: "#777",
                  }}
                >
                  {timonial.desc2}
                </p>
                <h4
                  className="tetimonial-name"
                  style={{
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {timonial.name2}
                </h4>
              </div>

              <div className="timonials-content">
                <p
                  className="team-desc"
                  style={{
                    fontFamily: "Cursive",
                    color: "#777",
                  }}
                >
                  {timonial.desc2}
                </p>
                <h4
                  className="timonial-name"
                  style={{
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {timonial.name3}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default FeaturedTestimonials;
