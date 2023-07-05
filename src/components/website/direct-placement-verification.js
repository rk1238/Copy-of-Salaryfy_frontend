import React, { useState } from "react";
import NavbarTwo from "../common/navbar-two";
import Footer from "../common/footer";

import d6Green from "../img/btn-arrow.png";
import Calendar from "../img/icons/calendar.png";
import Expand from "../img/expand-img.png";
import Call from "../img/icons/call.png";
import Mail from "../img/mail.png";
import SvgArrow from "../img/arrow-svg.svg";
import RightGreen from "../img/right-green.png";
import Upload from "../img/icons/upload.png";
import { ApiBaseUrl } from "../BaseUrl/baseUrl";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import UploadWhite from "../img/upload-white.png";

export default function DirectPlacementVerification() {
  let navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("name"));
  const Token = JSON.parse(window.localStorage.getItem("token"));

  const [selectedFile, setSelectedFile] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIssubmit] = useState(false);
  const [directPlaceForm, setDirectPlaceForm] = useState({
    age: "",
    education: "",
    current_department: "",
    current_salary: "",
    desired_department: "",
    current_location: "",
    gender: "",
    current_industry: "",
    current_designation: "",
    desired_industry_to_work_in: "",
    desired_designation: "",
    relocate: "",
    resume: "",
  });

  const [fileSelected, setFileSelected] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
 

  const onChange = async (e) => {
    const { value, name } = e.target;

    setDirectPlaceForm((state) => ({
      ...state,
      [name]: value,
    }));
   
  };

  const onChangeHandler = (event) => {
    const selectedFile  = event.target.files[0];
    // Check file type
    if (selectedFile.type !== "image/jpeg" && selectedFile.type !== "application/pdf") {
      alert("Please select a jpeg or PDF document.");
      return;
    }
    // Check file size
    const fileSizeInMB = selectedFile.size / (1024 * 1024);
    if (fileSizeInMB > 1) {
      alert("Please select a PDF document that is less than or equal to 1MB.");
      return;
    }
    setSelectedFile(selectedFile);
    setFileSelected(true);
    setFileUploaded(true);
    
  };
 
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.age) {
      errors.age = "required*";
    }
    if (!values.education) {
      errors.education = "required*";
    } 
    if (!values.current_department) {
      errors.current_department = "required*";
    }
    if (!values.current_salary) {
      errors.current_salary = "required*";
    }
    if (!values.desired_department) {
      errors.desired_department = "required*";
    }
    if (!values.current_location) {
      errors.current_location = "required*";
    }
    if (!values.gender) {
      errors.gender = "required*";
    }
    if (!values.current_industry) {
      errors.current_industry = "required*";
    }
    if (!values.current_designation) {
      errors.current_designation = "required*";
    }
    if (!values.desired_industry_to_work_in) {
      errors.desired_industry_to_work_in = "required*";
    }
    if (!values.desired_designation) {
      errors.desired_designation = "required*";
    }
    
    if (!values.relocate) {
      errors.relocate = "required*";
    }
    return errors;
  };
  
  const onSubmit = (e) => {
    setSubmitClicked(true); // set submitClicked to true when submit button is clicked
    if (!fileSelected) {
      return; // don't submit if required field is not selected
    }
    setFormErrors(validate(directPlaceForm));
    setIssubmit(true);
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = validate(directPlaceForm);
    if (Object.keys(formErrors).length === 0 && fileSelected) {
    let url = ApiBaseUrl + "direct-placement-store-details";
    const formData = new FormData();
    formData.append("age", directPlaceForm.age);
    formData.append("education", directPlaceForm.education);
    formData.append("current_department", directPlaceForm.current_department);
    formData.append("current_salary", directPlaceForm.current_salary);
    formData.append("desired_department", directPlaceForm.desired_department);
      formData.append("current_location", directPlaceForm.current_location);
      formData.append("gender", directPlaceForm.gender);
      formData.append("current_industry", directPlaceForm.current_industry);
      formData.append("current_designation", directPlaceForm.current_designation);
      formData.append(
        "desired_industry_to_work_in",
        directPlaceForm.desired_industry_to_work_in
      );
      formData.append("desired_designation", directPlaceForm.desired_designation);
      formData.append("relocate", directPlaceForm.relocate);
      formData.append("resume", selectedFile);
      const directPlaceFormSubmit = function () {
        let config = {
          method: "post",
          url: url,
          headers: {
            "Content-Type":
              "multipart/form-data;boundary=<calculated when request is sent>",
            "x-access-token": Token,
          },
          data: formData,
        };
        axios(config)
          .then(function (res) {
            const { data } = res.data;
            navigate("/DirectPlacementUploadDocs");
          })
          .catch(function (error) {});
      };
      directPlaceFormSubmit();
    }
    else {
      setFormErrors(formErrors);
    }
};

  return (
    <React.Fragment>
      <NavbarTwo />

      <section className="eligiblity-form-sec student-dashboard select-plan range-slider-plan  form-select-verification">
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
                    <div className="container custom-container">
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
                              <p className="mt-3">
                                Kindly complete your Profile.
                              </p>
                              <form>
                                <div className="row upload_docs_wrappper verification-form">
                                  <div className="col-lg-6">
                                    <div className="verification-select">
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">
                                          Age
                                        </label>
                                        <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                        {formErrors.age}
                                        </span>
                                        <div className="icon-relative">
                                          <input
                                            className="form-control"
                                            type="number"
                                            placeholder="30"
                                            onChange={onChange}
                                            name="age"
                                            value={directPlaceForm.age}
                                          />
                                         
                                        </div>
                                      </div>
                                     
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">
                                          Education
                                        </label>
                                        <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                        {formErrors.education}
                                        </span>
                                        <div className="icon-relative">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Graduate"
                                            onChange={onChange}
                                            name="education"
                                            value={directPlaceForm.education}
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">
                                          Current department
                                        </label>
                                        <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                       {formErrors.current_department}
                                        </span>
                                        
                                        <div className="icon-relative">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder=""
                                            onChange={onChange}
                                            name="current_department"
                                            value={
                                              directPlaceForm.current_department
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">
                                          Current salary (fixed + variable)
                                        </label>
                                        <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                         {formErrors.current_salary}
                                        </span>
                                      
                                        <div className="icon-relative">
                                          <input className="form-control" type="number"
                                            placeholder="56,000 INR"
                                            onChange={onChange}
                                            name="current_salary"
                                            value={
                                              directPlaceForm.current_salary
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">
                                          Desired department
                                        </label>
                                        <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                         {formErrors.desired_department}
                                        </span>
                                        
                                        <div className="icon-relative">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder=""
                                            onChange={onChange}
                                            name="desired_department"
                                            value={
                                              directPlaceForm.desired_department
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">
                                          Current location
                                        </label>
                                        <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                        {formErrors.current_location}
                                        </span>
                                       
                                        <div className="icon-relative">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder=""
                                            onChange={onChange}
                                            name="current_location"
                                            value={
                                              directPlaceForm.current_location
                                            }
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="verification-select">
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">
                                          Gender
                                        </label>
                                        <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                       {formErrors.gender}
                                        </span>
                                        
                                        <div className="icon-relative">
                                          <select
                                            className="form-control"
                                            id="exampleFormControlSelect1"
                                            onChange={onChange}
                                            name="gender"
                                            value={directPlaceForm.gender}>
                                            <option>Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                          </select>
                                          <i
                                            className="fa fa-angle-down select-down"
                                            aria-hidden="true"></i>
                                        </div>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">
                                          Current industry
                                        </label>
                                        <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                       {formErrors.current_industry}
                                        </span>
                                       
                                        <div className="icon-relative">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder=""
                                            onChange={onChange}
                                            name="current_industry"
                                            value={
                                              directPlaceForm.current_industry
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">
                                          Current designation
                                        </label>
                                        <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                       {formErrors.current_designation}
                                        </span>
                                       
                                        <div className="icon-relative">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder=""
                                            onChange={onChange}
                                            name="current_designation"
                                            value={
                                              directPlaceForm.current_designation
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">
                                          Desired industry to work in
                                        </label>
                                        <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                       {formErrors.desired_industry_to_work_in}
                                        </span>
                                        <div className="icon-relative">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder=""
                                            onChange={onChange}
                                            name="desired_industry_to_work_in"
                                            value={
                                              directPlaceForm.desired_industry_to_work_in
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">
                                          Desired designation
                                        </label>
                                        <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                       {formErrors.desired_designation}
                                        </span>
                                        <div className="icon-relative">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder=""
                                            onChange={onChange}
                                            name="desired_designation"
                                            value={
                                              directPlaceForm.desired_designation
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">
                                          Are you ready to relocate?
                                        </label>
                                        <span
                                        style={{ color: "red" }}
                                        className="formErrors"
                                         >
                                       {formErrors.relocate}
                                        </span>
                                        <div className="icon-relative">
                                          <select
                                            className="form-control"
                                            id="exampleFormControlSelect1"
                                            onChange={onChange}
                                            name="relocate"
                                            value={directPlaceForm.relocate}>
                                            <option>Select</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                          </select>
                                          <i
                                            className="fa fa-angle-down select-down"
                                            aria-hidden="true"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                 
                                 <div className="mt-3 w-100">
                                    <div
                                      className={`upload-buttons ${
                                        fileSelected ? "selected" : ""
                                      } ${fileUploaded ? "after-upload" : ""}`}>
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlFile1">
                                          {fileUploaded === true ? (
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
                                            <p>Upload Resume </p>
                                            {selectedFile && (selectedFile.type ===
                                              "image/jpeg" ||
                                            selectedFile.type ===
                                              "application/pdf") ? (
                                              <p className="parag">
                                                {" "}
                                                <span>
                                                  {" "}
                                                  ({selectedFile.name})
                                                </span>
                                              </p>
                                            ) : (
                                              <p className="parag"></p>
                                            )}
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
                                          onChange={onChangeHandler}
                                          name="resume"
                                          value=""
                                        />
                                      </div>
                                    </div>
                                  
                                 </div>

                                  
                                 
                                </div>

                                <div className="range-container">
                                  <div className="right-block fresher-test">
                                    <button
                                      onClick={(e) => {
                                        handleSubmit(e);
                                        onSubmit(e);
                                        
                                      }}
                                      className="theme_btn">
                                      Next
                                      <img src={d6Green} alt="arrow" />
                                      <span></span>
                                    </button>
                                  </div>
                                </div>
                              </form>
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
                                  <img src={Mail} alt="icon" className="icon" />
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

      {/* ================mobile-view-end========== */}
      <Footer />
    </React.Fragment>
  );
}
