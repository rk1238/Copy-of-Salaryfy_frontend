import React from 'react'
import Navbar from "../common/navbar";

const ReadyTestModel = () => {
  return (
    <React.Fragment>
    <Navbar />
    <section className='ready_test_page'>
          <div className='container'>
          <div
              className="sign-in-modal"
             
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                  </div>
                  <div className="modal-body ready-list">
                    <h2>Ready to start!</h2>
                    <ul>
                      <li>
                        1. The eligibility test will consist of 20 questions in total.
                      </li>
                      <li>2. The duration of the test will be 5 minutes, after which the test will end automatically.</li>
                      <li>
                        3. All the questions in the test are designed to evaluate your combined cognitive ability.{" "}
                      </li>
                      <li>4. The test results will be decisive in your salary/hike estimations. 
                      <br /> 

                      </li>

                    </ul>

                    <div className="test-box">
                      <p className='text-center good_luck'><b>Good luck! Give your best shot!</b></p>
                      <a
                        style={{ textDecoration: "none" }}
                        href="EligibilityOption"
                        type="button"
                        className="theme_btn
                        tertiary"
                      >
                        Start test
                        <span></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </div>
    </section>
    </React.Fragment>
  )
}

export default ReadyTestModel