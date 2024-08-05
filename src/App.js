import React from "react";
import "./index.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/1-navbar/navbar";
import Footer from "./components/14-Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
