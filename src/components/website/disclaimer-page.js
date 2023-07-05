import React,{useState,useEffect} from "react";
import Back from "../img/back.png";
import warning from "../img/warning.png";
import { ApiBaseUrl } from "../BaseUrl/baseUrl"; 
import {useNavigate} from 'react-router-dom'

const DisclaimerPage = () => {

  const Token = JSON.parse(window.localStorage.getItem("token"));
  const [totalAttempts,setTotalAttempts]=useState('')
  const navigate = useNavigate();
  useEffect(() => {
    // Get questions through Api
    let Api = ApiBaseUrl + "scholarship-test-count";
    const fetchtotalAttempts= async (url) => {
      try {
        const res = await fetch(Api, {
          headers: {
            "x-access-token": Token
          }
        });
        const data = await res.json();
        console.log(data.total_attempts);
        setTotalAttempts(data.total_attempts);
        //    isLoading=false;
      } catch (error) {}
    };
    fetchtotalAttempts(Api);
  }, []);
 
  return (
  <React.Fragment>
      <section className="disclaimer-page">
        <div className="container">
          <div
            className="sign-in-modal test-submit-modal scholarship-modal disclaimer-modal submitTestModal"
            id=""
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                
                <div className="modal-body ready-list">
                  <div className="header">
                    <img src={Back} alt="" />
                    <h2 className="text-center">Disclaimer</h2>
                  </div>

                  <div className="alert alert-warning" role="alert">
                    <img src={warning} alt="" />
                    <p className="text-center">
                      Salaryfy offers free plan for only those students who
                      score above 75% in the following merit test. Please read
                      all the instructions carefully. ALL THE BEST!{" "}
                    </p>
                  </div>
fresher-skill-disclaimer
                  <ul>
                    <li>You are about to proceed with the ‘Merit Test.’ </li>
                    <li>The Merit Test will have a total of 30 questions.</li>
                    <li>The duration of the test is 15 minutes.</li>
                    <li>Make sure to have a pen and paper ready prior to the commencement of the test.</li>
                    <li>Each student will have a total of two attempts to take the test. </li>
                  </ul>

                  <div className="scholarship-table">
                    <p className="left-para">Merit criteria</p>

                    <div
                      className="table-responsive-xl
                                special-inclusions-table">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <td>Above 75%</td>
                            <td>75% to 50%</td>
                            <td>Below 50%</td>
                          </tr>
                          <tr>
                            <td> ₹ 0</td>
                            <td> ₹ 5,000</td>
                            <td> ₹ 10,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {totalAttempts===1 ?
                    <p className="text-center">You have 1 attempt left</p> : ''}
                  {totalAttempts===2 ?
                    <p className="text-center">You don't have any attempts left</p> : ''}
                  {totalAttempts===0 ?
                    <p className="text-center">You have 2 attempts left</p> : ''}
                  <div className="test-box">
                    <p
                      className="theme_btn transparent"
                       href="/ScholarshipTestResultDetail"
                       onClick={
                        ()=>{
                          navigate("/ScholarshipTestResultDetail")
                        }
                       }
                     >
                      View details
                      <span></span>
                    </p>

                  {totalAttempts===1 || totalAttempts=== 0  ? 
                    <a
                      href="/ScholarshipTest"
                      type="button"
                      className="theme_btn">
                      Proceed
                      <span></span>
                      </a>
                      :''
                    }
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

export default DisclaimerPage;
