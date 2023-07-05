import React from "react";
import "./index.css";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import FresherPlacementDrive from "./FresherPlacementDrive";

const Index = () => {
  return (
    <div>
      <Navbar />
      <FresherPlacementDrive></FresherPlacementDrive>
      <Footer />
    </div>
  );
};

export default Index;
