import React from 'react'
import arrow from '../img/fresher-eligibility-images/arrow.png'

const ProgramContainer = ({item,i}) => {
  return (
    <div className="ProgramContainer">
    <div className="ProgramContainerTop">
        <p className="ProgramContainerType">{item.type}</p>
        <h2 className="ProgramContainerTitle">
            <p>PG Program</p>
            <p>in Name Of The</p>
            <p>Program</p>
        </h2>
        <div className="ProgramContainerDuration">
            <p className="ProgramContainerPlacementDuration">{item["timeline-course"]}</p>
            <p className="ProgramContainerWhite">|</p>
            <p className="ProgramContainerPlacementDuration">{item["timeline-placement"]}</p>
        </div>
    </div>
    <div>
        <ol className="ProgramContainerListContainer">
            {
                item.skills.map((item,i)=>(
                    <li className="ProgramContainerList">{item}</li>
                ))
            }
        </ol>
    </div>

    <div className="ProgramContainerButtons">
        <button className='viewDetailsButton'>View details</button>
        <button className='optNow'>Opt now
        &nbsp;
        <img src={arrow} alt="arrow" />
        </button>
    </div>



    </div>
  )
}

export default ProgramContainer