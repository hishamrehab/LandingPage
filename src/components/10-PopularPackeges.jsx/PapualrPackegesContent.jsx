import React from "react";
import { FaClock } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Container } from "react-bootstrap";

const PapualrPackegesContent = ({ image, reviews, price, title }) => {
  return (
    <Container>
      <div
        className="PapualrPackegesContent"
        style={{
          marginTop: "40px",
          borderRadius: "25px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "50px",
          flexWrap: "wrap",
          margin: "auto",
          marginBottom: "30px",
        }}
      >
        <div
          style={{ flex: "1", height: "300px" }}
          className="package-image-content"
        >
          <img
            src={image}
            alt="package"
            style={{
              borderRadius: "15px",
            }}
          />
        </div>

        <div
          style={{
            flex: "1",
            flexGrow: "1",
            height: "260px",
            paddingTop: "30px",
          }}
          className="package-content-items1"
        >
          <h4>{title}</h4>
          <p
            style={{
              color: "#777",
              fontSize: "17px",
              paddingLeft: "20px",
              marginTop: "20px",
            }}
          >
            Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo
          </p>



          <div
            className="package-second-content"
            style={{
              width: { xs: "100%", sm: "100%", md: "300px" },
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid #777",
              alignItems: "center",
              borderRadius: "20px",
              backgroundColor: "#FFF",
              color: "#000",
              boxShadow: "3px 3px #888888",
              marginTop: "40px",
              marginLeft: "20px",
              maxWidth: "350px",

            }}
          >

            <div
              style={{
                borderRight: "1px solid #777",
                marginLeft: "10px",
                paddingRight: "5px",
                width: "100px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#40A2D8",
                  marginRight: "5px",
                }}
              >
                <FaClock />
              </span>
              <span>7D/6N</span>
            </div>

            <div
              style={{
                borderRight: "1px solid #777",
                width: "120px",
                display: "flex",
                justifyContent: "center",

              }}
            >
              <span
                style={{
                  color: "#40A2D8",
                  marginLeft: "3px",
                  marginRight: "5px",
                }}
              >
                <IoPersonSharp />
              </span>
              <span>pax: 10</span>
            </div>

            <div
              style={{
                marginLeft: "5px",
                width: "100px",
                display: "flex",
                justifyContent: "center",

              }}
            >
              <span
                style={{
                  color: "#40A2D8",
                  marginRight: "5px",
                }}
              >
                <FaMapMarkerAlt />
              </span>
              <span>Malaysia</span>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#40A2D8",
            height: "300px",
            borderRadius: "25px",
            position: "relative",
            flex: "1",
            minWidth: "250px",
          }}
          className="package-content-items2"
        >
          <p
            style={{
              fontSize: "17px",
              position: "absolute",
              top: "40px",
              left: "50px",
            }}
          >
            ({reviews} reviews)
          </p>
          <p
            style={{
              fontSize: "43px",
              position: "absolute",
              top: "90px",
              left: "60px",
              fontWeight: "900",
            }}
          >
            ${price}
          </p>
          <p
            style={{
              position: "absolute",
              top: "155px",
              left: "120px",
              fontSize: "15px",
            }}
          >
            / per person
          </p>
          <button
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              padding: "10px ",
              color: "#fff",
              backgroundColor: "#40A2D8",
              borderRadius: "30px",
              border: "1px solid #fff",
              fontSize: "20px",
              width: "150px",
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </Container>
  );
};

export default PapualrPackegesContent;
