import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import arrow from "../img/arrow.png";
import { useNavigate } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);
const userName = JSON.parse(localStorage.getItem("name"));
const total_per = JSON.parse(window.localStorage.getItem("total_per"));
const total_LR = JSON.parse(window.localStorage.getItem("total_LR"));
const total_LC = JSON.parse(window.localStorage.getItem("total_LC"));
const total_AVP = JSON.parse(window.localStorage.getItem("total_AVP"));
const test_AVP = JSON.parse(window.localStorage.getItem("test_AVP"));
const test_LC = JSON.parse(window.localStorage.getItem("test_LC"));
const test_LR = JSON.parse(window.localStorage.getItem("test_LR"));
const is_eligible = JSON.parse(window.localStorage.getItem("is_eligible"));
const salary_hike = JSON.parse(window.localStorage.getItem("salary_hike"));
const data1 = Math.round(test_LR)
const data2 = (Math.round(test_AVP))/2
const data3 = Math.round(test_LC)
const data4=(Math.round(test_AVP))/2


const data = {
  options: {
    legend: {
        display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    }
},

datasets: [
    {
      labels: "display: none;",
      data: [data1,data2,data3,data4],
      backgroundColor: [
        
          'rgba(210, 145, 188)',
          'rgba(182, 193, 209)',
          'rgba(254, 219, 209)',
          'rgba(217, 229, 174)',
      ],
      borderColor: [
          'rgba(210, 145, 188)',
          'rgba(182, 193, 209)',
          'rgba(254, 219, 209)',
          'rgba(217, 229, 174)',
      ],
      borderWidth: 1,
    },
  ],
  
};
const DirectPlacementRoute = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
     
  <section className='direct-placement-route'>
     <div className='container '>
     <div
        className=" eligiblity-result-modal"
        id="submitResultModalTwo">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              
            </div>
            <div className="modal-body ready-list">
              <div className="row">
                <div className="col-lg-8">
                <div className="score-miter">
                    <h6>Congratulation {userName},</h6>
                    <p>
                          <b>based on your eligiblity score of {Math.round(total_per)}%</b>
                    </p>
                    <p>
                      you can get a job with minimum <b>3 to 5 LPA</b>
                      but in an ideal scenario you can get upto
                    </p>

                    <p>Score meter here</p>
                    <>
                          salary_hike={salary_hike}%<br/>
                          total_percentage_in_logical_reasoning={total_LR}%<br/>
                          total_percentage_in_language_comprehension={total_LC}%<br/>
                          total_percentage_in_audio_visual_processing={(total_AVP) / 2}%<br />
                          Processing Speed and Retention={(total_AVP) / 2}%<br />
                    </>
                    <div className='row'>
                        <div className='col-lg-6'>
                        <div className="score-miter-graph"> use score meter</div>

                            <div className="right-block fresher-test">
                            <a href="/DirectPlacement" className="theme_btn tertiary">
                            Opt direct placement <img src={arrow} alt="arrow" />
                                <span></span>
                            </a>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                        <div className="score-miter-graph"> use score meter</div>

                            <div className="right-block fresher-test">
                            <a href="/DirectPlacement" className="theme_btn tertiary">
                            Opt direct placement <img src={arrow} alt="arrow" />
                                <span></span>
                            </a>
                            </div>
                        </div>
                    </div>

                    
                  </div>
                </div>
                <div className="col-lg-4 border_radius_chart">
                  <div className="doughnut-chart">
                    <h6>Your score</h6>
                    <div className="canvas-div">
                      {/* <canvas id="myChart"> 50%</canvas> */}
                   
                      <Doughnut data={data}
                        options={{
                        responsive: true,
                          maintainAspectRatio: true,
                          cutout: 130
                          }} />
                        
                      <div id="doughnut-percentage"><br/>
                        <h3>{Math.round(total_per)}%</h3>
                            {/* {total_per >= 60 ? <p>Very good</p> : total_per >= 45 ? <p>Good</p> : <p>Not eligible</p>} */}
                            {total_per > 45 ? "Good" : ""}
                      </div>

                      <div className="data-blink">
                          <div className="blink-list">
                             <ul>
                              <li>
                                <div className="left-blink">
                                   <span className="span-1">&nbsp;</span><p>Logical Reasoning</p>
                              </div>
                              
                              {total_LR > 60 ?
                                <div className="right-blink">
                                <i className="fa fa-check checked" aria-hidden="true"></i>
                                 <div className="blink-blank">
                                </div>
                                </div>
                                :
                                <div className="right-blink">
                                <i className="fa fa-times cross" aria-hidden="true"></i>
                                <div className="blink">
                                 <div className="zoom-in-zoom-out"></div>
                                </div>
                                </div>
                              }
                              
                              </li>
                              <li>
                                <div className="left-blink">
                                   <span className="span-2">&nbsp;</span><p>Audio-Visual Processing</p>
                                </div>
                             
                             
                              {total_AVP > 45 ?
                               <div className="right-blink">
                               <i className="fa fa-check checked" aria-hidden="true"></i>
                                <div className="blink-blank">
                               </div>
                               </div>
                                :
                                <div className="right-blink">
                                <i className="fa fa-times cross" aria-hidden="true"></i>
                                <div className="blink">
                                 <div className="zoom-in-zoom-out"></div>
                                </div>
                                </div>
                              }
                              </li>
                            
                              <li>
                              <div className="left-blink">
                                   <span className="span-5">&nbsp;</span><p>Language Comprehension</p>
                              </div>
                             
                              
                              {total_LC > 80 ?
                                
                                <div className="right-blink">
                                  <i className="fa fa-check checked" aria-hidden="true"></i>
                                  <div className="blink-blank">
                                  </div>
                                </div>
                                :
                                <div className="right-blink">
                                  <i className="fa fa-times cross" aria-hidden="true"></i>
                                  <div className="blink">
                                    <div className="zoom-in-zoom-out"></div>
                                  </div>
                                </div>
                              }
                                </li>
                                <li>
                              <div className="left-blink">
                                   <span className="span-4">&nbsp;</span><p>Processing Speed and Retention</p>
                              </div>
                             
                             
                              {total_LC > 45 ?
                                
                                <div className="right-blink">
                                  <i className="fa fa-check checked" aria-hidden="true"></i>
                                  <div className="blink-blank">
                                  </div>
                                </div>
                                :
                                <div className="right-blink">
                                  <i className="fa fa-times cross" aria-hidden="true"></i>
                                  <div className="blink">
                                    <div className="zoom-in-zoom-out"></div>
                                  </div>
                                </div>
                              }
                              </li>
                             </ul>
                          </div>
                      </div>
                    </div>
                    
                  </div>

                  <div className="show_more_btn">
                     <a href=" " onClick={() => { navigate("/BothRoute");}}>
                     Show more details <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                  </div>
                </div>
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

export default DirectPlacementRoute