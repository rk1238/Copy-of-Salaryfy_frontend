import React,{useState} from 'react'
import Navbar from "../common/navbar";
import Footer from "../common/footer";

import HomeGreen from "../img/home-green.png";
import Home from "../img/home.png";
import Document from "../img/document.png";
import DocumentWhite from "../img/document-white.png";
import process from "../img/process.png";
import ProcessWhite from "../img/process-white.png";
import lockGreen from "../img/icons/lock-green.png";
import lock from "../img/icons/lock.png";
import d5Green from "../img/icons/d-5green.png";
import d5White from "../img/icons/d-5white.png";
import d6Green from "../img/icons/d-6green.png";
import d6White from "../img/icons/d-6white.png";
import Call from "../img/icons/call.png";
import logOut from "../img/icons/log-out.png";
import ThinArrow from "../img/icons/thin-arrow.png";
import dCall from "../img/icons/d-call.png";
import Calendar from "../img/icons/calendar.png";
import planImg from "../img/plan-img.png";
import Check from "../img/check.png";
import View from "../img/view.png";
import planLogo from "../img/plan-logo.png";
import rightArrow from "../img/right-arrow.png";
import conpanyLogo from "../img/conpany-logo.png";

import Upload from "../img/icons/upload.png";
import PenDoc from "../img/icons/pen-doc.png";
import Dcall from "../img/icons/d-call.png";
import axios from "axios";



