import React from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import FresherPlacementDetailsSecondStep from "./FresherPlacementDetails_2step";
import "./index.css";

const Index = () => {
  return (
    <>
      <Navbar />
      <FresherPlacementDetailsSecondStep></FresherPlacementDetailsSecondStep>
      <Footer />
    </>
  );
};

export default Index;
