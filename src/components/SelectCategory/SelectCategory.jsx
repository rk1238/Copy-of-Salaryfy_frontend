import React,{useState,useEffect} from "react";
import playButton from "../img/fresher-eligibility-images/play.png";
import roadMap from "../img/new_roadmap.png";
import right from "../img/right.png";
import { useNavigate } from "react-router-dom";

const SelectCategory = () => {

  const navigate = useNavigate();

  const [colorBox, setColorBox] = useState(1)

  const handleNavigate = ()=>{
navigate("/experience-check-category")
  }

  return (
    <div className="container">
      <section>
        {/* This container is used only for extra large screen */}
        <div className="d-none d-xl-block">
          <div className="eligibility-fresher-container">
            <div className="eligibility-fresher-left-side">
              <h2>Experience</h2>
              <p>
                Fill the form to check your eleigibility and get a salary-hike
                prediction.
              </p>
            </div>
            <div className="eligibility-fresher-right-side">
              <div className="eligibility-fresher-right-side-row">
                <img src={playButton} alt="play" />
                <p>How it Works?</p>
              </div>
            </div>
          </div>
        </div>

        {/* This container is used only for  large screen */}
        <div className="d-none d-lg-block d-xl-none">
          <div className="eligibility-fresher-container">
            <div className="eligibility-fresher-left-side">
              <h2>Experience</h2>
              <p>
                Fill the form to check your eleigibility and get a salary-hike
                prediction.
              </p>
            </div>
            <div className="eligibility-fresher-right-side">
              <div className="eligibility-fresher-right-side-row">
                <img src={playButton} alt="play" />
                <p>How it Works?</p>
              </div>
            </div>
          </div>
        </div>

        {/* This container is used only for  medium screen */}
        <div className="d-none d-md-block d-lg-none">
          <div className="eligibility-fresher-container-medium">
            <div className="eligibility-fresher-left-side-medium">
              <h2>Experience</h2>
              <p>
                Fill the form to check your eleigibility and get a salary-hike
                prediction.
              </p>
            </div>
            <div className="eligibility-fresher-right-side-medium">
              <div className="eligibility-fresher-right-side-row-medium">
                <img src={playButton} alt="play" />
                <p>How it Works?</p>
              </div>
            </div>
          </div>
        </div>

        {/* This container is used only for mobile screen */}
        <div className="d-sm-block d-md-none">
          <div className="eligibility-fresher-container-small">
            <div className="eligibility-fresher-left-side-small">
              <h2>Experience</h2>
              <p>
                Fill the form to check your eleigibility and get a salary-hike
                prediction.
              </p>
            </div>
            <div className="eligibility-fresher-right-side-small">
              <div className="eligibility-fresher-right-side-row-small">
                <img src={playButton} alt="play" />
                <p>How it Works?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="roadMap-section">
        <img src={roadMap} alt="road-map" />
      </section>

      <section className="category-section-container">
        <h3 className="category-title">Select Your Category</h3>

<div className="category_level_main_container">
<div onMouseEnter={()=>{
          setColorBox(1)
        }}  className={`category_level_container ${colorBox===1&&"activeBox"}`}>
          <div onClick={handleNavigate} onMouseEnter={()=>{
          setColorBox(1)
        }}>
            <h4>Entry Level</h4>
            <p style={{color:colorBox===1?"white":"black"}}>(Fresher or upto 2 yrs experience)</p>
          </div>
          <img src={right} alt="right" />
        </div>

        <div onClick={handleNavigate} onMouseEnter={()=>{
          setColorBox(2)
        }} className={`category_level_container ${colorBox===2&&"activeBox"}`}>
          <div>
            <h4>Mid Level</h4>
            <p style={{color:colorBox===2?"white":"black"}}>(2 - 10 yrs experience)</p>
          </div>
          <img src={right} alt="right" />
        </div>

      <div onClick={handleNavigate} onMouseEnter={()=>{
          setColorBox(3)
        }} className={`category_level_container ${colorBox===3&&"activeBox"}`}>
          <div>
            <h4>Senior Level</h4>
            <p style={{color:colorBox===3?"white":"black"}}>(Above 10yrs experience)</p>
          </div>
          <img src={right} alt="right" />
        </div>
</div>
        
      </section>
    </div>
  );
};

export default SelectCategory;
