import React from "react";
import "./index.css";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import FresherPlanDetails from "./FresherPlanDetails";

const Index = () => {
  return (
    <div>
      <Navbar />
      <FresherPlanDetails></FresherPlanDetails>
      <Footer />
    </div>
  );
};

export default Index;
