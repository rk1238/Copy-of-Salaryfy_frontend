import React,{useState,useEffect,useRef} from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import arrow from "../img/arrow.png";
import Navbar from "../common/navbar";

import SvgArrow from "../img/arrow-svg.svg";
import RightGreen from "../img/right-green.png";


import { StyledSpeedometer } from '../styles/SpeedometerStyle.style'
import { Wrapper } from '../styles/Wrapper.style'

ChartJS.register(ArcElement);


const DoughnutData = () => {
    
    const total_per = JSON.parse(window.localStorage.getItem("total_per"));
    const total_LR = JSON.parse(window.localStorage.getItem("total_LR"));
    const total_LC = JSON.parse(window.localStorage.getItem("total_LC"));
    const total_AVP = JSON.parse(window.localStorage.getItem("total_AVP"));
    const test_AVP = JSON.parse(window.localStorage.getItem("test_AVP"));
    const test_LC = JSON.parse(window.localStorage.getItem("test_LC"));
    const test_LR = JSON.parse(window.localStorage.getItem("test_LR"));
   
    
    const salary_in_lpa = JSON.parse(window.localStorage.getItem("salary_in_lpa"));
   
    const userName = JSON.parse(localStorage.getItem("name"));
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
  const speed=salary_in_lpa
  const turnRef = useRef(null)
  const sliderRef = useRef(null)
  useEffect(() => {
    if(speed === 0) {
      const turn = (2 + speed) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
     }
     else if(speed===1){
      const turn = (2.5 + speed) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
     }
     else if(speed===2){
      const turn = (4.5+ speed) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
     }
     else if(speed===3){
      const turn = (5 + speed) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
     }
     else if(speed===4){
      const turn = (6 + speed) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
     }
     else if(speed===5){
      const turn = (9.5 + speed) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
     }
     else if(speed===6){
      const turn = (10 + speed) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
     }
     else if (speed === 7) {
      const turn = (12 + speed) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
     }
     else if(speed===8){
      const turn = (17.5 + speed) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    else if(speed===9){
      const turn = (19 + speed) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
     }
     else if(speed===10){
      const turn = (21+ speed) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
     }
     else if(speed===11){
      const turn = (22 + speed) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
     }
     else if(speed===12){
      const turn = (23 + speed) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
     }
     else if(speed===13){
      const turn = (24 + speed) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
     }
     else if(speed===15){
      const turn = (24 + speed) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    else if(speed===16){
      const turn = (24 + speed) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    else if(speed===17){
      const turn = (24.1 + speed) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    else if(speed===18){
      const turn = (24.3 + speed) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }
    else if(speed===19){
      const turn = (24.7 + speed) / 100;
      turnRef.current.style.transform = `rotate(${turn}turn)`;
      sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`;
    }  
    else if(speed===20){
      const turn = (26 + speed) / 100;
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
    }, 400);

    return () => clearInterval(interval);
  }, [count, maxValue]);

  return <h1>{count}</h1>;
}
  return (
    <React.Fragment>
     <div className='hide_show_navbar'>
     <Navbar />
     </div>
  <section className='direct-placement-route direct-placement-route1 doughnut_placement_route'>
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
                      <b>
                      You have scored {Math.round(total_per)}% on the eligibility test. On the basis of your eligibility score, you can get a job up to {salary_in_lpa} LPA with our skill-based placement program. 
                        {/* based on your eligiblity score of {Math.round(total_per)}%,you can get a job up to {salary_in_lpa}LPA */}
                        </b>
                    </p>
                    
                    <div className='speedomiter_sec'>
                    <Wrapper>
                          <StyledSpeedometer>
                              <div className="guage_body">
                                  <div className="guage_body_fill" ref={turnRef} />
                                  <div className="guage_body_cover">
                                      <div className="guage_indicator_slider" ref={sliderRef} />
                                  </div>
                                  
                                  <div className="guage_indicator" />
                                  <div className="text_content">
                                      <h4><Counter maxValue={speed} /></h4>
                                      <p>Lakh per annum</p>
                                  </div>
                              </div>
                              <div className="guage_value guage_value_1" >1LPA</div>
                              <div className="guage_value guage_value_2" >5LPA</div>
                              <div className="guage_value guage_value_3" >10LPA</div>
                              <div className="guage_value guage_value_4" >20LPA</div>
                          </StyledSpeedometer>
                    </Wrapper>
                    </div>
                    
                        <div className='job_guarantee_para'>
                          <p>With Skill placement</p>
                        </div>
                    <div className="right-block fresher-test">
                       <a href="/SkilledBasedPackage" className="theme_btn tertiary">
                       Opt upto {salary_in_lpa} LPA  <img src={RightGreen} alt="arrow" className="img-1"/>
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
                          cutout: 100,
                          animation: {
                            animateRotate: true,
                            duration: 1500 // set the duration to 2000ms (2 seconds)
                          }
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
                     <a href="/barGraphPage">
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

export default DoughnutData