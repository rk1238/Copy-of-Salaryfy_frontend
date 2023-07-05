import React from 'react'
import superFastImage from '../img/super_fast.png'
import superLiteImage from '../img/super_lite.png'
import tick from '../img/tick_super.png'
import accessButton from '../img/access_now.png'

const JobSwitchBox = () => {
  return (
    <div className="container">
        <div className="jobSwitch_container">
        <div className="jobSwitch_title_container">
        <p className="jobSwitch_description">Details for</p>
         <h3 className="jobSwitch_title">Job Switch Plan</h3>
        </div>
         <div className="jobSwitch_inner_container">
              <div className="jobSwitch_inner_container_title">
                    <img src={superLiteImage} alt="super" style={{marginTop:'20px',marginLeft:'20px'}}/>
                    {/* <h3 className='jobSwitch_title_bar_title'>Super Fast</h3> */}
              </div>

              <div className='jobSwitch_next_container'>
              <div  style={{display:'flex',gap:'5px',alignItems:'center',justifyContent:'space-between'}}>
                <div>
                    <h3 className='fifteen_days'>15 Days</h3>
                 
                </div>
                <div style={{display:'flex',gap:'5px',alignItems:'center'}}>
                    <strike className="thousand_strike">₹1000</strike>
                    <span className="five_hundred_strike">₹500</span>
                </div>
              </div>
              <p>Job change time</p>

              <div className='jobSwitch_left_right_container'>

              <div className='jobSwitch_left_list'>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Job switch within 2 months</p>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Expected hike 80%</p>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Resume building</p>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Linkedinenhancement</p>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Job fitment analysis</p>
                </div>
                
              </div>

              <div className='jobSwitch_right_list'>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Job switch within 2 months</p>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Expected hike 80%</p>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Resume building</p>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Linkedinenhancement</p>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Job fitment analysis</p>
                </div>
                
              </div>

              </div>

              <div className='jobSwitch_access_button'>
                <img src={accessButton} alt="access" />
              </div>
              </div>

              
         </div>
        </div>
    </div>
  )
}

export default JobSwitchBox