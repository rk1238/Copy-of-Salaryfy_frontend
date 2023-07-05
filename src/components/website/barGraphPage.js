import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Doughnut } from 'react-chartjs-2';
import Navbar from "../common/navbar";
import SvgArrow from "../img/arrow-svg.svg";
import RightGreen from "../img/right-green.png";

import { Chart as ChartJS, ArcElement } from 'chart.js';
import arrow from "../img/arrow.png";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
  } from "recharts";
ChartJS.register(ArcElement);

const BarGraphPage = () => {
  const navigate = useNavigate();
  const total_per = JSON.parse(window.localStorage.getItem("total_per"));
  const total_LR = JSON.parse(window.localStorage.getItem("total_LR"));
  const total_LC = JSON.parse(window.localStorage.getItem("total_LC"));
  const total_AVP = JSON.parse(window.localStorage.getItem("total_AVP"));
  const test_AVP = JSON.parse(window.localStorage.getItem("test_AVP"));
  const test_LC = JSON.parse(window.localStorage.getItem("test_LC"));
  const test_LR = JSON.parse(window.localStorage.getItem("test_LR"));
  const salary_in_lpa = JSON.parse(window.localStorage.getItem("salary_in_lpa"));

  const data1 = Math.round(test_LR)
  const data2 = (Math.round(test_AVP))/2
  const data3 = Math.round(test_LC)
  const data4=(Math.round(test_AVP))/2

  const Pillar1 = ({ x, y, width, height, fill, value }) => {
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill='#B3B3B3'
          // stroke="white"
          strokeWidth={2}
        />
        <text x={x + width / 2} y={y + height / 2} transform={`rotate(-90, ${x + width / 2}, ${y + height / 2})`} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize={12}>
         You are here
      </text>
      </g>
    );
  };
const Pillar2 = ({ x, y, width, height, fill, value }) => {
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill='#0E5F59'
          // stroke="white"
        />
        <text x={x + width / 2} y={y + height / 2} transform={`rotate(-90, ${x + width / 2}, ${y + height / 2})`} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize={12}>
         What you deserve
      </text>
      </g>
    );
  };
const dataBar = [
    {
       name: "Different Scenario",
      'You are here': 5,
      'What you deserve': salary_in_lpa,
       amt: 20,
    },
    ];
ChartJS.register(ArcElement);  
    useEffect(() => {
    }, []);
  const data = {
    options: {
      legend: {
          responsive:true,
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
  return (
    <React.Fragment>

<div className='hide_show_navbar'>
     <Navbar />
     </div>
    <section className='direct-placement-route direct-placement-route1 direct-placement-route2'>
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
                    <div className="score-miter-graph">
                      <br />
                      <BarChart
                           width={400}
                           height={300}
                           data={dataBar}
                           barGap={55}
                           margin={{
                             top: 20,
                             right: 30,
                             left: 15,
                             bottom: 5
                            }}
                            options={{
                              responsive:true
                            }}
                         
                         fill="#0E5F59"
                      >
                            <XAxis dataKey="name" fill='#0E5F59' />
                            {/* axisLine={{ stroke: 'white' }} */}
                            <YAxis
                               tick={null} 
                               tickLine={null} 
                               label={{ value: 'Lakh Per Annum', position: 'center', angle: -90, offset: 60, fontSize: '15px',fill:'#0E5F59' }}/>
                                <Bar dataKey="You are here" fill="#B3B3B3" minPointSize={5} barSize={48} shape={<Pillar1 />} label={{ position: 'top',formatter: value => `${value} LPA`,fontSize: '13px' }}>
                                </Bar>
                                <Bar dataKey="What you deserve" fill="#0E5F59" minPointSize={10} barSize={48} shape={<Pillar2 />} label={{ position: 'top',formatter: value => `${value} LPA`,fontSize: '13px',fill:"#0E5F59"}}>
                                </Bar>
                                                 
                      </BarChart>
                     
                     
                     </div>
                        <br />
                        {/* <>
                          salary_in_lpa={salary_in_lpa}<br/>
                          total_percentage_in_logical_reasoning={total_LR}%<br/>
                          total_percentage_in_language_comprehension={total_LC}%<br/>
                          total_percentage_in_audio_visual_processing={(total_AVP) / 2}%<br />
                          Processing Speed and Retention={(total_AVP) / 2}%<br />
                        </> */}
                     <div className="right-block fresher-test">
                       <a href="/SkilledBasedPackage" className="theme_btn tertiary">
                         Opt upto {salary_in_lpa} LPA <img src={RightGreen} alt="arrow" className="img-1"/>
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
                             
                              
                              {total_LC >= 80 ?
                                
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
                     <a href="/doughnut">
                     Show less details <i className="fa fa-angle-right rotate" aria-hidden="true"></i></a>
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

export default BarGraphPage