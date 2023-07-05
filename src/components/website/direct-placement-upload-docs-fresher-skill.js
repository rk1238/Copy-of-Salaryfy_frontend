import React, { useEffect, useState, useRef } from "react";
import NavbarTwo from "../common/navbar-two";
import Footer from "../common/footer";

import d6Green from "../img/icons/d-6green.png";

import dCall from "../img/icons/d-call.png";
import Calendar from "../img/icons/calendar.png";
import Expand from "../img/expand-img.png";
import Call from "../img/icons/call.png";
import Mail from "../img/mail.png";
import Arrow from "../img/arrow.png";
import sign from "../img/sign.gif";
import Upload from "../img/icons/upload.png";
import Slider from "@material-ui/core/Slider";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import UploadWhite from "../img/upload-white.png";
import { withStyles } from "@material-ui/core/styles";
import Slider1 from '@mui/material/Slider';
import axios from "axios";
import SvgArrow from "../img/arrow-svg.svg";
import RightGreen from "../img/right-green.png";
import SignWhite from "../img/sign-white.png";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import { ApiBaseUrl } from "../BaseUrl/baseUrl";

import { useNavigate } from "react-router-dom";

const DirectPlacementUploadDocs = () => {
  let navigate = useNavigate();
  const [values, setValues] = useState([10]);
  const Total_payable_amount = Math.round((values) * 100000 * 0.01)
  const Total_payable_amount_GST = Math.round(Total_payable_amount * 1.18)
  const max = 60;
  const marks1 = [
    {
      value: 60,
      label: '60 LPA',
    },
  ];
  
function valuetext2(value) {
    return `${value}`+'LPA';
}
function valuetext3(value) {
  return `${value}`+' '+'LPA';
} 
const railColor = (val) => {
  return (val <= values && val >= 0) ? 'green' : 'rgba(0, 0, 0, 0.38)'; 
} 
const railColor1 = (val) => {
  return (val <= values && val >= 0) ? '#FECD08' : 'rgba(0, 0, 0, 0.38)'; 
  }  
  const [file1, setFile1] = useState({
    aadhar_card:''
  });
  const [file2, setFile2] = useState({
    pan_card:''
  });
  const [ProfileData, setProfileData] = useState({
    name: "",
    phone: "",
    city: "",
    gender: "",
    age: "",
    gradProName: "",
    currentSemester: "",
    postGradProName: "",
  });
  const [processGet, setProcessGet] = useState();
 
  const getAriaLabel = (index) => {
    return { 'aria-label': `slider` };
  };

  const Token = JSON.parse(window.localStorage.getItem("token"));
 

  const userName = JSON.parse(localStorage.getItem("name"));
  const [fileSelected, setFileSelected] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileSelectedPan, setFileSelectedPan] = useState(false);
  const [fileUploadedPan, setFileUploadedPan] = useState(false);

  const [selectedFileName1, setSelectedFileName1] = useState('');
  const [selectedFileName2, setSelectedFileName2] = useState('');

  const [submitClicked, setSubmitClicked] = useState(false);
  const handleInputChange = (event, index) => {
    const newValue = parseInt(event.target.value);
    setValues(
      values.map((value, i) => {
        if (i === index) {
          return newValue;
        }
        return value;
      })
    );
  };

  
 
  const handleFileSelect1 = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile.type !== "application/pdf") {
      alert("Please select a pdf file.");
      return;
    }
    const fileSizeInMB = selectedFile.size / (1024 * 1024);
    if (fileSizeInMB > 1) {
      alert("Please select a PDF document that is less than or equal to 1MB.");
      return;
    }
    const formData = new FormData();
    formData.append('aadhar_card', selectedFile);

    fetch(ApiBaseUrl+'document-upload', {
      method: 'POST',
      body: formData,
      headers: {
        'x-access-token':
        Token,
      },
    })
      .then((response) => {
        // Handle the response from the API
        if (response.ok) {
          setSelectedFileName1(selectedFile.name);
          setFileSelected(true);
          setFileUploaded(true);
          console.log('File uploaded successfully');
        } else {
          console.error('Failed to upload file');
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the upload
        console.error('An error occurred during the upload', error);
      });
  };

  const handleFileSelect2 = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile.type !== "application/pdf") {
      alert("Please select a pdf file.");
      return;
    }
    const fileSizeInMB = selectedFile.size / (1024 * 1024);
    if (fileSizeInMB > 1) {
      alert("Please select a PDF document that is less than or equal to 1MB.");
      return;
    }
    const formData = new FormData();
    formData.append('pan_card', selectedFile);

    fetch(ApiBaseUrl+'document-upload', {
      method: 'POST',
      body: formData,
      headers: {
        'x-access-token':
          Token,
      },
    })
      .then((response) => {
        // Handle the response from the API
        if (response.ok) {
          setSelectedFileName2(selectedFile.name);
          setFileSelectedPan(true);
          setFileUploadedPan(true);
          console.log('File uploaded successfully');
        } else {
          console.error('Failed to upload file');
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the upload
        console.error('An error occurred during the upload', error);
      });
  };

  const handleNextPage = ()=>{
    navigate('/experience-eligibility-payment')
  }
  
  const handleSubmit = (e) => {
    console.log("form submitted ");
    setModalShow(true)
    // navigate("/ConsentPage");
// navigate('/experience-eligibility-payment')
    e.preventDefault();
    setSubmitClicked(true); // set submitClicked to true when submit button is clicked
    if (!fileSelected) {
      return; // don't submit if required field is not selected
    }
    if (!fileSelectedPan) {
      return; // don't submit if required field is not selected
    }
    navigate("/ConsentPage");
  };
 
  const handleSliderChange = (event, newValues) => {
    setValues(newValues);
  };
  
  const marks = [
    {
      value: 3,
      label: (
        <strong
          style={{
            fontSize: "15px",
            fontFamily: "Lexend",
            fontStyle: "normal",
          }}>
          3
        </strong>
      ),
    },

    {
      value: 6,
      label: (
        <strong
          style={{
            fontSize: "16px",
            fontFamily: "Lexend",
            fontStyle: "normal",
          }}>
          6
        </strong>
      ),
    },

    {
      value: 9,
      label: (
        <strong
          style={{
            fontSize: "16px",
            fontFamily: "Lexend",
            fontStyle: "normal",
          }}>
          9
        </strong>
      ),
    },

    {
      value: 12,
      label: (
        <strong
          style={{
            fontSize: "16px",
            fontFamily: "Lexend",
            fontStyle: "normal",
          }}>
          12
        </strong>
      ),
    },

    {
      value: 15,
      label: (
        <strong
          style={{
            fontSize: "16px",
            fontFamily: "Lexend",
            fontStyle: "normal",
          }}>
          15
        </strong>
      ),
    },
    {
      value: 18,
      label: (
        <strong
          style={{
            fontSize: "16px",
            fontFamily: "Lexend",
            fontStyle: "normal",
          }}>
          18
        </strong>
      ),
    },
    {
      value: 21,
      label: (
        <strong
          style={{
            fontSize: "16px",
            fontFamily: "Lexend",
            fontStyle: "normal",
          }}>
          21
        </strong>
      ),
    },
    {
      value: 24,
      label: (
        <strong
          style={{
            fontSize: "16px",
            fontFamily: "Lexend",
            fontStyle: "normal",
          }}>
          24
        </strong>
      ),
    },
  ];

 

  useEffect(() => {
    // Get profile through Api
    console.log("token_first", Token);
    let Api = ApiBaseUrl + "get-profile";
    const fetchProfileData = async (url) => {
      try {
        const res = await fetch(Api, {
          headers: {
            "x-access-token": Token,
          },
        });
        const data = await res.json();
        console.log("get-profile data", data.data.details);
        console.log("get-token", Token);
        setProfileData(data.data);
        //    isLoading=false;
      } catch (error) {}
    };
    fetchProfileData(Api);
  }, [Token]);

  const handleChange = (e) => {
    setProfileData({ ...ProfileData, [e.target.name]: e.target.value });
  };

 

  useEffect(() => {
    // Get Process through Api
    console.log("token_first", Token);
    let Api = ApiBaseUrl + "get-process";
    const fetchProfileData = async (url) => {
      try {
        const res = await fetch(Api, {
          headers: {
            "x-access-token": Token,
          },
        });
        const data = await res.json();
        setProcessGet(data.process);
        //    isLoading=false;
      } catch (error) {}
    };
    fetchProfileData(Api);
  }, [Token]);


  const [modalShow, setModalShow] = React.useState(false);


  



  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{width:'100vw'}}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        {
          
        }
        <Modal.Body style={{padding:'20px 50px',height:'50vh',overflow:'scroll'}}>
          <h2>Declaration</h2>
          <p>
          By accessing and using the services offered by Salaryfy, you, as a user, agree to abide by the following terms and conditions:
          </p>
          <ol>
            <li>
              <b>Payment for Services:</b>
              The services offered by Salaryfy are paid, with the fee determined based on the level of seniority in employment. There are no hidden charges, but the fee must be submitted upfront before availing of the services.

            </li>
            <li>
              <b>Proper Measures: </b>
              In order to fully benefit from our services, you acknowledge and agree to take all proper measures as guided by Salaryfy. This includes providing accurate and complete information about your qualifications, skills, and experiences, as well as actively participating in the job search process.
            </li>
            <li>
              <b>Abiding by Guidelines:</b>
              You commit to abide by the guidelines given by Salaryfy in order to increase your chances of securing a job within the given duration. This may include following specific steps, submitting required documents, and actively engaging in the job search activities recommended by Salaryfy.
            </li>
            <li>
              <b>No Guarantees:</b>
              While Salaryfy strives to provide effective services, you acknowledge that there is no guarantee of a job placement or job offer as a result of using our services. The job market is dynamic and competitive, and Salaryfy does not guarantee any specific outcomes or results.
            </li>
            <li>
              <b>Confidentiality:</b>
              You agree to keep any information shared by Salaryfy, including job leads, employer details, and other confidential information, strictly confidential and not share it with any third parties without explicit consent from Salaryfy.
            </li>
            <li>
              <b>Compliance with Laws:</b>
              You agree to comply with all applicable laws and regulations while using Salaryfy's services, including but not limited to employment laws, data protection laws, and intellectual property laws.
            </li>
            <li>
              <b>Termination:</b>
              Salaryfy reserves the right to terminate your access to its services at any time, for any reason, without notice or liability.
            </li>
            <li>
              <b>Changes to Terms and Conditions:</b>
              Salaryfy may modify these terms and conditions at any time without prior notice. It is your responsibility to review and comply with the most current version of the terms and conditions.
            </li>
          </ol>
          <p>
          By using Salaryfy's services, you acknowledge and agree to abide by these terms and conditions. Failure to comply with these terms and conditions may result in the termination of your access to Salaryfy's services.
          </p>
        </Modal.Body>
        <div className="form-check" style={{paddingLeft:'40px'}}>
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="invalidCheck2"
                                          // checked={isChecked}
                                          // onChange={handleCheckboxChange}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="invalidCheck2">
                                         I acknowledged that I have carefully read all the terms and conditions as mentioned in the <br />above document.
                                        </label>
                                      </div>
        <Modal.Footer style={{width:'100%',margin:'auto'}}>
        <Button style={{color:'green',border:'1px solid green',background:'white'}} onClick={props.onHide}>Close</Button>
          <Button onClick={()=>{
            handleNextPage();
            // eslint-disable-next-line no-unused-expressions
            props.onHide
          }} style={{background:'green',color:'white'}} >Next</Button>
        </Modal.Footer>
      </Modal>
    );
  }

















  return (
    <React.Fragment>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <NavbarTwo />

      <section className="eligiblity-form-sec student-dashboard select-plan range-slider-plan full_show">
        <a className="call-btn-2 expand-button call-btn">
          {" "}
          <img src={Call} alt="arrow" className="expand-img" />
          <img src={Expand} alt="" className="expand-img-2" />
          <div className="d-block">
            <p className="text">Need help?</p>
            <p>Chat or call with our counselor</p>
          </div>
        </a>
        <div className="">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-9 m-auto margin-auto-hide">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active range-slider-tab"
                  id="v-pills-messages-3"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-3-tab">
                  <section className="">
                    <div className="container">
                      {/* <div className="timeline-pop">
                        <ol>
                          <li className="active">
                            <span className="active-border">1</span>
                            <p>Upload documents</p>
                          </li>
                          <li>
                            <span>2</span>
                            <p>Enter placement drive</p>
                          </li>
                          <li>
                            <span>3</span>
                            <p>Get job</p>
                          </li>
                        </ol>
                      </div> */}
                      <br />
                      <div
                        className="row basket-banner
                                            eligiblity-form-filds">
                        <div className="col-lg-8">
                          <div
                            className="range-slider-sec
                                                    calculator-sec">
                            <div className="range-list">
                              <h3>Hi {userName}, </h3>
                              <p>
                                please upload your document and sign your ISA
                              </p>

{/* removal of aadhar and pan */}
<br />

                              
                              <div className="range-container">
                              <div
                                className="right-block
                                                            fresher-test">
                                <a
                                    onClick={(e) => {
                                      handleSubmit(e)
                                      }}
                                    className="theme_btn tertiary"
                                    // data-toggle="modal"
                                    // data-target="#submitTestModal"
                                    type="button">
                                  <img
                                      src={d6Green}
                                      alt="arrow"
                                      className="img-1 sign_img"
                                    />
                                    <img
                                      src={SignWhite}
                                      className="partners-img img-2 sign_img"
                                      alt=""
                                    />
                                    Sign consent form
                                    <img
                                      src={RightGreen}
                                      alt="arrow"
                                      className="img-1"
                                    />
                                    <img
                                      src={SvgArrow}
                                      className="partners-img img-2"
                                      alt=""
                                    />
                                    <span></span>
                                </a>
                              </div>
                            </div>

                            

                              <div className="range-inner-wrapper">
                                <h4>1% Service fee Calculator</h4>
                                <div className="form-row range-input-group">
                                  <label>Your expected CTC (LPA)*</label>
                                  {values.map((value, index) => (
                                    <div
                                      className="input-group col-lg-3 col-md-4 col-sm-5 col-5"
                                      key={index}>
                                      <input
                                        className="form-control"
                                        type="number"
                                        value={value}
                                        onChange={(event) =>
                                          handleInputChange(event, index)
                                        }
                                        inputprops={{
                                          min: 0,
                                          max: 60,
                                          step: 5,
                                        }}
                                      />
                                      
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          ₹
                                        </span>
                                      </div>
                                    </div>
                                  ))}

                                    <Box sx={{ width: 300 }}>
                                    <Slider1
                                             getAriaLabel={getAriaLabel}
                                            value={values}
                                            onChange={handleSliderChange}
                                            getAriaValueText={valuetext2}
                                            min={5}
                                            max={max}
                                            step={0.5}
                                            marks={[{ value: max, label: `${max}LPA` }]}
                                            valueLabelFormat={valuetext3}
                                            valueLabelDisplay="on"
                                            style={{color: railColor}} 
                                            sx={{
                                              '& .MuiSlider-rail': {
                                                background: (theme) => `linear-gradient(to right, ${railColor(5)}, ${railColor(values)} ${((values - 5) / (60 - 5)) * 100}%, ${theme.palette.grey[300]} ${((values - 5) / (60 - 5)) * 100}%, ${theme.palette.grey[300]} 100%)` // set the color of the rail track dynamically based on the value
                                              }
                                            }}
                                        />
                                    </Box>
                                  
                                </div>

                                
                              
                                <div className="all-range-inputs">
                                {/* <h4>With 1% ISA</h4> */}
                                  <div className="form-row range-input-group">
                                    <label>Service Fee</label>
                                    <div className="input-group col-lg-4 col-md-5 col-sm-4 col-5">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder={Total_payable_amount}
                                        aria-label="Amount (to the nearest dollar)"
                                      />
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          ₹
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="form-row
                                                                    range-input-group">
                                    <label>
                                     Service Fee
                                      <br />
                                      with 18% GST
                                    </label>
                                    <div
                                      className="input-group
                                                                        col-lg-4 col-md-5 col-sm-4 col-5">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder={Total_payable_amount_GST}
                                        aria-label="Amount
                                                                            (to
                                                                            the
                                                                            nearest
                                                                            dollar)"
                                      />
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          ₹
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 basket-row range-basket-row full_show">
                          <div className="summary-table mb-5">
                            <h2
                              className="text-center
                                                        mb-4">
                              Having doubts?
                            </h2>
                            <div
                              className="table-responsive-xl
                                                        special-inclusions-table">
                              <div className="having-doughts-sec">
                                <p className="text-center">
                               Get in touch with our counselor
                                </p>
                                <div className="call-session">
                                  <p>Email us!</p>
                                  <p className="number-cell">
                                    <a href="#">contact@salaryfy.com</a>
                                  </p>
                                  <img
                                    src={Mail}
                                    alt="icon"
                                    className="icon"
                                  />
                                </div>
                                <p
                                  className="text-center
                                                                mt-3">
                                  or
                                </p>
                                <div className="call-session">
                                  <p>Let us call you!</p>
                                  <p className="number-cell">
                                    <a href="#">Book a slot now</a>
                                  </p>
                                  <img
                                    src={Calendar}
                                    alt="icon"
                                    className="icon"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* ================mobile-view========== */}


      <section className="eligiblity-form-sec student-dashboard select-plan range-slider-plan five_show">
        <a className="call-btn-2 expand-button call-btn">
          {" "}
          <img src={Call} alt="arrow" className="expand-img" />
          <img src={Expand} alt="" className="expand-img-2" />
          <div className="d-block">
            <p className="text">Need help?</p>
            <p>Chat or call with our counselor</p>
          </div>
        </a>
        <div className="">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-9 m-auto margin-auto-hide">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active range-slider-tab"
                  id="v-pills-messages-3"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-3-tab">
                  <section className="">
                    <div className="container">
                      <div className="timeline-pop">
                        <ol>
                          <li className="active">
                            <span className="active-border">1</span>
                            <p>Upload documents</p>
                          </li>
                          <li>
                            <span>2</span>
                            <p>Enter placement drive</p>
                          </li>
                          <li>
                            <span>3</span>
                            <p>Get job</p>
                          </li>
                        </ol>
                      </div>
                      <div
                        className="row basket-banner
                                            eligiblity-form-filds">
                        <div className="col-lg-8">
                          <div
                            className="range-slider-sec
                                                    calculator-sec">
                            <div className="range-list">
                              <h3>Hi {userName}, </h3>
                              <p>
                                please upload your document and sign your ISA
                              </p>

                              <div className="row upload_docs_wrappper">
                              <div className="col-lg-6 col-md-6 col-sm-9 upload_space">
                                  <div className={`upload-buttons ${fileSelected ? 'selected' : ''} ${fileUploaded ? 'after-upload' : ''}`}>
                                    <form>
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlFile1">
                                          {fileUploaded===true ? 
                                               <img src={UploadWhite} alt="" className='white-img'/>:
                                               <img src={Upload} alt="" className='green-img' />
                                          }
                                          <div className='upload-msg'>
                                            <p>Upload
                                            Aadhar </p>
                                            <p className='parag' > <span>{selectedFileName1 && selectedFileName1}</span></p>
                                            {!fileSelected && submitClicked && (
                                              <p
                                                style={{ color: "red" }}
                                                className="formErrors">
                                                Please select a file*
                                              </p>
                                            )}
                                          </div>
                                        </label>
                                        <input
                                          type="file"
                                          className="form-control-file"
                                          id="exampleFormControlFile1"
                                          onChange={handleFileSelect1}
                                        />
                                        {/* <p></p> */}
                                      </div>
                                    </form>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-9 upload_space">
                                  <div className={`upload-buttons ${fileSelectedPan ? 'selected' : ''} ${fileUploadedPan ? 'after-upload' : ''}`}>
                                    <form>
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlFile2">
                                         {fileUploadedPan===true ? 
                                               <img src={UploadWhite} alt="" className='white-img'/>:
                                               <img src={Upload} alt="" className='green-img' />
                                          }
                                          <div className='upload-msg'>
                                            <p>Upload PAN </p>
                                            <p className='parag' >  <span>{selectedFileName2 && selectedFileName2}</span></p>
                                            {!fileSelectedPan && submitClicked && (
                                              <p
                                                style={{ color: "red" }}
                                                className="formErrors">
                                                Please select a file*
                                              </p>
                                            )}
                                          </div>

                                           
                                        </label>
                                        <input
                                          type="file"
                                          className="form-control-file"
                                          id="exampleFormControlFile2"
                                          onChange={handleFileSelect2}
                                        />
                                        {/* <p></p> */}
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                              <div className="range-container">
                              <div
                                className="right-block fresher-test">
                                                            
                                 <a
                                   onClick={(e) => {
                                    handleSubmit(e)
                                    }}
                                    className="theme_btn tertiary"
                                    // data-toggle="modal"
                                    // data-target="#submitTestModal"
                                    type="button">
                                  <img
                                      src={d6Green}
                                      alt="arrow"
                                      className="img-1 sign_img"
                                    />
                                    <img
                                      src={SignWhite}
                                      className="partners-img img-2 sign_img"
                                      alt=""
                                    />
                                    Sign consent form
                                    <img
                                      src={RightGreen}
                                      alt="arrow"
                                      className="img-1"
                                    />
                                    <img
                                      src={SvgArrow}
                                      className="partners-img img-2"
                                      alt=""
                                    />
                                    <span></span>
                                </a>
                              </div>
                            </div>

                            

                              <div className="range-inner-wrapper">
                                <h4>1% Service fee Calculator</h4>
                                <div className="form-row range-input-group">
                                  <label>Your expected CTC (LPA)*</label>
                                  {values.map((value, index) => (
                                    <div
                                      className="input-group col-lg-3 col-md-4 col-sm-5 col-5"
                                      key={index}>
                                      <input
                                        className="form-control"
                                        type="number"
                                        value={value}
                                        // type="text"
                                        // value={`${value}LPA`}
                                        onChange={(event) =>
                                          handleInputChange(event, index)
                                        }
                                        inputprops={{
                                          min: 0,
                                          max: 60,
                                          step: 5,
                                        }}
                                      />
                                      
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          ₹
                                        </span>
                                      </div>
                                    </div>
                                  ))}

                                    <Box sx={{ width: 300 }}>
                                    <Slider1
                                            getAriaLabel={getAriaLabel}
                                            value={values}
                                            onChange={handleSliderChange}
                                            getAriaValueText={valuetext2}
                                            min={5}
                                            max={max}
                                            step={0.5}
                                            marks={[{ value: max, label: `${max}LPA` }]}
                                            valueLabelFormat={valuetext3}
                                            valueLabelDisplay="on"
                                            style={{color: railColor1}} 
                                            sx={{
                                              '& .MuiSlider-rail': {
                                                background: (theme) => `linear-gradient(to right, ${railColor1(5)}, ${railColor1(values)} ${((values - 5) / (60 - 5)) * 100}%, ${theme.palette.grey[300]} ${((values - 5) / (60 - 5)) * 100}%, ${theme.palette.grey[300]} 100%)` // set the color of the rail track dynamically based on the value
                                              }
                                            }}
                                        />
                                    </Box>
                                  
                                </div>

                                
                              
                                <div className="all-range-inputs">
                                {/* <h4>With 1% ISA</h4> */}
                                  <div className="form-row range-input-group">
                                    <label>Service Fee</label>
                                    <div className="input-group col-lg-4 col-md-5 col-sm-4 col-5">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder={Total_payable_amount}
                                        aria-label="Amount (to the nearest dollar)"
                                      />
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          ₹
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="form-row range-input-group">
                                                                    
                                    <label>
                                      Service Fee
                                      <br />
                                      with 18% GST
                                    </label>
                                    <div
                                      className="input-group  col-lg-4 col-md-5 col-sm-4 col-5">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder={Total_payable_amount_GST}
                                        aria-label="Amount  (to
                                          the
                                          nearest
                                          dollar)"
                                                                           
                                      />
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          ₹
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 basket-row range-basket-row full_show">
                          <div className="summary-table mb-5">
                            <h2
                              className="text-center
                                                        mb-4">
                              Having doubts?
                            </h2>
                            <div
                              className="table-responsive-xl
                                                        special-inclusions-table">
                              <div className="having-doughts-sec">
                                <p className="text-center">
                               Get in touch with our counselor
                                </p>
                                <div className="call-session">
                                  <p>Email us!</p>
                                  <p className="number-cell">
                                    <a href="#">contact@salaryfy.com</a>
                                  </p>
                                  <img
                                    src={Mail}
                                    alt="icon"
                                    className="icon"
                                  />
                                </div>
                                <p
                                  className="text-center
                                                                mt-3">
                                  or
                                </p>
                                <div className="call-session">
                                  <p>Let us call you!</p>
                                  <p className="number-cell">
                                    <a href="#">Book a slot now</a>
                                  </p>
                                  <img
                                    src={Calendar}
                                    alt="icon"
                                    className="icon"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    
      {/* <div
        className="modal fade sign-in-modal test-submit-modal congratulations-popup sign_popup"
        id="submitTestModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ready-list">
              <img src={sign} alt=''/>
             
              <p className="message ">Hi Rahul, you have successfully signed your ISA</p>
               <a href="/ConsentPage" className="theme_btn">
                  consent page
               </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* ================mobile-view-end========== */}
      <Footer />
    </React.Fragment>
  );
};

