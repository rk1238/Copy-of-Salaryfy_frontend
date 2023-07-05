import React, { useState, useEfffect } from "react";
import playButton from "../img/fresher-eligibility-images/play.png";
import roadMap from "../img/fresher-eligibility-images/roadmap.png";
import arrow from "../img/fresher-eligibility-images/arrow.png";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import documentUploadIcon from '../img/documentupload.png'
import placementLeftSlide from '../img/placement_left_slide.png'

const EligibilityForm1 = () => {
  const navigate  = useNavigate()
  const [age, setAge] = React.useState("");
  const [age1, setAge1] = React.useState("");
  const [age2, setAge2] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };

  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };

  const [eligibilityForm, setEligibilityForm] = useState({
    name: null,
    email: null,
    phone_number: null,
    education: null,
    stream: null,
    university: null,
    percentage: null,
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    setEligibilityForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const nextStep = ()=>{
    // navigate("/fresher-eligibility-instant-skill")
    navigate("/fresher-instant-check-plan")
    
  }

  return (
    <div className="eligibility_container_data">
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

      <section>
        <div></div>
      </section>

      <section className="roadMap-section">
        <img src={roadMap} alt="road-map" />
      </section>


<div className="fresher_eligibility_flex_for_image_container">

<div className="fresher_eligibility_flex_left_panel" style={{width:'28%'}}>

<h1 className="eligibility_candidate_opted">Candidated who <br />opted this plan</h1>
<img src={placementLeftSlide} alt="placement_left_slide" />
</div>


      <section style={{width:'70%'}} className="eligibility-form-container">
      

<div className="d-none d-xl-block d-lg-block">
          <div className="eligibility-form-first-row">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Name</label>
              <br />
              <input onChange={handleInputChange} type="text" name="name" id="" placeholder="Rahul" />
            </div>

            <div className="eligibility-form-label-container">
              <label htmlFor="email">Email</label>
              <br />
              <input
              onChange={handleInputChange}
                type="email"
                name="email"
                id=""
                placeholder="rahul@gmail.com"
              />
            </div>
          </div>
          <div className="eligibility-form-second-row">
            <div className="eligibility-form-label-container">
              <label htmlFor="phone">Phone number</label>
              <div>
                <input onChange={handleInputChange} type="number" placeholder="+91" name="phone" id="" />
                <button>Send OTP</button>
              </div>
            </div>

            <div className="eligibility-form-label-container">
              <label htmlFor="education">Highest level of education</label>
              <br />
              <div className="select-container">
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
            </div>
          </div>
          <div className="eligibility-form-third-row">
            <div className="eligibility-form-label-container">
              <label htmlFor="stream">Stream</label>
              <br />
              <div className="select-container">
                <FormControl fullWidth>
                  {/* <InputLabel className="select-container-label" id="demo-simple-select-label">Select</InputLabel> */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    displayEmpty
                    value={age1}
                    label="Age"
                    onChange={handleChange1}
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
            </div>

            <div className="eligibility-form-label-container">
              <label htmlFor="email">Board/ University/ Open University</label>
              <br />
              <div className="select-container">
                <FormControl fullWidth>
                  {/* <InputLabel className="select-container-label" id="demo-simple-select-label">Select</InputLabel> */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    displayEmpty
                    value={age2}
                    label="Age"
                    onChange={handleChange2}
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
            </div>
          </div>
          <div className="eligibility-form-four-row" style={{display: 'flex', alignItems:'center',justifyContent: 'space-between'}}>
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Percentage secured</label>
              <br />
              <input onChange={handleInputChange} type="number" name="" id="" placeholder="90%" />
            </div>
            <div className="eligibility-form-label-container" style={{marginTop:'-20px'}}>

<input style={{display:'none'}} type="file" name="uploadResume" id="uploadResume" />
<label htmlFor="uploadResume" className="eligibility-form-upload-document-container">
<img src={documentUploadIcon} alt="upload" />
Upload Resume</label>
</div>
          </div>
          <br />
          <div className="eligibility-form-first-row">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Set 4 Digit Password</label>
              <br />
              <input onChange={handleInputChange} type="password" name="name" id="" placeholder="****" />
            </div>

            <div className="eligibility-form-label-container">
              <label htmlFor="email">Confirm 4 Digit Password</label>
              <br />
              <input
              onChange={handleInputChange}
                type="password"
                name="email"
                id=""
                placeholder="****"
              />
            </div>
          </div>
          <div className="eligiblity-next-button-container">
            <button onClick={nextStep} className="eligiblity-next-button">
              Next &nbsp;
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      
        

        <div className="d-none d-md-block d-lg-none ">
          
            <div className="eligibility-form-label-container-medium">
              <label htmlFor="name">Name</label>
              <br />
              <input onChange={handleInputChange} type="text" name="name" id="" placeholder="Rahul" />
            </div>

            <div className="eligibility-form-label-container-medium">
              <label htmlFor="email">Email</label>
              <br />
              <input
              onChange={handleInputChange}
                type="email"
                name="email"
                id=""
                placeholder="rahul@gmail.com"
              />
            </div>
        
        
            <div className="eligibility-form-label-container-medium">
              <label htmlFor="phone">Phone number</label>
              <div>
                <input onChange={handleInputChange} type="number" placeholder="+91" name="phone" id="" />
                <button>Send OTP</button>
              </div>
            </div>

            <div className="eligibility-form-label-container-medium">
              <label htmlFor="education">Highest level of education</label>
              <br />
              <div className="select-container">
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
            </div>
         
          
            <div className="eligibility-form-label-container-medium">
              <label htmlFor="stream">Stream</label>
              <br />
              <div className="select-container">
                <FormControl fullWidth>
                  {/* <InputLabel className="select-container-label" id="demo-simple-select-label">Select</InputLabel> */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    displayEmpty
                    value={age1}
                    label="Age"
                    onChange={handleChange1}
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
            </div>

            <div className="eligibility-form-label-container-medium">
              <label htmlFor="email">Board/ University/ Open University</label>
              <br />
              <div className="select-container">
                <FormControl fullWidth>
                  {/* <InputLabel className="select-container-label" id="demo-simple-select-label">Select</InputLabel> */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    displayEmpty
                    value={age2}
                    label="Age"
                    onChange={handleChange2}
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
            </div>
          
          
            <div className="eligibility-form-label-container-medium">
              <label htmlFor="name">Percentage secured</label>
              <br />
              <input onChange={handleInputChange} type="number" name="" id="" placeholder="90%" />
            </div>

            <div className="eligibility-form-label-container-medium">
            <br />
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Set 4 Digit Password</label>
              <br />
              <input style={{width:'100%'}} onChange={handleInputChange} type="password" name="name" id="" placeholder="****" />
            </div>
<br />
            <div className="eligibility-form-label-container">
              <label htmlFor="email">Confirm 4 Digit Password</label>
              <br />
              <input
               style={{width:'100%'}}
              onChange={handleInputChange}
                type="password"
                name="email"
                id=""
                placeholder="****"
              />
            </div>
          </div>

            <div className="eligibility-form-label-container" style={{marginTop:'-20px'}}>

<input style={{display:'none'}} type="file" name="uploadResume" id="uploadResume" />
<label htmlFor="uploadResume" className="eligibility-form-upload-document-container">
<img src={documentUploadIcon} alt="upload" />
Upload Resume</label>
</div>
        
          <div className="eligiblity-next-button-container">
            <button onClick={nextStep} className="eligiblity-next-button">
              Next &nbsp;
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>

        <div className="d-sm-block d-md-none">
          
            <div className="eligibility-form-label-container-small">
              <label htmlFor="name">Name</label>
              <br />
              <input onChange={handleInputChange} type="text" name="name" id="" placeholder="Rahul" />
            </div>

            <div className="eligibility-form-label-container-small">
              <label htmlFor="email">Email</label>
              <br />
              <input
              onChange={handleInputChange}
                type="email"
                name="email"
                id=""
                placeholder="rahul@gmail.com"
              />
            </div>
        
        
            <div className="eligibility-form-label-container-small">
              <label htmlFor="phone">Phone number</label>
              <div>
                <input onChange={handleInputChange} type="number" placeholder="+91" name="phone" id="" />
                <button>Send OTP</button>
              </div>
            </div>

            <div className="eligibility-form-label-container-small">
              <label htmlFor="education">Highest level of education</label>
              <br />
              <div className="select-container">
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
            </div>
         
          
            <div className="eligibility-form-label-container-small">
              <label htmlFor="stream">Stream</label>
              <br />
              <div className="select-container">
                <FormControl fullWidth>
                  {/* <InputLabel className="select-container-label" id="demo-simple-select-label">Select</InputLabel> */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    displayEmpty
                    value={age1}
                    label="Age"
                    onChange={handleChange1}
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
            </div>

            <div className="eligibility-form-label-container-small">
              <label htmlFor="email">Board/ University/ Open University</label>
              <br />
              <div className="select-container">
                <FormControl fullWidth>
                  {/* <InputLabel className="select-container-label" id="demo-simple-select-label">Select</InputLabel> */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    displayEmpty
                    value={age2}
                    label="Age"
                    onChange={handleChange2}
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
            </div>
          
          
            <div className="eligibility-form-label-container-small">
              <label htmlFor="name">Percentage secured</label>
              <br />
              <input onChange={handleInputChange} type="number" name="" id="" placeholder="90%" />
            </div>

            <div className="eligibility-form-label-container-medium">
            <br />
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Set 4 Digit Password</label>
              <br />
              <input style={{width:'100%'}} onChange={handleInputChange} type="password" name="name" id="" placeholder="****" />
            </div>
<br />
            <div className="eligibility-form-label-container">
              <label htmlFor="email">Confirm 4 Digit Password</label>
              <br />
              <input
               style={{width:'100%'}}
              onChange={handleInputChange}
                type="password"
                name="email"
                id=""
                placeholder="****"
              />
            </div>
          </div>

            <div className="eligibility-form-label-container" style={{marginTop:'-20px'}}>

<input style={{display:'none'}} type="file" name="uploadResume" id="uploadResume" />
<label htmlFor="uploadResume" className="eligibility-form-upload-document-container">
<img src={documentUploadIcon} alt="upload" />
Upload Resume</label>
</div>
        
        
          <div className="eligiblity-next-button-container">
            <button onClick={nextStep} className="eligiblity-next-button">
              Next &nbsp;
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </section>

      </div>
    </div>
  );
};

export default EligibilityForm1;
