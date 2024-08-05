import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import logo from "../../images/logo@2x.png";
import { Container } from "react-bootstrap";
import "../../index.css";
import { Link } from "react-router-dom";
const pages = ["Home Page", "Booking Page"];

function Navbar() {
  return (
    <Box>
      <Container>
        <AppBar
          component="nav"
          sx={{
            paddingRight: "10%",
            paddingLeft: "10%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Link to="/">
            <Box className="nav-header" component="a" href="#">
              <img src={logo} alt="GoTour" width={"60px"} height={"20px"} />
            </Box>
          </Link>

          <Box sx={{ display: "flex", paddingTop: "10px" }}>
            <Link to={"/"}>
              <Button
                className="navbar-link"
                href="#home"
                sx={{
                  color: "#fff",
                }}
              >
                {pages[0]}
              </Button>
            </Link>
            <Link to={"/book"}>
              <Button
                className="navbar-link"
                href="#about"
                sx={{
                  color: "#fff",
                }}
              >
                {pages[1]}
              </Button>
            </Link>
          </Box>
        </AppBar>
      </Container>
    </Box>
  );
}
export default Navbar;
