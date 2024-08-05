import React from "react";
import { Container } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container>
      <div
        className="contactUs"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        <div
          className="contactUs-container"
        >
          <p>Call TO Action</p>
          <h1>READY FOR UNFORGATABLE TRAVEL. REMEMBER US!</h1>
          <p>
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
            nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
            tenetur, aptent.
          </p>
        </div>

        <div>
          <button
            className="contactUs-button"
            style={{
              padding: "15px",
              border: "1px solid #fff",
              borderRadius: "20px",
              width: "200px",

              fontSize: "19px",
              paddingTop: "12px",
              marginBottom: "40px",

              hover: {
                backgroundColor: "#40A2E3",
              },
            }}
          >
            Contact Us!
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