export default DirectPlacementUploadDocs;







// <div className="row upload_docs_wrappper">
// <div className="col-lg-6 col-md-6 col-sm-9 upload_space">
//     <div className={`upload-buttons ${fileSelected ? 'selected' : ''} ${fileUploaded ? 'after-upload' : ''}`}>
//       <form>
//         <div className="form-group">
//           <label htmlFor="exampleFormControlFile1">
//           {fileUploaded===true ? 
//                  <img src={UploadWhite} alt="" className='white-img'/>:
//                  <img src={Upload} alt="" className='green-img' />
//             }
//             <div className='upload-msg'>
//               <p>Upload
//               Aadhar </p>
//               <p className='parag' ><span>{selectedFileName1 && selectedFileName1}</span></p>
//               {!fileSelected && submitClicked && (
//               <p
//                style={{ color: "red" }}
//                className="formErrors">
//                Please select a file*
//               </p>
//               )}
//             </div>
//           </label>
//           <input
//             type="file"
//             className="form-control-file"
//             id="exampleFormControlFile1"
//             onChange={handleFileSelect1}
//           />
//           {/* <p></p> */}
//         </div>
//       </form>
//     </div>
//   </div>
//   <div className="col-lg-6 col-md-6 col-sm-9 upload_space">
//   <div className={`upload-buttons ${fileSelectedPan ? 'selected' : ''} ${fileUploadedPan ? 'after-upload' : ''}`}>
//       <form>
//         <div className="form-group">
//           <label htmlFor="exampleFormControlFile2">
//           {fileUploadedPan===true ? 
//                  <img src={UploadWhite} alt="" className='white-img'/>:
//                  <img src={Upload} alt="" className='green-img' />
//             }
//             <div className='upload-msg'>
//               <p>Upload PAN </p>
//               <p className='parag'><span>{selectedFileName2 && selectedFileName2}</span></p>
//               {!fileSelectedPan && submitClicked && (
//                 <p
//                   style={{ color: "red" }}
//                   className="formErrors">
//                   Please select a file*
//                 </p>
//               )}
//             </div>
//           </label>
//           <input
//             type="file"
//             className="form-control-file"
//             id="exampleFormControlFile2"
//             onChange={handleFileSelect2}
//           />
//           {/* <p></p> */}
//         </div>
//       </form>
//     </div>
//   </div>
// </div>




