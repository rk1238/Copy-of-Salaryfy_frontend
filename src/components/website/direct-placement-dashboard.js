import React, { useEffect, useState, useRef } from "react";
import NavbarTwo from "../common/navbar-two";
import HomeGreen from "../img/home-green.png";
import Home from "../img/home.png";
import Document from "../img/document.png";
import DocumentWhite from "../img/document-white.png";
import process from "../img/process.png";
import ProcessWhite from "../img/process-white.png";
import SvgArrow from "../img/arrow-svg.svg";
import logOut from "../img/icons/log-out.png";
import Upload from "../img/icons/upload.png";
import "../js/course_detail_counter";
import UploadProfile from "../img/upload-profile.png";
import Mail from "../img/mail.png";

import UploadWhite from "../img/upload-white.png";

import Calendar from "../img/icons/calendar.png";

import dlOne from "../img/dl-1.png";
import dlTwo from "../img/dl-2.png";
import dlThree from "../img/dl-3.png";

import axios from "axios";
import { ApiBaseUrl } from "../BaseUrl/baseUrl";
import { useNavigate } from "react-router-dom";

const DirectPlacementDashboard = (isReadOnly) => {
  let navigate = useNavigate();
  const [selectedFile0, setSelectedFile0] = useState("");
  const [selectedFile1, setSelectedFile1] = useState("");
  const [selectedFile2, setSelectedFile2] = useState("");
  const [selectedFile3, setSelectedFile3] = useState("");
  const [selectedFile4, setSelectedFile4] = useState("");
  const [selectedFile5, setSelectedFile5] = useState("");
  const [selectedFile6, setSelectedFile6] = useState("");
  const [selectedFile7, setSelectedFile7] = useState("");
  const [selectedFile8, setSelectedFile8] = useState("");

  const [fileSelected1, setFileSelected1] = useState(false);
  const [fileUploaded1, setFileUploaded1] = useState(false);

  const [fileSelected2, setFileSelected2] = useState(false);
  const [fileUploaded2, setFileUploaded2] = useState(false);

  const [fileSelected3, setFileSelected3] = useState(false);
  const [fileUploaded3, setFileUploaded3] = useState(false);

  const [fileSelected4, setFileSelected4] = useState(false);
  const [fileUploaded4, setFileUploaded4] = useState(false);

  const [fileSelected5, setFileSelected5] = useState(false);
  const [fileUploaded5, setFileUploaded5] = useState(false);

  const [fileSelected6, setFileSelected6] = useState(false);
  const [fileUploaded6, setFileUploaded6] = useState(false);

  const [fileSelected7, setFileSelected7] = useState(false);
  const [fileUploaded7, setFileUploaded7] = useState(false);

  const [fileSelected8, setFileSelected8] = useState(false);
  const [fileUploaded8, setFileUploaded8] = useState(false);

  const userName = JSON.parse(localStorage.getItem("name"));

  const [submitClicked, setSubmitClicked] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitted1, setIsSubmitted1] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIssubmit] = useState(false);

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
  const Token = JSON.parse(window.localStorage.getItem("token"));

  const onChangeHandler0 = (event) => {
    const selectedFile0 = event.target.files[0];
    setSelectedFile0(selectedFile0);
  };

  const onChangeHandler1 = (event) => {
    const selectedFile1 = event.target.files[0];
    // Check file type
    if (selectedFile1.type !== "application/pdf") {
      alert("Please select a PDF document.");
      return;
    }
    // Check file size
    const fileSizeInMB = selectedFile1.size / (1024 * 1024);
    if (fileSizeInMB > 1) {
      alert("Please select a PDF document that is less than or equal to 1MB.");
      return;
    }
    setSelectedFile1(selectedFile1);
    setFileSelected1(true);
    setFileUploaded1(true);
  };
  
  const onChangeHandler2 = (event) => {
    const selectedFile2 = event.target.files[0];
    // Check file type
    if (selectedFile2.type !== "application/pdf") {
      alert("Please select a PDF document.");
      return;
    }
    // Check file size
    const fileSizeInMB = selectedFile2.size / (1024 * 1024);
    if (fileSizeInMB > 1) {
      alert("Please select a PDF document that is less than or equal to 1MB.");
      return;
    }
    setSelectedFile2(selectedFile2);
    setFileSelected2(true);
    setFileUploaded2(true);
  };

  const onChangeHandler3 = (event) => {
    const selectedFile3  = event.target.files[0];
    // Check file type
    if (selectedFile3.type !== "application/pdf") {
      alert("Please select a PDF document.");
      return;
    }
    // Check file size
    const fileSizeInMB = selectedFile3.size / (1024 * 1024);
    if (fileSizeInMB > 1) {
      alert("Please select a PDF document that is less than or equal to 1MB.");
      return;
    }
    setSelectedFile3(selectedFile3);
    setFileSelected3(true);
    setFileUploaded3(true);
  };

  const onChangeHandler4 = (event) => {
    const selectedFile4 = event.target.files[0];
    // Check file type
    if (selectedFile4.type !== "application/pdf") {
      alert("Please select a PDF document.");
      return;
    }
    // Check file size
    const fileSizeInMB = selectedFile4.size / (1024 * 1024);
    if (fileSizeInMB > 1) {
      alert("Please select a PDF document that is less than or equal to 1MB.");
      return;
    }
    
    setSelectedFile4(selectedFile4);
    setFileSelected4(true);
    setFileUploaded4(true);
  };
  
  const onChangeHandler5 = (event) => {
    const selectedFile5 = event.target.files[0];
    // Check file type
    if (selectedFile5.type !== "application/pdf") {
      alert("Please select a PDF document.");
      return;
    }
    // Check file size
    const fileSizeInMB = selectedFile5.size / (1024 * 1024);
    if (fileSizeInMB > 1) {
      alert("Please select a PDF document that is less than or equal to 1MB.");
      return;
    }
    setSelectedFile5(selectedFile5);
    setFileSelected5(true);
    setFileUploaded5(true);
  };
 
  const onChangeHandler6 = (event) => {
    const selectedFile6 = event.target.files[0];
    // Check file type
    if (selectedFile6.type !== "application/pdf") {
      alert("Please select a PDF document.");
      return;
    }
    // Check file size
    const fileSizeInMB = selectedFile6.size / (1024 * 1024);
    if (fileSizeInMB > 1) {
      alert("Please select a PDF document that is less than or equal to 1MB.");
      return;
    }
   
    setSelectedFile6(selectedFile6);
    setFileSelected6(true);
    setFileUploaded6(true);
  };
 
   
  const onChangeHandler7 = (event) => {
    const selectedFile7 = event.target.files[0];
    // Check file type
    if (selectedFile7.type !== "application/pdf") {
      alert("Please select a PDF document.");
      return;
    }
    // Check file size
    const fileSizeInMB = selectedFile7.size / (1024 * 1024);
    if (fileSizeInMB > 1) {
      alert("Please select a PDF document that is less than or equal to 1MB.");
      return;
    }
   
    setSelectedFile7(selectedFile7);
    setFileSelected7(true);
    setFileUploaded7(true);
  };

  const onChangeHandler8 = (event) => {
    const selectedFile8 = event.target.files[0];
    // Check file type
    if (selectedFile8.type !== "application/pdf") {
      alert("Please select a PDF document.");
      return;
    }
    // Check file size
    const fileSizeInMB = selectedFile8.size / (1024 * 1024);
    if (fileSizeInMB > 1) {
      alert("Please select a PDF document that is less than or equal to 1MB.");
      return;
    }
    setSelectedFile8(selectedFile8);
    setFileSelected8(true);
    setFileUploaded8(true);
  };
 
  const handleSubmit = (e) => {
    console.log("form submitted ");
    e.preventDefault();
    setSubmitClicked(true); // set submitClicked to true when submit button is clicked
    if (!selectedFile1) {
      return; // don't submit if required field is not selected
    }
    if (!selectedFile2) {
      return;
    }
    if (!selectedFile3) {
      return;
    }
    if (!selectedFile4) {
      return;
    }
    if (!selectedFile5) {
      return;
    }
    // if (!selectedFile6) {
    //   return;
    // }
    if (!selectedFile7) {
      return;
    }
    if (!selectedFile8) {
      return;
    }
    let url = ApiBaseUrl + "direct-placement-store-details";
    const formData = new FormData();
    formData.append("passport_photo", selectedFile0);
    formData.append("x_certificate", selectedFile1);
    formData.append("xii_certificate", selectedFile2);
    formData.append("passbook_photocopy", selectedFile3);
    formData.append("cancelled_cheque", selectedFile4);
    formData.append("graduate_certificate", selectedFile5);
    formData.append("post_graduate_certificate", selectedFile6);
    formData.append("work_experience_letter", selectedFile7);
    formData.append("three_month_salary_slip", selectedFile8);

    const directPlaceFormSubmit = function () {
      let config = {
        method: "post",
        url: url,
        headers: {
          "x-access-token": Token,
        },
        data: formData,
      };
      axios(config)
        .then(function (res) {
          const { data } = res.data;
          setIsSubmitted1(true);
          localStorage.setItem("profile_image", selectedFile0.name);
          console.log('selectedFile0',selectedFile0.name)
        })
        .catch(function (error) {});
      };
    directPlaceFormSubmit();
  };

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
        console.log("get-profile data", data.data.name);
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


  const validate = (values) => {
    const errors = {};
 
    if (!values.name) {
      errors.name = "required*";
    }
    if (!values.city) {
      errors.city = "required*";
    } 
    if (!values.gender) {
      errors.gender = "required*";
    }
    if (!values.age) {
      errors.age = "required*";
    }
    if (!values.gradProName) {
      errors.gradProName = "required*";
    }
    if (!values.currentSemester) {
      errors.currentSemester = "required*";
    }
    return errors;
  };
  
  const onSubmit = (e) => {
   
    setFormErrors(validate(ProfileData));
    setIssubmit(true);
    e.preventDefault();
  };

  const SubmitTestForm = function () {
  
    let formErrors = validate(ProfileData);
    if (Object.keys(formErrors).length === 0 ) {
      console.log("hello", ProfileData);
      let data = JSON.stringify(ProfileData);
      let config = {
        method: "post",
        url: ApiBaseUrl + "update-profile",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": Token,
        },
        data: data,
      };
      axios(config)
        .then(function (res) {
          setIsSubmitted(true);
          // Update name in localStorage with the new value
          localStorage.setItem("name",`"${ProfileData.name}"`);
        })
        .catch(function (error) {
          console.log("error in code");
        });  
    }
    else {
      setFormErrors(formErrors);
    }

   
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <React.Fragment>
      <NavbarTwo />
      <section className="eligiblity-form-sec student-dashboard select-plan range-slider-plan full_show">
        <div className="">
          <div className="row">
            <div className="col-lg-1 col-md-2 col-sm-2">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical">
                <a
                  className="nav-link active"
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  href="#v-pills-profile"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="true">
                  <img src={HomeGreen} alt="icon" className="green-icon" />{" "}
                  <img src={Home} alt="icon" className="white-icon" />{" "}
                </a>
                <a
                  className="nav-link"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="false">
                  <img src={Document} alt="icon" className="green-icon" />{" "}
                  <img src={DocumentWhite} alt="icon" className="white-icon" />
                </a>
                <a
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-toggle="pill"
                  href="#v-pills-messages"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false">
                  <img src={process} alt="icon" className="green-icon" />{" "}
                  <img src={ProcessWhite} alt="icon" className="white-icon" />
                </a>
              </div>

              <div className="log-out-div">
                <a 
                  onClick={logout}
                  className="nav-link active"
                  data-toggle="tooltip" data-placement="top" title="Log out">
                  <img src={logOut} alt="icon" className="green-icon" />
                </a>

                
              </div>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-9 m-auto margin-auto-hide">
              <div
                className="tab-content edit_dashboard_content"
                id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active basket-banner"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab">
                  <div className="row basket-row pt-3">
                    <div className="col-lg-8">
                      <div className="dashboard-content edit_home">
                        <h2 className="h2">Hi {userName}, </h2>

                        <p className="para">
                          Our placement manager will get in touch with you
                          within 24 hours, meanwhile please complete your
                          profile.
                        </p>
                        <a
                          style={{ textDecoration: "none" }}
                          className="theme_btn"
                          onClick={() => {
                            document.getElementById("v-pills-home-tab").click();
                          }}>
                          Upload your documents
                          <img src={SvgArrow} className="partners-img" alt="" />
                          <span></span>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="summary-table mb-5">
                        <h2 className="text-center mb-4">Having doubts?</h2>
                        <div className="table-responsive-xl special-inclusions-table">
                          <div className="having-doughts-sec">
                            <p className="text-center">
                                Get in touch with our counselor
                            </p>
                            <div className="call-session">
                              <p>Email us!</p>
                              <p className="number-cell">
                                <a href="#">contact@salaryfy.com</a>
                              </p>
                              <img src={Mail} alt="icon" className="icon" />
                            </div>
                            <p className="text-center mt-3">or</p>
                            <div className="call-session">
                              <p>Let us call you!</p>
                              <p className="number-cell">
                                <a href="#">Book a slot now</a>
                              </p>
                              <img src={Calendar} alt="icon" className="icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade col-lg-12 basket-banner"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab">
                  <div className="row basket-row pt-3">
                    <div className="col-lg-8">
                      <div className="range-slider-sec calculator-sec">
                        <div className="range-list">
                          <h5>Upload your documents</h5>
                          <div className="row upload_profile">
                            <div className="col-lg-3">
                              <div className="small-12 medium-2 large-2 columns">
                                <div className="circle">
                                  <img
                                    className="profile-pic"
                                    src={UploadProfile}
                                  />
                                </div>
                                <div className="p-image">
                                  <i className="fa fa-plus upload-button"></i>
                                  {/* <i class="fa fa-plus" aria-hidden="true"></i> */}
                                  <input
                                    className="file-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={onChangeHandler0}
                                    name="passport_photo"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <p>Upload your passport photo</p>
                            </div>
                          </div>
                          <div className="row upload_docs_wrappper">
                            <div className="col-lg-6 col-md-6 col-sm-9 upload_space">
                              <div
                                className={`upload-buttons ${
                                  fileSelected1 ? "selected" : ""
                                } ${fileUploaded1 ? "after-upload" : ""}`}>
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlFile1">
                                    {fileUploaded1 === true ? (
                                      <img
                                        src={UploadWhite}
                                        alt=""
                                        className="white-img"
                                      />
                                    ) : (
                                      <img
                                        src={Upload}
                                        alt=""
                                        className="green-img"
                                      />
                                    )}
                                    <div className="upload-msg">
                                      <p>X certificate </p>
                                      {selectedFile1 &&
                                      selectedFile1.type ===
                                        "application/pdf" ? (
                                        <p className="parag">
                                          {" "}
                                          <span>({selectedFile1.name})</span>
                                        </p>
                                      ) : (
                                        <p className="parag"></p>
                                      )}
                                      {!selectedFile1 && submitClicked && (
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
                                    onChange={onChangeHandler1}
                                    name="x_certificate"
                                  />
                                </div>
                              </div>

                              <div
                                className={`upload-buttons ${
                                  fileSelected2 ? "selected" : ""
                                } ${fileUploaded2 ? "after-upload" : ""}`}>
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlFile2">
                                    {fileUploaded2 === true ? (
                                      <img
                                        src={UploadWhite}
                                        alt=""
                                        className="white-img"
                                      />
                                    ) : (
                                      <img
                                        src={Upload}
                                        alt=""
                                        className="green-img"
                                      />
                                    )}

                                    <div className="upload-msg">
                                      <p>XII certificate </p>
                                      {selectedFile2 &&
                                      selectedFile2.type ===
                                        "application/pdf" ? (
                                        <p className="parag">
                                          {" "}
                                          <span> ({selectedFile2.name})</span>
                                        </p>
                                      ) : (
                                        <p className="parag"></p>
                                      )}
                                      {!selectedFile2 && submitClicked && (
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
                                    onChange={onChangeHandler2}
                                    name="xii_certificate"
                                  />
                                </div>
                              </div>

                              <div
                                className={`upload-buttons ${
                                  fileSelected3 ? "selected" : ""
                                } ${fileUploaded3 ? "after-upload" : ""}`}>
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlFile3">
                                    {fileUploaded3 === true ? (
                                      <img
                                        src={UploadWhite}
                                        alt=""
                                        className="white-img"
                                      />
                                    ) : (
                                      <img
                                        src={Upload}
                                        alt=""
                                        className="green-img"
                                      />
                                    )}

                                    <div className="upload-msg">
                                      <p>Passbook photocopy</p>
                                      {selectedFile3 &&
                                      selectedFile3.type ===
                                        "application/pdf" ? (
                                        <p className="parag">
                                          {" "}
                                          <span> ({selectedFile3.name})</span>
                                        </p>
                                      ) : (
                                        <p className="parag"></p>
                                      )}
                                      {!selectedFile3 && submitClicked && (
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
                                    id="exampleFormControlFile3"
                                    onChange={onChangeHandler3}
                                    name="passbook_photocopy"
                                  />
                                </div>
                              </div>

                              <div
                                className={`upload-buttons ${
                                  fileSelected4 ? "selected" : ""
                                } ${fileUploaded4 ? "after-upload" : ""}`}>
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlFile4">
                                    {fileUploaded4 === true ? (
                                      <img
                                        src={UploadWhite}
                                        alt=""
                                        className="white-img"
                                      />
                                    ) : (
                                      <img
                                        src={Upload}
                                        alt=""
                                        className="green-img"
                                      />
                                    )}
                                    <div className="upload-msg">
                                      <p>Cancelled cheque</p>
                                      {selectedFile4 &&
                                      selectedFile4.type ===
                                        "application/pdf" ? (
                                        <p className="parag">
                                          {" "}
                                          <span> ({selectedFile4.name})</span>
                                        </p>
                                      ) : (
                                        <p className="parag"></p>
                                      )}
                                      {!selectedFile4 && submitClicked && (
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
                                    id="exampleFormControlFile4"
                                    onChange={onChangeHandler4}
                                    name="cancelled_cheque"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-9 upload_space">
                              <div
                                className={`upload-buttons ${
                                  fileSelected5 ? "selected" : ""
                                } ${fileUploaded5 ? "after-upload" : ""}`}>
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlFile5">
                                    {fileUploaded5 === true ? (
                                      <img
                                        src={UploadWhite}
                                        alt=""
                                        className="white-img"
                                      />
                                    ) : (
                                      <img
                                        src={Upload}
                                        alt=""
                                        className="green-img"
                                      />
                                    )}

                                    <div className="upload-msg">
                                      <p>Graduate certificate</p>
                                      {selectedFile5 &&
                                      selectedFile5.type ===
                                        "application/pdf" ? (
                                        <p className="parag">
                                          {" "}
                                          <span> ({selectedFile5.name})</span>
                                        </p>
                                      ) : (
                                        <p className="parag"></p>
                                      )}
                                      {!selectedFile5 && submitClicked && (
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
                                    id="exampleFormControlFile5"
                                    onChange={onChangeHandler5}
                                    name="graduate_certificate"
                                  />
                                </div>
                              </div>

                              <div
                                className={`upload-buttons ${
                                  fileSelected6 ? "selected" : ""
                                } ${fileUploaded6 ? "after-upload" : ""}`}>
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlFile6">
                                    {fileUploaded6 === true ? (
                                      <img
                                        src={UploadWhite}
                                        alt=""
                                        className="white-img"
                                      />
                                    ) : (
                                      <img
                                        src={Upload}
                                        alt=""
                                        className="green-img"
                                      />
                                    )}

                                    <div className="upload-msg">
                                      <p>PG certificate</p>
                                      {selectedFile6 &&
                                      selectedFile6.type ===
                                        "application/pdf" ? (
                                        <p className="parag">
                                          {" "}
                                          <span> ({selectedFile6.name})</span>
                                        </p>
                                      ) : (
                                        <p className="parag"></p>
                                      )}
                                      {/* {!selectedFile6 && submitClicked && (
                                        <p
                                          style={{ color: "red" }}
                                          className="formErrors">
                                          Please select a file*
                                        </p>
                                      )} */}
                                    </div>
                                  </label>
                                  
                                  <input
                                    type="file"
                                    className="form-control-file"
                                    id="exampleFormControlFile6"
                                    onChange={onChangeHandler6}
                                    name="post_graduate_certificate"
                                  />
                                </div>
                              </div>

                              <div
                                className={`upload-buttons ${
                                  fileSelected7 ? "selected" : ""
                                } ${fileUploaded7 ? "after-upload" : ""}`}>
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlFile7">
                                    {fileUploaded7 === true ? (
                                      <img
                                        src={UploadWhite}
                                        alt=""
                                        className="white-img"
                                      />
                                    ) : (
                                      <img
                                        src={Upload}
                                        alt=""
                                        className="green-img"
                                      />
                                    )}

                                    <div className="upload-msg">
                                      <p>Work experience letter</p>
                                      {selectedFile7 &&
                                      selectedFile7.type ===
                                        "application/pdf" ? (
                                        <p className="parag">
                                          {" "}
                                          <span> ({selectedFile7.name})</span>
                                        </p>
                                      ) : (
                                        <p className="parag"></p>
                                      )}
                                      {!selectedFile7 && submitClicked && (
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
                                    id="exampleFormControlFile7"
                                    onChange={onChangeHandler7}
                                    name="work_experience_letter"
                                  />
                                </div>
                              </div>

                              <div
                                className={`upload-buttons ${
                                  fileSelected8 ? "selected" : ""
                                } ${fileUploaded8 ? "after-upload" : ""}`}>
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlFile8">
                                    {fileUploaded8 === true ? (
                                      <img
                                        src={UploadWhite}
                                        alt=""
                                        className="white-img"
                                      />
                                    ) : (
                                      <img
                                        src={Upload}
                                        alt=""
                                        className="green-img"
                                      />
                                    )}

                                    <div className="upload-msg">
                                      <p>3 months salary slip</p>
                                      {selectedFile8 &&
                                      selectedFile8.type ===
                                        "application/pdf" ? (
                                        <p className="parag">
                                          {" "}
                                          <span> ({selectedFile8.name})</span>
                                        </p>
                                      ) : (
                                        <p className="parag"></p>
                                      )}
                                      {!selectedFile8 && submitClicked && (
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
                                    id="exampleFormControlFile8"
                                    onChange={onChangeHandler8}
                                    name="three_month_salary_slip"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mt-3 background_detail_submit">
                              {/* <button
                                type="button"
                                className="theme_btn edit_btn"
                                onClick={handleSubmit}>
                                Save
                                <span></span>
                              </button> */}
                            </div>
                          </div>
                        </div>
                      </div>

                     
                      <form>
                        <div className="row mt-5">
                          <div className="col-lg-6 ">
                            <div className="select-block input-form">
                              <div className="">
                                <div className="form-group">
                                  <label htmlFor="">Name</label>
                                      <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                       {formErrors.name}
                                      </span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={ProfileData?.name}
                                    name="name"
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Name"
                                  />
                                </div>

                                <div className="form-group">
                                  <label htmlFor="">Phone number</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={ProfileData?.user?.phone}
                                    name="phone"
                                    readOnly={isReadOnly}
                                    onChange={(e) => handleChange(e)}
                                    placeholder="+91 xxxx xxxx"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="">City</label>
                                  <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                       {formErrors.city}
                                      </span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={ProfileData?.city}
                                    name="city"
                                    onChange={(e) => handleChange(e)}
                                    placeholder="City"
                                  />
                                </div>

                                <div className="form-group">
                                  <label htmlFor="">Gender</label>
                                  <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                       {formErrors.gender}
                                      </span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={ProfileData?.gender}
                                    name="gender"
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Gender"
                                  />
                                </div>

                                <div className="form-group">
                                  <label htmlFor="">Age</label>
                                  <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                       {formErrors.age}
                                      </span>
                                  <input
                                    type="number"
                                    className="form-control"
                                    defaultValue={ProfileData?.age}
                                    name="age"
                                    onChange={(e) => handleChange(e)}
                                    placeholder="23"
                                  />
                                </div>

                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="select-block input-form">
                              <div className="form-group">
                                <label htmlFor="">
                                  Graduation program name
                                </label>
                                <span
                                style={{ color: "red" }}
                                className="formErrors"
                                >
                                {formErrors.gradProName}
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={
                                    ProfileData?.gradProName
                                  }
                                  name="gradProName"
                                  onChange={(e) => handleChange(e)}
                                  placeholder="Bachelors in ..."
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="">
                                  Current semester (if any)
                                </label>
                                <span
                                  style={{ color: "red" }}
                                  className="formErrors"
                                  >
                                  {formErrors.currentSemester}
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="currentSemester"
                                  defaultValue={ProfileData?.currentSemester}
                                  onChange={(e) => handleChange(e)}
                                  placeholder="1st"
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="">
                                  Post Graduation Program Name (if any)
                                </label>
                                
                                <input
                                  type="text"
                                  className="form-control"
                                  name="pg_graduation_program_name"
                                  defaultValue={
                                    ProfileData?.pg_graduation_program_name
                                  }
                                  onChange={(e) => handleChange(e)}
                                  placeholder="Master in..."
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-3">
                          {/* <button
                            type="button"
                            className="theme_btn edit_btn"
                            onClick={SubmitTestForm}>
                            Edit
                            <span></span>
                          </button> */}
                          {isSubmitted && isSubmitted1 ? <p>Form submitted successfully!</p> : ""}
                          <button
                            type="button"
                            className="theme_btn edit_btn"
                            onClick={(e) => {
                              onSubmit(e);
                              handleSubmit(e);
                              SubmitTestForm()
                            }}
                            
                            >
                            Save & Submit
                            <span></span>
                          </button>
                          
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-4">
                      <div className="summary-table mb-5">
                        <h2 className="text-center mb-4">Having doubts?</h2>
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
                              <img src={Mail} alt="icon" className="icon" />
                            </div>
                            <p className="text-center mt-3">or</p>
                            <div className="call-session">
                              <p>Let us call you!</p>
                              <p className="number-cell">
                                <a href="#">Book a slot now</a>
                              </p>
                              <img src={Calendar} alt="icon" className="icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade basket-banner"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab">
                  <div className="row basket-row pt-0">
                    <div className="col-lg-8">
                      <div
                        className="verticle-timeline
                                            col-lg-10">
                        <div className="dashboard-content ml-3 mb-3">
                          <h2 className="h2">Your roadmap</h2>
                        </div>
                        <div className="">
                          <div className="timeline">
                            <div className="timeline-container warning">
                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Create your Profile
                                  </h4>
                                </a>
                                <p>
                                  Build a strong and complete profile with
                                  accurate details to get noticed by top
                                  companies.
                                </p>
                              </div>
                            </div>
                          
                            <div
                              className="timeline-container
                                                        warning">
                              <div className="timeline-icon"></div>

                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Connect with the Placement Manager
                                  </h4>
                                </a>
                                <p>
                                  Reach out to the placement manager for
                                  guidance and assistance throughout the
                                  placement process.
                                </p>
                              </div>
                            </div>
                            <div
                              className="timeline-container
                                                        warning">
                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Upload Essential documents
                                  </h4>
                                </a>
                                <p>
                                  Upload all necessary documents such as your
                                  resume, certificates, and identity proof for
                                  verification.
                                </p>
                              </div>
                            </div>
                            <div className="timeline-container warning ">
                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Aligned the profile with the Company
                                  </h4>
                                </a>
                                <p>
                                  Tailor your profile according to the company's
                                  requirements to increase the chances of
                                  getting shortlisted.
                                </p>
                              </div>
                            </div>
                            <div className="timeline-container warning ">
                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Recruitment in Progress
                                  </h4>
                                </a>
                                <p>
                                  Stay updated on the recruitment status to be
                                  prepared for the next step.
                                </p>
                              </div>
                            </div>
                            <div className="timeline-container warning ">
                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Final Selection
                                  </h4>
                                </a>
                                <p>
                                  Impress the recruiters with your skills and
                                  secure the position.
                                </p>
                              </div>
                            </div>
                            <div className="timeline-container warning ">
                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Offer Letter Released
                                  </h4>
                                </a>
                                <p>
                                  Receive the official offer letter and review
                                  the terms and conditions.
                                </p>
                              </div>
                            </div>
                            <div className="timeline-container warning ">
                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Offer Letter Accepted
                                  </h4>
                                </a>
                                <p>
                                  Confirm your acceptance of the offer letter to
                                  secure your position.
                                </p>
                              </div>
                            </div>
                            <div className="timeline-container warning ">
                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Pay 1% of CTC
                                  </h4>
                                </a>
                                <p>
                                  Pay the agreed 1% of the CTC as service fee
                                  for Salaryfy.
                                </p>
                              </div>
                            </div>
                            <div className="timeline-container warning ">
                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Appointment Letter Shared
                                  </h4>
                                </a>
                                <p>
                                  Get ready to join the company and receive your
                                  appointment letter with details about your
                                  role and benefits.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="summary-table mb-5">
                        <h2 className="text-center mb-4">Having doubts?</h2>
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
                              <img src={Mail} alt="icon" className="icon" />
                            </div>
                            <p className="text-center mt-3">or</p>
                            <div className="call-session">
                              <p>Let us call you!</p>
                              <p className="number-cell">
                                <a href="#">Book a slot now</a>
                              </p>
                              <img src={Calendar} alt="icon" className="icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================mobile-view========== */}

      <section
        className="eligiblity-form-sec student-dashboard select-plan
            range-slider-plan five_show">
        <div className="">
          <div className="row">
            <div className="col-lg-1 col-12 order-2 mobile_tab_bottom_menu">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical">
                <a
                  className="nav-link active"
                  id="v-pills-profile-1-tab"
                  data-toggle="pill"
                  href="#v-pills-profile-1"
                  role="tab"
                  aria-controls="v-pills-profile-1"
                  aria-selected="true">
                  <img src={dlOne} alt="icon" className="green-icon" />{" "}
                  <img src={HomeGreen} alt="icon" className="white-icon" />{" "}
                </a>
                <a
                  className="nav-link"
                  id="v-pills-home-1-tab"
                  data-toggle="pill"
                  href="#v-pills-home-1"
                  role="tab"
                  aria-controls="v-pills-home-1"
                  aria-selected="false">
                  <img src={dlTwo} alt="icon" className="green-icon" />{" "}
                  <img src={Document} alt="icon" className="white-icon" />
                </a>
                <a
                  className="nav-link"
                  id="v-pills-messages-one-tab"
                  data-toggle="pill"
                  href="#v-pills-messages-one"
                  role="tab"
                  aria-controls="v-pills-messages-one"
                  aria-selected="false">
                  <img src={dlThree} alt="icon" className="green-icon" />{" "}
                  <img src={process} alt="icon" className="white-icon" />
                </a>
              </div>

              <div className="log-out-div">
                <a
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true">
                  <img src={logOut} alt="icon" className="green-icon" />
                </a>
              </div>
            </div>
            <div className="col-lg-10 m-auto col-12 order-1">
              <div
                className="tab-content edit_dashboard_content mobile_tab_content_show"
                id="v-pills-tabContent">
                <div
                  className="tab-pane fade  col-lg-9 m-auto"
                  id="v-pills-home-1"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-1-tab">
                  <form>
                    <div className="col-lg-8">
                      <div className="range-slider-sec calculator-sec">
                        <div className="range-list">
                          <h5>Upload your documents</h5>
                          <div className="row upload_profile">
                            <div className="col-lg-3 col-4">
                              <div className="small-12 medium-2 large-2 columns">
                                <div className="circle">
                                  <img
                                    className="profile-pic"
                                    src={UploadProfile}
                                  />
                                </div>
                                <div className="p-image">
                                  <i className="fa fa-plus upload-button"></i>
                                  {/* <i class="fa fa-plus" aria-hidden="true"></i> */}
                                  <input
                                    className="file-upload"
                                    type="file"
                                    accept="image/*"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-8">
                              <p>Upload your passport photo</p>
                            </div>
                          </div>
                          <div className="row upload_docs_wrappper">
                            <div className="col-lg-6 col-md-6 col-sm-9 upload_space">
                              <div
                                className={`upload-buttons ${
                                  fileSelected1 ? "selected" : ""
                                } ${fileUploaded1 ? "after-upload" : ""}`}>
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlFile1">
                                    {fileUploaded1 === true ? (
                                      <img
                                        src={UploadWhite}
                                        alt=""
                                        className="white-img"
                                      />
                                    ) : (
                                      <img
                                        src={Upload}
                                        alt=""
                                        className="green-img"
                                      />
                                    )}
                                    <div className="upload-msg">
                                      <p>X certificate </p>
                                      {selectedFile1 &&
                                      selectedFile1.type ===
                                        "application/pdf" ? (
                                        <p className="parag">
                                          {" "}
                                          <span>({selectedFile1.name})</span>
                                        </p>
                                      ) : (
                                        <p className="parag"></p>
                                      )}
                                      {!selectedFile1 && submitClicked && (
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
                                    onChange={onChangeHandler1}
                                    name="x_certificate"
                                  />
                                </div>
                              </div>

                              <div
                                className={`upload-buttons ${
                                  fileSelected2 ? "selected" : ""
                                } ${fileUploaded2 ? "after-upload" : ""}`}>
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlFile2">
                                    {fileUploaded2 === true ? (
                                      <img
                                        src={UploadWhite}
                                        alt=""
                                        className="white-img"
                                      />
                                    ) : (
                                      <img
                                        src={Upload}
                                        alt=""
                                        className="green-img"
                                      />
                                    )}

                                    <div className="upload-msg">
                                      <p>XII certificate </p>
                                      {selectedFile2 &&
                                      selectedFile2.type ===
                                        "application/pdf" ? (
                                        <p className="parag">
                                          {" "}
                                          <span> ({selectedFile2.name})</span>
                                        </p>
                                      ) : (
                                        <p className="parag"></p>
                                      )}
                                      {!selectedFile2 && submitClicked && (
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
                                    onChange={onChangeHandler2}
                                    name="xii_certificate"
                                  />
                                </div>
                              </div>

                              <div
                                className={`upload-buttons ${
                                  fileSelected3 ? "selected" : ""
                                } ${fileUploaded3 ? "after-upload" : ""}`}>
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlFile3">
                                    {fileUploaded3 === true ? (
                                      <img
                                        src={UploadWhite}
                                        alt=""
                                        className="white-img"
                                      />
                                    ) : (
                                      <img
                                        src={Upload}
                                        alt=""
                                        className="green-img"
                                      />
                                    )}

                                    <div className="upload-msg">
                                      <p>Passbook photocopy</p>
                                      {selectedFile3 &&
                                      selectedFile3.type ===
                                        "application/pdf" ? (
                                        <p className="parag">
                                          {" "}
                                          <span> ({selectedFile3.name})</span>
                                        </p>
                                      ) : (
                                        <p className="parag"></p>
                                      )}
                                      {!selectedFile3 && submitClicked && (
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
                                    id="exampleFormControlFile3"
                                    onChange={onChangeHandler3}
                                    name="passbook_photocopy"
                                  />
                                </div>
                              </div>

                              <div
                                className={`upload-buttons ${
                                  fileSelected4 ? "selected" : ""
                                } ${fileUploaded4 ? "after-upload" : ""}`}>
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlFile4">
                                    {fileUploaded4 === true ? (
                                      <img
                                        src={UploadWhite}
                                        alt=""
                                        className="white-img"
                                      />
                                    ) : (
                                      <img
                                        src={Upload}
                                        alt=""
                                        className="green-img"
                                      />
                                    )}
                                    <div className="upload-msg">
                                      <p>Cancelled cheque</p>
                                      {selectedFile4 &&
                                      selectedFile4.type ===
                                        "application/pdf" ? (
                                        <p className="parag">
                                          {" "}
                                          <span> ({selectedFile4.name})</span>
                                        </p>
                                      ) : (
                                        <p className="parag"></p>
                                      )}
                                      {!selectedFile4 && submitClicked && (
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
                                    id="exampleFormControlFile4"
                                    onChange={onChangeHandler4}
                                    name="cancelled_cheque"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-9 upload_space">
                              <div
                                className={`upload-buttons ${
                                  fileSelected5 ? "selected" : ""
                                } ${fileUploaded5 ? "after-upload" : ""}`}>
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlFile5">
                                    {fileUploaded5 === true ? (
                                      <img
                                        src={UploadWhite}
                                        alt=""
                                        className="white-img"
                                      />
                                    ) : (
                                      <img
                                        src={Upload}
                                        alt=""
                                        className="green-img"
                                      />
                                    )}

                                    <div className="upload-msg">
                                      <p>Graduate certificate</p>
                                      {selectedFile5 &&
                                      selectedFile5.type ===
                                        "application/pdf" ? (
                                        <p className="parag">
                                          {" "}
                                          <span> ({selectedFile5.name})</span>
                                        </p>
                                      ) : (
                                        <p className="parag"></p>
                                      )}
                                      {!selectedFile5 && submitClicked && (
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
                                    id="exampleFormControlFile5"
                                    onChange={onChangeHandler5}
                                    name="graduate_certificate"
                                  />
                                </div>
                              </div>

                              <div
                                className={`upload-buttons ${
                                  fileSelected6 ? "selected" : ""
                                } ${fileUploaded6 ? "after-upload" : ""}`}>
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlFile6">
                                    {fileUploaded6 === true ? (
                                      <img
                                        src={UploadWhite}
                                        alt=""
                                        className="white-img"
                                      />
                                    ) : (
                                      <img
                                        src={Upload}
                                        alt=""
                                        className="green-img"
                                      />
                                    )}

                                    <div className="upload-msg">
                                      <p>PG certificate</p>
                                      {selectedFile6 &&
                                      selectedFile6.type ===
                                        "application/pdf" ? (
                                        <p className="parag">
                                          {" "}
                                          <span> ({selectedFile6.name})</span>
                                        </p>
                                      ) : (
                                        <p className="parag"></p>
                                      )}
                                      
                                    </div>
                                  </label>
                                  <input
                                    type="file"
                                    className="form-control-file"
                                    id="exampleFormControlFile6"
                                    onChange={onChangeHandler6}
                                    name="post_graduate_certificate"
                                  />
                                </div>
                              </div>

                              <div
                                className={`upload-buttons ${
                                  fileSelected7 ? "selected" : ""
                                } ${fileUploaded7 ? "after-upload" : ""}`}>
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlFile7">
                                    {fileUploaded7 === true ? (
                                      <img
                                        src={UploadWhite}
                                        alt=""
                                        className="white-img"
                                      />
                                    ) : (
                                      <img
                                        src={Upload}
                                        alt=""
                                        className="green-img"
                                      />
                                    )}

                                    <div className="upload-msg">
                                      <p>Work experience letter</p>
                                      {selectedFile7 &&
                                      selectedFile7.type ===
                                        "application/pdf" ? (
                                        <p className="parag">
                                          {" "}
                                          <span> ({selectedFile7.name})</span>
                                        </p>
                                      ) : (
                                        <p className="parag"></p>
                                      )}
                                      {!selectedFile7 && submitClicked && (
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
                                    id="exampleFormControlFile7"
                                    onChange={onChangeHandler7}
                                    name="work_experience_letter"
                                  />
                                </div>
                              </div>

                              <div
                                className={`upload-buttons ${
                                  fileSelected8 ? "selected" : ""
                                } ${fileUploaded8 ? "after-upload" : ""}`}>
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlFile8">
                                    {fileUploaded8 === true ? (
                                      <img
                                        src={UploadWhite}
                                        alt=""
                                        className="white-img"
                                      />
                                    ) : (
                                      <img
                                        src={Upload}
                                        alt=""
                                        className="green-img"
                                      />
                                    )}

                                    <div className="upload-msg">
                                      <p>3 months salary slip</p>
                                      {selectedFile8 &&
                                      selectedFile8.type ===
                                        "application/pdf" ? (
                                        <p className="parag">
                                          {" "}
                                          <span> ({selectedFile8.name})</span>
                                        </p>
                                      ) : (
                                        <p className="parag"></p>
                                      )}
                                      {!selectedFile8 && submitClicked && (
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
                                    id="exampleFormControlFile8"
                                    onChange={onChangeHandler8}
                                    name="three_month_salary_slip"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mt-3 background_detail_submit">
                              {/* <button
                                type="button"
                                className="theme_btn edit_btn"
                                onClick={handleSubmit}>
                                Submit
                                <span></span>
                              </button> */}
                            </div>
                          </div>
                        </div>
                      </div>

                      <form>
                        <div className="row">
                          <div className="col-lg-6 ">
                            <div className="select-block input-form">
                              <div className="">
                                <div className="form-group">
                                  <label htmlFor="">Name</label>
                                  <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                       {formErrors.name}
                                      </span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={ProfileData?.name}
                                    name="name"
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Name"
                                  />
                                </div>

                                <div className="form-group">
                                  <label htmlFor="">Phone number</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={ProfileData?.user?.phone}
                                    name="phone"
                                    readOnly={isReadOnly}
                                    onChange={(e) => handleChange(e)}
                                    placeholder="+91 xxxx xxxx"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="">City</label>
                                  <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                       {formErrors.city}
                                      </span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={ProfileData?.city}
                                    name="city"
                                    onChange={(e) => handleChange(e)}
                                    placeholder="City"
                                  />
                                </div>

                                <div className="form-group">
                                  <label htmlFor="">Gender</label>
                                  <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                       {formErrors.gender}
                                      </span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={ProfileData?.gender}
                                    name="gender"
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Gender"
                                  />
                                </div>

                                <div className="form-group">
                                  <label htmlFor="">Age</label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    defaultValue={ProfileData?.age}
                                    name="age"
                                    onChange={(e) => handleChange(e)}
                                    placeholder="23"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="select-block input-form">
                              <div className="form-group">
                                <label htmlFor="">
                                  Graduation program name
                                </label>
                                <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                       {formErrors.gradProName}
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={
                                    ProfileData?.gradProName
                                  }
                                  name="gradProName"
                                  onChange={(e) => handleChange(e)}
                                  placeholder="Bachelors in ..."
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="">
                                  Current semester (if any)
                                </label>
                                <span
                                  style={{ color: "red" }}
                                  className="formErrors"
                                  >
                                  {formErrors.currentSemester}
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="currentSemester"
                                  defaultValue={ProfileData?.currentSemester}
                                  onChange={(e) => handleChange(e)}
                                  placeholder="1st"
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="">
                                  Post Graduation Program Name (if any)
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="pg_graduation_program_name"
                                  defaultValue={
                                    ProfileData?.pg_graduation_program_name
                                  }
                                  onChange={(e) => handleChange(e)}
                                  placeholder="Master in..."
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          {/* <button
                            type="button"
                            className="theme_btn edit_btn"
                            onClick={SubmitTestForm}>
                            Edit
                            <span></span>
                          </button> */}
                          {isSubmitted ? <p>Form submitted successfully!</p> : ""}
                          <button
                            type="button"
                            className="theme_btn edit_btn"
                            onClick={(e) => {
                              SubmitTestForm()
                              onSubmit(e);
                              handleSubmit(e);
                            }}>
                            Save & Submit
                            <span></span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade show active basket-banner"
                  id="v-pills-profile-1"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-1-tab">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="dashboard-content edit_home">
                        <h2 className="h2">Hi {userName}, </h2>

                        <p className="para">
                          Our placement manager will get in touch with you
                          within 24 hours, meanwhile please complete your
                          profile.
                        </p>
                        <a
                          style={{ textDecoration: "none" }}
                          className="theme_btn"
                          onClick={() => {
                            document.getElementById("v-pills-home-1-tab").click();
                          }}>
                          Upload your documents
                          <img src={SvgArrow} className="partners-img" alt="" />
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade basket-banner"
                  id="v-pills-messages-one"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-one-tab">
                  <div className="row basket-row">
                  <div className="col-lg-8">
                      <div
                        className="verticle-timeline
                                            col-lg-10">
                        <div className="dashboard-content ml-3">
                          <h2 className="h2">Your roadmap</h2>
                        </div>
                        <div className="">
                          <div className="timeline">
                            <div className="timeline-container warning">
                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Create your Profile
                                  </h4>
                                </a>
                                <p>
                                  Build a strong and complete profile with
                                  accurate details to get noticed by top
                                  companies.
                                </p>
                              </div>
                            </div>
                           
                            <div
                              className="timeline-container
                                                        warning">
                              <div className="timeline-icon"></div>

                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Connect with the Placement Manager
                                  </h4>
                                </a>
                                <p>
                                  Reach out to the placement manager for
                                  guidance and assistance throughout the
                                  placement process.
                                </p>
                              </div>
                            </div>
                            <div
                              className="timeline-container
                                                        warning">
                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Upload Essential documents
                                  </h4>
                                </a>
                                <p>
                                  Upload all necessary documents such as your
                                  resume, certificates, and identity proof for
                                  verification.
                                </p>
                              </div>
                            </div>
                            <div className="timeline-container warning ">
                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Aligned the profile with the Company
                                  </h4>
                                </a>
                                <p>
                                  Tailor your profile according to the company's
                                  requirements to increase the chances of
                                  getting shortlisted.
                                </p>
                              </div>
                            </div>
                            <div className="timeline-container warning ">
                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Recruitment in Progress
                                  </h4>
                                </a>
                                <p>
                                  Stay updated on the recruitment status to be
                                  prepared for the next step.
                                </p>
                              </div>
                            </div>
                            <div className="timeline-container warning ">
                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Final Selection
                                  </h4>
                                </a>
                                <p>
                                  Impress the recruiters with your skills and
                                  secure the position.
                                </p>
                              </div>
                            </div>
                            <div className="timeline-container warning ">
                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Offer Letter Released
                                  </h4>
                                </a>
                                <p>
                                  Receive the official offer letter and review
                                  the terms and conditions.
                                </p>
                              </div>
                            </div>
                            <div className="timeline-container warning ">
                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Offer Letter Accepted
                                  </h4>
                                </a>
                                <p>
                                  Confirm your acceptance of the offer letter to
                                  secure your position.
                                </p>
                              </div>
                            </div>
                            <div className="timeline-container warning ">
                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Pay 1% of CTC
                                  </h4>
                                </a>
                                <p>
                                  Pay the agreed 1% of the CTC as service fee
                                  for Salaryfy.
                                </p>
                              </div>
                            </div>
                            <div className="timeline-container warning ">
                              <div className="timeline-icon"></div>
                              <div className="timeline-body">
                                <a href="#">
                                  <h4 className="timeline-title">
                                    Appointment Letter Shared
                                  </h4>
                                </a>
                                <p>
                                  Get ready to join the company and receive your
                                  appointment letter with details about your
                                  role and benefits.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default DirectPlacementDashboard;
