import React from "react";

import Logo from "../img/new-logo.png";
import Method1 from "../img/icons/method-1.png";
import Method11 from "../img/icons/method-1-1.png";
import Method2 from "../img/icons/method-2.png";
import Method22 from "../img/icons/method-2-2.png";

const LearningMethod = () => {
  return (
    <React.Fragment>
      <section className="learning-mathod">
        <div className="container">
          <div className="learning-method-wrapper">
            <img src={Logo} alt="" />
            <h2>Select a learning method</h2>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 order-lg-1 order-md-1 order-sm-1 order-2">
                <a className="w-100"
                        type="button"
                        data-toggle="modal"
                        data-target=".submitTestModal">
                <div className="shadow_box shadow_box-1">
                  <div
                    className="select-plan recommended-plan
                                enrollment-wrapper">
                    <div className="plan-green-block">
                      <img src={Method1} className="fill-img" alt="" />
                      <img src={Method11} className="blank-img" alt="" />

                      <h3>Self based learning</h3>

                      <ul>
                        <li>Subpoints here</li>
                        <li>Subpoints here</li>
                        <li>Subpoints here</li>
                        <li>Subpoints here</li>
                      </ul>
                    </div>
                  </div>
                </div>
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 order-lg-2 order-md-2 order-sm-2 order-1">
                <a  className="w-100 " href="/AfterScholarshipTestDashboardTwo">
                <div className="shadow_box ">
                  <h2
                    className="recommended-heading recommended-heading-1
                                inner-wrapper">
                    Recommended
                  </h2>
                  <div
                    className="select-plan recommended-plan
                                enrollment-wrapper">
                    <div className="plan-green-block">
                      <img src={Method2} className="fill-img" alt="" />
                      <img src={Method22} className="blank-img" alt="" />

                      <h3>Live class learning</h3>

                      <ul>
                        <li>Subpoints here</li>
                        <li>Subpoints here</li>
                        <li>Subpoints here</li>
                        <li>Subpoints here</li>
                      </ul>
                    </div>
                  </div>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="modal  submitTestModal warning-msg" id="" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <p> Sorry, this option is unavailable. Kindly apply for the live classes section</p>
      </div>
     
    </div>
  </div>
</div>
    </React.Fragment>
  );
};

export default LearningMethod;
