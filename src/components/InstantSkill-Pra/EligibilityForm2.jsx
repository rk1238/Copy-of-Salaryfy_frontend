import React,{useState} from 'react'

import playButton from "../img/fresher-eligibility-images/play.png";
import roadMap from "../img/fresher-eligibility-images/road-map-2.png";
import arrow from "../img/fresher-eligibility-images/arrow.png";
import instantPlacement from '../img/fresher-eligibility-images/instant-placement.png'
import skillPlacement from '../img/fresher-eligibility-images/skill-placement.png'
import instantPlacementActive from '../img/fresher-eligibility-images/instant-placement-active.png'
import skillPlacementActive from '../img/fresher-eligibility-images/skill-placement-active.png'
import {useNavigate } from 'react-router-dom'

const EligibilityForm2 = () => {
const navigate = useNavigate()
    const [instantActive, setInstantActive] = useState(true)

    const getAccess = ()=>{
      if(instantActive){
     navigate("/fresher-instant-placement")
      }else{
 navigate("/fresher-eligibility-job-guarantee")
      }
    }

  return (
    <div>
        
        <div className="container">
      <section>
        {/* This container is used only for extra large screen */}
        <div className="d-none d-xl-block">
          <div className="eligibility-fresher-container">
            <div className="eligibility-fresher-left-side">
              <h2>Fresher</h2>
              <p>
                Fill the form to check your eligibility and get a salary-hike
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


      <section className="roadMap-section">
        <img src={roadMap} alt="road-map" />
      </section>

      <section>

<div className='instant-skill-container'>
<div className="Instant-placement-container" >
<img onClick={()=>setInstantActive(true)} src={instantActive?instantPlacementActive:instantPlacement} alt="instant placement" />
      </div>
      <div className="Skill-placement-container" >
<img onClick={()=>setInstantActive(false)} src={instantActive?skillPlacement:skillPlacementActive} alt="skill-placement" />
      </div>

</div>
      

      </section>

      <div className="getAccessButtonContainer">
   <button onClick={getAccess} className="getAccessButton">
    Get Access
    <img src={arrow} alt="arrow" />
   </button>
      </div>


      </div>
    </div>
  )
}

export default EligibilityForm2