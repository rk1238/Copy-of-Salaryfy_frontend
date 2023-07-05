import React,{useEffect,useRef,useState} from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import arrow from "../img/arrow.png";
import Navbar from "../common/navbar";

import SvgArrow from "../img/arrow-svg.svg";
import RightGreen from "../img/right-green.png";


import { useNavigate } from "react-router-dom";
import { StyledSpeedometer } from '../styles/SpeedometerStyle.style'
import { Wrapper } from '../styles/Wrapper.style'

ChartJS.register(ArcElement);

const DirectPlacementMeter = () => {
    const navigate = useNavigate();
    const total_per = JSON.parse(window.localStorage.getItem("total_per"));
    const total_LR = JSON.parse(window.localStorage.getItem("total_LR"));
    const total_LC = JSON.parse(window.localStorage.getItem("total_LC"));
    const total_AVP = JSON.parse(window.localStorage.getItem("total_AVP"));
    const test_AVP = JSON.parse(window.localStorage.getItem("test_AVP"));
    const test_LC = JSON.parse(window.localStorage.getItem("test_LC"));
    const test_LR = JSON.parse(window.localStorage.getItem("test_LR"));
   
    const current_package = JSON.parse(window.localStorage.getItem("current_package"));
    
    const userName = JSON.parse(localStorage.getItem("name"));
    const data1 = Math.round(test_LR)
    const data2 = (Math.round(test_AVP))/2
    const data3 = Math.round(test_LC)
    const data4 = (Math.round(test_AVP)) / 2
  
    const salary_hike = JSON.parse(window.localStorage.getItem("salary_hike"));
    const hike_in_LPA = Math.round(current_package * (1 + salary_hike / 100));
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
              
              'rgba(254, 205, 8, 1)',
              'rgba(151, 71, 255, 1)',
              'rgba(77, 175, 74, 1)',
              'rgba(14, 95, 89, 1)',
              
          ],
          borderColor: [
            'rgba(254, 205, 8, 1)',
            'rgba(151, 71, 255, 1)',
            'rgba(77, 175, 74, 1)',
            'rgba(14, 95, 89, 1)',
           
          ],
            borderWidth: 1,
          },
        ],
        
  };
  

  //speedometer begin.....
  const speed=salary_hike
  const turnRef = useRef(null)
  const sliderRef = useRef(null)
  
  useEffect(() => {
    if (speed === 10) {
      const speed2=0
      const turn = (2 + speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    if (speed > 10 && speed < 20) {
      const speed2 = 2
      const turn = (2 + speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    if (speed >= 20 && speed < 30) {
      const speed2 = 2
      const turn = (3 + speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    if (speed >= 30 && speed < 40) {
      const speed2 = 3
      const turn = (4.5 + speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    if (speed >= 40 && speed < 50) {
      const speed2 = 4
      const turn = (7 + speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    else if (speed === 50) {
      const speed2=4
      const turn = (10.5+ speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    else if (speed === 50) {
      const speed2=4
      const turn = (10.5+ speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    else if (speed > 50 && speed < 60) {
      const speed2=4
      const turn = (15+ speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    else if (speed >= 60 && speed < 70) {
      const speed2=4
      const turn = (16+ speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    else if (speed >= 70 && speed < 80) {
      const speed2=4
      const turn = (19+ speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    else if (speed >= 80 && speed < 90) {
      const speed2=4
      const turn = (21 + speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    else if (speed >= 90 && speed < 100) {
      const speed2=4
      const turn = (23 + speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } 
    else if (speed === 100) {
      const speed2=6
      const turn = (25 + speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    else if (speed > 100 && speed <=110) {
      const speed2=17
      const turn = (18 + speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    else if (speed > 110 && speed <=120) {
      const speed2=17
      const turn = (20 + speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    else if (speed > 120 && speed <150) {
      const speed2=17
      const turn = (24.2 + speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    else if (speed === 150) {
      const speed2=18
      const turn = (23 + speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    else if (speed >150 && speed<180 ) {
      const speed2=18
      const turn = (23.5 + speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    } 
    else if (speed === 180) {
      const speed2=19
      const turn = (24.7 + speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }  
    else if (speed >180 && speed<=190) {
      const speed2=19
      const turn = (26 + speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    else if (speed >190 && speed<200) {
      const speed2=19
      const turn = (27 + speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    else if (speed === 200) {
      const speed2=21
      const turn = (26 + speed2) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
  
  }, [speed]);
// speedometer end.....

function changeBackgroundColor() {
  var element = document.querySelector('.direct-placement-route1');
  element.style.transition = 'background-color 1s ease';
  element.style.backgroundColor = 'rgba(14, 95, 89, 0.9)';
}
setTimeout(function() {
  changeBackgroundColor();
}, 1500)

function Counter({ maxValue }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count === maxValue) {
        clearInterval(interval);
      } else {
        setCount(count + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [count, maxValue]);

  return <>{count}</>;
}
  return (
    <React.Fragment>
     <div className='hide_show_navbar'>
     <Navbar />
     </div>
  <section className='direct-placement-route  direct-placement-route1'>
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

                        <p>You can get salary hike up to {salary_hike}%
                        {/* <b>
                        {
                          current_package === '3' ? "1 to 3 LPA" :
                          current_package === '5' ? "3 to 5 LPA" :
                          current_package === '5' ? "5 to 7 LPA" : 
                          current_package === '8' ? "More than 7 LPA" :           
                          ""
                        }
                        </b><br/> */}
                    {/* but in an ideal scenario you can get up to */}
                    </p>
          
                    
                    <div className='speedomiter_sec hike_meter'>
                    <Wrapper>
                          <StyledSpeedometer>
                              <div className="guage_body">
                                  <div className="guage_body_fill" ref={turnRef} />
                                  <div className="guage_body_cover">
                                      <div className="guage_indicator_slider" ref={sliderRef} />
                                  </div>
                                  
                                  <div className="guage_indicator" />
                                  <div className="text_content">
                                      <h4><Counter maxValue={Math.round(speed)} /><span> % </span></h4>
                                      <p>hike </p>
                                  </div>
                              </div>

                              <div className="guage_value guage_value_1" >10%</div>
                              <div className="guage_value guage_value_2" >50%</div>
                              <div className="guage_value guage_value_3" >100%</div>
                              <div className="guage_value guage_value_4" >200%</div>
                          </StyledSpeedometer>
                    </Wrapper>
                    </div>
                    
                        
                        {/* <>
                          total_percentage_in_logical_reasoning={total_LR}%<br/>
                          total_percentage_in_language_comprehension={total_LC}%<br/>
                          total_percentage_in_audio_visual_processing={(total_AVP)/2}%
                          Processing Speed and Retention={(total_AVP) / 2}%
                        </> */}

                        <div className='job_guarantee_para'>
                          <p>100% job guarantee</p>
                        </div>
                    <div className="right-block fresher-test">
                       <a href="/DirectPlacement" className="theme_btn tertiary">
                       Opt upto {salary_hike}% salary hike <img src={RightGreen} alt="arrow" className="img-1"/>
                             <img src={SvgArrow} className="partners-img img-2" alt="" />
                       <span></span>
                       </a>
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
                          cutout: 100
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
                              
                              
                              { total_LR > 45 ?
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
                              <li>
                              <div className="left-blink">
                                   <span className="span-4">&nbsp;</span><p>Processing Speed and Retention</p>
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
                             </ul>
                          </div>
                      </div>
                    </div>  
                  </div>

                  <div className="show_more_btn">
                     <a href=" " onClick={() => { navigate("");}}>
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

export default DirectPlacementMeter