import React, { useState} from "react";


import Newlogo from "../img/new-logo.png";
import popupmobilep from "../img/pop-up-mobilep-1.png";
import popupmobile from "../img/pop-up-mobile.png";

import warning2 from "../img/warning-2.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ApiBaseUrl } from "../BaseUrl/baseUrl";

const SignupModalPage = () => {
    const navigate = useNavigate();
    const [phone, setPhoneOtp] = useState({
        phone:""
    });
    const [errorMessage, setErrorMessage] = useState('');
    window.localStorage.setItem('phone', JSON.stringify(phone))
    const [message, setmessage] = useState("");
    const onChange = (e) => {
        const { value, name } = e.target;
        setPhoneOtp((state) => ({
          ...state,
          [name]: value,
        }));
    };

  
    function handleFocus(event) {
      if (!phone.phone.startsWith('+91')) {
        setPhoneOtp((prevValue) => ({
          ...prevValue,
          phone: '+91' + prevValue.phone
        }));
      }
    }
  
    const sendOtpPhone = function () {
      let data = JSON.stringify(phone);
      if (phone.phone.length !== 13) {
        setErrorMessage("Not a valid mobile number.");
        return;
      }
      let config = {
          method: "post",
          url: ApiBaseUrl+"generate-otp",
          headers: {
            "Content-Type": "application/json",
          },
            data: data,
        };
        axios(config)
          .then(function (res) {
            if (res.data) console.log("data", data);
            setmessage("otp sent");
          })
          .catch(function (error) {
            // setErrors("Data is not Valid");
            
          });
          navigate('/OtpModalPage')
        // console.log('r-email',email)
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        sendOtpPhone();
    };
    
  return (
      <React.Fragment>
       <div
        className="sign-in-modal verify-phone-number">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <a href="https://www.datafolkz.co.in" className="theme-logo">
                <img src={Newlogo} alt="Data Folkz" />
              </a>
             
            </div>
            <div className="modal-body">
              <p className="login-warning-msg">
                <img src={warning2} alt="Data Folkz" />
                Kindly verify yourself to see your result
              </p>
              <div className="sign-up-form">
                <form method="post" action="/register">
                  <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                 
                  <div className="form-group">
                    <label htmlFor="" className="enter_number">Enter your mobile number</label>
                    <input
                      type="tel"
                      maxLength="13"
                      name="phone"
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^\d^+]/g, "");
                      }}
                      className="form-control mobile_number_input"
                      onFocus={handleFocus}
                      onChange={onChange}
                      value={phone.phone}
                      placeholder="+91 XXXXX XXXXX"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="error-message text-center text-danger m-0" style={{fontSize: '14px', fontWeight: '500'}}>{errorMessage}</div>
                  <div className="form-row submit-box">
                    <button
                      type="submit"
                      className="theme_btn"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Send OTP <span></span>
                    </button>
                    <br/>

                  </div>
                  <p className="text-center mt-3">
                  Already a member?&nbsp;  
                      <a href=" ">
                       Sign in
                      </a>
                    </p>
                </form>
              </div>
            </div>
          </div>
        </div>
       <div className="pop-up-mobile-show">
       <img src={popupmobilep} alt="Data Folkz" className="five_show img-1"/>
       <img src={popupmobile} alt="Data Folkz" className="five_show img-2" />
       </div>
      </div>
      </React.Fragment>
  )
}

export default SignupModalPage