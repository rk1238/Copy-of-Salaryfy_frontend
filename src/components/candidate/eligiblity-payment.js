import React from "react";
import planlogo from "../img/plan-logo.png";
import view from "../img/view.png";
import planimg from "../img/plan-img.png";
import check from "../img/check.png";
import Navbar from "../common/navbar";

const EligiblityPayment = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section class="eligiblity-form-sec">
        <div class="container custom-container">
          <div class="timeline-pop">
            <ol>
              <li class="active">
                <span class="active-border">1</span>
                <p>Eligiblity</p>
              </li>
              <li class="active">
                <span class="active-border">2</span>
                <p>Select plan</p>
              </li>
              <li>
                <span>3</span>
                <p>Registratiion</p>
              </li>
              <li>
                <span>4</span>
                <p>Schedule call</p>
              </li>
            </ol>
          </div>
          <div class="row eligiblity-form-filds">
            <div class="col-lg-4">
              <div class="eligiblity-filds-block-1">
                <div class="eligiblity-block">
                  <h1 class="mb-2"> Select a payment plan</h1>
                  <p>Text about the payment plans</p>
                </div>
                <div class="eligiblity-block-2">
                  <p>Trusted By 400+ Hiring Partners</p>
                  <img src={planimg} />
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <h2 class="recommended-heading">Recommended</h2>
              <div class="select-plan recommended-plan">
                <p>PAY AFTER PLACEMENT PLAN (PPAP)</p>
                <p class="price">₹499</p>
                <ul>
                  <li>
                    <img src={check} /> Pay after placement
                  </li>
                  <li>
                    <img src={check} /> 15% of ISA
                  </li>
                  <li>
                    <img src={check} /> 100% job guarantee
                  </li>
                </ul>
                <div class="buttons">
                  <div class="w-100">
                    <a href="#" class="view-plan">
                      <img src={view} /> View full details
                    </a>
                  </div>
                  <div class="w-100">
                    <button class="theme_btn tertiary" id="pay-button">
                      Proceed
                    </button>
                    {/* <a href="/registration-page" class="theme_btn tertiary"> Proceed <span></span></a>  */}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="select-plan select-plan-2">
                <p>REGULAR PLAN</p>
                <p class="price">₹80,000</p>
                <ul>
                  <li>
                    <img src={check} /> Pay one time fee
                  </li>
                  <li>
                    <img src={check} /> 100% job guarantee
                  </li>
                  <li> &nbsp;</li>
                </ul>
                <div class="buttons">
                  <div class="w-100">
                    <a href="#" class="view-plan">
                      <img src={view} /> View full details
                    </a>
                  </div>
                  <div class="w-100">
                    <button class="theme_btn tertiary" id="payment-button">
                      Proceed
                    </button>
                    {/* <a href="/registration-page" class="theme_btn tertiary"> Proceed <span></span></a>  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="plan-logo-block">
            <img src={planlogo} class="plan-logo" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default EligiblityPayment;
