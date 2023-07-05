import React from 'react'
import Navbar from "../common/navbar";
import Footer from "../common/footer";

import editYellow from "../img/edit-yellow.png";
import Back from "../img/back.png";
import warning from "../img/warning.png";




const BookSlot = () => {
  return (
    <React.Fragment>
      <Navbar />

      <section className="eligiblity-form-sec">
            <div className="container">
                <div className="timeline-pop">
                    <ol>
                        <li className="active">
                            <span className="active-border">1</span>
                            <p>Eligiblity</p>
                        </li>
                        <li className="active">
                            <span className="active-border">2</span>
                            <p>Select plan</p>
                        </li>
                        <li className="active">
                            <span className="active-border">3</span>
                            <p>Registratiion</p>
                        </li>
                        <li className="active">
                            <span className="active-border">4</span>
                            <p>Schedule call</p>
                        </li>
                    </ol>
                </div>

                <div className="book-slot-sec">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-slot">
                                <h1>Book your slot</h1>
                                <p>Sub text here</p>
                            </div>
                        </div>
                    </div>

                    <div className="video-box">
                        <h2>Why us video here</h2>
                        <a href="#" className="theme_btn" type="button"
                            data-toggle="modal" data-target="#BookModal">book
                            Slot</a>
                    </div>
                </div>
            </div>
        </section>



     
        <div className="modal fade sign-in-modal test-submit-modal book-slot"
            id="BookModal" tabindex="-1"
            role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <i className="fa fa-calendar-o" aria-hidden="true"></i>

                        <h3>Call booked successfully</h3>
                        <button type="button" className="close" data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body ready-list">
                        <p>Your call with our admission officer has been booked
                            successfully on </p>

                        <h5>November 20, 5pm <span> Edit <img
                                    src={editYellow} alt="" /></span></h5>
                        <div className="test-box">
                            <button type="button" className="theme_btn
                                transparent" data-toggle="modal" data-target="#submitTestModal" data-dismiss="modal">
                                Browse courses
                                <span></span>
                            </button>
                            <button type="button" className="theme_btn
                                " data-toggle="modal" data-target="#submitTestModal" data-dismiss="modal">
                                 Admission process
                                <span></span>
                            </button>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>





        <div className="modal fade sign-in-modal test-submit-modal scholarship-modal disclaimer-modal
            " id="submitTestModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">

                        <button type="button" className="close" data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body ready-list">
                        <div className="header">
                            <img src={Back} alt=""/>
                            <h2 className="text-center">Disclaimer</h2>
                        </div>

                        <div className="alert alert-warning" role="alert">
                            <img src={warning} alt='' />
                            <p className="text-center">Data folkz offers free plan
                                for only those students who score above 70% in
                                the following merit test. Please read all
                                instruction carefully, all the best! </p>
                        </div>

                        <ul>
                            <li>You are about to proceed for scholarship test</li>
                            <li>More details here like 30mins duration</li>
                            <li>More points here</li>
                            <li>More points here</li>
                            <li>More points here</li>
                        </ul>

                        <div className="scholarship-table">
                            <p className="left-para">Merit criteria</p>

                            <div className="table-responsive-xl
                                special-inclusions-table">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>

                                            <td>Above 70%</td>
                                            <td>70% to 50%</td>
                                            <td>Bellow 50%</td>
                                        </tr>
                                        <tr>

                                            <td>free</td>
                                            <td> ₹ 10,000</td>
                                            <td> ₹ 20,000</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="text-center">You have 1 attempt left</p>
                        <div className="test-box">
                            <button type="button" className="theme_btn
                                transparent" data-toggle="modal"
                                data-target="#submitTestModal-1"
                                data-dismiss="modal">
                                View details
                                <span></span>
                            </button>

                            {/* <a href="#"
                                type="button" className="theme_btn
                                ">
                                Proceed
                                <span></span>
                            </a> */}
                            <a href="/AfterScholarshipTestDashboard"
                                type="button" className="theme_btn
                                ">
                                Proceed
                                <span></span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <Footer />
    </React.Fragment>
  )
}

export default BookSlot