const AfterScholarshipTestDashboard = () => {
        const Token = JSON.parse(window.localStorage.getItem("token"));
        const [file1, setFile1] = useState({
        aadhar_card:''
        });
        const [file2, setFile2] = useState({
        pan_card:''
        });
        const handleFileChange1 = (event) => {
            setFile1(event.target.files[0]);
        };
    
        const handleSubmit1 = (event) => {
            event.preventDefault();
            const formData1 = new FormData();
            formData1.append("aadhar_card", file1);
            // Call your API endpoint and pass in the formData object
            console.log("hello", file1);
            let config = {
              method: "post",
              url: "http://139.59.82.215:8001/api/document-upload",
              headers: {
                "Content-Type": "multipart/form-data;boundary=<calculated when request is sent>",
                "x-access-token": Token,
              },
              data:formData1,
            };
            axios(config)
              .then(function (res) {})
              .catch(function (error) {
                console.log("error in code");
              });
        };
    
        const handleFileChange2 = (event) => {
           setFile2(event.target.files[0]);
        };

        const handleSubmit2= (event) => {
                event.preventDefault();
                const formData2 = new FormData();
                formData2.append("pan_card", file2);
                // Call your API endpoint and pass in the formData object
                console.log("hello", file2);
                let config = {
                method: "post",
                url: "http://139.59.82.215:8001/api/document-upload",
                headers: {
                    "Content-Type": "multipart/form-data;boundary=<calculated when request is sent>",
                    "x-access-token": Token,
                },
                data:formData2,
                };
                axios(config)
                .then(function (res) {})
                .catch(function (error) {
                    console.log("error in code");
                });
            };
return (
    <React.Fragment>
     <Navbar />
     
     <section className="eligiblity-form-sec student-dashboard select-plan
            range-slider-plan">

            <div className="">
                <div className="row">
                    <div className="col-lg-1">
                        <div className="nav flex-column nav-pills" id="v-pills-tab"
                            role="tablist" aria-orientation="vertical">
                            <a className="nav-link " id="v-pills-home-tab"
                                data-toggle="pill" href="#v-pills-home"
                                role="tab" aria-controls="v-pills-home"
                                aria-selected="true"><img
                                    src={HomeGreen} alt="icon"
                                    className="green-icon" /> <img
                                    src={Home} alt="icon"
                                    className="white-icon" /> </a>
                            <a className="nav-link" id="v-pills-profile-tab"
                                data-toggle="pill" href="#v-pills-profile"
                                role="tab" aria-controls="v-pills-profile"
                                aria-selected="false"><img
                                    src={Document} alt="icon"
                                    className="green-icon" /> <img
                                    src={DocumentWhite}
                                    alt="icon" className="white-icon" /></a>
                            <a className="nav-link" id="v-pills-messages-tab"
                                data-toggle="pill" href="#v-pills-messages"
                                role="tab" aria-controls="v-pills-messages"
                                aria-selected="false"><img
                                    src={process} alt="icon"
                                    className="green-icon" /> <img
                                    src={ProcessWhite}
                                    alt="icon" className="white-icon" /></a>

                            <a className="nav-link" id="v-pills-messages-1-tab"
                                data-toggle="pill" href="#v-pills-messages-1"
                                role="tab" aria-controls="v-pills-messages-1"
                                aria-selected="false"><img
                                    src={lockGreen}
                                    alt="icon"
                                    className="green-icon"/> <img
                                    src={lock}
                                    alt="icon" className="white-icon"/></a>

                            <a className="nav-link" id="v-pills-messages-2-tab"
                                data-toggle="pill" href="#v-pills-messages-2"
                                role="tab" aria-controls="v-pills-messages-2"
                                aria-selected="false"><img
                                    src={d5Green}
                                    alt="icon"
                                    className="green-icon" /> <img
                                    src={d5White}
                                    alt="icon" className="white-icon" /></a>

                            <a className="nav-link active" id="v-pills-messages-3-tab"
                                data-toggle="pill" href="#v-pills-messages-3"
                                role="tab" aria-controls="v-pills-messages-3"
                                aria-selected="false"><img
                                    src={d6Green}
                                    alt="icon"
                                    className="green-icon"/> <img
                                    src={d6White}
                                    alt="icon" className="white-icon" />
                            </a>

                        </div>

                        <a className="call-btn-2"> <img src={Call} alt="arrow"/></a>

                        <div className="log-out-div">
                            <a className="nav-link " id="v-pills-home-tab"
                                data-toggle="pill" href="#v-pills-home"
                                role="tab" aria-controls="v-pills-home"
                                aria-selected="true"><img
                                    src={logOut}
                                    alt="icon"
                                    className="green-icon" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-10 m-auto">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade col-lg-9 m-auto"
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab">
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="select-block
                                            input-form">


                                            <div className="form-group">
                                                <label htmlFor="">Name</label>
                                                <input type="text"
                                                    className="form-control"
                                                    id=""
                                                    aria-describedby=""
                                                    placeholder="Name"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Phone number</label>
                                                <input type="phone"
                                                    className="form-control"
                                                    id=""
                                                    aria-describedby=""
                                                    placeholder="+91 xxxx xxxx"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">City</label>
                                                <input type="text"
                                                    className="form-control"
                                                    id=""
                                                    aria-describedby=""
                                                    placeholder="City"/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="">Gender</label>
                                                <input type="text"
                                                    className="form-control"
                                                    id=""
                                                    aria-describedby=""
                                                    placeholder="Gender"/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="">Age</label>
                                                <input type="text"
                                                    className="form-control"
                                                    id=""
                                                    aria-describedby=""
                                                    placeholder="23"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="select-block
                                            input-form">


                                            <div className="form-group">
                                                <label htmlFor="">Graduation
                                                    program name</label>
                                                <input type="text"
                                                    className="form-control"
                                                    id=""
                                                    aria-describedby=""
                                                    placeholder="Bachelors in ..."/>

                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Current
                                                    semester (if any)</label>
                                                <input type="text"
                                                    className="form-control"
                                                    id=""
                                                    aria-describedby=""
                                                    placeholder="1st" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Post
                                                    Graduation Program Name
                                                    (if any)</label>
                                                <input type="text"
                                                    className="form-control"
                                                    id=""
                                                    aria-describedby=""
                                                    placeholder="Master in..." />

                                            </div>



                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <button type="button"
                                        className="theme_btn edit_btn">Edit
                                        <span></span>
                                    </button>

                                    <button type="button"
                                        className="theme_btn gray_btn">Save
                                        <span></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                            <div className="tab-pane fade basket-banner"
                                id="v-pills-profile" role="tabpanel"
                                aria-labelledby="v-pills-profile-tab">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="col-lg-11">


                                            <div className="dashboard-content">
                                                <h2 className="h2">Hi Rahul,
                                                    congratulations!</h2>
                                                <p className="para">You have score
                                                    68% in the merit test and
                                                    you are eligible for 50% off
                                                    on your security deposit.</p>
                                            </div>

                                            <div className="scholarship-test">
                                                <div className="row scholarship_row align-items-center"
                                                    >
                                                    <div className="col-lg-8">
                                                        <p>score mitter</p>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div
                                                            className="dashboard-mitter">
                                                            <p
                                                                className="text-center">Your
                                                                security fees is
                                                                now reduced to</p>
                                                            <h2>₹5000</h2>
                                                        </div>
                                                    </div>

                                                    <div className="buttons-div">
                                                        <div className="right-block
                                                            fresher-test">
                                                            <a
                                                                href="/skill-programs-page"
                                                                className="theme_btn
                                                                transparent">
                                                                Take retest
                                                                <span></span>
                                                            </a>
                                                        </div>
                                                        <div className="right-block
                                                            fresher-test">
                                                            <a
                                                                href="/basket-payment"
                                                                className="theme_btn
                                                                tertiary">
                                                                Deposit now <img
                                                                    src={ThinArrow}
                                                                    alt="arrow"/>
                                                                <span></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 basket-row">
                                        <div className="summary-table mb-5">
                                            <h2 className="text-center mb-4">Having
                                                doubts?</h2>
                                            <div className="table-responsive-xl
                                                special-inclusions-table">
                                                <div className="having-doughts-sec">
                                                    <p className="text-center">Call
                                                        our coucellor subtext
                                                        here</p>
                                                    <div className="call-session">
                                                        <p>Call us now!</p>
                                                        <p className="number-cell"><a
                                                                href="#">+91 99882 27778</a></p>
                                                        <img
                                                            src={dCall}
                                                            alt="icon"
                                                            className="icon"/>
                                                    </div>
                                                    <p className="text-center mt-3">or</p>
                                                    <div className="call-session">
                                                        <p>Let us call you!</p>
                                                        <p className="number-cell">
                                                            <a href="#"> Book a
                                                                slot now</a></p>
                                                        <img
                                                            src={Calendar}
                                                            alt="icon"
                                                            className="icon" />
                                                    </div>


                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                           
                            <div className="tab-pane fade basket-banner"
                                id="v-pills-messages"
                                role="tabpanel"
                                aria-labelledby="v-pills-messages-tab">

                                <div className="row basket-row">
                                    <div className="col-lg-8">
                                        <div className="verticle-timeline
                                            col-lg-10">
                                            <div className="container">
                                                <div className="timeline">
                                                    <div
                                                        className="timeline-container
                                                        warning">
                                                        <div
                                                            className="timeline-icon">
                                                        </div>
                                                        <div
                                                            className="timeline-body">
                                                            <a href="#"><h4
                                                                    className="timeline-title">Eligiblity</h4></a>
                                                            <p>Subtext</p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="timeline-container
                                                        warning">
                                                        <div
                                                            className="timeline-icon">
                                                        </div>
                                                        <div
                                                            className="timeline-body">
                                                            <a href="#"><h4
                                                                    className="timeline-title">Registration</h4></a>
                                                            <p>Your application
                                                                has been
                                                                successfully
                                                                submitted.
                                                                Please make sure
                                                                all the
                                                                details are
                                                                filled
                                                                correctly.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="timeline-container
                                                        warning">
                                                        <div
                                                            className="timeline-icon">
                                                        </div>
                                                        <div
                                                            className="timeline-body">
                                                            <a href="#"><h4
                                                                    className="timeline-title">Call
                                                                    Schedule</h4></a>
                                                            <p>Your call has
                                                                been
                                                                scheduled with
                                                                our
                                                                admission
                                                                officer
                                                                to guide to the
                                                                next
                                                                step smothly.</p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="timeline-container
                                                        warning">
                                                        <div
                                                            className="timeline-icon">
                                                        </div>
                                                        <div
                                                            className="timeline-body">
                                                            <a href="#"><h4
                                                                    className="timeline-title">Scholarship
                                                                    test</h4></a>
                                                            <p>Please take your
                                                                scholarshio test
                                                                to get
                                                                100% off on
                                                                security
                                                                fees if you
                                                                score 70% or
                                                                above.</p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="timeline-container
                                                        warning commencement">
                                                        <div
                                                            className="timeline-icon">
                                                        </div>
                                                        <div
                                                            className="timeline-body">
                                                            <a href="#"><h4
                                                                    className="timeline-title">ClassNameclassName
                                                                    commencement</h4></a>
                                                            <p>As soon as you
                                                                pay the
                                                                secuirity
                                                                deposite, your
                                                                className details
                                                                will be
                                                                provided.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="summary-table mb-5">
                                            <h2 className="text-center mb-4">Having
                                                doubts?</h2>
                                            <div className="table-responsive-xl
                                                special-inclusions-table">
                                                <div className="having-doughts-sec">
                                                    <p className="text-center">Call
                                                        our coucellor subtext
                                                        here</p>
                                                    <div className="call-session">
                                                        <p>Call us now!</p>
                                                        <p className="number-cell"><a
                                                                href="#">+91
                                                                99882 27778</a></p>
                                                        <img
                                                            src={dCall}
                                                            alt="icon"
                                                            className="icon"/>
                                                    </div>
                                                    <p className="text-center mt-3">or</p>
                                                    <div className="call-session">
                                                        <p>Let us call you!</p>
                                                        <p className="number-cell"><a
                                                                href="#">Book a
                                                                slot now</a></p>
                                                        <img
                                                            src={Calendar}
                                                            alt="icon"
                                                            className="icon"/>
                                                    </div>


                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div className="tab-pane fade basket-banner m-auto"
                                id="v-pills-messages-1"
                                role="tabpanel"
                                aria-labelledby="v-pills-messages-1-tab">

                               

                                <div className="row eligiblity-form-filds">
                                    <div className="col-lg-4">
                                        <div className="eligiblity-filds-block-1">
                                            <div className="eligiblity-block">
                                                <h1 className="mb-2"> Rahul, please
                                                    select your mode of
                                                    enrollment</h1>
                                                <p>for “Name of the program” and
                                                    more here as subtext</p>
                                            </div>
                                            <div className="eligiblity-block-2">
                                                <p>Trusted By 400+ Hiring
                                                    Partners</p>
                                                <img
                                                    src={planImg} alt=''/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <h2 className="recommended-heading">Recommended</h2>
                                        <div className="select-plan
                                            recommended-plan">
                                            <p>PAY AFTER PLACEMENT PLAN (PPAP)</p>
                                            <p className="price price-2">₹0</p>
                                            <p className="price-define"><span>Based
                                                    on merit test</span></p>
                                            <ul>
                                                <li><img
                                                        src={Check} alt=''/>
                                                    Pay only security fee</li>
                                                <li><img
                                                        src={Check} alt=''/>
                                                    15% of ISA</li>
                                                <li><img
                                                        src={Check} alt=''/>
                                                    100% job guarantee</li>
                                                <li><img
                                                        src={Check} alt=''/>
                                                    One more point here</li>
                                            </ul>
                                            <div className="buttons">
                                                <div className="w-100">
                                                    <a href="#"
                                                        className="view-plan"><img
                                                            src={View} alt=''/>
                                                        View full details</a>
                                                </div>
                                                <div className="w-100">
                                                    <a
                                                        href="registration-page.html"
                                                        className="theme_btn
                                                        tertiary"> Proceed
                                                        <span></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="select-plan select-plan-2">
                                            <p>REGULAR PLAN</p>
                                            <p className="price price-2">₹1,00,000</p>
                                            <p className="price-define"><span>Scholarship
                                                    available</span></p>
                                            <ul>

                                                <li><img
                                                        src={Check} alt=''/>
                                                    Pay one time fee</li>
                                                <li><img
                                                        src={Check} alt=''/>
                                                    100% job guarantee</li>
                                                <li><img
                                                        src={Check} alt=''/>
                                                    Subtext here</li>
                                                <li><img
                                                        src={Check} alt=''/>Subtext
                                                    here</li>

                                            </ul>
                                            <div className="buttons">
                                                <div className="w-100">
                                                    <a href="#"
                                                        className="view-plan"><img
                                                            src={View} alt=''/>
                                                        View full details</a>
                                                </div>
                                                <div className="w-100">
                                                    <a
                                                        href="registration-page.html"
                                                        className="theme_btn
                                                        tertiary"> Proceed
                                                        <span></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dashboard-plan-logo">
                                        <img
                                            src={planLogo} alt=''/>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade basket-banner m-auto"
                                id="v-pills-messages-2"
                                role="tabpanel"
                                aria-labelledby="v-pills-messages-2-tab">

                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="col-lg-11">


                                            <div className="dashboard-content">
                                                <h2>Scholarship Test</h2>
                                                <p>Sub text here</p>
                                            </div>

                                            <div className="scholarship-test">
                                                <div className="row scholarship_row align-items-center">
                                                    <div className="col-lg-5">
                                                        <form>
                                                            <div
                                                                className="form-group
                                                                scholarship-select">
                                                                <select>
                                                                    <option
                                                                        selected="">Study
                                                                        maretial
                                                                        &nbsp;</option>
                                                                    <option>one</option>
                                                                    <option>two</option>
                                                                </select>
                                                            </div>
                                                            <div
                                                                className="form-group
                                                                scholarship-select">
                                                                <select
                                                                    type="button">
                                                                    <option
                                                                        selected="">Merit
                                                                        criteria
                                                                        &nbsp;</option>
                                                                    <option>one</option>
                                                                    <option>two</option>
                                                                </select>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="col-lg-7">
                                                        <div
                                                            className="green_block_test">
                                                            <a href="#"><p>Give
                                                                    <span>scholarship</span>
                                                                    test now
                                                                    <img
                                                                        src={rightArrow} alt=''/>
                                                                </p></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p>This scholarship test is a
                                                    standard test module for
                                                    getting
                                                    into companies like</p>
                                                <img
                                                    src={conpanyLogo} alt='' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 basket-row">
                                        <div className="summary-table mb-5">
                                            <h2 className="text-center mb-4">Having
                                                doubts?</h2>
                                            <div className="table-responsive-xl
                                                special-inclusions-table">
                                                <div className="having-doughts-sec">
                                                    <p className="text-center">Call
                                                        our coucellor subtext
                                                        here</p>
                                                    <div className="call-session">
                                                        <p>Call us now!</p>
                                                        <p className="number-cell"><a
                                                                href="#">+91 99882 27778</a>
                                                        </p>
                                                        <img
                                                            src={dCall}
                                                            alt="icon"
                                                            className="icon"/>
                                                    </div>
                                                    <p className="text-center mt-3">or</p>
                                                    <div className="call-session">
                                                        <p>Let us call you!</p>
                                                        <p className="number-cell"><a
                                                                href="#">Book a
                                                                slot now</a></p>
                                                        <img
                                                            src={Calendar}
                                                            alt="icon"
                                                            className="icon"/>
                                                    </div>


                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade show active
                                range-slider-tab"
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
                                                    <p>Choose learning format</p>
                                                </li>
                                                <li>

                                                    <span>3</span>
                                                    <p>Get job ready</p>
                                                </li>
                                            </ol>
                                        </div>
                                        <div className="row basket-banner
                                            eligiblity-form-filds">
                                            <div className="col-lg-8">
                                                <div className="range-slider-sec
                                                    calculator-sec">
                                                    <div className="range-list">
                                                        <h3>Hi Rahul, </h3>
                                                        <p>please upload your
                                                            document and sign
                                                            your ISA</p>
                                                    </div>

                                                    <div className="row upload-row">
                                                        <div className="col-lg-4
                                                            col-md-6 col-12">
                                                            <div
                                                                className="document-upload-wrapper">
                                                                <img
                                                                    src={Upload}
                                                                    alt="icon"
                                                                    className="icon" />
                                                                  <input type="file" onChange={handleFileChange1} />
                                                                {/* <a href="#" onChange={handleFileChange}>Upload
                                                                      Aadhar card</a> */}
                                                                <button type="submit" onClick={handleSubmit1}>Upload Aadhar Card</button>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4
                                                            col-md-6 col-12">
                                                            <div
                                                                className="document-upload-wrapper">
                                                                <img
                                                                    src={Upload}
                                                                    alt="icon"
                                                                      className="icon" />
                                                                   <input type="file" onChange={handleFileChange2} />
                                                                {/* <a href="#">Upload
                                                                    Pan <br/> card</a> */}
                                                                   <button type="submit" onClick={handleSubmit2}>Upload Pan Card</button>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4
                                                            col-md-6 col-12">
                                                            <div
                                                                className="document-upload-wrapper">
                                                                <img
                                                                    src={PenDoc}
                                                                    alt="icon"
                                                                    className="icon"/>
                                                                <a
                                                                    href="/AgreementPage">Sign your
                                                                    ISA now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 basket-row">
                                                <div className="summary-table mb-5">
                                                    <h2 className="text-center
                                                        mb-4">Having
                                                        doubts?</h2>
                                                    <div
                                                        className="table-responsive-xl
                                                        special-inclusions-table">
                                                        <div
                                                            className="having-doughts-sec">
                                                            <p
                                                                className="text-center">Call
                                                                our coucellor
                                                                subtext
                                                                here</p>
                                                            <div
                                                                className="call-session">
                                                                <p>Call us now!</p>
                                                                <p
                                                                    className="number-cell"><a
                                                                        href="#">+91
                                                                        99882
                                                                        27778</a></p>
                                                                <img
                                                                    src={Dcall}
                                                                    alt="icon"
                                                                    className="icon"/>
                                                            </div>
                                                            <p
                                                                className="text-center
                                                                mt-3">or</p>
                                                            <div
                                                                className="call-session">
                                                                <p>Let us call
                                                                    you!</p>
                                                                <p
                                                                    className="number-cell"><a
                                                                        href="#">Book
                                                                        a
                                                                        slot now</a></p>
                                                                <img
                                                                     src={Calendar}
                                                                    alt="icon"
                                                                    className="icon"/>
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



    {/* modal */}

        <div className="modal fade sign-in-modal test-submit-modal
            scholarship-modal"
            id="submitTestModal" tabindex="-1"
            role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">

                        <button type="button" className="close" data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body ready-list">
                        <h2>Confirmation</h2>

                        <p className="message ">You are about to proceed for
                            scholarship test.
                            More details here like 30mins duration</p>

                        <div className="scholarship-table">
                            <p className="left-para">Merit criteria</p>

                            <div className="table-responsive-xl
                                special-inclusions-table">
                                <table className="table table-bordered">
                                    <tbody>
                                          <tr>
                                            <td>Above 70%</td>
                                            <td>70% to 50%</td>
                                            <td>Bellow 50%</td>
                                        </tr>
                                        <tr>

                                            <td>free</td>
                                            <td> ₹ 10,000</td>
                                            <td> ₹ 20,000</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="test-box">
                            <button type="button" className="theme_btn
                                transparent" data-toggle="modal"
                                data-target="#submitTestModal-1"
                                data-dismiss="modal">
                                Back
                                <span></span>
                            </button>
                            <a href="" type="button"
                                className="theme_btn
                                ">
                                Proceed
                                <span></span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
          </div>
    <Footer />
    </React.Fragment>
  )
}

export default AfterScholarshipTestDashboard