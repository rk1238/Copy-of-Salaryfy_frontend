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
import OtpInput from 'react-otp-input';
import verified from '../img/verified.png';

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

  const [isCareerGap, setIsCareerGap] = useState(false);

  const [isCareerGapForm, setIsCareerGapForm] = useState({
    durationOfCareerGap:null,
    lastCompany:null,
    previousDesignation:null,
    lastDrawnSalary:null,
    workingExperience:null,
    currentResidingPlace:null,
    joinImmediately:null
  })

  const [isNoCareerGapForm, setIsNoCareerGapForm] = useState({
    currentIndustry:null,
    currentCompany:null,
    currentDesignation:null,
    currentSalary:null,
    workingExperience:null,
    currentJobLocation:null,
    seniorityLevel:null,
    noticePeriod:null
  })

  const [otp, setOtp] = useState('');


  const handleInputChange = (event) => {
    const { value, name } = event.target;

    setEligibilityForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleInputChangeIsNoCareerGap = (event) => { 
    const { value, name } = event.target;

    setIsNoCareerGapForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleInputChangeIsCareerGap = (event) => {
    const { value, name } = event.target;

    setIsCareerGap((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const nextStep = ()=>{
    // navigate("/experience-eligibility-instant-skill")
    navigate("/experience-select-category")
    
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

      <section>
        <div></div>
      </section>

      <section className="roadMap-section">
        <img src={roadMap} alt="road-map" />
      </section>

      <section className="eligibility-form-container">
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

          <div className="otp-container">

          <p style={{marginBottom:'5px'}}>OTP</p>

<div style={{display:'flex',alignItems:'center',gap:'20px'}}>
<OtpInput
          inputStyle={{width:'40px',height:'40px',fontSize:'30px',fontWeight:'normal',borderRadius:'5px',border:'3px solid lightgrey',color:'green'}}
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span> &nbsp;&nbsp;</span>}
      renderInput={(props) => <input style={{fontSize:'30px'}} {...props} />}
    />
 <img src={verified} alt="verified" />
</div>

          

          </div>

          
<br />
          <div>
          <div className="eligibility-form-label-container">
              <label htmlFor="phone">Any Career Break?</label>
              <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
              <div>
    <input  style={{cursor:'pointer'}} onChange={()=>{setIsCareerGap(true)}} type="radio" id="isYes" name="brand" value="Yes"/>
    &nbsp; <label style={{cursor:'pointer',fontSize:'18px',fontWeight:'600',color:isCareerGap?'green':'grey'}} for="isYes">Yes</label>
  </div>
  
  <div>
    <input defaultChecked={true} style={{cursor:'pointer'}} onChange={()=>{setIsCareerGap(false)}} type="radio" id="isNo" name="brand" value="No"/>
    &nbsp; <label style={{cursor:'pointer',fontSize:'18px',fontWeight:'600',color:isCareerGap?'grey':'green'}} for="isNo">No</label>
  </div>
              </div>
            </div>
          </div>

{
  isCareerGap?
<div>
<br />
<div className="eligibility-form-first-row">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Duration of Career Break</label>
              <br />
              <input onChange={handleInputChangeIsCareerGap} type="text" name="durationOfCareerGap" id="" placeholder="0 Year 6 Months" />
            </div>

            <div className="eligibility-form-label-container">
              <label htmlFor="email">Last Company</label>
              <br />
              <input
              onChange={handleInputChangeIsCareerGap}
                type="text"
                name="lastCompany"
                id=""
                placeholder="0 Year 6 Months"
              />
            </div>
          </div>
<br />
          <div className="eligibility-form-first-row">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Previous Designation</label>
              <br />
              <input onChange={handleInputChangeIsCareerGap} type="text" name="previousDesignation" id="" placeholder="Frontend Engineer" />
            </div>

            <div className="eligibility-form-label-container">
              <label htmlFor="email">Last Drawn Salary(in LPA)</label>
              <br />
              <input
              onChange={handleInputChangeIsCareerGap}
                type="text"
                name="lastDrawnSalary"
                id=""
                placeholder="8.5"
              />
            </div>
          </div>
<br />
          <div className="eligibility-form-first-row">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Years of Working Experience</label>
              <br />
              <input onChange={handleInputChangeIsCareerGap} type="text" name="workingExperience" id="" placeholder="6 Years 3 Months" />
            </div>

            <div className="eligibility-form-label-container">
              <label htmlFor="email">Current Residing Place</label>
              <br />
              <input
              onChange={handleInputChangeIsCareerGap}
                type="text"
                name="currentResidingPlace"
                id=""
                placeholder="Tamilnadu"
              />
            </div>
          </div>
 <br />
          <div className="eligibility-form-first-row">
     
            <div className="eligibility-form-label-container">
              <label htmlFor="stream">Available to join immediately</label>
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
              <label htmlFor="stream">Willing to Relocate</label>
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

            
          </div>

          <div className="eligibility-form-first-row">

          <div className="eligibility-form-label-container">

          <input style={{display:'none'}} type="file" name="uploadResume" id="uploadResume" />
          <label htmlFor="uploadResume" className="eligibility-form-upload-document-container">
          <img src={documentUploadIcon} alt="upload" />
          Upload Resume</label>
          </div>

          </div>
</div>
  :
<div>
<div>
<br />
<div className="eligibility-form-first-row">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Current Industry</label>
              <br />
              <input onChange={handleInputChangeIsNoCareerGap} type="text" name="currentIndustry" id="" placeholder="0 Year 6 Months" />
            </div>

            <div className="eligibility-form-label-container">
              <label htmlFor="email">Current Company</label>
              <br />
              <input
              onChange={handleInputChangeIsNoCareerGap}
                type="text"
                name="currentCompany"
                id=""
                placeholder="0 Year 6 Months"
              />
            </div>
          </div>
<br />
          <div className="eligibility-form-first-row">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Current Designation</label>
              <br />
              <input onChange={handleInputChangeIsNoCareerGap} type="text" name="currentDesignation" id="" placeholder="Frontend Engineer" />
            </div>

            <div className="eligibility-form-label-container">
              <label htmlFor="email">Current Salary(in LPA)</label>
              <br />
              <input
              onChange={handleInputChangeIsNoCareerGap}
                type="text"
                name="currentSalary"
                id=""
                placeholder="8.5"
              />
            </div>
          </div>
<br />
          <div className="eligibility-form-first-row">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Years of Working Experience</label>
              <br />
              <input onChange={handleInputChangeIsNoCareerGap} type="text" name="workingExperience" id="" placeholder="6 Years 3 Months" />
            </div>

            <div className="eligibility-form-label-container">
              <label htmlFor="email">Current Job Location</label>
              <br />
              <input
              onChange={handleInputChangeIsNoCareerGap}
                type="text"
                name="currentJobLocation"
                id=""
                placeholder="Tamilnadu"
              />
            </div>
          </div>
 <br />
          <div className="eligibility-form-first-row">
     
            <div className="eligibility-form-label-container">
              <label htmlFor="stream">Seniority Level</label>
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
              <label htmlFor="stream">Notice Period</label>
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

            
          </div>

          <div className="eligibility-form-first-row">

<div className="eligibility-form-label-container">

<input style={{display:'none'}} type="file" name="uploadResume" id="uploadResume" />
<label htmlFor="uploadResume" className="eligibility-form-upload-document-container">
<img src={documentUploadIcon} alt="upload" />
Upload Resume</label>
</div>

</div>
</div>
</div>

}

        
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
         
            <br />
          <div>
          <div className="eligibility-form-label-container">
              <label htmlFor="phone">Any Career Break?</label>
              <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
              <div>
    <input style={{cursor:'pointer'}} onChange={()=>{setIsCareerGap(true)}} type="radio" id="isYes" name="brand" value="Yes"/>
    &nbsp; <label style={{cursor:'pointer',fontSize:'18px',fontWeight:'600',color:isCareerGap?'green':'grey'}} for="isYes">Yes</label>
  </div>
  
  <div>
    <input style={{cursor:'pointer'}} onChange={()=>{setIsCareerGap(false)}} type="radio" id="isNo" name="brand" value="No"/>
    &nbsp; <label style={{cursor:'pointer',fontSize:'18px',fontWeight:'600',color:isCareerGap?'grey':'green'}} for="isNo">No</label>
  </div>
              </div>
            </div>
          </div>

{
  isCareerGap?
<div>
<br />
<div className="eligibility-form-label-container-medium">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Duration of Career Break</label>
              <br />
              <input style={{width:'100%'}} onChange={handleInputChangeIsCareerGap} type="text" name="durationOfCareerGap" id="" placeholder="0 Year 6 Months" />
            </div>
<br />
            <div className="eligibility-form-label-container">
              <label htmlFor="email">Last Company</label>
              <br />
              <input
              style={{width:'100%'}}
              onChange={handleInputChangeIsCareerGap}
                type="text"
                name="lastCompany"
                id=""
                placeholder="0 Year 6 Months"
              />
            </div>
          </div>


          
<br />
          <div className="eligibility-form-label-container-medium">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Previous Designation</label>
              <br />
              <input style={{width:'100%'}} onChange={handleInputChangeIsCareerGap} type="text" name="previousDesignation" id="" placeholder="Frontend Engineer" />
            </div>
<br />
            <div className="eligibility-form-label-container">
              <label htmlFor="email">Last Drawn Salary(in LPA)</label>
              <br />
              <input
              style={{width:'100%'}}
              onChange={handleInputChangeIsCareerGap}
                type="text"
                name="lastDrawnSalary"
                id=""
                placeholder="8.5"
              />
            </div>
          </div>
<br />
          <div className="eligibility-form-label-container-medium">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Years of Working Experience</label>
              <br />
              <input style={{width:'100%'}} onChange={handleInputChangeIsCareerGap} type="text" name="workingExperience" id="" placeholder="6 Years 3 Months" />
            </div>
<br />
            <div className="eligibility-form-label-container">
              <label htmlFor="email">Current Residing Place</label>
              <br />
              <input
              style={{width:'100%'}}
              onChange={handleInputChangeIsCareerGap}
                type="text"
                name="currentResidingPlace"
                id=""
                placeholder="Tamilnadu"
              />
            </div>
          </div>
 <br />
          <div className="eligibility-form-label-container-medium">
     
            <div className="eligibility-form-label-container">
              <label htmlFor="stream">Available to join immediately</label>
              <br />
              <div className="select-container" style={{width:'100%'}}>
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

            <div style={{marginTop:'20px'}} className="eligibility-form-label-container">
              <label htmlFor="stream">Willing to Relocate</label>
              <br />
              <div className="select-container" style={{width:'100%'}}>
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
            
          </div>

          <div className="eligibility-form-first-row">

          <div className="eligibility-form-label-container">

          <input style={{display:'none'}} type="file" name="uploadResume" id="uploadResume" />
          <label htmlFor="uploadResume" className="eligibility-form-upload-document-container">
          <img src={documentUploadIcon} alt="upload" />
          Upload Resume</label>
          </div>

          </div>
</div>
  :
<div>
<div>
<br />
<div className="eligibility-form-label-container-medium">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Current Industry</label>
              <br />
              <input style={{width:'100%'}} onChange={handleInputChangeIsNoCareerGap} type="text" name="currentIndustry" id="" placeholder="0 Year 6 Months" />
            </div>
<br />
            <div className="eligibility-form-label-container">
              <label htmlFor="email">Current Company</label>
              <br />
              <input
              style={{width:'100%'}}
              onChange={handleInputChangeIsNoCareerGap}
                type="text"
                name="currentCompany"
                id=""
                placeholder="0 Year 6 Months"
              />
            </div>
          </div>
<br />
          <div className="eligibility-form-label-container-medium">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Current Designation</label>
              <br />
              <input style={{width:'100%'}} onChange={handleInputChangeIsNoCareerGap} type="text" name="currentDesignation" id="" placeholder="Frontend Engineer" />
            </div>
<br />
            <div className="eligibility-form-label-container">
              <label htmlFor="email">Current Salary(in LPA)</label>
              <br />
              <input
              style={{width:'100%'}}
              onChange={handleInputChangeIsNoCareerGap}
                type="text"
                name="currentSalary"
                id=""
                placeholder="8.5"
              />
            </div>
          </div>
<br />
          <div className="eligibility-form-label-container-medium">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Years of Working Experience</label>
              <br />
              <input style={{width:'100%'}} onChange={handleInputChangeIsNoCareerGap} type="text" name="workingExperience" id="" placeholder="6 Years 3 Months" />
            </div>
<br />
            <div className="eligibility-form-label-container">
              <label htmlFor="email">Current Job Location</label>
              <br />
              <input
              style={{width:'100%'}}
              onChange={handleInputChangeIsNoCareerGap}
                type="text"
                name="currentJobLocation"
                id=""
                placeholder="Tamilnadu"
              />
            </div>
          </div>
 <br />
          <div className="eligibility-form-label-container-medium">
     
            <div className="eligibility-form-label-container">
              <label htmlFor="stream">Seniority Level</label>
              <br />
              <div className="select-container" style={{width:'100%'}}>
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
<br />
            <div className="eligibility-form-label-container">
              <label htmlFor="stream">Notice Period</label>
              <br />
              <div className="select-container" style={{width:'100%'}}>
                <FormControl style={{width:'100%'}} fullWidth>
                  {/* <InputLabel className="select-container-label" id="demo-simple-select-label">Select</InputLabel> */}
                  <Select
                  style={{width:'100%'}}
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

            
          </div>


          <div className="eligibility-form-first-row">

          <div className="eligibility-form-label-container">

          <input style={{display:'none'}} type="file" name="uploadResume" id="uploadResume" />
          <label htmlFor="uploadResume" className="eligibility-form-upload-document-container">
          <img src={documentUploadIcon} alt="upload" />
          Upload Resume</label>
          </div>

          </div>
</div>
</div>

}

          
           
        
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
         
            <br />
          <div>
          <div className="eligibility-form-label-container">
              <label htmlFor="phone">Any Career Break?</label>
              <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
              <div>
    <input style={{cursor:'pointer'}} onChange={()=>{setIsCareerGap(true)}} type="radio" id="isYes" name="brand" value="Yes"/>
    &nbsp; <label style={{cursor:'pointer',fontSize:'18px',fontWeight:'600',color:isCareerGap?'green':'grey'}} for="isYes">Yes</label>
  </div>
  
  <div>
    <input style={{cursor:'pointer'}} onChange={()=>{setIsCareerGap(false)}} type="radio" id="isNo" name="brand" value="No"/>
    &nbsp; <label style={{cursor:'pointer',fontSize:'18px',fontWeight:'600',color:isCareerGap?'grey':'green'}} for="isNo">No</label>
  </div>
              </div>
            </div>
          </div>

{
  isCareerGap?
<div>
<br />
<div className="eligibility-form-label-container-medium">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Duration of Career Break</label>
              <br />
              <input style={{width:'100%'}} onChange={handleInputChangeIsCareerGap} type="text" name="durationOfCareerGap" id="" placeholder="0 Year 6 Months" />
            </div>
<br />
            <div className="eligibility-form-label-container">
              <label htmlFor="email">Last Company</label>
              <br />
              <input
              style={{width:'100%'}}
              onChange={handleInputChangeIsCareerGap}
                type="text"
                name="lastCompany"
                id=""
                placeholder="0 Year 6 Months"
              />
            </div>
          </div>


          
<br />
          <div className="eligibility-form-label-container-medium">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Previous Designation</label>
              <br />
              <input style={{width:'100%'}} onChange={handleInputChangeIsCareerGap} type="text" name="previousDesignation" id="" placeholder="Frontend Engineer" />
            </div>
<br />
            <div className="eligibility-form-label-container">
              <label htmlFor="email">Last Drawn Salary(in LPA)</label>
              <br />
              <input
              style={{width:'100%'}}
              onChange={handleInputChangeIsCareerGap}
                type="text"
                name="lastDrawnSalary"
                id=""
                placeholder="8.5"
              />
            </div>
          </div>
<br />
          <div className="eligibility-form-label-container-medium">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Years of Working Experience</label>
              <br />
              <input style={{width:'100%'}} onChange={handleInputChangeIsCareerGap} type="text" name="workingExperience" id="" placeholder="6 Years 3 Months" />
            </div>
<br />
            <div className="eligibility-form-label-container">
              <label htmlFor="email">Current Residing Place</label>
              <br />
              <input
              style={{width:'100%'}}
              onChange={handleInputChangeIsCareerGap}
                type="text"
                name="currentResidingPlace"
                id=""
                placeholder="Tamilnadu"
              />
            </div>
          </div>
 <br />
          <div className="eligibility-form-label-container-medium">
     
            <div className="eligibility-form-label-container">
              <label htmlFor="stream">Available to join immediately</label>
              <br />
              <div className="select-container" style={{width:'100%'}}>
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
            <div style={{marginTop:'20px'}} className="eligibility-form-label-container">
              <label htmlFor="stream">Willing to Relocate</label>
              <br />
              <div className="select-container" style={{width:'100%'}}>
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

            
            
          </div>
      

          <div className="eligibility-form-label-container-small" style={{width:'100%'}}>

          <input style={{display:'none'}} type="file" name="uploadResume" id="uploadResume" />
          <label htmlFor="uploadResume" className="eligibility-form-upload-document-container">
          <img src={documentUploadIcon} alt="upload" />
          Upload Resume</label>
          </div>

          
</div>
  :
<div>
<div>
<br />
<div className="eligibility-form-label-container-medium">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Current Industry</label>
              <br />
              <input style={{width:'100%'}} onChange={handleInputChangeIsNoCareerGap} type="text" name="currentIndustry" id="" placeholder="0 Year 6 Months" />
            </div>
<br />
            <div className="eligibility-form-label-container">
              <label htmlFor="email">Current Company</label>
              <br />
              <input
              style={{width:'100%'}}
              onChange={handleInputChangeIsNoCareerGap}
                type="text"
                name="currentCompany"
                id=""
                placeholder="0 Year 6 Months"
              />
            </div>
          </div>
<br />
          <div className="eligibility-form-label-container-medium">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Current Designation</label>
              <br />
              <input style={{width:'100%'}} onChange={handleInputChangeIsNoCareerGap} type="text" name="currentDesignation" id="" placeholder="Frontend Engineer" />
            </div>
<br />
            <div className="eligibility-form-label-container">
              <label htmlFor="email">Current Salary(in LPA)</label>
              <br />
              <input
              style={{width:'100%'}}
              onChange={handleInputChangeIsNoCareerGap}
                type="text"
                name="currentSalary"
                id=""
                placeholder="8.5"
              />
            </div>
          </div>
<br />
          <div className="eligibility-form-label-container-medium">
            <div className="eligibility-form-label-container">
              <label htmlFor="name">Years of Working Experience</label>
              <br />
              <input style={{width:'100%'}} onChange={handleInputChangeIsNoCareerGap} type="text" name="workingExperience" id="" placeholder="6 Years 3 Months" />
            </div>
<br />
            <div className="eligibility-form-label-container">
              <label htmlFor="email">Current Job Location</label>
              <br />
              <input
              style={{width:'100%'}}
              onChange={handleInputChangeIsNoCareerGap}
                type="text"
                name="currentJobLocation"
                id=""
                placeholder="Tamilnadu"
              />
            </div>
          </div>
 <br />
          <div className="eligibility-form-label-container-medium">
     
            <div className="eligibility-form-label-container">
              <label htmlFor="stream">Seniority Level</label>
              <br />
              <div className="select-container" style={{width:'100%'}}>
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
<br />
            <div className="eligibility-form-label-container">
              <label htmlFor="stream">Notice Period</label>
              <br />
              <div className="select-container" style={{width:'100%'}}>
                <FormControl style={{width:'100%'}} fullWidth>
                  {/* <InputLabel className="select-container-label" id="demo-simple-select-label">Select</InputLabel> */}
                  <Select
                  style={{width:'100%'}}
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

            <div className="eligibility-form-label-container-small" style={{width:'100%'}}>

<input style={{display:'none'}} type="file" name="uploadResume" id="uploadResume" />
<label htmlFor="uploadResume" className="eligibility-form-upload-document-container">
<img src={documentUploadIcon} alt="upload" />
Upload Resume</label>
</div>
            
          </div>
</div>
</div>

}
          
          
        
          <div className="eligiblity-next-button-container">
            <button onClick={nextStep} className="eligiblity-next-button">
              Next &nbsp;
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EligibilityForm1;
