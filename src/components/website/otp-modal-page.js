import React, { useState, useEffect } from "react";
import axios from "axios";
import edit from "../img/edit.png";
import Newlogo from "../img/new-logo.png";
import topVactor from "../img/top-vactor.png";
import { useNavigate } from "react-router-dom";
import { ApiBaseUrl } from '../BaseUrl/baseUrl';

const OtpModalPage = () => {

    let navigate = useNavigate();
    const hoursMinSecs = { hours: 0, minutes: 1, seconds: 0 };
    const CountDownTimer = ({ hoursMinSecs }) => {
      const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
      const [[hrs, mins, secs], setTime] = React.useState([
        hours,
        minutes,
        seconds,
      ]);
      
      const navigate = useNavigate();
      const tick = () => {
        if (mins === 0 && secs === 0) {
          navigate('/SignupModalPage')
        } else if (secs === 0) {
          setTime([hrs, mins - 1, 59]);
        } else {
          setTime([hrs, mins, secs - 1]);
        }
      };
    
      React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
      });
    
      return (
        <>
          {`${mins.toString().padStart(2, "0")}:${secs
            .toString()
            .padStart(2, "0")}`}
        </>
      );
    };
    const [otp1, setOtp1] = useState("");
    const [otp2, setOtp2] = useState("");
    const [otp3, setOtp3] = useState("");
    const [otp4, setOtp4] = useState("");
    const [jwtData, setJwtData] = useState("");
    const AllTestFormValue = JSON.parse(window.localStorage.getItem("AllTestFormValue"));
    
    const email = JSON.parse(window.localStorage.getItem("email"));
    const phone = JSON.parse(window.localStorage.getItem("phone"));
    window.localStorage.setItem('token', JSON.stringify(jwtData))
    const [verifyMessage, setverifyMessage] = useState();
    const handleInputChange = (e) => {
        const input = e.target;
        const nextInputId = input.dataset.next;
        const previousInputId = input.dataset.previous;
      
        if (input.value.length === 1 && nextInputId) {
          const nextInput = document.getElementById(nextInputId);
          nextInput.focus();
        } else if (input.value.length === 0 && previousInputId) {
          const previousInput = document.getElementById(previousInputId);
          previousInput.focus();
        }
    };

    const handleSubmitVerifyOtp = function () {
        const otp = Number(otp1 + otp2 + otp3 + otp4);
        let data = JSON.stringify({ "phone": phone.phone, "otp": otp,"email":email });
        let config = {
          method: "post",
          url: ApiBaseUrl+"otp-login",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };
    
        axios(config)
          .then(function (res) {
              const { jwt } = res.data
              setJwtData(jwt)
            // window.localStorage.setItem('token', JSON.stringify(jwt))
             console.log("jwt_key",jwt)
          })
          .catch(function (error) {
            if (error.response && error.response.data && error.response.data.message) {
            
              setverifyMessage(error.response.data.message);
            } else {
              console.log(error);
            }
          });
    };
    
    const SubmitTestForm = function () {
        console.log("submittime-jwt",jwtData)
        let data = JSON.stringify(AllTestFormValue);
        let config = {
          method: "post",
          url: ApiBaseUrl+"submit-test",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": jwtData,
          },
          data: data 
        };
       
        axios(config)
          .then(function (res) {
            if (res.data) {
            const {
              message,total_percentage,
              total_percentage_in_logical_reasoning,
              total_percentage_in_language_comprehension,
              total_percentage_in_audio_visual_processing,
              test_percentage_in_audio_visual_processing,
              test_percentage_in_language_comprehension,
              test_percentage_in_logical_reasoning,
              salary_hike_percentage,
              salary_in_lpa,
              is_eligible,
              current_package,
              type,
              redirect_type
              
            }
            = res.data
            console.log(message, total_percentage, total_percentage_in_logical_reasoning, "this is submit message");
            console.log(is_eligible, "type message");
            console.log(redirect_type, "redirect_type"); 
              
            window.localStorage.setItem('message', JSON.stringify(message))
            window.localStorage.setItem('total_per', JSON.stringify(total_percentage))
            window.localStorage.setItem('total_LR', JSON.stringify(total_percentage_in_logical_reasoning))
            window.localStorage.setItem('total_LC', JSON.stringify(total_percentage_in_language_comprehension))
            window.localStorage.setItem('total_AVP', JSON.stringify(total_percentage_in_audio_visual_processing))
            window.localStorage.setItem('test_AVP', JSON.stringify(test_percentage_in_audio_visual_processing))
            window.localStorage.setItem('test_LC', JSON.stringify(test_percentage_in_language_comprehension))
            window.localStorage.setItem('test_LR', JSON.stringify(test_percentage_in_logical_reasoning))
            window.localStorage.setItem('salary_hike', JSON.stringify(salary_hike_percentage))
            window.localStorage.setItem('salary_in_lpa', JSON.stringify(salary_in_lpa))
            window.localStorage.setItem('is_eligible', JSON.stringify(is_eligible)) 
            window.localStorage.setItem('current_package', JSON.stringify(current_package))
            window.localStorage.setItem('redirect_type', JSON.stringify(redirect_type))
              
            console.log('current_pack',current_package)
           
            if (redirect_type === 0) {
                navigate("/FailEligibility");
            }
            else if(redirect_type === 1) {
              navigate("/doughnut");
              }  
            else if(redirect_type === 2) {
              navigate("/DirectPlacementMeter");
              } 
            else if (redirect_type === 3) {
              navigate("/BothRoute");
            }  
          }
          })
          .catch(function (error) {
            console.log("error in code")
            
          });
      };



    useEffect(() => {
        console.log("tokensubmit", jwtData)
        SubmitTestForm();
        
    })
    useEffect(() => {
      console.log("tokensubmit", verifyMessage)
     
  })
  
   
  return (
    <React.Fragment>
        <div
        className=" sign-in-modal verify-phone-number"
        id=""
        >
        <div className="pop-up-mobile-show-1">
       <img src={topVactor} alt="Data Folkz"  className="five_show img-1"/>
       
       </div>

        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <a href="https://www.datafolkz.co.in" className="theme-logo">
                <img src={Newlogo} alt="Data Folkz" />
              </a>
            
            </div>
            <div className="modal-body">
              <div className="sign-up-form">
                <form>
                  <p className="otp-instructions">
                    Enter the OTP sent to {phone.phone}
                    <a href="/SignupModalPage">
                      {" "}
                      <img src={edit} alt="edit" />
                    </a>
                  </p>
                  
                  <div className="form-group otp-wrapper login-pin">
                    <input
                      className="form-control"
                      type="password"
                      id="digit-1"
                      onKeyUp={handleInputChange}
                      onChange={(e) => setOtp1(e.target.value)}
                      name="otp1"
                      value={otp1}
                      data-next="digit-2"
                      required
                      maxLength="1"
                       
                    />
                    <input
                      className="form-control"
                      type="password"
                      id="digit-2"
                      onKeyUp={handleInputChange}
                      onChange={(e) => setOtp2(e.target.value)}
                      name="otp2"
                      value={otp2}
                      data-next="digit-3"
                      data-previous="digit-1"
                      required
                      maxLength="1"
                       
                    />
                    <input
                      className="form-control"
                      type="password"
                      id="digit-3"
                      onKeyUp={handleInputChange}
                      onChange={(e) => setOtp3(e.target.value)}
                      name="otp3"
                      value={otp3}
                      data-next="digit-4"
                      data-previous="digit-2"
                     
                      maxLength="1"
                    />
                    <input
                      className="form-control"
                      type="password"
                      id="digit-4"
                      onKeyUp={handleInputChange}
                      onChange={(e) => setOtp4(e.target.value)}
                      name="otp4"
                      value={otp4}
                      data-previous="digit-3"
                   
                      maxLength="1"
                    />
                    <input type="hidden" id="pwd" value="" maxLength="1" />
                  </div>
                  <div className="form-group submit-box submit-box-1">
                    <p>
                      Didn’t recieve OTP?&nbsp;
                      <a href=" ">
                        resend in <span id="time_countdown-4"><CountDownTimer hoursMinSecs={hoursMinSecs} />  </span>
                      </a>
                    </p>
                    <div className="error-message text-center text-danger m-0" style={{fontSize: '14px', fontWeight: '500'}}>{verifyMessage}</div>
                    <button
                      type="button"
                      className="theme_btn"
                      data-dismiss="modal"
                      // data-toggle="modal"
                      // data-target="#submitResultModal"
                      onClick={() => {
                        handleSubmitVerifyOtp();
                        SubmitTestForm();
                      }}
                    >
                      Verify & continue<span></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default OtpModalPage