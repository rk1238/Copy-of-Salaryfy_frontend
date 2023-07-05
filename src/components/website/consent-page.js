import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";
import jsPDF from 'jspdf';

import { Buffer } from 'buffer';

import img1 from "../img/new-logo.png";
import "../styles/range.css";
import pako from 'pako';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import sign from "../img/sign.gif";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ApiBaseUrl } from "../BaseUrl/baseUrl";
// import './css/font.css';

function ConsentPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const name = JSON.parse(localStorage.getItem("name"));
  const phoneno = JSON.parse(window.localStorage.getItem("phone"));
  const capitalizedName = name?.charAt(0)?.toUpperCase() + name?.slice(1);
  
  const Token = JSON.parse(window.localStorage.getItem("token"));
  const email = JSON.parse(window.localStorage.getItem("email"));
  const canvasRef = useRef(null);
  const [signature, setSignature] = useState("");
  const [dob, setDob] = useState(null);
  const [phone, setPhoneOtp] = useState({
    phone:""
  });
  const [file1, setfile1] = useState({
    isa:''
  })
  
  const onChange = (e) => {
    const { value, name } = e.target;
    setPhoneOtp((state) => ({
      ...state,
      [name]: value,
    }));
  };
   
  function handleFocus(event) {
    if (!phone.phone.startsWith('+91')) {
      setPhoneOtp((prevValue) => ({
        ...prevValue,
        phone: '+91' + prevValue.phone
      }));
    }
  }

  const generateSignature = async () => {
    if (!dob || !phone?.phone || phone?.phone?.length !== 13) {
      // Validation error - both fields are required
      alert('Please fill in both fields before generating signature.');
      return;
    }
    try {
      setLoading(true);
      const canvas = canvasRef.current;
      if (!canvas) return;
  
      canvas.width = 400;
      canvas.height = 200;
  
      const context = canvas.getContext("2d");
      if (!context) return;
  
      context.font = "italic 50px Arial";
      context.fillStyle = "#000000";
      context.fillText(capitalizedName, 20, 80);
  
      const signatureImage = canvas.toDataURL("image/png");
      setSignature(signatureImage);
  
  
const content = document.getElementById("content");

// Set the options for the PDF conversion
const options = {
  margin: [10, 10],
  filename: "signature.pdf",
  image: { type: "png", data: signatureImage },
};

// Use the html2pdf library to generate a PDF file from the HTML content
html2pdf().set(options).from(content).outputPdf()
  .then(pdfBlob => {
    // Create a new FormData object and append the PDF file to it
    const formData = new FormData();
    formData.append('isa', pdfBlob, options.filename);

    // Send the FormData object to the server using the fetch API or XMLHttpRequest
    const url = ApiBaseUrl+'document-upload';
    fetch(url, {
      method: 'POST',
      body: formData
    }).then(response => {
      console.log('PDF file uploaded successfully!');
    }).catch(error => {
      console.error('Error uploading PDF file:', error);
    });
  })
  .catch(error => {
    console.error('Error generating PDF file:', error);
  });

    } catch (error) {
      console.error(error);
    }
    // } finally {
    //   // Hide progress bar
    //   setLoading(false);
    //   const modal = document.getElementById("submitTestModal");
    //   if (modal) {
    //     modal.classList.add("show");
    //     modal.style.display = "block";
    //   }
    //   setTimeout(() => {
    //     if (modal) {
    //       modal.classList.remove("show");
    //       modal.style.display = "none";
    //     }
    //     navigate('/DirectPlacementDashboard')
    //   }, 3000);
    // }
  };
  
  

  // const generateSignature = async () => {
  //   if (!dob || !phone.phone || phone.phone.length !== 13) {
  //     // Validation error - both fields are required
  //     alert('Please fill in both fields before generating signature.');
  //     return;
  //   }
  //   try {
  //     setLoading(true);
  
  //     const canvas = canvasRef.current;
  //     if (!canvas) return;
  
  //     canvas.width = 400;
  //     canvas.height = 200;
  
  //     const context = canvas.getContext("2d");
  //     if (!context) return;
  
  //     context.font = "50px Mistral";
  //     context.fillText(capitalizedName, 20, 80);
  
  //     const signatureImage = canvas.toDataURL("image/png");
  //     setSignature(signatureImage);
  
  //     // Generate PDF
  //     const content = document.getElementById("content");
  //     const pdfCanvas = await html2canvas(content, { dpi: 72, type: "jpeg" });
  //     const imgData = pdfCanvas.toDataURL("image/png");
  
  //     const pdf = new jsPDF('p', 'pt', 'a4');
  //     pdf.text(capitalizedName, 20, 80);
  //     pdf.addImage(imgData, 'PNG', 0, 0, 595.28, 841.89);
  //     const pdfBlob = pdf.output('blob');
  //     const formData = new FormData();
  //     formData.append("isa", pdfBlob);
  //     const response = await axios.post(
  //       "http://139.59.82.215:8001/api/document-upload",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "application/pdf",
  //           "x-access-token": Token,
  //         },
  //       }
  //     );
  
  //     console.log("File uploaded successfully:", response.data);
  
  //   } catch (error) {
  //     console.error("Error generating signature or uploading file:", error);
  //   } finally {
  //     setLoading(false);
  
  //     const modal = document.getElementById("submitTestModal");
  //     if (modal) {
  //       modal.classList.add("show");
  //       modal.style.display = "block";
  //     }
  
  //     setTimeout(() => {
  //       if (modal) {
  //         modal.classList.remove("show");
  //         modal.style.display = "none";
  //       }
  
  //       navigate('/DirectPlacementDashboard')
  //     }, 3000);
  //   }
  // };
  
  return (
    <div className="isa_agreement_pdf_section">
      <div className="agreement-header">
        <h1>Candidate Consent Form</h1>
      </div>
      {loading && (
        <div className="loader-container">
         <div className="loader"></div>
        </div>
       )}
      <div className="bottom_fixed_buttons">
      
        <div className="Generate_pdf_btn">
            <button
              onClick={generateSignature}
              className="theme_btn sign">
              Sign & Download
            </button>
            {/* <a href="/DirectPlacementDashboard" className="theme_btn sign">
              Sign
              <span></span>
            </a> */}
        </div>
        </div>
        

      {/* {signature && <img src={signature} alt="signature" />} */}
      <canvas ref={canvasRef} className="hidden-canvas"></canvas>
      <div id="content">
        <section className="main-section">
          <header>
            <img src={img1} alt="Data Folkz" />
          </header>

          <section className="main-body-content">
            <div className="heading">
              <h5 className="main-title text-center " style={{
                    
                    margin: " 0",
                   
                  }}>
                <span
                  style={{
                    fontSize: "28px",
                    margin: "27px 0 3px",
                    textAlign: "center",
                    fontWeight: 600,
                  }}>
                  Candidate Consent Form
                </span>
              </h5>

              <h5 className="main-title text-center">
                <span
                  style={{
                    fontSize: "24px",
                    margin: "2px 0 13px",
                    textAlign: "center",
                    fontWeight: 600,
                  }}>
                  (Under Direct Placement Services)

                </span>
              </h5>
              <p>&nbsp;</p>
            </div>
            <div className="main-content">
              <p
                style={{
                  fontSize: "16px",
                  margin: "22px 0 5px",
                  textAlign: "center",
                  color: "#000",
                }}>
               This<strong> Candidate Consent Form </strong>(hereinafter referred to as “the Form”) 
               is entered into by and between 

              </p>

              <p
                style={{
                  fontSize: "16px",
                  margin: "2px 0 3px",
                  textAlign: "center",
                  color: "#000",
                }}>
                <strong> Salaryfy</strong>
                (hereinafter referred to as “the Company”)
              </p>

              <br />
              <p
                style={{
                  fontSize: "19px",
                  margin: "0px 0 0px",
                  textAlign: "center",
                  color: "#000",
                }}>
                <strong>AND</strong>
              </p>

              <br />

              <p
                style={{
                  fontSize: "16px",
                  margin: "4px 0 7px",
                  textAlign: "center",
                  color: "#000",
                }}>
                the <strong>Job Seeker</strong>
                  (hereinafter referred to as “Candidate/ User”).

              </p>

              <br />
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <ol
                className="upper-alfa"
                style={{ paddingLeft: "30px", listStyle: "auto" }}>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                 Definitions As Per This Declaration
                  <ul
                    className="list-check-box"
                    style={{ paddingLeft: "50px", listStyle: "disc" }}>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                     “Annual Income or  CTC” refers to the total of the fixed salary (+) the variable pay (+) the employment benefits (+) compensation (if any).

                    </li>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                      "Employer" refers to any individual or organization for whom the User provides services, whether as an employee, independent contractor or in any other capacity.

                    </li>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                     “Service Fee” refers to the fixed 1% of the Annual income or CTC which is non-refundable and non-transferable in nature.

                    </li>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                     “Restitution Fee” refers to a fixed amount of Rs. 5000 which is meant to incur any losses on the part of the Candidate which is non-refundable and non-transferable in nature.

                    </li>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                    “Date of enrolment” refers to the date on which the candidate has opted for and signed the consent form.

                    </li>
                  </ul>
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  According to the direct placement services, the company agrees to provide a new job within 60 days after enrolment, either directly or through a third party.

                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  The Company is fully authorized to charge a service fee equal to a fixed 1% of the CTC in exchange for providing new employment to the User.

                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                 The Candidate must pay the Service Fee to the company after receiving the offer letter but before receiving the appointment letter.

                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                 If the candidate has not submitted the service fee before receiving the appointment letter, the appointment letter will be postponed until the candidate submits the service fee (maximum up to 10 days).

                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  If the candidate fails to pay the service fee within 10 days of receiving the offer letter, the company may revoke the appointment letter. As a result, in such a case, the company is not obligated to make another employment offer to the candidate. And the candidate is obligated to pay the Restitution Fee.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                 To be eligible to participate in the interview process, a candidate must successfully complete and pass all career and skill development assignments, if any, that are either specified in the course/curriculum or that have been personally assigned to you by the company's career coaches.

                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                 The candidate must be eligible to work in India legally and be either an Indian national or a permanent resident. The applicant must also agree to accept job offers and relocate (anywhere in India or Outside). 

                </li>


                
                
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                After being hired, the candidates agree to work full-time (directly or indirectly). If the candidate leaves the new job within six months of being hired, the employer has the entire authority to blacklist the candidate for future employment.

                </li>
                
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                 The Company shall seek roles that are appropriate for the candidate's level of experience and areas of expertise, and the candidate shall keep realistic expectations about the nature and kind of job that is likely to be offered in the respected domain, with no minimum wage increase restrictions.

                </li>
                
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                 The candidate must reply to any communications from Company representatives through email or on-call within 24-48 hours and must always act fairly and make all necessary efforts in good faith to get employment..

                </li>
                
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                The Company will make at least three job offers to the candidate, and the candidate must accept one of them within 60 days of enrollment. If a candidate declines all job offers without a valid reason, the company is not obliged to recruit you. Nonetheless, the candidate is obligated to pay the Restitution Fee to the company within 7 days.

                </li>
                
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                 The Company shall not be obligated to secure employment for the candidate if he/she fails to follow through with the interview process in a timely and professional manner, including but not limited to, failing to participate as expected by the employer in the interview process by responding to employer communications, failing to show up on time for interviews and failing to provide documents, or failing to follow up as expected by employers. However, the Company will be eligible to collect the Restitution Fee from the candidate.

                </li>
                
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                 However, if the candidate decides to drop out / withdraw at any point throughout the Placement Process, the candidate will be required to pay the Restitution Fee to the Company.

                </li>


                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                 In case a candidate has provided any false/ misleading/ deceptive information or documents omissions of facts, at any stage during the placement process, then the company is eligible to cancel the placement process and the candidate is liable to pay the Restitution Fee.

                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                The Company is not obligated to provide the candidate with another employment offer if the Candidate decides to resign/abscond/ terminated from their job within six months of being placed. Additionally, in such circumstances, the employer may also choose to place the candidate on a blacklist.

                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                 The candidate must follow the Company's policies and procedures. The Company shall fully monitor and implement the conditions of this Declaration.

                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                 The candidate acknowledges that all adversarial processes arising out of this Declaration, your Company, or your payments to the Company will be governed by the laws of India.

                </li>



                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                 The candidate is liable for any forgery or falsification of any document, which is a serious violation under Section 465 of the Indian Criminal Code of 1860.

                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                The candidate agrees that any breach of the terms and conditions may result in the termination of his placement and the submission of the restitution fee.

                </li>
              </ol>
            </div>

            

              <table
                      className="table table-bordered "
                      style={{
                        margin: "30px auto 90px",
                        width: "95%",
                      }}>
                      <tbody>
                        {/* <tr>
                          <th scope="row">Withdrawal Fee (Obligatory)</th>
                          <th scope="row">Terms and Conditions</th>
                        </tr> */}

                        <tr>
                          <td>User’s Full Name:</td>
                          <td>{capitalizedName}</td>
                        </tr>

                        <tr>
                          <td>Date of Birth:</td>
                          <td>      
                         <DatePicker
                          className="custom-datepicker"
                          id="dob-input"
                          dateFormat="dd/MM/yyyy"
                          selected={dob}
                          maxDate={new Date("2015-12-31")}
                          onChange={date => setDob(date)}
                          placeholderText="Select date"
                          popperPlacement="top"
                         />
                        </td>
                        </tr>

                        <tr>
                          <td>Email id:</td>
                          {/* <td><input type="text"  style={{ width: "100%", border: "0", outline: "none", background: "transparent"}}/></td> */}
                          <td>{email}</td>
                        </tr>

                        <tr>
                          <td>Contact Number:</td>
                          <td>{phoneno?.phone }</td>
                        </tr>

                        <tr>
                          <td>Alternate Contact Number:</td>
                          <td>
                          <input type="tel" maxLength="13"
                           onInput={(e) => {
                           e.target.value = e.target.value.replace(/[^\d^+]/g, "");
                          }}
                          placeholder="+91 XXXXX XXXXX"
                          name="phone"
                          style={{ width: "100%", border: "0", outline: "none", background: "transparent" }}
                          onFocus={handleFocus}
                          onChange={onChange}
                          value={phone?.phone}
                          />
                         </td>
                        </tr>

                        {/* <tr> */}
                          {/* <td>Candidate Signature:</td> */}
                          {/* <td> */}
                            {signature && <p style={{ textAlign: "center", width: "100%",fontFamily:'arial'}} ><img src={signature} alt="signature" /></p>}
                            {/* </td> */}
                        {/* </tr> */}
                      </tbody>
              </table>

          






          </section>

        </section>
      </div>
      <div
        className="modal fade sign-in-modal test-submit-modal congratulations-popup sign_popup"
        id="submitTestModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ready-list">
              <img src={sign} alt=''/>
             
              <p className="message ">Hi {name}, you have successfully signed your Consent Form</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsentPage;
