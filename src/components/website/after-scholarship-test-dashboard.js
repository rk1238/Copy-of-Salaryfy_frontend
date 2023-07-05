import React, { useEffect, useState, useRef } from "react";
import NavbarTwo from "../common/navbar-two";
import "../js/course_detail_counter";
import HomeGreen from "../img/home-green.png";
// import Footer from "../common/footer";
import Home from "../img/home.png";
import Document from "../img/document.png";
import DocumentWhite from "../img/document-white.png";
import process from "../img/process.png";
import ProcessWhite from "../img/process-white.png";

import d5Green from "../img/icons/d-5green.png";
import d5White from "../img/icons/d-5white.png";

import Call from "../img/icons/call.png";
import logOut from "../img/icons/log-out.png";

import dCall from "../img/icons/d-call.png";
import dMail from "../img/mail.png";
import Calendar from "../img/icons/calendar.png";

import rightArrow from "../img/right-arrow.png";
import conpanyLogo from "../img/conpany-logo.png";

import dlOne from "../img/dl-1.png";
import dlTwo from "../img/dl-2.png";
import dlThree from "../img/dl-3.png";

import dlFive from "../img/dl-5.png";

import Expand from "../img/expand-img.png";
import axios from "axios";
import { StyledSpeedometer } from "../styles/SpeedometerStyle.style";
import { Wrapper } from "../styles/Wrapper.style";

import { StyledSpeedometerWeb } from "../styles/SpeedometerStyle.web";
import { WrapperWeb } from "../styles/Wrapper.web";

import FlipNumbers from "react-flip-numbers";
import { ApiBaseUrl } from "../BaseUrl/baseUrl";
import Paid from "../img/paid.gif";
import arrow from "../img/arrow.png";
import congratsLeft from "../img/congrats-left.png";
import CongratsRight from "../img/congrats-right.png";
import { useNavigate } from "react-router-dom";

import SvgArrow from "../img/arrow-svg.svg";
import RightGreen from "../img/right-green.png";
import studentEligibility from '../img/student-eligibility.png';
import './index.css'


