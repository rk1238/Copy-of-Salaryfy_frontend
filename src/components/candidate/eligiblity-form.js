import React from "react";
import formlogo from "../img/form-logo.png";
import live from "../img/live.png";
import arrow from "../img/arrow.png";
import Navbar from "../common/navbar";

const EligiblityForm = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section class="eligiblity-form-sec">
        <div class="container">
          <div class="timeline-pop">
            <ol>
                <li className="active">
                    <span className="active-border">1</span>
                    <p>Eligiblity</p>
                </li>
                <li>
                    <span>2</span>
                    <p>Select course</p>
                </li>
                <li>
                    <span>3</span>
                    <p>Select plan</p>
                </li>
                <li>
                    <span>4</span>
                    <p>Schedule call</p>
                </li>
            </ol>
          </div>
          <div class="row eligiblity-form-filds">
            <div class="col-lg-5">
              <div class="eligiblity-filds-block-1">
                <div class="eligiblity-block">
                  <h1>
                    Eligiblity
                    <br /> Form
                  </h1>
                  <p>Sub header here</p>
                </div>
                <div class="eligiblity-block-2">
                  <p>Check eligiblity to get into companies like</p>
                  <img src={formlogo} />

                  <p class="live">
                    Total of number students given this test <img src={live} />
                  </p>
                  <a href="#" class="number">
                    1,75,906+
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="eligiblity-filds-block-2">
                <form>
                  <div class="form-group row eligiblity-input">
                    <label
                      for=""
                      class="col-sm-10 col-10
                                col-form-label green-background"
                    >
                      Percentage in 10+2
                    </label>
                    <div class="col-sm-2 col-2">
                      <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder="%"
                      />
                    </div>
                  </div>
                  <div class="form-group row eligiblity-input">
                    <div class="col-sm-12">
                      <div class="select-list">
                        <select
                          class="custom-select
                                        green-background"
                        >
                          <option selected>Select grauation Status</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>

                        <label
                          for=""
                          class="col-sm-2 col-2
                                        abs-label
                                        col-form-label"
                        >
                          <i class="fa fa-caret-down" aria-hidden="true"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row eligiblity-input">
                    <div class="col-sm-12">
                      <div class="select-list">
                        <select
                          class="custom-select
                                        green-background"
                        >
                          <option selected>
                            Are you in your last semester?
                          </option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>

                        <label
                          for=""
                          class="col-sm-2 col-2
                                        abs-label
                                        col-form-label"
                        >
                          <i class="fa fa-caret-down" aria-hidden="true"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row eligiblity-input">
                    <label
                      for=""
                      class="col-sm-10 col-10
                                col-form-label green-background"
                    >
                      Precentage in graduation{" "}
                    </label>
                    <div class="col-sm-2 col-2">
                      <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder="%"
                      />
                    </div>
                  </div>
                  <div class="form-group row eligiblity-input">
                    <label
                      for=""
                      class="col-sm-10 col-10
                                col-form-label green-background"
                    >
                      Precentage in post graduation{" "}
                    </label>
                    <div class="col-sm-2 col-2">
                      <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder="%"
                      />
                    </div>
                  </div>

                  <div class="right-block">
                    <a href="/BasketPayment" type="button" class="theme_btn tertiary">
                      Proceed to eligiblity test <img src={arrow} alt="arrow" />
                      <span></span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>    
    </React.Fragment>
  );
};

export default EligiblityForm;
