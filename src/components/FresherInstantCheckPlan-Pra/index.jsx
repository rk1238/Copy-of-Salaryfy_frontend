import React from "react";
import "./index.css";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import FresherInstantCheckPlan from "./FresherInstantCheckPlan";

const Index = () => {
  return (
    <div>
      <Navbar />
      <FresherInstantCheckPlan></FresherInstantCheckPlan>
      <Footer />
    </div>
  );
};

export default Index;
