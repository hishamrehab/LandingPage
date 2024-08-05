import React from "react";
import image1 from "../../images/gallery-1.jpg";
import image2 from "../../images/gallery-2.jpg";
import image3 from "../../images/gallery-3.jpg";
import image4 from "../../images/gallery-4.jpg";
import image5 from "../../images/gallery-5.jpg";
import { Container } from "react-bootstrap";
const TravellersPhotos = () => {
  return (
    <Container>
      <div
        style={{
          paddingTop: "100px",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            fontSize: "25px",
            marginBottom: "15px"

          }}
        >
          PHOTO'S FROM TRAVELLERS
        </h3>
        <p
          style={{
            textAlign: "center",
            color: "#777",
            fontSize: "18px",
            marginBottom: "60px",
            paddingLeft: "20px",
          }}
        >
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
          rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
          aptent.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "50px",
            alignContent: "center",



            margintTop: "20px",
            cursor: "pointer",
            flexWrap: "wrap",
            paddingRight: "5%",
            paddingLeft: "5%",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div className="Travelles-image"
            style={{
              width: "250px",
              height: "300px"
            }}>
            <img
              src={image4}

              alt="image"
              style={{
                width: "250px",
                height: "300px",
                borderRadius: "25px",
              }}

            />
          </div>
          <div className="Travelles-image" style={{
            width: "250px",
            height: "300px"
          }}>
            <img
              src={image1}
              alt="image"
              width={"250px"}
              height={"300px"}
              style={{
                width: "250px",
                height: "300px",
                borderRadius: "25px",
              }}

            />
          </div>
          <div className="Travelles-image" style={{
            width: "250px",
            height: "300px"
          }}>
            <img
              src={image5}
              width={"250px"}
              height={"300px"}
              style={{
                width: "250px",
                height: "300px",
                borderRadius: "25px",
              }}

            />
          </div>

          <div className="Travelles-image" style={{
            width: "250px",
            height: "300px"
          }}>
            <img
              src={image2}
              width={"250px"}
              height={"300px"}
              style={{
                width: "250px",
                height: "300px",
                borderRadius: "25px",
              }}

            />
          </div>
        </div>
      </div>
    </Container >
  );
};

export default TravellersPhotos;
