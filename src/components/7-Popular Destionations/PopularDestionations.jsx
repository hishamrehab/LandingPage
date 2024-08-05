import React from "react";
import { destionations } from "../../data";
import { Container } from "react-bootstrap";

const PopularDestionations = () => {
  return (
    <Container>
      <section className="section destinations-section" id="PopularDestination">
        <h1 className="section-header popular-header">Popular Destionations</h1>
        <p
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "20px",
            paddingRight: "10px",
            paddingLeft: "10px",
          }}
        >
          Tours give you the opportunity to see a lot,within a time frame
        </p>
        {destionations.map((destination) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",


              }}
              className="destinationContent"
            >
              <div className="destination-desc-container" >
                <h3
                  style={{
                    color: "#98ABEE",
                  }}
                  className="destination-title"
                >
                  {destination.title1}
                </h3>
                <p
                  style={{
                    paddingRight: "10%",
                  }}
                  className="destination-desc"
                >
                  {destination.desc1}
                </p>
              </div>

              <div
                className="destination-images-container"
                style={{
                  flexGrow: "1",
                  display: "flex",
                  gap: "10px",
                  height: "400px",

                }}
              >
                <img
                  src={destination.image1}
                  alt=""
                  style={{
                    paddingBottom: "30px"


                  }}
                  className="destination-image"
                />
                <img
                  src={destination.image2}
                  alt=""
                  style={{
                    paddingTop: "40px",

                  }}
                  className="destination-image"
                />





              </div>
            </div>
          );
        })}
      </section>
    </Container>
  );
};

export default PopularDestionations;
