import React,{useState,useEffect} from "react";
import Footer from "../common/footer";
import clientimg from "../img/client-img.png";
import live from "../img/live.png";
import fresheryellow from "../img/fresher-yellow.png";
import expgreen1 from "../img/exp-green-1.png";
import expyellow from "../img/exp-yellow.png";
import gree1 from "../img//gree-1.png";
import Navbar from "../common/navbar";
import { ApiBaseUrl } from "../BaseUrl/baseUrl";

export default function EligiblityFormNewFunnel() {
  const [eligibilityCount, setEligibilityCount] = useState();
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
    <React.Fragment>
      <Navbar />
      <section className="eligiblity-form-sec select_status_modile">
        <div className="container">
         <div
            className="row eligiblity-form-filds gradfresh_funnel_padding"
            id="status_review_section_show">
            <div className="col-lg-5 col-md-5">
              <div className="eligiblity-filds-block-1">
                <div className="eligiblity-block">
                  <h1>
                    Eligibility
                    <br /> Form
                  </h1>
                  <p>
                    Fill the form to check your eligibility and get a
                    salary-hike prediction.
                  </p>
                </div>
                <div className="eligiblity-block-2">
                  <p>Check eligibility to get into companies like</p>
                  <img src={clientimg} />

                  <p className="live">
                    Total of number students given this test <img src={live} />
                  </p>
                  <a
                    style={{ textDecoration: "none" }}
                    href="#"
                    className="number">
                    {eligibilityCount+400000}+
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-7">
              <div className="eligiblity-filds-block-2 select-status">
                <p className="text-center">Select your current status</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <a
                      className="element-select-status w-100"
                      href="/GradfreshNewFunnel?id=fresher">
                      <img src={fresheryellow} className="yellow" />
                      <img src={expgreen1} className="green" />
                      <a style={{ textDecoration: "none" }}>Fresher</a>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <a
                      className="element-select-status w-100"
                      href="/GradfreshNewFunnel?id=experienced">
                      <img src={expyellow} className="yellow" />
                      <img src={gree1} className="green" />
                      <a style={{ textDecoration: "none" }}>Experienced</a>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row eligiblity-form-filds "
            id="status_review_section_hide">
            <div className="col-lg-5  col-md-5 col-sm-12">
              <div className="eligiblity-filds-block-1">
                <div className="eligiblity-block">
                  <h1>Eligibility Form</h1>
                  <p>
                    Fill the form to check your eligibility and get a
                    salary-hike prediction.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-7 col-sm-12">
              <div className="eligiblity-filds-block-2 select-status">
                <p className="text-center">Select your current status</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="element-select-status">
                     <a  style={{ textDecoration: "none" }}
                        href="/GradfreshNewFunnel?id=fresher-one">
                        
                      <img src={fresheryellow} className="yellow" />
                      <img src={expgreen1} className="green"/> <br/>
                      Fresher
                       
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="element-select-status">
                      <img src={expyellow} className="yellow"/>
                      <img src={gree1} className="green" />
                      <a
                        style={{ textDecoration: "none" }}
                        href="/GradfreshNewFunnel?id=experienced-one">
                        Experienced
                      </a>
                    </div>
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
                    className="number">
                    {eligibilityCount+400000}+
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}