const AfterScholarshipTestDashboard = (isReadOnly) => {
  let navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("name"));
  const [timeRemaining, setTimeRemaining] = useState(10000);
  const [ProfileData, setProfileData] = useState({
    name: "",
    phone: "",
    city: "",
    gender: "",
    age: "",
    gradProName: "",
    current_semester: "",
    postGradProName: "",
  });
  const [processGet, setProcessGet] = useState();

  const scholarPer = JSON.parse(window.localStorage.getItem("total_percentage"));

  const scholarFee=JSON.parse(window.localStorage.getItem("security_fee"));
 
  const totalAttempts=JSON.parse(window.localStorage.getItem("total_attempts"));
  const transaction=JSON.parse(window.localStorage.getItem("transaction"));
  const Token = JSON.parse(window.localStorage.getItem("token"));
  const [isSubmitted, setIsSubmitted] = useState(false);
 
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIssubmit] = useState(false);

  // const [payment, setPayment] = useState({
  //   price: scholarFee,
  //   name: "Salaryfy",
  // });

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
          localStorage.setItem("name", `"${ProfileData.name}"`);
          const homeTab = document.getElementById("v-pills-messages-tab");
          const homeTab2 = document.getElementById("v-pills-messages-one-tab");
          if (homeTab) {
            homeTab.click();
          } if (homeTab2) {
            homeTab2.click();
          }
        })
        .catch(function (error) {
          console.log("error in code");
        });
    }
    else {
      setFormErrors(formErrors);
    }
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

 

  function Counter({ maxValue }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        if (count === maxValue) {
          clearInterval(interval);
        } else {
          setCount(count + 1);
        }
      }, 50);

      return () => clearInterval(interval);
    }, [count, maxValue]);

    return <>{count}</>;
  }

  // responsive speedometer start ===================================================
  // const speed = Math.round(scholarPer)
  const speed = Math.round(scholarPer);
  const turnRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (speed === 0) {
      const speed2 = 0;
      const turn = (0 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.0}turn)`;
    }

    if (speed > 0 && speed < 10) {
      const speed2 = 0;
      const turn = (1 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.23}turn)`;
    }
    if (speed === 10) {
      const speed2 = 0;
      const turn = (2 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    if (speed > 10 && speed < 13) {
      const speed2 = 0;
      const turn = (3 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed === 13) {
      const speed2 = 1;
      const turn = (3 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed === 14 && speed === 15) {
      const speed2 = 1;
      const turn = (5 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed > 15 && speed < 20) {
      const speed2 = 1;
      const turn = (6 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed === 20) {
      const speed2 = 3;
      const turn = (5 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed > 20 && speed <= 25) {
      const speed2 = 3;
      const turn = (6 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed > 25 && speed < 30) {
      const speed2 = 3.5;
      const turn = (7 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed === 30) {
      const speed2 = 4;
      const turn = (7 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed > 30 && speed < 35) {
      const speed2 = 4;
      const turn = (8 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed === 35) {
      const speed2 = 5;
      const turn = (9 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed === 36) {
      const speed2 = 5;
      const turn = (12 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed === 37) {
      const speed2 = 6;
      const turn = (11.5 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed === 38 || speed === 39) {
      const speed2 = 7;
      const turn = (12 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed > 39 && speed <= 46) {
      const speed2 = 7;
      const turn = (14 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed > 46 && speed <= 55) {
      const speed2 = 7;
      const turn = (14.2 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed > 55 && speed < 60) {
      const speed2 = 7;
      const turn = (14.4 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed === 60) {
      const speed2 = 8;
      const turn = (14.5 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed > 60 && speed < 65) {
      const speed2 = 8;
      const turn = (15 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed === 65) {
      const speed2 = 9;
      const turn = (16 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed > 65 && speed < 74) {
      const speed2 = 9;
      const turn = (18 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed === 74) {
      const speed2 = 9;
      const turn = (19 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed === 75) {
      const speed2 = 10;
      const turn = (21 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed > 75 && speed < 78) {
      const speed2 = 10;
      const turn = (22 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed === 78) {
      const speed2 = 11;
      const turn = (22 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed > 78 && speed < 80) {
      const speed2 = 11;
      const turn = (25 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed === 80) {
      const speed2 = 16;
      const turn = (22 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed > 80 && speed < 84) {
      const speed2 = 16;
      const turn = (24.5 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed === 84) {
      const speed2 = 17;
      const turn = (24.1 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed > 84 && speed < 87) {
      const speed2 = 17;
      const turn = (24.2 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed === 87) {
      const speed2 = 18;
      const turn = (23 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed > 87 && speed < 90) {
      const speed2 = 18;
      const turn = (23.5 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed === 90) {
      const speed2 = 19;
      const turn = (24.7 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed > 90 && speed < 100) {
      const speed2 = 19;
      const turn = (26 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed > 94 && speed < 100) {
      const speed2 = 19;
      const turn = (27 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speed === 100) {
      const speed2 = 21;
      const turn = (25 + speed2) / 100;
      //turnRef.current.style.transform = `rotate(${turn}turn)`;
      //sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
  }, [speed]);

  // responsive speedometer end ===================================================

  // web speedometer start ===================================================

  // const speedweb = Math.round(scholarPer)
  const speedweb = Math.round(scholarPer);
  const turnRefWeb = useRef(null);
  const sliderRefWeb = useRef(null);

  useEffect(() => {
    if (speedweb === 0) {
      const speed2 = 0;
      const turn = (0 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.0}turn)`;
    }
    if (speedweb > 0 && speedweb < 10) {
      const speed2 = 0;
      const turn = (1 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.23}turn)`;
    }
    if (speedweb === 10) {
      const speed2 = 0;
      const turn = (1.5 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    if (speedweb > 10 && speedweb < 13) {
      const speed2 = 0;
      const turn = (2 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb === 13) {
      const speed2 = 1;
      const turn = (2.3 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb === 14 || speedweb === 15) {
      const speed2 = 1;
      const turn = (5 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb > 15 && speedweb < 20) {
      const speed2 = 1;
      const turn = (4 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb === 20) {
      const speed2 = 3;
      const turn = (5 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb > 20 && speedweb <= 25) {
      const speed2 = 3;
      const turn = (5.5 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb > 25 && speedweb < 30) {
      const speed2 = 3.5;
      const turn = (6 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb === 30) {
      const speed2 = 4;
      const turn = (7 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb > 30 && speedweb < 35) {
      const speed2 = 4;
      const turn = (7.5 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb === 35 || speedweb === 36) {
      const speed2 = 5;
      const turn = (9 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb === 37) {
      const speed2 = 6;
      const turn = (11.5 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb === 38 || speedweb === 39) {
      const speed2 = 7;
      const turn = (12 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb > 39 && speedweb <= 46) {
      const speed2 = 7;
      const turn = (13 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb > 46 && speedweb <= 55) {
      const speed2 = 7;
      const turn = (14.2 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb > 55 && speedweb < 60) {
      const speed2 = 7;
      const turn = (14.4 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb === 60) {
      const speed2 = 8;
      const turn = (14.5 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb > 60 && speedweb < 65) {
      const speed2 = 8;
      const turn = (15 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb === 65) {
      const speed2 = 9;
      const turn = (15 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb > 65 && speedweb < 70) {
      const speed2 = 9;
      const turn = (17 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb === 70) {
      const speed2 = 9;
      const turn = (18 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb > 70 && speedweb < 75) {
      const speed2 = 9;
      const turn = (18 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb === 75) {
      const speed2 = 10;
      const turn = (21 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb > 75 && speedweb < 78) {
      const speed2 = 10;
      const turn = (22.5 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb === 78) {
      const speed2 = 11;
      const turn = (23 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb > 78 && speedweb < 80) {
      const speed2 = 11;
      const turn = (25 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb === 80) {
      const speed2 = 16;
      const turn = (23 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb > 80 && speedweb < 84) {
      const speed2 = 16;
      const turn = (24 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb === 84) {
      const speed2 = 17;
      const turn = (24.1 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb > 84 && speedweb < 87) {
      const speed2 = 17;
      const turn = (24.2 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb === 87) {
      const speed2 = 18;
      const turn = (24.3 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb > 87 && speedweb < 90) {
      const speed2 = 18;
      const turn = (24 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb === 90) {
      const speed2 = 19;
      const turn = (24.7 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb > 90 && speedweb < 100) {
      const speed2 = 19;
      const turn = (25.7 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } else if (speedweb === 100) {
      const speed2 = 21;
      const turn = (27 + speed2) / 100;
      //turnRefWeb.current.style.transform = `rotate(${turn}turn)`;
      //sliderRefWeb.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
  }, [speedweb]);

  // web speedometer end ===================================================

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("scholarFee====", scholarFee);
      setTimeRemaining((timeRemaining) => {
        if (timeRemaining <= scholarFee) {
          clearInterval(timer);
          return scholarFee;
        }
        return timeRemaining - 1000;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [scholarFee]);

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_ZVzgeczmpnmT1U",
      key_secret: "sdXm9TSBD79fkY6aOeDD5vTR",
      amount: data.amount,
      type: data.type,
      currency: data.currency,
      name: "Salaryfy",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = ApiBaseUrl+"payment/verify";
          const config = {
            headers: {
              "x-access-token": Token,
            },
          };
          const { data } = await axios.post(verifyUrl, response, config);
          const paymentSuccessModal =
            document.getElementById("paymentSucessfull");
          if (paymentSuccessModal) {
            paymentSuccessModal.classList.add("show");
            paymentSuccessModal.style.display = "block";

            setTimeout(() => {
              paymentSuccessModal.classList.remove("show");
              paymentSuccessModal.style.display = "none";

              const submitTestModal =
                document.getElementById("submitTestModalNew");
              if (submitTestModal) {
                submitTestModal.classList.add("show");
                submitTestModal.style.display = "block";
              }
            }, 1200);
          }
        } catch (error) {
          console.log(error);
        }
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = ApiBaseUrl+"payment/orders";
      const config = {
        headers: {
          "x-access-token": Token,
        },
      };
      const { data } = await axios.post(
        orderUrl,
        { amount: scholarFee, type: "2" },
        config
      );
      console.log({ data });
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
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
    if (!values.current_semester) {
      errors.current_semester = "required*";
    }
    return errors;
  };
  
  const onSubmit = (e) => {
    setFormErrors(validate(ProfileData));
    setIssubmit(true);
    e.preventDefault();
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
                aria-orientation="vertical"
              >
                <a
                  className="nav-link active"
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  href="#v-pills-profile"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="true"
                >
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
                  aria-selected="false"
                >
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
                  aria-selected="false"
                >
                  <img src={process} alt="icon" className="green-icon" />{" "}
                  <img src={ProcessWhite} alt="icon" className="white-icon" />
                </a>

                <a
                  className="nav-link"
                  id="v-pills-messages-2-tab"
                  data-toggle="pill"
                  href="#v-pills-messages-2"
                  role="tab"
                  aria-controls="v-pills-messages-2"
                  aria-selected="false"
                >
                  <img src={d5Green} alt="icon" className="green-icon" />{" "}
                  <img src={d5White} alt="icon" className="white-icon" />
                </a>
              </div>

              <a className="call-btn-2 expand-button">
                {" "}
                <img src={Call} alt="arrow" className="expand-img" />
                <img src={Expand} alt="" className="expand-img-2" />
                <div className="d-block">
                  <p className="text">Need help?</p>
                  <p>Chat or call with our counselor</p>
                </div>
              </a>

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
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active basket-banner"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="col-lg-11">
                      <h1 className="studentEligibilityTitle">Hi Rahul</h1>
                      <div className="studentEligibilityContainerMain">
                        
                     
                        <div className="studentEligibilityContainer">
                        <div className="studentEligibilityContainerFirst">
                        <h3>Congratulations!</h3>
                          <p>You have scored</p>
                          <h1>80%</h1>
                        </div>
                          <div>
                            <img src={studentEligibility} alt="student" />
                          </div>
                        </div>
                        <div className="studentEligibilityParagraph">you are eligible for <b>50% OFF</b>on your security deposit.</div>
                        <div className="studentEligibilityParagraph">Your security fees in now reduced to 5000.</div>
                      </div>
                      <div className="studentEligibilityButtonContainer">
                        <button className="retakeTest">Take retest</button>
                        <button onClick={()=>{
                          navigate('/UploadDocs')
                        }} className="depositNow">Deposit now</button>
                      </div>
                      </div>
                    </div>
                    <div className="col-lg-4 basket-row dashboard_speedo_dought">
                      <div className="summary-table mb-5">
                        <h2 className="text-center mb-4">Having doubts?</h2>
                        <div
                          className="table-responsive-xl
                                                special-inclusions-table"
                        >
                          <div className="having-doughts-sec">
                            <p className="text-center">
                             Get in touch with our counselor
                            </p>
                            <div className="call-session">
                              <p>Call us now!</p>
                              <p className="number-cell">
                                <a href="#">+91 99882 27778</a>
                              </p>
                              <img src={dCall} alt="icon" className="icon" />
                            </div>
                            <p className="text-center mt-3">or</p>
                            <div className="call-session">
                              <p>Let us call you!</p>
                              <p className="number-cell">
                                <a href="#"> Book a slot now</a>
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
                  className="tab-pane fade  col-lg-9 m-auto mt-5"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab "
                >
                 
                  <form>
                    <div className="row mt-5">
                      <div className="col-lg-6 ">
                        <div
                          className="select-block
                                            input-form"
                        >
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
                            <label htmlFor="">Graduation program name</label>
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
                            <label htmlFor="">Current semester (if any)</label>

                                 <span
                                  style={{ color: "red" }}
                                  className="formErrors"
                                  >
                                  {formErrors.current_semester}
                                  </span>
                            
                            <input
                              type="text"
                              className="form-control"
                              name="current_semester"
                              defaultValue={ProfileData?.current_semester}
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
                              name="postGradProName"
                              defaultValue={
                                ProfileData?.postGradProName
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
                        onClick={SubmitTestForm}
                      >
                        Edit
                        <span></span>
                      </button> */}
                       {isSubmitted ? <p>Form submitted successfully!</p> : ""}
                      <button
                        type="button"
                        className="theme_btn edit_btn"
                        onClick={SubmitTestForm}
                      >
                        Save & Submit
                        <span></span>
                      </button>
                    </div>
                  </form>
                </div>

                <div
                  className="tab-pane fade basket-banner"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <div className="row basket-row">
                    <div className="col-lg-8">
                      {processGet === 3 ? (
                        <div className="verticle-timeline col-lg-10">
                          <div className="container">
                            <div className="timeline">
                              <div className="timeline-container warning">
                                <div className="timeline-icon"></div>
                                <div className="timeline-body">
                                  <a href="#">
                                    <h4 className="timeline-title">
                                      Eligiblity
                                    </h4>
                                  </a>
                                  <p>Subtext</p>
                                </div>
                              </div>
                              -
                              <div className="timeline-container warning">
                                <div className="timeline-icon"></div>

                                <div className="timeline-icon"></div>
                                <div className="timeline-body">
                                  <a href="#">
                                    <h4 className="timeline-title">
                                      Registration
                                    </h4>
                                  </a>
                                  <p>
                                    Your application has been successfully
                                    submitted. Please make sure all the details
                                    are filled correctly.
                                  </p>
                                </div>
                              </div>
                              <div
                                className="timeline-container
                                                        warning"
                              >
                                <div className="timeline-icon"></div>
                                <div className="timeline-body">
                                  <a href="#">
                                    <h4 className="timeline-title">
                                      Scholarship test
                                    </h4>
                                  </a>
                                  <p>
                                    Please take your scholarshio test to get
                                    100% off on security fees if you score 70%
                                    or above.
                                  </p>
                                </div>
                              </div>
                              <div className="timeline-container warning commencement">
                                <div className="timeline-icon"></div>
                                <div className="timeline-body">
                                  <a href="#">
                                    <h4 className="timeline-title">
                                      Call Schedule
                                    </h4>
                                  </a>
                                  <p>
                                    Your call has been scheduled with our
                                    admission officer to guide to the next step
                                    smothly.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="col-lg-4">
                      <div className="summary-table mb-5">
                        <h2 className="text-center mb-4">Having doubts?</h2>
                        <div
                          className="table-responsive-xl
                                                special-inclusions-table"
                        >
                          <div className="having-doughts-sec">
                            <p className="text-center">
                             Get in touch with our counselor
                            </p>
                            <div className="call-session">
                              <p>Call us now!</p>
                              <p className="number-cell">
                                <a href="#">+91 99882 27778</a>
                              </p>
                              <img src={dCall} alt="icon" className="icon" />
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
                  className="tab-pane fade basket-banner m-auto"
                  id="v-pills-messages-2"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-2-tab"
                >
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="dashboard-content">
                        <h2>Merit Test</h2>
                        {/* <p>Sub text here</p> */}
                      </div>

                      <div className="scholarship-test ">
                        <div className="scholarship-test-wrapper">
                          <h6>Objective</h6>
                          <p>
                            The objective of the merit test is to comprehend the
                            academic skills of the learner.The Institute seeks
                            to assist a student who is academically strong
                            through the merit test.And hence, the questions for
                            the Merit test will be based on the Course that the
                            student has opted for.
                          </p>
                        </div>

                        <div className="scholarship-test-wrapper scholarship_row">
                          <h6>Details</h6>
                          <ul>
                            <li>The Merit test contains 30 questions.</li>
                            <li>Each question carry 1 mark.</li>
                            <li>There is no negative marking in the Test.</li>
                            <li>The Duration of the Merit test is 15 mins.</li>
                            <li>
                              You will be given 2 attempts to score in the Test.
                            </li>
                            <li>The merit criteria is given below.</li>
                          </ul>

                          <div className="scholarship-table">
                            <p className="left-para">Merit criteria</p>
                            <div className="table-responsive-xl special-inclusions-table">
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

                          <ul>
                            <li>
                              After giving 1 attempt, you can come back anytime
                              for the 2nd attempt.
                            </li>
                            <li>
                              After gving two attempts to the test, the final
                              score be taken as the one which is highest.
                            </li>
                            <li>
                              The security amount will be calculated on the
                              score which is greater.
                            </li>
                            <li>
                              For example, if a student scores 55% in his 1st
                              attempt and 45% in his 2nd attempt, then for the
                              final calculation, his scores will be taken as
                              55%.
                            </li>
                            <li>
                              To which he is eligble to deposit only Rs.5000 as
                              the Security fee.
                            </li>
                          </ul>
                        </div>
                        <p>
                          This scholarship test is a standard test module for
                          getting into companies like
                        </p>
                        <img src={conpanyLogo} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-4 basket-row ">
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
                              <img src={dMail} alt="icon" className="icon" />
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

                        <div className="green_block_test">
                          <a href="/ScholarshipTest">
                            <p>
                              Give
                              <span>Merit</span>
                              test now
                              <img src={rightArrow} alt="" />
                            </p>
                          </a>
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

      {/* modal */}

      <div
        className="modal fade sign-in-modal test-submit-modal scholarship-modal"
        id="submitTestModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ready-list">
              <h2>Confirmation</h2>

              <p className="message ">
                You are about to proceed for scholarship test. More details here
                like 30mins duration
              </p>

              <div className="scholarship-table">
                <p className="left-para">Merit criteria</p>

                <div
                  className="table-responsive-xl
                                special-inclusions-table"
                >
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
                <button
                  type="button"
                  className="theme_btn transparent"
                  data-toggle="modal"
                  data-target="#submitTestModal-1"
                  data-dismiss="modal"
                >
                  Back
                  <span></span>
                </button>
                <a
                  href=""
                  type="button"
                  className="theme_btn
                                "
                >
                  Proceed
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================mobile-view============================================================================================== */}

      <section className="eligiblity-form-sec student-dashboard select-plan range-slider-plan five_show">
        <div className="">
          <div className="row">
            <div className="col-lg-1 col-12 order-2 mobile_tab_bottom_menu">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link active"
                  id="v-pills-profile-1-tab"
                  data-toggle="pill"
                  href="#v-pills-profile-1"
                  role="tab"
                  aria-controls="v-pills-profile-1"
                  aria-selected="true"
                >
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
                  aria-selected="false"
                >
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
                  aria-selected="false"
                >
                  <img src={dlThree} alt="icon" className="green-icon" />{" "}
                  <img src={process} alt="icon" className="white-icon" />
                </a>

                <a
                  className="nav-link"
                  id="v-pills-messages-three-tab"
                  data-toggle="pill"
                  href="#v-pills-messages-three"
                  role="tab"
                  aria-controls="v-pills-messages-three"
                  aria-selected="false"
                >
                  <img src={dlFive} alt="icon" className="green-icon" />{" "}
                  <img src={d5Green} alt="icon" className="white-icon" />
                </a>
              </div>

              <a className="call-btn-2">
                {" "}
                <img src={Call} alt="arrow" />
              </a>

              <div className="log-out-div">
                <a
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <img src={logOut} alt="icon" className="green-icon" />
                </a>
              </div>
            </div>
            <div className="col-lg-10 m-auto col-12 order-1">
              <div
                className="tab-content mobile_tab_content_show"
                id="v-pills-tabContent"
              >
                <div
                  className="tab-pane fade  col-lg-9 m-auto"
                  id="v-pills-home-1"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-1-tab"
                >
                 
                  <form>
                    <div className="row mt-5">
                      <div className="col-lg-6 ">
                        <div
                          className="select-block
                                            input-form"
                        >
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
                              <label htmlFor="">Phone number1</label>
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
                                type="text"
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
                            <label htmlFor="">Graduation program name</label>
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
                            <label htmlFor="">Current semester (if any)</label>
                            <span
                                  style={{ color: "red" }}
                                  className="formErrors"
                                  >
                                  {formErrors.current_semester}
                                  </span>
                            
                            <input
                              type="text"
                              className="form-control"
                              name="current_semester"
                              defaultValue={ProfileData?.current_semester}
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
                              name="postGradProName"
                              defaultValue={
                                ProfileData?.postGradProName
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
                        onClick={SubmitTestForm}
                      >
                        Edit
                        <span></span>
                      </button> */}
                       {isSubmitted ? <p>Form submitted successfully!</p> : ""}
                      <button
                        type="button"
                        className="theme_btn edit_btn"
                        onClick={SubmitTestForm}
                      >
                        Save & Submit
                        <span></span>
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade show active basket-banner"
                  id="v-pills-profile-1"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-1-tab"
                >
                  <div className="row">
                    <div className="col-lg-8">
                    <div className="col-lg-11">
                      <h1 className="studentEligibilityTitle">Hi Rahul</h1>
                      <div className="studentEligibilityContainerMain">
                        
                     
                        <div className="studentEligibilityContainer">
                        <div className="studentEligibilityContainerFirst">
                        <div>
                            <img src={studentEligibility} alt="student" />
                          </div>
                        <h3>Congratulations!</h3>
                          <p>You have scored</p>
                          <h1>80%</h1>
                        </div>
                          
                        </div>
                        <div className="studentEligibilityParagraph">you are eligible for <b>50% OFF</b>on your security deposit.</div>
                        <div className="studentEligibilityParagraph">Your security fees in now reduced to 5000.</div>
                      </div>
                      <div className="studentEligibilityButtonContainer">
                        <button className="retakeTestSmall">Take retest</button>
                        <button onClick={()=>{
                          navigate('/UploadDocs')
                        }} className="depositNowSmall">Deposit now</button>
                      </div>
                      </div>
                    </div>
                    <div className="col-lg-4 basket-row full_show">
                      <div className="summary-table mb-5">
                        <h2 className="text-center mb-4">Having doubts?</h2>
                        <div
                          className="table-responsive-xl
                                                special-inclusions-table"
                        >
                          <div className="having-doughts-sec">
                            <p className="text-center">
                             Get in touch with our counselor
                            </p>
                            <div className="call-session">
                              <p>Call us now!</p>
                              <p className="number-cell">
                                <a href="#">+91 99882 27778</a>
                              </p>
                              <img src={dCall} alt="icon" className="icon" />
                            </div>
                            <p className="text-center mt-3">or</p>
                            <div className="call-session">
                              <p>Let us call you!</p>
                              <p className="number-cell">
                                <a href="#"> Book a slot now</a>
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
                  id="v-pills-messages-one"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-one-tab"
                >
                  <div className="row basket-row">
                    <div className="col-lg-8">
                      {processGet === 3 ? (
                        <div
                          className="verticle-timeline
                                            col-lg-10"
                        >
                          <div className="">
                            <div className="eligiblity-filds-block-1 five_show">
                              <div className="eligiblity-block">
                                <h1 className="mb-2">
                                  {" "}
                                  {userName}, please select your mode of
                                  enrollment
                                </h1>
                                <p>
                                  for “Placement Program in Business Analytics
                                  for Management” and more here as subtext
                                </p>
                              </div>
                            </div>

                            <div className="timeline">
                              <div
                                className="timeline-container
                                                        warning"
                              >
                                <div className="timeline-icon"></div>
                                <div className="timeline-body">
                                  <a href="#">
                                    <h4 className="timeline-title">
                                      Eligiblity
                                    </h4>
                                  </a>
                                  <p>Subtext</p>
                                </div>
                              </div>
                              <div
                                className="timeline-container
                                                        warning"
                              >
                                <div className="timeline-icon"></div>
                                <div className="timeline-body">
                                  <a href="#">
                                    <h4 className="timeline-title">
                                      Registration2
                                    </h4>
                                  </a>
                                  <p>
                                    Your application has been successfully
                                    submitted. Please make sure all the details
                                    are filled correctly.
                                  </p>
                                </div>
                              </div>
                              <div
                                className="timeline-container
                                                        warning"
                              >
                                <div className="timeline-icon"></div>
                                <div className="timeline-body">
                                  <a href="#">
                                    <h4 className="timeline-title">
                                      Scholarship test
                                    </h4>
                                  </a>
                                  <p>
                                    Please take your scholarshio test to get
                                    100% off on security fees if you score 70%
                                    or above.
                                  </p>
                                </div>
                              </div>
                              <div
                                className="timeline-container
                              warning commencement"
                              >
                                <div className="timeline-icon"></div>
                                <div className="timeline-body">
                                  <a href="#">
                                    <h4 className="timeline-title">
                                      Call Schedule
                                    </h4>
                                  </a>
                                  <p>
                                    Your call has been scheduled with our
                                    admission officer to guide to the next step
                                    smothly.
                                  </p>
                                </div>
                              </div>

                              {/* <div
                                className="timeline-container warning commencement"
                                                        
                              >
                                <div className="timeline-icon"></div>
                                <div className="timeline-body">
                                  <a href="#">
                                    <h4 className="timeline-title">
                                      Class commencement
                                    </h4>
                                  </a>
                                  <p>
                                    As soon as you pay the secuirity deposite,
                                    your className details will be provided.
                                  </p>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade basket-banner m-auto"
                  id="v-pills-messages-three"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-three-tab"
                >
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="dashboard-content">
                        <h2>Merit Test</h2>
                        <div className="green_block_test">
                          <a href="/ScholarshipTest">
                            <p>
                              Give
                              <span>Merit</span>
                              test now
                              <img src={rightArrow} alt="" />
                            </p>
                          </a>
                        </div>
                      </div>

                      <div className="scholarship-test ">
                        <div className="scholarship-test-wrapper">
                          <h6>Objective</h6>
                          <p>
                            The objective of the merit test is to comprehend the
                            academic skills of the learner.The Institute seeks
                            to assist a student who is academically strong
                            through the merit test.And hence, the questions for
                            the Merit test will be based on the Course that the
                            student has opted for.
                          </p>
                        </div>

                        <div className="scholarship-test-wrapper scholarship_row">
                          <h6>Details</h6>
                          <ul>
                            <li>The Merit test contains 30 questions.</li>
                            <li>Each question carry 1 mark.</li>
                            <li>There is no negative marking in the Test.</li>
                            <li>The Duration of the Merit test is 15 mins.</li>
                            <li>
                              You will be given 2 attempts to score in the Test.
                            </li>
                            <li>The merit criteria is given below.</li>
                          </ul>

                          <div className="scholarship-table">
                            <p className="left-para">Merit criteria</p>
                            <div className="table-responsive-xl special-inclusions-table">
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

                          <ul>
                            <li>
                              After giving 1 attempt, you can come back anytime
                              for the 2nd attempt.
                            </li>
                            <li>
                              After gving two attempts to the test, the final
                              score be taken as the one which is highest.
                            </li>
                            <li>
                              The security amount will be calculated on the
                              score which is greater.
                            </li>
                            <li>
                              For example, if a student scores 55% in his 1st
                              attempt and 45% in his 2nd attempt, then for the
                              final calculation, his scores will be taken as
                              55%.
                            </li>
                            <li>
                              To which he is eligble to deposit only Rs.5000 as
                              the Security fee.
                            </li>
                          </ul>
                        </div>
                        <div className="green_block_test green_block_test_2">
                          <a href="/ScholarshipTest">
                            <p>
                              Give
                              <span>Merit</span>
                              test now
                              <img src={rightArrow} alt="" />
                            </p>
                          </a>
                        </div>
                        <p>
                          This Merit test is a standard test module for
                          getting into companies like
                        </p>
                        <img src={conpanyLogo} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-5">
                      <div className="having_dought_mobile five_show">
                        <div className="">
                          <div className="heading_section">
                            <h5>Having doubts?</h5>
                            <p>Get in touch with our counselor</p>
                          </div>
                          <div className="row">
                            <div className="col-lg-5 col-5 full-inner full_inner_1">
                              <div className="inner_wrapper full_inner_1">
                                <p>Email us!</p>
                                <img src={dMail} alt="icon" className="icon" />
                                <p>
                                  <strong>contact@salaryfy.com</strong>
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-2 col-2  absolute_div">
                              <div className="inner_wrapper ">
                                <p>or</p>
                              </div>
                            </div>
                            <div className="col-lg-5 col-5 full-inner ">
                              <div className="inner_wrapper full_inner_1">
                                <p>Let us call you!</p>
                                <img
                                  src={Calendar}
                                  alt="icon"
                                  className="icon"
                                />
                                <p>
                                  <strong>Book a slot now</strong>
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

      <div
        className="modal fade sign-in-modal test-submit-modal congratulations-popup"
        id="submitTestModalNew"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ready-list">
              <h2>
                <img src={congratsLeft} alt="" /> Congratulations!{" "}
                <img src={CongratsRight} alt="" />
              </h2>
              <p>
                You have been enrolled in the Skill based placement program.
                <br />
                {/* for the Direct placement program */}
              </p>

              {/* <p class="message ">Our representative will get back you!</p> */}
              <div className="test-box">
                <div className="right-block">
                  <button
                    onClick={() => {
                      navigate("/UploadDocs");
                    }}
                    className="theme_btn tertiary"
                  >
                    Proceed
                    <img src={arrow} alt="arrow" />
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade sign-in-modal test-submit-modal congratulations-popup sign_popup"
        id="paymentSucessfull"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ready-list">
              <img src={Paid} alt="" className="paid_icon" />
            </div>
          </div>
        </div>
      </div>
  
    </React.Fragment>
  );
};

export default AfterScholarshipTestDashboard;
