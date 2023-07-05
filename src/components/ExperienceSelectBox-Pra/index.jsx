import React from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import ExperienceSelectBox from "./ExperienceSelectBox";
import "./index.css";

const Index = () => {
  return (
    <>
      <Navbar />
      <ExperienceSelectBox></ExperienceSelectBox>
      <Footer />
    </>
  );
};

export default Index;
