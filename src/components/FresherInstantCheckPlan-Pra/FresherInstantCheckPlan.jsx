import React,{useState} from 'react'
import playButton from "../img/fresher-eligibility-images/play.png";
import roadMap2 from "../img/new_roadmap.png";
import arrow from "../img/fresher-eligibility-images/arrow.png";
import fresherInstant from '../img/fresher_instant.png'
import fresherPlacement from '../img/fresher_placement.png';
import fresherSkill from '../img/fresher_skill.png'
import selectIcon from '../img/select_icon.png'
import {Link} from 'react-router-dom'
import tickTable from '../img/tick_table.png'
import closeTable from '../img/close_table.png'
import viewMore from '../img/view_add.png'
import viewLess from '../img/view_less.png'


const FresherInstantCheckPlan = () => {

  const [isViewMore, setIsViewMore] = useState(false)

  


  return (
    <div className="container">
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


      <section className="roadMap-section">
        <img src={roadMap2} alt="road-map" />
      </section>

      <section>
      <div className="fresher_instant_plan_table_container">
      <table className='fresher_plan_table'>
          <thead>
            <th className="fresher_instant_table_plan">Parameter</th>
            <th className="fresher_instant_table_title_green">
              <img className="fresher_instant_table_title_green_image" src={fresherPlacement} alt="fresher_placement" />
            </th>
            <th className="fresher_instant_table_title_green"> <img className="fresher_instant_table_title_green_image" src={fresherInstant} alt="fresher_instant" /></th>
            <th className="fresher_instant_table_title_green top_right"><img className="fresher_instant_table_title_green_image" src={fresherSkill} alt="fresher_skill" /></th>
          </thead>
          <tbody>
            <tr>
              <td className="fresher_instant_table_left_title">Eligibility/Only for</td>
              <td className="fresher_instant_table_content">Students: 10th/ 12th/ UG/ Diploma etc</td>
              <td className="fresher_instant_table_content">Students: 10th/ 12th/ UG/ PG/ Diploma holders etc <br /> Working professionals</td>
              <td className="fresher_instant_table_content">Students: UG/ PG/ Diploma holders etc <br /> Working professionals</td>
            </tr>
            <tr>
              <td className="fresher_instant_table_left_title">Get Placed</td>
              <td className="fresher_instant_table_content">Within 48 Hours</td>
              <td className="fresher_instant_table_content">within 15 days</td>
              <td className="fresher_instant_table_content">Course duration + 15 days</td>
            </tr>
            <tr>
              <td className="fresher_instant_table_left_title">Salary</td>
              <td className="fresher_instant_table_content">upto 4 LPA</td>
              <td className="fresher_instant_table_content">upto 6 LPA</td>
              <td className="fresher_instant_table_content">upto 12 LPA</td>
            </tr>
            <tr>
              <td className="fresher_instant_table_left_title">Upskilling program</td>
              <td className="fresher_instant_table_content">-</td>
              <td className="fresher_instant_table_content">-</td>
              <td className="fresher_instant_table_content">Tech & Non Tech Programs</td>
            </tr>
            <tr>
              <td className="fresher_instant_table_left_title">New Skills</td>
              <td className="fresher_instant_table_content">-</td>
              <td className="fresher_instant_table_content">-</td>
              <td className="fresher_instant_table_content">Data Science, Full Stack Developer, Business Analyst, Data Analyst, Digital Marketing etc.</td>
            </tr>
            {
              isViewMore&&
              <>
              <tr>
              <td className="fresher_instant_table_left_title">Personality Development</td>
              <td className="fresher_instant_table_content">
                <img src={closeTable} alt="close" />
              </td>
              <td className="fresher_instant_table_content"><img src={closeTable} alt="close" /></td>
              <td className="fresher_instant_table_content"><img src={tickTable} alt="open" /></td>
            </tr>
            <tr>
              <td className="fresher_instant_table_left_title">Resume Building</td>
              <td className="fresher_instant_table_content">
                <img src={closeTable} alt="close" />
              </td>
              <td className="fresher_instant_table_content"><img src={closeTable} alt="close" /></td>
              <td className="fresher_instant_table_content"><img src={tickTable} alt="open" /></td>
            </tr>
            <tr>
              <td className="fresher_instant_table_left_title">Mock Interviews</td>
              <td className="fresher_instant_table_content">
                <img src={closeTable} alt="close" />
              </td>
              <td className="fresher_instant_table_content"><img src={closeTable} alt="close" /></td>
              <td className="fresher_instant_table_content"><img src={tickTable} alt="open" /></td>
            </tr>
            <tr>
              <td className="fresher_instant_table_left_title">Mock Interviews</td>
              <td className="fresher_instant_table_content">
                <img src={closeTable} alt="close" />
              </td>
              <td className="fresher_instant_table_content"><img src={closeTable} alt="close" /></td>
              <td className="fresher_instant_table_content"><img src={tickTable} alt="open" /></td>
            </tr>
            <tr>
              <td className="fresher_instant_table_left_title">Hackathons</td>
              <td className="fresher_instant_table_content">
                <img src={closeTable} alt="close" />
              </td>
              <td className="fresher_instant_table_content"><img src={closeTable} alt="close" /></td>
              <td className="fresher_instant_table_content"><img src={tickTable} alt="open" /></td>
            </tr>
              </>
            }
           
            <tr>
              <td className="fresher_instant_table_left_title bottom_left">
              {
              isViewMore?
              <div onClick={()=>setIsViewMore(false)} style={{display:'flex',alignItems: 'center',gap:'5px',cursor:'pointer'}}>
              <img  style={{cursor:'pointer'}} src={viewLess} alt="view" />
              <p style={{margin:'0px'}} className="fresher_instant_table_view_more">View less</p>
              </div>
              :
              <div onClick={()=>setIsViewMore(true)} style={{display:'flex',alignItems: 'center',gap:'5px',cursor:'pointer'}}>
              <img  style={{cursor:'pointer'}} src={viewMore} alt="view" />
              <p style={{margin:'0px'}} className="fresher_instant_table_view_more">View more</p>
              </div>
              }
              
                
              </td>
              <td style={{width:'230px'}} className="fresher_instant_table_content">
              
              <Link to="/fresher-placement-drive">
              <img style={{margin:'20px 0px'}} src={selectIcon} alt="select" />
              </Link>
             
              
              <Link to="/fresher-plan-details">View Details</Link>
              </td>

              <td  className="fresher_instant_table_content">
              <Link to="/fresher-check-category">
              <img  style={{margin:'20px 0px'}} src={selectIcon} alt="select" />
              </Link>
              
              <br />
              <Link to="/fresher-plan-details">View Details</Link>
              </td>

              <td className="fresher_instant_table_content bottom_right">
              <Link to="/fresher-eligibility-job-guarantee">
              <img style={{margin:'20px 0px'}} src={selectIcon} alt="select" /> 
              </Link>
             <br />
              <Link to="/fresher-plan-details">View Details</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
       
      </section>
    </div>
  )
}

export default FresherInstantCheckPlan