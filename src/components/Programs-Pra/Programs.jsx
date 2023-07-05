import React from 'react'
import programsDataSet from './data.json'
import ProgramContainer from './ProgramContainer'

import playButton from "../img/fresher-eligibility-images/play.png";
import roadMap from "../img/fresher-eligibility-images/road-map-2.png";

const Programs = () => {
  return (
    <div style={{width:'80%',margin:'20px auto'}}> 
    <section>
    {/* This container is used only for extra large screen */}
    <div className="d-none d-xl-block">
      <div className="eligibility-fresher-container">
        <div className="eligibility-fresher-left-side">
          <h2>Fresher</h2>
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
          <h2>Fresher</h2>
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
          <h2>Fresher</h2>
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
          <h2>Fresher</h2>
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


  <section  className="roadMap-section">
    <img style={{margin:'5px auto'}} src={roadMap} alt="road-map" />
  </section>

    <section className="programs-main-container">

    {
        programsDataSet?.map((item,i)=>(
         <ProgramContainer item={item} index={i}/>
        ))
    }

    </section>
    </div>
  )
}

export default Programs