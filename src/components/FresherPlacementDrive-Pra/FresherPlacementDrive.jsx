import React from "react";
import playButton from "../img/fresher-eligibility-images/play.png";
import roadMap from "../img/fresher-eligibility-images/road_map_3.png";
import fresherPlacementGreen from "../img/fresher_placement_green.png";
import changePlacementProcess from "../img/change_placement_process.png";
import lenskart from "../img/lenskart.png";
import justdial from "../img/justdial.png";
import trent from "../img/trent.png";
import croma from "../img/croma.png";
import hamleys from "../img/hamleys.png";
import details from "../img/details.png";
import getHired from "../img/get_hired.png";
import data from "./data.json";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {Link} from 'react-router-dom'
import calender from '../img/calender.png'

const FresherPlacementDrive = () => {

    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
      };


  return (
    <div className="fresher-placement-drive-container">
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
        <img  style={{ margin: "5px auto",width:'100%' }} src={roadMap} alt="road-map" />
      </section>
      <section>
        <div className="fresher_placement_company_title_container">
          <img src={fresherPlacementGreen} alt="fresherPlacement" />
          <img src={changePlacementProcess} alt="changePlacementProcess" />
        </div>
      </section>

      <section className="fresher_placement_company_container">
        <div className="fresher_placement_company_container_left">
          <h3 className="fresher_placement_company_location">Location</h3>
          <FormControl fullWidth>
                  {/* <InputLabel className="select-container-label" id="demo-simple-select-label">Select</InputLabel> */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    displayEmpty
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    className="select-container-select"
                  >
                    <MenuItem className="select-container-items" value={10}>
                      Ten
                    </MenuItem>
                    <MenuItem className="select-container-items" value={20}>
                      Twenty
                    </MenuItem>
                    <MenuItem className="select-container-items" value={30}>
                      Thirty
                    </MenuItem>
                  </Select>
                </FormControl>
          <h3 className="fresher_placement_company_job_type">Job Type</h3>
          <FormControl fullWidth>
                  {/* <InputLabel className="select-container-label" id="demo-simple-select-label">Select</InputLabel> */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    displayEmpty
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    className="select-container-select"
                  >
                    <MenuItem className="select-container-items" value={10}>
                      Ten
                    </MenuItem>
                    <MenuItem className="select-container-items" value={20}>
                      Twenty
                    </MenuItem>
                    <MenuItem className="select-container-items" value={30}>
                      Thirty
                    </MenuItem>
                  </Select>
                </FormControl>
          <h3 className="fresher_placement_company_company">Company</h3>
          <FormControl fullWidth>
                  {/* <InputLabel className="select-container-label" id="demo-simple-select-label">Select</InputLabel> */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    displayEmpty
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    className="select-container-select"
                  >
                    <MenuItem className="select-container-items" value={10}>
                      Ten
                    </MenuItem>
                    <MenuItem className="select-container-items" value={20}>
                      Twenty
                    </MenuItem>
                    <MenuItem className="select-container-items" value={30}>
                      Thirty
                    </MenuItem>
                  </Select>
                </FormControl>
        </div>
        <div className="fresher_placement_company_container_right">
          <h3 className="fresher_placement_company_job_title">Job title</h3>
          <div className="fresher_placement_company_job_input_container">
            <input
              className="fresher_placement_company_job_input_container_input"
              type="text"
              name=""
              id=""
              placeholder="Enter keyword"
            />
            <button className="fresher_placement_company_job_input_container_button">
              Sort
            </button>
          </div>

          <div className="fresher_placement_company_inner_map_container">
            {data?.map((item, i) => {
              return (
                <div className="fresher_placement_company_inner_main_container">
                  <div className="fresher_placement_company_flex_container">
                    <div className="fresher_placement_comapany_flex_inner_container">
                      <img src={`/img/${item.image}.png`} alt={item.title} />
                      <div>
                        <h3 className="fresher_placement_company_inner_container_position">
                          {item.title}
                        </h3>
                        <p className="fresher_placement_company_inner_container_company">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <div className="fresher_placement_company_inner_container_flex ">
                      {/* <p className="fresher_placement_company_inner_container_interview ">
                        Interview on
                      </p> */}
                     
                      <p className="fresher_placement_company_inner_container_date">
                      <img src={calender} alt="calender" /> &nbsp;
                      Interview on {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="fresher_placement_company_inner_container_flex_second_container">
                    <div>
                      <div className="fresher_placement_company_inner_container_flex">
                        <p className="fresher_placement_company_inner_container_location">
                          Location:
                        </p>
                        <p>{item.location}</p>
                      </div>
                      <div className="fresher_placement_company_inner_container_second_flex">
                        <div className="fresher_placement_company_inner_container_flex">
                          <p className="fresher_placement_company_inner_container_job_type">
                            Job Type:
                          </p>
                          <p>{item.jobType}</p>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <p>|</p>
                        &nbsp;&nbsp;&nbsp;
                        <div className="fresher_placement_company_inner_container_flex">
                          <p className="fresher_placement_company_inner_container_posts">
                            No. of Posts:
                          </p>
                          <p>{item.noOfPosts}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                    <Link to="/fresher-placement-details">
                    <img
                        style={{ cursor: "pointer" }}
                        src={details}
                        alt="details"
                      />
                    </Link>
                      
                      &nbsp;&nbsp;&nbsp;
                      <Link to="/fresher-placement-details-first-step">
                      <img
                        style={{ cursor: "pointer" }}
                        src={getHired}
                        alt="get-hired"
                      />
                      </Link>
                      
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FresherPlacementDrive;
