import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import arrow from "../img/arrow.png";


ChartJS.register(ArcElement, Tooltip, Legend);

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
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [
    {
      labels: "display: none;",
      data: [5, 14, 10, 7, 7],
      backgroundColor: [
        'rgba(241, 75, 106, 1)',
        'rgba(77, 175, 74, 1)',
        'rgba(14, 95, 89, 1)',
        'rgba(151, 71, 255, 1)',
        'rgba(254, 205, 8, 1)',
      ],
      borderColor: [
        'rgba(241, 75, 106, 1)',
        'rgba(77, 175, 74, 1)',
        'rgba(14, 95, 89, 1)',
        'rgba(151, 71, 255, 1)',
        'rgba(254, 205, 8, 1)',
      ],
      borderWidth: 1,
    },
  ],
  
};

const DirectPlacementRoute = () => {
  return (
    <React.Fragment>
     
  <section className='direct-placement-route'>
     <div className='container'>
     <div
        className=" eligiblity-result-modal"
        id="submitResultModalTwo">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              
            </div>
            <div className="modal-body ready-list">
              <div className="row">
                <div className="col-lg-7">
                <div className="score-miter">
                    <h6>Congratulation Rahul,</h6>
                    <p>
                      <b>based on your eligiblity score of 68%</b>
                    </p>
                    <p>
                      you can get a job with minimum <b>3 to 5 LPA</b>
                      but in an ideal scenario you can get upto
                    </p>

                    <p>Score meter here</p>

                    <div className="score-miter-graph"></div>

                    <div className="right-block fresher-test">
                      <a href="/DirectPlacement" class="theme_btn tertiary">
                      Opt upto 80% salary hike <img src={arrow} alt="arrow" />
                        <span></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 border_radius_chart">
                  <div className="doughnut-chart">


                    <h6>Your score</h6>

                    <div className="canvas-div">
                      {/* <canvas id="myChart"> 50%</canvas> */}

                      <Doughnut data={data} />
                      <div id="doughnut-percentage">
                          <h3>68%  </h3>
                          <p>Very good</p>
                      </div>

                      <div className="data-blink">
                          <div className="blink-list">
                             <ul>
                              <li>
                                <div className="left-blink">
                                   <span className="span-1">&nbsp;</span><p>Excel & SQL</p>
                                </div>
                                <div className="right-blink">
                                <i class="fa fa-times cross" aria-hidden="true"></i>
                                <div className=" blink">
                                     <div className="zoom-in-zoom-out"></div>
                                </div>
                                </div>
                              </li>
                              <li>
                                <div className="left-blink">
                                   <span className="span-2">&nbsp;</span><p>Math & Formulas</p>
                                </div>
                                <div className="right-blink">
                                <i class="fa fa-times cross" aria-hidden="true"></i>
                                <div className=" blink">
                                     <div className="zoom-in-zoom-out"></div>
                                </div>
                                </div>
                              </li>
                              <li>
                                <div className="left-blink">
                                   <span className="span-3">&nbsp;</span><p>Logical Interpretation</p>
                                </div>
                                <div className="right-blink">
                                <i class="fa fa-times cross" aria-hidden="true"></i>
                                <div className=" blink">
                                     <div className="zoom-in-zoom-out"></div>
                                </div>
                                </div>
                              </li>
                              <li>
                                <div className="left-blink">
                                   <span className="span-4">&nbsp;</span><p>Pattern Recognition</p>
                                </div>
                                <div className="right-blink">
                               <i class="fa fa-check checked" aria-hidden="true"></i>
                                <div className=" blink-blank">
                                     <div className="zoom-in-zoom-out"></div>
                                </div>
                                </div>
                              </li>
                              <li>
                                <div className="left-blink">
                                   <span className="span-5">&nbsp;</span><p>Management & Leadership</p>
                                </div>
                                <div className="right-blink">
                               <i class="fa fa-check checked" aria-hidden="true"></i>
                                <div className=" blink-blank">
                                     
                                </div>
                                </div>
                              </li>
                             </ul>
                          </div>
                      </div>
                    </div>

                    
                  </div>

                  <div className="show_more_btn">
                     <a href="#" data-dismiss="modal"
                      data-toggle="modal"
                      data-target="#submitResultModal">Show less details <i class="fa fa-angle-right" aria-hidden="true"></i></a>
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