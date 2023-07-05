import React from "react";
import slider1 from "../img/slider-1.png";
import slider2 from "../img/slider-2.png";
import slider3 from "../img/slider-3.png";


const Page = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={slider1} alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={slider2} alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slider3} alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Page;
