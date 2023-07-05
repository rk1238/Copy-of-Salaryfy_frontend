import React, { useState, useEffect } from "react";
import Footer from "../common/footer";
import clientimg from "../img/client-img.png";
import live from "../img/live.png";

import Navbar from "../common/navbar";
import SvgArrow from "../img/arrow-svg.svg";
import RightGreen from "../img/right-green.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ApiBaseUrl } from "../BaseUrl/baseUrl";

export default function GradfreshNewFunnel() {
  const [searchData, setSearchData] = useState("");
  const [searchDataPost, setSearchDataPost] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIssubmit] = useState(false);
  const [formErrors1, setFormErrors1] = useState({});
  const [isSubmit1, setIssubmit1] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const urlParams = new URLSearchParams(window.location.search);
  let navigate = useNavigate();
  const [eligibilityCount, setEligibilityCount] = useState();
  const [formvalue, setFormValue] = useState({
    email: "",
    type: "1",
    edu_background: "",
    graduation_status: "",
    graduation_score: 0,
    total_experience: "",
    last_salary: "",
    career_gap: "",
    career_gap_duration: "",
    name: "",
    colName: searchData,
    postGrade: searchDataPost,
  });
  const [id, setId] = useState(urlParams.get("id") || "fresher");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    console.log("id", id);
    setSelectedId(id);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = validate(formvalue);

    if (Object.keys(formErrors).length === 0) {
      let url = ApiBaseUrl + "eligiblity-form";
      const EligibilityFormSubmit = function () {
        let data = JSON.stringify(formvalue);
        let config = {
          method: "post",
          url: url,
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };
        axios(config)
          .then(function (res) {
            const { email, name, last_salary } = res.data;
            console.log("emailid value:", email, name);
            window.localStorage.setItem("email", JSON.stringify(email));
            window.localStorage.setItem("name", JSON.stringify(name));
           
            console.log("last-salary", formvalue.last_salary);

            window.localStorage.setItem(
              "last_salary",
              JSON.stringify(last_salary)
            );
            window.localStorage.setItem(
              "edu_background",
              JSON.stringify(formvalue.edu_background)
            ); 
            navigate("/ReadyTestModel");
          })
          .catch(function (error) {
            if (error.response) {
              if (error.response.data.errorMessage[0].param === "email") {
                formErrors.email = error.response.data.errorMessage[0].msg;
              } else if (
                error.response.data.errorMessage[0].param === "graduation_score"
              ) {
                formErrors.graduation_score =
                  error.response.data.errorMessage[0].msg;
              }
            }
            setFormErrors(formErrors);
          });
      };
      EligibilityFormSubmit();
    } else {
      setFormErrors(formErrors);
    }
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();

    let formErrors1 = validate1(formvalue);

    if (Object.keys(formErrors1).length === 0) {
      let url = ApiBaseUrl + "eligiblity-form";
      const EligibilityFormSubmit1 = function () {
        let data = JSON.stringify(formvalue);
        let config = {
          method: "post",
          url: url,
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };
        axios(config)
          .then(function (res) {
            const { email, name, last_salary } = res.data;
            console.log("emailid value:", email, name);
            window.localStorage.setItem("email", JSON.stringify(email));
            window.localStorage.setItem("name", JSON.stringify(name));
           
            window.localStorage.setItem(
              "last_salary",
              JSON.stringify(last_salary)
            );

            window.localStorage.setItem(
              "edu_background",
              JSON.stringify(formvalue.edu_background)
            );
            navigate("/ReadyTestModel");
          })
          .catch(function (error) {
            if (error.response) {
              if (error.response.data.errorMessage[0].param === "email") {
                formErrors1.email = error.response.data.errorMessage[0].msg;
              } else if (
                error.response.data.errorMessage[0].param === "graduation_score"
              ) {
                formErrors1.graduation_score =
                  error.response.data.errorMessage[0].msg;
              }
            }
            setFormErrors1(formErrors1);
          });
      };
      EligibilityFormSubmit1();
    } else {
      setFormErrors1(formErrors1);
    }
  };

  const handleSelect = (value, id) => {
    setFormValue({
      ...formvalue,
      colName: value,
      collage_id: id,
    });
    setSearchData(null);
  };
  const handleSelectPost = (value, id) => {
    setFormValue({
      ...formvalue,
      postGrade: value,
      pg_collage_id: id,
    });
    setSearchDataPost(null);
  };

  useEffect(() => {
    if (id === "fresher") {
      setFormValue((state) => ({
        ...state,
        type: "1",
      }));
    } else if (id === "experienced") {
      setFormValue((state) => ({
        ...state,
        type: "2",
      }));
    }
  }, [id]);

  useEffect(() => {
    if (id === "fresher-one") {
      setFormValue((state) => ({
        ...state,
        type: "1",
      }));
    } else if (id === "experienced-one") {
      setFormValue((state) => ({
        ...state,
        type: "2",
      }));
    }
  }, [id]);

  const onChange = async (e) => {
    const { value, name } = e.target;
    const newId = e.target.getAttribute("data-id");

    if (newId !== undefined) {
      setId(newId);
    }

    setFormValue((state) => ({
      ...state,
      [name]: value,
    }));

    if (e.target.id === "col_name") {
      let url = ApiBaseUrl + "college-search?search=";
      const results = await axios.get(url + value);
      console.log("result_data", results.data.colleges);
      setSearchData(results.data.colleges);
    }
    if (e.target.id === "Post_grads") {
      let url = ApiBaseUrl + "college-search?search=";
      const results = await axios.get(url + value);
      setSearchDataPost(results.data.colleges);
    }
  };

  const onSubmit = (e) => {
    setFormErrors(validate(formvalue));
    setIssubmit(true);
    e.preventDefault();
  };

  const onSubmit1 = (e) => {
    setFormErrors1(validate1(formvalue));
    setIssubmit1(true);
    e.preventDefault();
  };

  useEffect(() => {
    console.log("hhh", formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("object", Object.keys(formErrors).length);
      console.log("hhr", formvalue);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "required*";
    }
    if (!values.email) {
      errors.email = "required*";
    } else if (!regex.test(values.email)) {
      errors.email = "Not a valid email!";
    }
    if (!values.colName) {
      errors.colName = "required*";
    }
    if (!values.graduation_score) {
      errors.graduation_score = "required*";
    }else if (!/^\d{1,2}(\.\d{1,2})?$/.test(values.graduation_score)) {
      errors.graduation_score = "Invalid graduation score. Please enter a float value with up to 2 decimal places.";
    }else if (values.graduation_score.length < 2) {
      errors.graduation_score = "must be at least 2 characters*";
    }
    
    if (!values.edu_background) {
      errors.edu_background = "required*";
    }
    if (!values.graduation_status) {
      errors.graduation_status = "required*";
    }
    return errors;
  };

  const validate1 = (values1) => {
    const errors1 = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values1.name) {
      errors1.name = "required*";
    }
    if (!values1.email) {
      errors1.email = "required*";
    } else if (!regex.test(values1.email)) {
      errors1.email = "Not a valid email!";
    }
    if (!values1.edu_background) {
      errors1.edu_background = "required*";
    }
    if (!values1.total_experience) {
      errors1.total_experience = "required*";
    }
    if (!values1.last_salary) {
      errors1.last_salary = "required*";
    }
    if (!values1.career_gap) {
      errors1.career_gap = "required*";
    }
    // if (!values1.career_gap_duration) {
    //   errors1.career_gap_duration="required*"
    // }
    return errors1;
  };

  const handleClickLink1 = () => {
    if (setSelectedId === "experienced") {
      setSelectedId("fresher");
    }
    setSelectedId("fresher");
  };

  const handleClickLink2 = () => {
    if (setSelectedId === "fresher") {
      setSelectedId("experienced");
    }
    setSelectedId("experienced");
  };
  const handleClickLink3 = () => {
    if (setSelectedId === "experienced-one") {
      setSelectedId("fresher-one");
    }
    setSelectedId("fresher-one");
  };

  const handleClickLink4 = () => {
    if (setSelectedId === "fresher-one") {
      setSelectedId("experienced-one");
    }
    setSelectedId("experienced-one");
  };

  useEffect(() => {
    // Get questions through Api
    let Api = ApiBaseUrl + "test-count";
    const fetchEligibilityCounter = async (url) => {
      try {
        const res = await fetch(Api);
        const data = await res.json();
        console.log(data.testCount);
        setEligibilityCount(data.testCount);
        //    isLoading=false;
      } catch (error) {}
    };
    fetchEligibilityCounter(Api);
  }, []);
  return (
    <div>
      <Navbar />
      <section className="eligiblity-form-sec select_status_modile">
        <div className="container">
          <div
            className="row eligiblity-form-filds align-items-lg-start gradfresh_funnel_wrapper"
            id="status_review_section_show"
          >
            <div className="col-lg-5 mt-5">
              <div className="eligiblity-filds-block-1">
                <div className="eligiblity-block">
                  <h1>
                    Eligiblity
                    <br /> Form
                  </h1>
                  <p>
                    Fill the form to check your eligibility and get a
                    salary-hike prediction.
                  </p>
                </div>
                <div className="eligiblity-block-2">
                  <p>Check eligiblity to get into companies like</p>
                  <img src={clientimg} alt="clientimg" />

                  <p className="live">
                    Total of number students given this test{" "}
                    <img src={live} alt="live" />
                  </p>
                  <a
                    style={{ textDecoration: "none" }}
                    href="/#"
                    className="number"
                  >
                    {eligibilityCount + 400000}+
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="eligiblity-filds-block-2 select-status top_margin">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        selectedId === "fresher" ? "active" : ""
                      }`}
                      id="fresher-tab"
                      data-id="fresher"
                      data-toggle="tab"
                      href="#fresher"
                      role="tab"
                      aria-controls="fresher"
                      aria-selected="true"
                      onClick={onChange}
                      name="Fresher"
                      onFocus={handleClickLink1}
                    >
                      Fresher
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        selectedId === "experienced" ? "active" : ""
                      }`}
                      id="experienced-tab"
                      data-id="experienced"
                      data-toggle="tab"
                      href="#experienced"
                      role="tab"
                      aria-controls="experienced"
                      aria-selected="false"
                      onClick={onChange}
                      name="Experienced"
                      onFocus={handleClickLink2}
                    >
                      Experienced
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="fresher"
                    style={{
                      display: selectedId === "fresher" ? "block" : "none",
                    }}
                    role="tabpanel"
                    aria-labelledby="fresher-tab"
                  >
                    {/* <pre>{JSON.stringify(formvalue,undefined,2)}</pre> */}
                    <form>
                      <div className="question-box">
                        <div className="d-flex ">
                          <p className="question">
                            <b>Select graduation status</b>
                            <span
                              style={{ color: "red" }}
                              className="formErrors"
                            >
                              {formErrors.graduation_status}
                            </span>
                          </p>
                        </div>
                        <fieldset id="group1" className="">
                          <div className="custom-control custom-radio me-5">
                            <input
                              type="hidden"
                              onChange={onChange}
                              value="1"
                              name="type"
                            />
                            <input
                              type="radio"
                              id="radio13"
                              onChange={onChange}
                              value="Not in final year"
                              name="graduation_status"
                              checked={
                                formvalue.graduation_status ===
                                "Not in final year"
                              }
                              className="custom-control-input"
                              required=""
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio13"
                            >
                              Not in final year
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio14"
                              onChange={onChange}
                              name="graduation_status"
                              value="Graduation final (Currently)"
                              checked={
                                formvalue.graduation_status ===
                                "Graduation final (Currently)"
                              }
                              className="custom-control-input"
                              required=""
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio14"
                            >
                              Graduation final (Currently)
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio15"
                              onChange={onChange}
                              name="graduation_status"
                              value="Graduation completed (Fresher)"
                              checked={
                                formvalue.graduation_status ===
                                "Graduation completed (Fresher)"
                              }
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio15"
                            >
                              Graduation completed (Fresher)
                            </label>
                          </div>
                        </fieldset>

                        <div className="d-flex mt-1">
                          <p className="question">
                            <b>Background</b>
                            <span
                              style={{ color: "red" }}
                              className="formErrors"
                            >
                              {formErrors.edu_background}
                            </span>
                          </p>
                        </div>

                        <fieldset id="group1" className="d-flex  select-rdio">
                          <div className="custom-control custom-radio me-5">
                            <input
                              type="hidden"
                              onChange={onChange}
                              value="2"
                              name="type"
                            />
                            <input
                              type="radio"
                              id="radio11"
                              onChange={onChange}
                              name="edu_background"
                              value="tech"
                              checked={formvalue.edu_background === "tech"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio11"
                            >
                              Technical
                            </label>
                          </div>

                          <div className="custom-control  custom-radio">
                            <input
                              type="radio"
                              id="radio21"
                              onChange={onChange}
                              name="edu_background"
                              value="non_tech"
                              checked={formvalue.edu_background === "non_tech"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio21"
                            >
                              Non technical
                            </label>
                          </div>
                        </fieldset>

                        <div className="fresher-form mt-1">
                          <div className="form-group">
                            <p>
                              <b>
                                <label>College name</label>
                                <span
                                  style={{ color: "red" }}
                                  className="formErrors"
                                >
                                  {formErrors.colName}
                                </span>
                              </b>
                            </p>
                            <input
                              icon="search"
                              onChange={onChange}
                              name="colName"
                              value={formvalue.colName}
                              id="col_name"
                              placeholder="IPU,DU..."
                              autoComplete="off"
                            />

                            <div className="autocomplete">
                              {formvalue.colName.length > 0 && searchData ? (
                                <div className="autocomplete-items">
                                  {searchData.map((item, i) => (
                                    <div key={i}
                                      onClick={() =>
                                        handleSelect(item.name, item.id)
                                      }
                                    >
                                      {item.name}
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>

                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <p>
                                <b>
                                  <label className="mb-0">
                                    Graduation score
                                  </label>
                                  <p
                                    style={{ color: "red" }}
                                    className="formErrors"
                                  >
                                    {formErrors.graduation_score}
                                  </p>
                                </b>
                              </p>
                            </div>
                            <div className="form-group col-md-6 d-flex align-items-center">
                              <input
                                type="number"
                                onChange={onChange}
                                name="graduation_score"
                                value={formvalue.graduation_score !== 0 ? formvalue.graduation_score : ''}
                                placeholder="58"
                              />{" "}
                              <span>%</span>
                            </div>
                          </div>

                          <div className="form-group">
                            <p>
                              <b>
                                <label>Postgraduation, if any</label>
                              </b>
                            </p>
                            <input
                              type="search"
                              onChange={onChange}
                              name="postGrade"
                              id="Post_grads"
                              value={formvalue.postGrade}
                              placeholder="IPU,DU..."
                              autoComplete="off"
                            />
                            <div className="autocomplete">
                              {formvalue.postGrade.length > 0 &&
                              searchDataPost ? (
                                <div className="autocomplete-items">
                                  {searchDataPost.map((item, i) => (
                                    <div key={i}
                                      onClick={() =>
                                        handleSelectPost(item.name, item.id)
                                      }
                                    >
                                      {item.name}
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-lg-6">
                              <p>
                                <b>
                                  <label>Name</label>
                                  <span
                                    style={{ color: "red" }}
                                    className="formErrors"
                                  >
                                    {" "}
                                    {formErrors.name}
                                  </span>
                                </b>
                              </p>
                              <input
                                type="text"
                                onChange={onChange}
                                name="name"
                                value={formvalue.name}
                                placeholder="Name"
                              />
                            </div>

                            <div className="form-group col-lg-6">
                              <p>
                                <b>
                                  <label>Email</label>
                                  <span
                                    style={{ color: "red" }}
                                    className="formErrors"
                                  >
                                    {formErrors.email}
                                  </span>
                                </b>
                              </p>
                              <input
                                type="text"
                                onChange={onChange}
                                name="email"
                                value={formvalue.email}
                                placeholder="Email"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="right-block fresher-test">
                        <button
                          type="button"
                          className="theme_btn tertiary"
                          data-toggle="modal"
                          data-target=".ReadyModal"
                          onClick={(e) => {
                            handleSubmit(e);
                            onSubmit(e);
                          }}
                        >
                          Proceed to eligiblity test{" "}
                          <img src={RightGreen} alt="arrow" className="img-1" />
                          <img
                            src={SvgArrow}
                            className="partners-img img-2"
                            alt=""
                          />
                          <span></span>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="experienced"
                    role="tabpanel"
                    style={{
                      display: selectedId === "experienced" ? "block" : "none",
                    }}
                    aria-labelledby="experienced-tab"
                  >
                    <form>
                      <div className="question-box">
                        <div className="d-flex">
                          <p className="question">
                            <b>Background</b>
                          </p>
                        </div>

                        <fieldset id="group1" className="d-flex select-rdio">
                          <div className="custom-control  custom-radio me-5">
                            <input
                              type="radio"
                              id="radio11"
                              onChange={onChange}
                              name="edu_background"
                              value="tech"
                              checked={formvalue.edu_background === "tech"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio11"
                            >
                              Technical
                            </label>
                          </div>

                          <div className="custom-control  custom-radio">
                            <input
                              type="radio"
                              id="radio21"
                              onChange={onChange}
                              name="edu_background"
                              value="non_tech"
                              checked={formvalue.edu_background === "non_tech"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio21"
                            >
                              Non technical
                            </label>
                          </div>
                        </fieldset>
                        <p style={{ color: "red" }} className="formErrors">
                          {formErrors1.edu_background}
                        </p>
                        <div className="d-flex mt-1">
                          <p className="question">
                            <b>Total experience</b>
                          </p>
                        </div>

                        <fieldset id="group1" className="">
                          <div className="custom-control custom-radio me-5">
                            <input
                              type="radio"
                              id="radio13x"
                              onChange={onChange}
                              name="total_experience"
                              value="2"
                              checked={formvalue.total_experience === "2"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio13x"
                            >
                              0 to 2 years
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio14x"
                              onChange={onChange}
                              name="total_experience"
                              value="5"
                              checked={formvalue.total_experience === "5"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio14x"
                            >
                              2 to 5 years
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio15x"
                              onChange={onChange}
                              name="total_experience"
                              value="7"
                              checked={formvalue.total_experience === "7"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio15x"
                            >
                              5 to 7 years
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio16"
                              onChange={onChange}
                              name="total_experience"
                              value="8"
                              checked={formvalue.total_experience === "8"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio16"
                            >
                              More than 7 years
                            </label>
                          </div>
                        </fieldset>
                        <p style={{ color: "red" }} className="formErrors">
                          {formErrors1.total_experience}
                        </p>
                        <div className="d-flex mt-1">
                          <p className="question">
                            <b>Last drawn salary</b>
                          </p>
                        </div>

                        <fieldset id="group1" className="">
                          <div className="custom-control custom-radio me-5">
                            <input
                              type="radio"
                              id="radio17"
                              onChange={onChange}
                              name="last_salary"
                              value="3"
                              checked={formvalue.last_salary === "3"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio17"
                            >
                              1 to 3 LPA
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio18"
                              onChange={onChange}
                              name="last_salary"
                              value="5"
                              checked={formvalue.last_salary === "5"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio18"
                            >
                              3 to 5 LPA
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio19"
                              onChange={onChange}
                              name="last_salary"
                              value="7"
                              checked={formvalue.last_salary === "7"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio19"
                            >
                              5 to 7 LPA
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio20"
                              onChange={onChange}
                              name="last_salary"
                              value="8"
                              checked={formvalue.last_salary === "8"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio20"
                            >
                              More than 7 LPA
                            </label>
                          </div>
                        </fieldset>
                        <p style={{ color: "red" }} className="formErrors">
                          {formErrors1.last_salary}
                        </p>
                        <div className="d-flex mt-1">
                          <p className="question">
                            <b>Present career gap</b>
                          </p>
                        </div>

                        <fieldset id="group1" className="d-flex select-rdio">
                          <div className="custom-control custom-radio me-5">
                            <input
                              type="radio"
                              id="radio22"
                              onChange={onChange}
                              name="career_gap"
                              value="Yes"
                              checked={formvalue.career_gap === "Yes"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio22"
                            >
                              Yes
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio23"
                              onChange={onChange}
                              name="career_gap"
                              value="No"
                              checked={formvalue.career_gap === "No"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio23"
                            >
                              No
                            </label>
                          </div>
                        </fieldset>
                        <p style={{ color: "red" }} className="formErrors">
                          {formErrors1.career_gap}
                        </p>
                        <fieldset
                          id="group1"
                          style={{
                            display:
                              formvalue.career_gap === "Yes" ? "block" : "none",
                          }}
                          className="select-rdio"
                        >
                          <div className="custom-control custom-radio me-5">
                            <input
                              type="radio"
                              id="radio55"
                              onChange={onChange}
                              name="career_gap_duration"
                              value="3"
                              checked={formvalue.career_gap_duration === "3"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio55"
                            >
                              Less then 3 months
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio56"
                              onChange={onChange}
                              name="career_gap_duration"
                              value="6"
                              checked={formvalue.career_gap_duration === "6"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio56"
                            >
                              3 to 6 months
                            </label>
                          </div>
                          <div className="custom-control custom-radio mb-3">
                            <input
                              type="radio"
                              id="radio57"
                              onChange={onChange}
                              name="career_gap_duration"
                              value="8"
                              checked={formvalue.career_gap_duration === "8"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio57"
                            >
                              Above 6 months
                            </label>
                          </div>
                        </fieldset>

                        <div className="form-row fresher-form input">
                          <div className="form-group col-lg-6">
                            <p>
                              <b>
                                <label>Name</label>
                                <span
                                  style={{ color: "red" }}
                                  className="formErrors"
                                >
                                  {" "}
                                  {formErrors1.name}
                                </span>
                              </b>
                            </p>
                            <input
                              type="text"
                              onChange={onChange}
                              name="name"
                              value={formvalue.name}
                              placeholder="Name"
                            />
                          </div>

                          <div className="form-group col-lg-6">
                            <p>
                              <b>
                                <label>Email</label>
                                <span
                                  style={{ color: "red" }}
                                  className="formErrors"
                                >
                                  {formErrors1.email}
                                </span>
                              </b>
                            </p>
                            <input
                              type="text"
                              onChange={onChange}
                              name="email"
                              value={formvalue.email}
                              placeholder="Email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="right-block fresher-test">
                        <button
                          type="button"
                          className="theme_btn tertiary"
                          data-toggle="modal"
                          data-target=".ReadyModal"
                          onClick={(e) => {
                            handleSubmit1(e);
                            onSubmit1(e);
                          }}
                        >
                          Proceed to eligiblity test{" "}
                          <img src={RightGreen} alt="arrow" className="img-1" />
                          <img
                            src={SvgArrow}
                            className="partners-img img-2"
                            alt=""
                          />
                          <span></span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ====mobile-view==== ========================================================================================================*/}

          <div
            className="row eligiblity-form-filds"
            id="status_review_section_hide"
          >
            <div className="col-lg-5  col-md-5 col-sm-12">
              <div className="eligiblity-filds-block-1">
                <div className="eligiblity-block">
                  <h1>Eligibility Form</h1>
                  <p>"Select your current status" Below the Eligibility Form</p>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="eligiblity-filds-block-2 select-status ">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        selectedId === "fresher-one" ? "active" : ""
                      }`}
                      id="fresher-one-tab"
                      data-id="fresher-one"
                      data-toggle="tab"
                      href="#fresher-one"
                      role="tab"
                      aria-controls="fresher-one"
                      aria-selected="true"
                      onClick={onChange}
                      name="Fresher"
                      onFocus={handleClickLink3}
                    >
                      Fresher
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        selectedId === "experienced-one" ? "active" : ""
                      }`}
                      id="experienced-one-tab"
                      data-id="experienced-one"
                      data-toggle="tab"
                      href="#experienced-one"
                      role="tab"
                      aria-controls="experienced-one"
                      aria-selected="false"
                      onClick={onChange}
                      name="Experienced"
                      onFocus={handleClickLink4}
                    >
                      Experienced
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="fresher-one"
                    style={{
                      display: selectedId === "fresher-one" ? "block" : "none",
                    }}
                    role="tabpanel"
                    aria-labelledby="fresher-one-tab"
                  >
                    <form>
                      <div className="question-box">
                        <div className="d-flex ">
                          <p className="question">
                            <b>Select graduation status</b>
                            <span
                              style={{ color: "red" }}
                              className="formErrors"
                            >
                              {formErrors.graduation_status}
                            </span>
                          </p>
                        </div>

                        <fieldset id="group1" className="">
                          <div className="custom-control custom-radio me-5">
                            <input
                              type="hidden"
                              onChange={onChange}
                              value="1"
                              name="type"
                            />
                            <input
                              type="radio"
                              id="radio13"
                              onChange={onChange}
                              value="Not in final year"
                              name="graduation_status"
                              checked={
                                formvalue.graduation_status ===
                                "Not in final year"
                              }
                              className="custom-control-input"
                              required=""
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio13"
                            >
                              Not in final year
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio14"
                              onChange={onChange}
                              name="graduation_status"
                              value="Graduation final (Currently)"
                              checked={
                                formvalue.graduation_status ===
                                "Graduation final (Currently)"
                              }
                              className="custom-control-input"
                              required=""
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio14"
                            >
                              Graduation final (Currently)
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio15"
                              onChange={onChange}
                              name="graduation_status"
                              value="Graduation completed (Fresher)"
                              checked={
                                formvalue.graduation_status ===
                                "Graduation completed (Fresher)"
                              }
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio15"
                            >
                              Graduation completed (Fresher)
                            </label>
                          </div>
                        </fieldset>

                        <div className="d-flex mt-1">
                          <p className="question">
                            <b>Background</b>
                            <span
                              style={{ color: "red" }}
                              className="formErrors"
                            >
                              {formErrors.edu_background}
                            </span>
                          </p>
                        </div>

                        <fieldset id="group1" className="d-flex  select-rdio">
                          <div className="custom-control custom-radio me-5">
                            <input
                              type="hidden"
                              onChange={onChange}
                              value="2"
                              name="type"
                            />
                            <input
                              type="radio"
                              id="radio11"
                              onChange={onChange}
                              name="edu_background"
                              value="tech"
                              checked={formvalue.edu_background === "tech"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio11"
                            >
                              Technical
                            </label>
                          </div>

                          <div className="custom-control  custom-radio">
                            <input
                              type="radio"
                              id="radio21"
                              onChange={onChange}
                              name="edu_background"
                              value="non_tech"
                              checked={formvalue.edu_background === "non_tech"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio21"
                            >
                              Non technical
                            </label>
                          </div>
                        </fieldset>

                        <div className="fresher-form mt-1">
                          <div className="form-group">
                            <p>
                              <b>
                                <label>College name</label>
                                <span
                                  style={{ color: "red" }}
                                  className="formErrors"
                                >
                                  {formErrors.colName}
                                </span>
                              </b>
                            </p>
                            <input
                              type="text"
                              onChange={onChange}
                              name="colName"
                              value={formvalue.colName}
                              placeholder="IPU,DU..."
                              id="col_name"
                              autoComplete="off"
                            />
                            <div className="autocomplete">
                              {formvalue.colName.length > 0 && searchData ? (
                                <div className="autocomplete-items">
                                  {searchData.map((item, i) => (
                                    <div key={i}
                                      onClick={() =>
                                        handleSelect(item.name, item.id)
                                      }
                                    >
                                      {item.name}
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>

                          <div className="form-row">
                            <div className="form-group col-md-6 margin_bottom_zero">
                              <p>
                                <b>
                                  <label>Graduation score</label>
                                  <p
                                    style={{ color: "red" }}
                                    className="formErrors"
                                  >
                                    {formErrors.graduation_score}
                                  </p>
                                </b>
                              </p>
                            </div>
                            <div className="form-group col-md-6 d-flex align-items-center">
                              <input
                                type="text"
                                onChange={onChange}
                                name="graduation_score"
                                value={formvalue.graduation_score !== 0 ? formvalue.graduation_score : ''}
                                placeholder="58"
                              />{" "}
                              <span>%</span>
                            </div>
                          </div>

                          <div className="form-group">
                            <p>
                              <b>
                                <label>Postgraduation, if any</label>
                              </b>
                            </p>
                            <input
                              type="text"
                              onChange={onChange}
                              name="postGrade"
                              value={formvalue.postGrade}
                              placeholder="IPU,DU..."
                              autoComplete="off"
                              id="Post_grads"
                            />
                            <div className="autocomplete">
                              {formvalue.postGrade.length > 0 &&
                              searchDataPost ? (
                                <div className="autocomplete-items">
                                  {searchDataPost.map((item, i) => (
                                    <div key={i}
                                      onClick={() =>
                                        handleSelectPost(item.name, item.id)
                                      }
                                    >
                                      {item.name}
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                          <div className="form-group">
                            <p>
                              <b>
                                <label>Name</label>
                                <span
                                  style={{ color: "red" }}
                                  className="formErrors"
                                >
                                  {" "}
                                  {formErrors.name}
                                </span>
                              </b>
                            </p>
                            <input
                              type="text"
                              onChange={onChange}
                              name="name"
                              value={formvalue.name}
                              placeholder="Name"
                            />
                          </div>
                          <div className="form-group">
                            <p>
                              <b>
                                <label>Email</label>
                                <span
                                  style={{ color: "red" }}
                                  className="formErrors"
                                >
                                  {formErrors.email}
                                </span>
                              </b>
                            </p>
                            <input
                              type="text"
                              onChange={onChange}
                              name="email"
                              value={formvalue.email}
                              placeholder="Email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="right-block fresher-test">
                        <button
                          type="button"
                          className="theme_btn tertiary"
                          data-toggle="modal"
                          data-target=".ReadyModal"
                          onClick={(e) => {
                            handleSubmit(e);
                            onSubmit(e);
                          }}
                        >
                          Proceed to eligiblity test{" "}
                          <img src={RightGreen} alt="arrow" className="img-1" />
                          <img
                            src={SvgArrow}
                            className="partners-img img-2"
                            alt=""
                          />
                          <span></span>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="experienced-one"
                    style={{
                      display:
                        selectedId === "experienced-one" ? "block" : "none",
                    }}
                    role="tabpanel"
                    aria-labelledby="experienced-one-tab"
                  >
                    <form>
                      <div className="question-box">
                        <div className="d-flex">
                          <p className="question">
                            <b>Background</b>
                          </p>
                        </div>

                        <fieldset id="group1" className="d-flex select-rdio">
                          <div className="custom-control  custom-radio me-5">
                            <input
                              type="radio"
                              id="radio11"
                              onChange={onChange}
                              name="edu_background"
                              value="tech"
                              checked={formvalue.edu_background === "tech"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio11"
                            >
                              Technical
                            </label>
                          </div>

                          <div className="custom-control  custom-radio">
                            <input
                              type="radio"
                              id="radio21"
                              onChange={onChange}
                              name="edu_background"
                              value="non_tech"
                              checked={formvalue.edu_background === "non_tech"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio21"
                            >
                              Non technical
                            </label>
                          </div>
                        </fieldset>
                        <p style={{ color: "red" }} className="formErrors">
                          {formErrors1.edu_background}
                        </p>

                        <div className="d-flex mt-1">
                          <p className="question">
                            <b>Total experience</b>
                          </p>
                        </div>

                        <fieldset id="group1" className="">
                          <div className="custom-control custom-radio me-5">
                            <input
                              type="radio"
                              id="radio13x"
                              onChange={onChange}
                              name="total_experience"
                              value="2"
                              checked={formvalue.total_experience === "2"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio13x"
                            >
                              0 to 2 years
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio14x"
                              onChange={onChange}
                              name="total_experience"
                              value="5"
                              checked={formvalue.total_experience === "5"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio14x"
                            >
                              2 to 5 years
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio15x"
                              onChange={onChange}
                              name="total_experience"
                              value="7"
                              checked={formvalue.total_experience === "7"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio15x"
                            >
                              5 to 7 years
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio16"
                              onChange={onChange}
                              name="total_experience"
                              value="8"
                              checked={formvalue.total_experience === "8"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio16"
                            >
                              More than 7 years
                            </label>
                          </div>
                        </fieldset>
                        <p style={{ color: "red" }} className="formErrors">
                          {formErrors1.total_experience}
                        </p>
                        <div className="d-flex mt-1">
                          <p className="question">
                            <b>Last drawn salary</b>
                          </p>
                        </div>

                        <fieldset id="group1" className="">
                          <div className="custom-control custom-radio me-5">
                            <input
                              type="radio"
                              id="radio17"
                              onChange={onChange}
                              name="last_salary"
                              value="3"
                              checked={formvalue.last_salary === "3"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio17"
                            >
                              1 to 3 LPA
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio18"
                              onChange={onChange}
                              name="last_salary"
                              value="5"
                              checked={formvalue.last_salary === "5"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio18"
                            >
                              3 to 5 LPA
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio19"
                              onChange={onChange}
                              name="last_salary"
                              value="7"
                              checked={formvalue.last_salary === "7"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio19"
                            >
                              5 to 7 LPA
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio20"
                              onChange={onChange}
                              name="last_salary"
                              value="8"
                              checked={formvalue.last_salary === "8"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio20"
                            >
                              More than 7 LPA
                            </label>
                          </div>
                        </fieldset>
                        <p style={{ color: "red" }} className="formErrors">
                          {formErrors1.last_salary}
                        </p>
                        <div className="d-flex mt-1">
                          <p className="question">
                            <b>Present career gap</b>
                          </p>
                        </div>

                        <fieldset id="group1" className="d-flex select-rdio">
                          <div className="custom-control custom-radio me-5">
                            <input
                              type="radio"
                              id="radio22"
                              onChange={onChange}
                              name="career_gap"
                              value="Yes"
                              checked={formvalue.career_gap === "Yes"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio22"
                            >
                              Yes
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio23"
                              onChange={onChange}
                              name="career_gap"
                              value="No"
                              checked={formvalue.career_gap === "No"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio23"
                            >
                              No
                            </label>
                          </div>
                        </fieldset>
                        <p style={{ color: "red" }} className="formErrors">
                          {formErrors1.career_gap}
                        </p>
                        <fieldset
                          id="group1"
                          style={{
                            display:
                              formvalue.career_gap === "Yes" ? "block" : "none",
                          }}
                          className="select-rdio"
                        >
                          <div className="custom-control custom-radio me-5">
                            <input
                              type="radio"
                              id="radio55"
                              onChange={onChange}
                              name="career_gap_duration"
                              value="3"
                              checked={formvalue.career_gap_duration === "3"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio55"
                            >
                              Less then 3 months
                            </label>
                          </div>

                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="radio56"
                              onChange={onChange}
                              name="career_gap_duration"
                              value="6"
                              checked={formvalue.career_gap_duration === "6"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio56"
                            >
                              3 to 6 months
                            </label>
                          </div>
                          <div className="custom-control custom-radio mb-3">
                            <input
                              type="radio"
                              id="radio57"
                              onChange={onChange}
                              name="career_gap_duration"
                              value="8"
                              checked={formvalue.career_gap_duration === "8"}
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="radio57"
                            >
                              Above 6 months
                            </label>
                          </div>
                        </fieldset>

                        <div className="fresher-form mt-1">
                          <div className="form-group">
                            <p>
                              <b>
                                <label>Name</label>
                                <span
                                  style={{ color: "red" }}
                                  className="formErrors"
                                >
                                  {" "}
                                  {formErrors1.name}
                                </span>
                              </b>
                            </p>
                            <input
                              type="text"
                              onChange={onChange}
                              name="name"
                              value={formvalue.name}
                              placeholder="Name"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <p>
                              <b>
                                <label>Email</label>
                                <span
                                  style={{ color: "red" }}
                                  className="formErrors"
                                >
                                  {formErrors1.email}
                                </span>
                              </b>
                            </p>
                            <input
                              type="text"
                              onChange={onChange}
                              name="email"
                              value={formvalue.email}
                              placeholder="Email"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="right-block fresher-test">
                        <button
                          type="button"
                          className="theme_btn tertiary"
                          data-toggle="modal"
                          data-target=".ReadyModal"
                          onClick={(e) => {
                            handleSubmit1(e);
                            onSubmit(e);
                          }}
                        >
                          Proceed to eligiblity test{" "}
                          <img src={RightGreen} alt="arrow" className="img-1" />
                          <img
                            src={SvgArrow}
                            className="partners-img img-2"
                            alt=""
                          />
                          <span></span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-sm-12 col-md-5">
              <div className="eligiblity-filds-block-1">
                <div className="eligiblity-block-2">
                  <p>Check eligibility to get into companies like</p>
                  <img src={clientimg} />

                  <p className="live">
                    Total of number students given this test <img src={live} />
                  </p>
                  <a
                    style={{ textDecoration: "none" }}
                    href="#"
                    className="number"
                  >
                   {eligibilityCount + 400000}+
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
