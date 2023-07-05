import React, { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";
import img1 from "../img/new-logo.png";
import "../styles/range.css";
import pako from 'pako';
import axios from "axios";
import { useNavigate ,useParams} from "react-router-dom";
import sign from "../img/sign.gif";
import { ApiBaseUrl } from "../BaseUrl/baseUrl";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AgreementPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const name = JSON.parse(localStorage.getItem("name")); 
  const phoneno = JSON.parse(window.localStorage.getItem("phone"));

  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  const Token = JSON.parse(window.localStorage.getItem("token"));
  const canvasRef = useRef(null);
  const [signature, setSignature] = useState("");
  const email = JSON.parse(window.localStorage.getItem("email"));

  const [isChecked, setIsChecked] = useState(false);
  const [childChecked, setChildChecked] = useState({
    attendance1: false,
    attendance2: false,
    attendance3: false,
    attendance4: false,
    attendance5: false,
    attendance6: false,
    attendance7: false,
    attendance8: false,
    attendance9: false,
    attendance10: false,
    attendance11: false,
    attendance12: false,
    attendance13: false,
    attendance14: false,
    attendance15: false,
    attendance16: false,
    attendance17: false,
  });

  const handleMasterCheckbox = (event) => {
    setIsChecked(event.target.checked);
    setChildChecked({
      attendance1: event.target.checked,
      attendance2: event.target.checked,
      attendance3: event.target.checked,
      attendance4: event.target.checked,
      attendance5: event.target.checked,
      attendance6: event.target.checked,
      attendance7: event.target.checked,
      attendance8: event.target.checked,
      attendance9: event.target.checked,
      attendance10: event.target.checked,
      attendance11: event.target.checked,
      attendance12: event.target.checked,
      attendance13: event.target.checked,
      attendance14: event.target.checked,
      attendance15: event.target.checked,
      attendance16: event.target.checked,
      attendance17: event.target.checked,
    });
  }

  const handleChildCheckbox = (event) => {
    setChildChecked({
      ...childChecked,
      [event.target.name]: event.target.checked
    });
  }

  const params = useParams();
  const course_id = [params.id];
  const [course, setCourse] = useState("");
  const [phone, setPhoneOtp] = useState({
    phone:""
  });
  const [dob, setDob] = useState(null);
 
  const [residentialAddress, setResidentialAddress] = useState('');
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
    if (!dob || !phone.phone || phone.phone.length !== 13 || !residentialAddress) {
      // Validation error - both fields are required
      alert('Please fill all fields before generating PDF File.');
      return;
    }
  if (!childChecked.attendance1 && !childChecked.attendance2 &&
    !childChecked.attendance3 && !childChecked.attendance4 &&
    !childChecked.attendance5 && !childChecked.attendance6 &&
    !childChecked.attendance7 && !childChecked.attendance8 &&
    !childChecked.attendance9 && !childChecked.attendance10
    && !childChecked.attendance11 && !childChecked.attendance12
    && !childChecked.attendance13 && !childChecked.attendance14
    && !childChecked.attendance15 && !childChecked.attendance16
    && !childChecked.attendance17
  ) {
      alert('Please Check all fields');
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
  
      // Generate PDF
      const content = document.getElementById("content");
      const pdfCanvas = await html2canvas(content, { dpi: 72, type: "jpeg" });
      const imgData = pdfCanvas.toDataURL("image/png");
  
      const options = {
        margin: [10, 10],
        filename: "signature.pdf",
        image: { type: "png", data: imgData },
      };
  
      html2pdf().set(options).from(content).save();
      const pdfData = await html2pdf().set(options).from(content).outputPdf();
      const compressedData = pako.deflate(pdfData);
      const pdfBlob = new Blob([compressedData], { type: "application/pdf" });
      const formData = new FormData();
      formData.append("isa", pdfBlob, "signature.pdf");
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-access-token": Token,
        },
      };
      axios.post(
        ApiBaseUrl+"document-upload",
        formData,
        config
      )
        .then((response) => {
          console.log("File uploaded successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    } catch (error) {
      console.error(error);
    } finally {
      // Hide progress bar
      setLoading(false);
      const modal = document.getElementById("submitTestModal");
      if (modal) {
        modal.classList.add("show");
        modal.style.display = "block";
      }
      setTimeout(() => {
        if (modal) {
          modal.classList.remove("show");
          modal.style.display = "none";
        }
        navigate('/LearningMethod')
      }, 3000);
      
    }
  };
  useEffect(() => {
    
  })
  useEffect(() => {
    // Get courses through Api
    let Api = ApiBaseUrl+"course-details/"+course_id;
    const fetchCourse = async (url) => {
      try {
        const res = await fetch(Api, {
          headers: {
            "x-access-token": Token,
          },
        });
        const data = await res.json();
        console.log('data-===',data.course.name);
        setCourse(data.course.name);
        //    isLoading=false;
      } catch (error) {}
    };
    fetchCourse(Api);
  }, [Token]);

  
  return (
    <div className="isa_agreement_pdf_section">
      <div className="agreement-header">
        <h1>Sign ISA</h1>
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
            {/* <a href="/AfterScholarshipTestDashboardTwo" className="theme_btn sign">
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
              <h5 className="main-title text-center">
                <span
                  style={{
                    fontSize: "33px",
                    margin: "27px 0 13px",
                    textAlign: "center",
                    fontWeight: 600,
                  }}>
                  INCOME SHARING AGREEMENT (ISA)
                </span>
              </h5>
              <p>&nbsp;</p>
            </div>
            <div className="main-content">
              <p
                style={{
                  fontSize: "16px",
                  margin: "22px 0 13px",
                  textAlign: "center",
                  color: "#000",
                }}>
                This Income Share Agreement ("ISA" or "Agreement") is between:
                Student , (hereinafter referred to as the "Student", "Trainee",
                "You", or "Your", and which expression shall mean and includes
                the legal heirs, executors and administrators of the student) of
                the ONE PART;
              </p>

              <p
                style={{
                  fontSize: "16px",
                  margin: "27px 0 13px",
                  textAlign: "center",
                  color: "#000",
                }}>
                <strong>PARENT / GUARDIAN / SPOUSE</strong>
                (hereinafter referred to as the "Parent", and which expression
                shall mean and includes the legal heirs, executors and
                administrators) of the SECOND PART
              </p>

              <br />
              <p
                style={{
                  fontSize: "19px",
                  margin: "7px 0 0px",
                  textAlign: "center",
                  color: "#000",
                }}>
                <strong>AND</strong>
              </p>

              <br />

              <p
                style={{
                  fontSize: "16px",
                  margin: "12px 0 13px",
                  textAlign: "center",
                  color: "#000",
                }}>
                <strong>Salaryfy*</strong>
                duly incorporated under Data Folkz Private Limited, under the
                Indian Law of Governance (hereinafter -“the Institution
                (Salaryfy*)”), as the Placement provider.
              </p>

              <br />

              <p
                style={{
                  fontSize: "19px",
                  margin: "7px 0 0px",
                  textAlign: "center",
                  color: "#000",
                }}>
                <strong>THIS IS A LEGALLY BINDING CONTRACT.</strong>
              </p>
              <p
                style={{
                  fontSize: "19px",
                  margin: "7px 0 19px",
                  textAlign: "center",
                  color: "#000",
                }}>
                <strong>READ IT CAREFULLY BEFORE SIGNING.</strong>
              </p>

              <p
                style={{
                  fontSize: "16px",
                  margin: "27px 0 15px",
                  textAlign: "justify",
                  color: "#000",
                  
                }}>
                By entering into this Agreement, you agree to pay a percentage
                of your earned income to the Institution (Salaryfy*) in
                accordance with the terms and conditions of this Agreement in
                exchange for receiving the training and placement provided by
                Salaryfy*.
              </p>

              <p
                style={{
                  fontSize: "16px",
                  margin: "27px 0 15px",
                  textAlign: "justify",
                  color: "#000",
                }}>
                WHEREAS: The Institution (Salaryfy*) is in the business of
                placing students in training programmes related to a variety of
                courses, and You have agreed to enrol with the Institution
                (Salaryfy*) for the purpose of obtaining Training and Placement
                on the terms and conditions as stated in this Agreement.
              </p>

              <p
                style={{
                  fontSize: "16px",
                  margin: "27px 0 15px",
                  textAlign: "justify",
                  color: "#000",
                }}>
                If you are under the age of 24 (twenty-four), please ask your
                legal representatives (parent or legal guardian) to refer to the
                contract conditions in accordance with the terms and conditions
                outlined in this Agreement, you have accepted to enrol with the
                Institute (Salaryfy*) in order to take advantage of the Training
                and Placement.
              </p>

              <p
                style={{
                  fontSize: "16px",
                  margin: "27px 0 15px",
                  textAlign: "justify",
                  color: "#000",
                }}>
                In exchange for the Training and Placement offered by the
                Institution (Salaryfy*) and subject to all of the terms,
                commitments, obligations, and conditions specified in this
                Agreement, You and the Institution (Salaryfy*) agree as follows:
              </p>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2">
                <strong>1. DEFINITIONS: </strong> For purposes of this
                Agreement:
              </h5>
              <ol
                className="upper-alfa"
                style={{ paddingLeft: "30px", listStyle: "upper-alpha" }}>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  "Earned Income" / "CTC" refers to your entire salary
                  (including variable pay), compensation, and gross income from
                  employment or self-employment in any organization that has
                  been reported or is needed to be reported on an income tax
                  return.
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
                      Earned income also includes any non-cash consideration
                      received or deemed earned by You, directly or indirectly,
                      such as contributions to qualified and non-qualified
                      deferred compensation and retirement benefit plans, fringe
                      benefits not reported as wages for compensation, income
                      and distributions from Your active participation in any
                      entity, and equity rights or deferred compensation
                      generated or attributable to the current period of Your
                      employment.
                    </li>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                      Moreover, Earned Income includes any amounts earned or
                      payable to You, directly or indirectly, as a result of
                      Your provision of services to a related party.
                    </li>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                      The Institution (Salaryfy*) may estimate Your Earned
                      Income using documentation other than Your income tax
                      return at its discretion, provided that the documentation
                      is from another verifiable source acceptable to the
                      Institution.
                    </li>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                      It is clarified that any dispute on Your Earned Income
                      (including if the Earned Income was earned pursuant to the
                      skill developed through Training) shall be determined by
                      the Institution (Salaryfy*) at its sole discretion and
                      such determination shall be binding on You.
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
                  "Employer" refers to any person or organization for whom You
                  provide services, whether as an employee, an independent
                  contractor, or in any other capacity..
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  "Certification Completion Date" refers the date on which You
                  obtained the certificate after completing and passing all
                  curriculum-related assessments stated in the Course or as
                  personally assigned to You by the career
                  coaches/trainers/mentors/batch coordinators of the
                  Institution(Salaryfy*).
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  “Income Share" refers to a fixed percentage of Your Earned
                  Income. Your Income Share under this Agreement is at least
                  12.00% (twelve percent) of the Earned Income, subject to
                  adjustment for underreporting or overreporting of Earned
                  Income, as described herein.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  "Monthly Payment" means the amount of Your Income Share times
                  Your Earned Income.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  "Payment Term" refers to the period commencing upon Your
                  Earned Income during which period You have an obligation to
                  make Monthly Payments/ ISA threshold amount to the Institution
                  (Salaryfy*), as provided under this Agreement.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  “Terminal Exam” refers to the exam/ test conducted by the end
                  of each term by the Institution (Salaryfy*) during the
                  program.
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  "Person" means any individual, partnership, corporation,
                  limited liability partnership, trust or unincorporated
                  association, joint venture, or other entity or governmental
                  body.
                </li>
              </ol>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "25px" }}>
                <strong>2. Payment Channels</strong>
              </h5>
              <ol
                className="upper-alfa"
                style={{ paddingLeft: "30px", listStyle: "upper-alpha" }}>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  NBFC/ Credit Card
                  <br />
                  You will either be using a credit card or an NBFC to make your
                  threshold ISA payment to the institution (Salaryfy*). As per
                  the terms of this agreement, you shall pay the Institution
                  (Salaryfy*) 12% of your yearly income by an NBFC or credit
                  card within 30 days of the start date of employment.
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  Bank auto-sweep
                  <br />
                  You have the option of repaying monthly payments for threshold
                  ISA payments to institutions (Salaryfy*) by bank-auto sweep
                  unless the bank account where the payments are made is the
                  same as the one where your earned income is received.
                </li>
              </ol>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "25px" }}>
                <strong>3. RIGHTS AND OBLIGATIONS UNDER THIS AGREEMENT</strong>
              </h5>
              <ol
                className="upper-alfa"
                style={{ paddingLeft: "30px", listStyle: "upper-alpha" }}>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  The Institution (Salaryfy*) agrees to provide You with the
                  Training and hence Placement, subject to the terms and
                  conditions of this Agreement.
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  It is clarified that CTC will include the total of the fixed
                  salary (+) the variable pay (+) the employment benefits.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  You agree to pay the Institution (Salaryfy*) in exchange for
                  the Training. The ISA amount of 12% must be paid to the
                  institution within 30 days of the start date of employment. It
                  can be paid directly, through NBFCs, or with a credit card. It
                  is clarified that You can only pay the fee to the Institution
                  (Salaryfy*) in a single transaction.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  This Agreement shall be valid for a period of 12 months from
                  the Certification Date.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  You agree that the Institution (Salaryfy*) will manage and
                  process all parts of this Agreement.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  You also undertake to cooperate with all inquiries made by the
                  Institution regarding Your compliance with the terms and
                  circumstances of this Agreement, including providing
                  information, documents, and authorizations as requested.
                </li>
              </ol>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "25px" }}>
                <strong>4. OBLIGATIONS OF THE STUDENTS</strong>
              </h5>
              <ol
                className="upper-alfa"
                style={{ paddingLeft: "30px", listStyle: "upper-alpha" }}>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  For the assessment year in which Your Payment begins, You
                  agree to file your income tax returns no later than 31st March
                  for the financial each year, and to timely file any state or
                  local tax returns by the applicable due date. You agree to
                  perform any similar requirements or procedures for any other
                  country’s taxing authority, as applicable.
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  You shall submit to the Institution (Salaryfy*), on or before
                  the 10 April of the calendar year, the proof of filing of the
                  income tax returns as set out in Clause 5.A.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  If You fail to file the income tax returns as set out in
                  Clause 5.A and to submit to the Institution (Salaryfy*) the
                  proof of filing of the income tax returns in the manner as set
                  out in Clause 5.B. above, the Institution (Salaryfy*) shall be
                  entitled to pursue legal proceedings and the Institution
                  (Salaryfy*) shall also be entitled to transfer the amounts
                  payable by You from your bank account to the bank account of
                  the Institution (Salaryfy*).
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  You shall provide to the Institution (Salaryfy*), Your salary
                  slips as provided by the Employer or such other proof of
                  payment as required by the Institution (Salaryfy*) on a
                  monthly basis either through the student dashboard or by
                  emailing the same to such email address as designated by the
                  Institution (Salaryfy*).
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  If You fail to provide the salary slips or such other proof of
                  payment as required by the Institution (Salaryfy*) for one
                  calendar month, the Institution (Salaryfy*) shall issue You a
                  request calling upon you to provide the salary slips or such
                  other proof of payment as required by the Institution
                  (Salaryfy*).
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  If, however, You fail to provide the salary slips or such
                  other proof of payment as required by the Institution
                  (Salaryfy*) for two consecutive months, the Institution
                  (Salaryfy*) shall be entitled to take necessary actions for
                  the recovery of the amount due and payable by You and the
                  Institution (Salaryfy*) shall also to transfer the amounts
                  payable by You from Your bank account to the bank account of
                  the Institution (Salaryfy*).
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  In addition to the salary slips, You shall provide to the
                  Institution (Salaryfy*), the bank statement for the Approved
                  Bank Account, and such other bank accounts in which Your
                  Earned Income is deposited.
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  <b>Job Guarantee Criteria:</b> In order to guarantee a 100%
                  placement through this programme, the student hereby consents
                  to the following terms.
                  <ul
                    className="list-check-box"
                    style={{
                      paddingLeft: "50px",
                      listStyle: "lower-alpha",
                      paddingTop: "11px",
                    }}>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                      In all of his TERMS, the student must consistently
                      maintain an attendance record of higher than 80%.
                    </li>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                      The student is required to complete all of the assignments
                      and online exercises that are listed in the course
                      syllabus.
                    </li>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                      The student must receive a score of at least 75% on each
                      of the terminal exams.
                    </li>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                      The course completion exam must be passed with a score of
                      at least 75%.
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
                  Also, in each of the terminal exam, if the student receives a
                  score of less than 75% even after two attempts, they will be
                  given the opportunity to retake the exam by paying the
                  institution Rs. 3,000 as a restitution charge
                  (Non-Refundable).
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  The student might also choose to receive the NASSCOM
                  Certificate for the specific term by paying the institution a
                  Rs. 1000 amount. However, in any of the aforementioned
                  scenarios, the security deposit will not be refunded to the
                  students.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  <b>Your Obligations in Relation to Securing a Job Offer:</b>{" "}
                  For the Institution (Salaryfy*) to assist You to secure a job
                  for You, You must have completed and passed all the career and
                  skill development tasks both listed in the Course/curriculum
                  in the order they appear in the Course and as personally
                  assigned to you by career coaches of the Institution
                  (Salaryfy*) and shall have completed your Certification. It is
                  clarified that if You do not complete and pass the
                  Certification, You will not be eligible to appear for
                  placement through the placement services of the Institution
                  (Salaryfy*).
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  You hereby agree to accept job offers and to relocate for the
                  purposes of a job secured either through the placement related
                  services of the Institution (Salaryfy*) or through your own
                  efforts.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  You should actively take guidance from Your mentor from the
                  Institution (Salaryfy*) and from the placement services team
                  of the Institution (Salaryfy*) and You shall be bound to
                  follow their recommendations including in making applications
                  for such jobs that are appropriate for You as decided by the
                  Institution (Salaryfy*).
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  When making applications for a job, the Institution
                  (Salaryfy*) shall apply for roles that are suited to Your
                  level of experience and areas of expertise and as will be
                  determined by the Institution (Salaryfy*) and You shall also
                  maintain realistic expectations about the nature and kind of
                  job that You are likely to be offered in the respected domain
                  of training you pursued in the Institution (Salaryfy*).
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  You must respond to placement-related communications from
                  representatives of the Institution (Salaryfy*) within 24-48
                  hours by email or on call.
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  You must always act reasonably and take all necessary efforts
                  in good faith efforts to secure a job.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  If You do not attend the interviews for the placements offered
                  by the Institution (Salaryfy*) for a period of 2 weeks from
                  the Certification Date, the Institution (Salaryfy*) is not
                  obliged to secure a placement for You.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  You are obliged to pay the Income share uptil six months of
                  post certificate completion date even if You do not
                  communicate with the placement team of the Institution
                  (Salaryfy*) consistently throughout Your search for a job and
                  do not notify/inform the Institution (Salaryfy*) of any of the
                  offers that You have received otherwise.
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  The Institution (Salaryfy*) is not obliged to secure a
                  placement for You if You do not follow through with the
                  interview process in a timely and professional manner,
                  including but not limited to, not participating as expected by
                  the employer in the interview process by providing responses
                  to employer communications, not showing up on time for
                  interviews and not providing documents or not following up as
                  expected by employers. But the Institution (Salaryfy*) shall
                  be entitled to take necessary steps for recovery of the amount
                  due.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  The Institution (Salaryfy*) shall also be entitled to sweep
                  from Your designated bank account the amounts payable by You
                  to the Institution (Salaryfy*) in case explained in the
                  Clauses 5.(N) / 5.(O)./ 5.(P).
                </li>
              </ol>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "25px" }}>
                <strong>5. MAKING PAYMENTS FROM EARNED INCOME</strong>
              </h5>
              <ol
                className="upper-alfa"
                style={{ paddingLeft: "30px", listStyle: "upper-alpha" }}>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  Once Your Earned Income Growth, either on account of securing
                  a job or a change in job or on account of an increment granted
                  to You by an Employer, exceeds the initial CTC at any time
                  during a period of 1 (one) years from the Certification Date,
                  the Payment Term will commence and You shall be liable to pay
                  to the Institution (Salaryfy*) the Monthly Payments. Such
                  payment to the Institution (Salaryfy*) shall be made on or
                  before such day of each calendar month as stipulated in the
                  Agreement (“Payment Due-Date”).
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  In the event of the termination of Your employment or if Your
                  income falls below the initial CTC Your obligations to make
                  the Monthly Payments to the Institution (Salaryfy*) from your
                  own income shall still be continued on the same amount.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  If your employment is once terminated within one month , the
                  Institution (Salaryfy*) shall, on a best effort basis, attempt
                  to secure You a new employment. It is however clarified that
                  there should be no obligation on the Institution (Salaryfy*)
                  to secure a new employment offer for You. But You are
                  obligated to make ISA threshold payment to the Institution
                  (Salaryfy*)/ NBFC/Credit Card/ Bank from your own income shall
                  still be continued on the same amount till you complete your
                  payment term.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  Default in payment of the Monthly Payments – in the event of a
                  delay in making payment of the Monthly Payment, of more than
                  30 (thirty) days beyond the Payment Due Date (“Payment
                  Default”), the Institution (Salaryfy*) shall be entitled to
                  initiate legal actions for recovery of the amounts due and
                  payable to the Institution (Salaryfy*).
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  Further, on account of Payment Default, You will be liable to
                  pay such additional amounts and/or default charges as set out
                  in the Agreement. The Institution (Salaryfy*) may, at its
                  discretion, initiate appropriate legal proceedings for
                  recovery of the amounts due and payable under the Agreement.
                  The Institution (Salaryfy*) shall also be entitled to sweep
                  from your designated bank account the amounts payable by You
                  to the Institution (Salaryfy*).
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  <b>Student Exit Policy: (Voluntarily)</b>
                  <ul
                    className="list-check-box"
                    style={{
                      paddingLeft: "50px",
                      listStyle: "disc",
                      paddingTop: "11px",
                    }}>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                      The student may also opt out of the 100% Employment
                      Guarantee Program if he: willingly quits the programme
                      within 7 days of the batch's start date.
                    </li>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                      However, if You decide to drop off / Withdraw anytime
                      after one week of the Course Training and the Placement
                      Process, You shall pay to the Institution (Salaryfy*):
                    </li>

                    <table
                      className="table table-bordered "
                      style={{
                        margin: "30px auto",
                        width: "95%",
                      }}>
                      <tbody>
                        <tr>
                          <th scope="row">Withdrawal Fee (Obligatory)</th>
                          <th scope="row">Terms and Conditions</th>
                        </tr>

                        <tr>
                          <td>Rs.5000</td>
                          <td>during or after the 1st Term</td>
                        </tr>

                        <tr>
                          <td>Rs. 10000</td>
                          <td>during or after the 2nd Term</td>
                        </tr>

                        <tr>
                          <td>Rs. 15000</td>
                          <td>during or after the 3rd Term</td>
                        </tr>

                        <tr>
                          <td>Rs. 20000</td>
                          <td>during or after the 4th Term</td>
                        </tr>

                        <tr>
                          <td>Rs. 25000</td>
                          <td>during or after the 5th Term</td>
                        </tr>

                        <tr>
                          <td>Rs. 30000</td>
                          <td>during or after the 6th Term</td>
                        </tr>

                        <tr>
                          <td>Rs. 35000</td>
                          <td>during or after the 7th Term</td>
                        </tr>
                        <tr>
                          <td>Rs. 40000</td>
                          <td>during or after the 8th Term</td>
                        </tr>
                        <tr>
                          <td>Rs. 45000</td>
                          <td>during or after the 9th Term</td>
                        </tr>
                        <tr>
                          <td>Rs. 50000</td>
                          <td>during or after the 10th Term</td>
                        </tr>
                      </tbody>
                    </table>

                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                      Though for the above stated conditions, the student is
                      eligible to receive a NASSCOM Certificate after completing
                      the first 5 TERMS by paying an amount of Rs. 1000 to the
                      Institute; nevertheless, the security amount will not be
                      repaid to the students in any of the conditions indicated
                      above.
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
                  <b> Student Exit Policy: (Performance Based):</b> The student
                  may also opt out of the 100% Employment Guarantee Program if
                  he is unable to satisfy any of these conditions:
                  <ul
                    className="list-check-box"
                    style={{
                      paddingLeft: "50px",
                      listStyle: "disc",
                      paddingTop: "11px",
                      textAlign: "justify",
                    }}>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                      Even after two attempts, the student is unable to achieve
                      a score of more than 75% on any of the Terminal exams.
                    </li>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                      In addition, for a fee of Rs.1000, the student can obtain
                      a NASSCOM Certificate for the specific term.
                    </li>

                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                      }}>
                      However, in any of the instances stated above, the
                      security deposit will not be reimbursed to the students.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "25px" }}>
                <strong>6. Reporting of all Earned Income:</strong>
              </h5>
              <ol
                className="upper-alfa"
                style={{ paddingLeft: "30px", listStyle: "upper-alpha" }}>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  Upon completion of Your Training and throughout the Payment
                  Term, You agree to communicate:
                  <ul
                    className="list-check-box"
                    style={{
                      paddingLeft: "50px",
                      listStyle: "disc",
                      paddingTop: "11px",
                    }}>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                      Your Earned Income
                    </li>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                      All employment positions You accept including, if
                      requested, a description of the business and products or
                      services provided by each Employer and the nature of Your
                      position with each Employer;
                    </li>

                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>

                      Your projected annual gross Earned Income; and
                    </li>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                      Any changes in employment.
                    </li>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        textAlign: "justify",
                      }}>
                      You further agree during the Payment Term to update any
                      changes in Your Earned Income within thirty (30) days of
                      any event giving rise to such Change.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "25px" }}>
                <strong>
                  7. Deposit of all Earned Income into Bank Account:
                </strong>
              </h5>
              <ol
                className="upper-alfa"
                style={{ paddingLeft: "30px", listStyle: "upper-alpha" }}>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  You agree that during the entire Payment Term You shall
                  deposit all Earned Income received by You from any and all
                  sources directly into Your Bank Account.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  If You are employed, You agree to cause Your Employer to
                  arrange for the direct deposit of all of Your Earned Income to
                  Your Bank Account. Your refusal or failure to establish the
                  Bank Account for the purpose of making Monthly Payments or
                  other payments hereunder shall not relieve You of any of Your
                  obligations under this Agreement.
                </li>
              </ol>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "15px" }}>
                <strong>8. Survival of Obligations:</strong>
              </h5>

              <p
                style={{
                  fontSize: "16px",
                  margin: "4px 0 15px 30px",
                  textAlign: "justify",
                  color: "#000",
                }}>
                In exchange for the Training and Placement offered by the
                Institution (Salaryfy*) and subject to all of the terms,
                commitments, obligations, and conditions specified in this
                Agreement, You and the Institution (Salaryfy*) agree as follows:
              </p>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "15px" }}>
                <strong>9. RECONCILIATION:</strong>
              </h5>

              <p
                style={{
                  fontSize: "16px",
                  margin: "4px 0 15px 30px",
                  textAlign: "justify",
                  color: "#000",
                }}>
                From time to time during the Payment Term, and for a period of
                one year following the end of the calendar year in which the
                Payment Term expires, Institution (Salaryfy*) shall have the
                right to examine and audit Your records pertaining to Your
                employment and to verify your Earned Income at any point to
                ensure that You have properly reported or projected Your Earned
                Income and to verify that the Institution (Salaryfy*) has
                properly calculated the Monthly Payments due and payable under
                this Agreement (“Reconciliation”). You agree to cooperate with
                the Institution (Salaryfy*) in the Reconciliation process.
              </p>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "15px" }}>
                <strong>
                  10. Confirmation of Earned Income and Employment:
                </strong>
              </h5>

              <p
                style={{
                  fontSize: "16px",
                  margin: "4px 0 15px 30px",
                  textAlign: "justify",
                  color: "#000",
                }}>
                To permit the Institution (Salaryfy*) to perform Reconciliation,
                You agree that You shall, within thirty (30) days of a request
                by the Institution (Salaryfy*) provide the Institution
                (Salaryfy*) with the name, address, and phone number of any
                Employers from which You have received Earned Income and
                authorise each of Your Employers to disclose to the Institution
                (Salaryfy*) all forms of cash and non-cash compensation paid or
                provided to or earned by You and provide such other
                documentation (including Your salary slips, a summary of any
                non-written or oral non-cash consideration, equity or deferred
                compensation arrangements) as may be reasonably requested by the
                Institution (Salaryfy*) for the purpose of performing the
                Reconciliation.
              </p>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "25px" }}>
                <strong>11. Under-reported Earned Income:</strong>
              </h5>
              <ol
                className="upper-alfa"
                style={{ paddingLeft: "30px", listStyle: "upper-alpha" }}>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  If at any time during the Payment Term or pursuant to
                  Reconciliation, whether intentionally or unintentionally, You
                  under-report Your Earned Income, resulting in a lower amount
                  of Monthly Payment being made to the Institution (Salaryfy*),
                  Institution (Salaryfy*) will have the right to revise the
                  Monthly Payment, in its discretion, by increasing Your Income
                  Share as the new CTC.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  Alternatively, if a Reconciliation shows that You
                  underreported Your Earned Income at any time during the
                  Payment Term so that You made one or lower Monthly Payments
                  than Institution (Salaryfy*) is entitled to receive under this
                  Agreement, Institution (Salaryfy*) shall give You notice
                  within 15 (fifteen) days of completion of the Reconciliation
                  of the amount of the underpayment and reasonable documentation
                  of the underpayment calculation. You agree to pay the
                  Institution (Salaryfy*) the aggregate amount of the
                  underpayment within thirty (30) days of receiving such notice.
                  The Institution (Salaryfy*) shall also be entitled to sweep
                  from your designated bank account the amounts payable by You
                  pursuant to this Clause.
                </li>
              </ol>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "15px" }}>
                <strong>12. PREPAYMENT AMOUNT:</strong>
              </h5>

              <p
                style={{
                  fontSize: "16px",
                  margin: "4px 0 15px 30px",
                  textAlign: "justify",
                  color: "#000",
                }}>
                You may at any time pay in full Your obligation to the
                Institution (Salaryfy*) by paying an amount equal to the
                Prepayment Amount which is a fixed percentage of your CTC.
              </p>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "25px" }}>
                <strong>13. ADDITIONAL PROVISIONS AFFECTING PAYMENTS:</strong>
              </h5>
              <ol
                className="upper-alfa"
                style={{ paddingLeft: "30px", listStyle: "upper-alpha" }}>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  International Work - If You move out of India during Your
                  Payment Term, You agree to continue to report Earned Income
                  and to continue paying Your Income Share of Earned Income
                  during the Payment Terms. You shall not be in breach of this
                  Agreement so long as You continue to make the required Monthly
                  Payments pursuant to the terms of this Agreement.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  Waiver of ISA Due to Death or Total Disability: We will waive
                  what You owe under this Agreement, including any past due
                  amounts and fees, in the case of any unfortunate event leading
                  to death or permanent total disability; if You would like to
                  assert a waiver based on disability, You will need to provide
                  documentation showing that You have been found to be
                  permanently disabled by the state agency due to a condition
                  that began or deteriorated after the Effective Date.
                </li>
              </ol>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "15px" }}>
                <strong>14. CODE OF CONDUCT FOR THE STUDENTS:</strong>
              </h5>

              <p
                style={{
                  fontSize: "16px",
                  margin: "4px 0 15px 30px",
                  textAlign: "justify",
                  color: "#000",
                }}>
                By entering into this Agreement, You represent, warrant, and
                promise to the Institution (Salaryfy*)
              </p>

              <ol
                className="upper-alfa"
                style={{ paddingLeft: "30px", listStyle: "upper-alpha" }}>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  That You are entering into this Agreement in good faith and
                  with the intention to pay the Institution (Salaryfy*) by
                  making Monthly Payments or the Course Fee payment when due;
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  That all the information You have provided to Institution
                  (Salaryfy*) in connection with entering into this Agreement is
                  true and accurate and that You have not provided any false,
                  misleading, or deceptive statements or omissions of fact;
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  That you agree to abide by the rules and guidelines laid by
                  the Institution (Salaryfy*).
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  That you maintain a steady attendance rate of at least 80% in
                  all of the TERMs.
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  That you secure a score of atleast 75% to qualify any TERM
                  (within 2 attempts).
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  That you abide by the Job Guarantee Criteria stated above in
                  Clause 4(H).
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  That you abide by the Student Exit Policies (Voluntarily and
                  Performance based) stated above in clause 4(H) and 4(G)
                  respectively.
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                     textAlign: "justify",
                  }}>
                  That You are an Indian citizen or a permanent resident and the
                  legal right to work in India;
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                     textAlign: "justify",
                  }}>
                  That You will make reasonable and good faith efforts to seek
                  employment immediately following completion of the Training
                  and during all times during the Payment Term that You are not
                  employed.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                     textAlign: "justify",
                  }}>
                  That You will timely and fully provide all information and
                  documentation required under the terms of this Agreement or as
                  reasonably requested by Institution (Salaryfy*) (including any
                  assignee of Institution (Salaryfy*)) and that such information
                  or documentation shall be true, complete, and accurate;
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                     textAlign: "justify",
                  }}>
                  That You shall keep accurate records relating to Your Earned
                  Income for each year of Your Payment Term, including any
                  invoices or payments relating to self-employment services You
                  provide; and that You will retain all such records for a
                  period of at least one (1) year following the date You fulfil
                  all Your payment obligations under this Agreement.
                </li>
              </ol>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "15px" }}>
                <strong>15. TERM:</strong>
              </h5>

              <p
                style={{
                  fontSize: "16px",
                  margin: "4px 0 15px 30px",
                  textAlign: "justify",
                  color: "#000",
                }}>
                This Agreement shall be effective from the Execution Date and
                shall be valid and binding till an amount equal to the Income
                Share has been repaid by You in the manner as set out in this
                Agreement.
              </p>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "25px" }}>
                <strong>16. BREACH AND REMEDIES:</strong>
              </h5>
              <ol
                className="upper-alfa"
                style={{ paddingLeft: "30px", listStyle: "upper-alpha" }}>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textAlign: "justify",
                  }}>
                  Upon breach by You of this Agreement, the Institution
                  (Salaryfy*) shall be entitled to:
                  <ul
                    className="list-check-box"
                    style={{
                      paddingLeft: "50px",
                      listStyle: "disc",
                      paddingTop: "11px",
                    }}>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                         textAlign: "justify",
                      }}>
                      collect the amounts due and payable by You under this
                      Agreement;
                    </li>
                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                         textAlign: "justify",
                      }}>
                      enforce all legal rights and remedies in the collection of
                      such amount and related fees (including any rights
                      available to Institution (Salaryfy*) to garnish wages or
                      set off any tax refund and to sweep from your designated
                      bank account the amounts payable by You to the Institution
                      (Salaryfy*)); or
                    </li>

                    <li
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "19px",
                         textAlign: "justify",
                      }}>
                      utilise any combination of these remedies.
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
                  You agree to pay the Institution (Salaryfy*)’s costs incurred
                  by the Institution (Salaryfy*) for recovery of the amounts due
                  and payable by You under this Agreement.
                </li>
              </ol>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "25px" }}>
                <strong>17. GENERAL PROVISIONS:</strong>
              </h5>
              <ol
                className="upper-alfa"
                style={{ paddingLeft: "30px", listStyle: "upper-alpha" }}>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                     textAlign: "justify",
                  }}>
                  This Agreement sets forth the entire agreement and
                  understanding of the Parties relating to the subject matter
                  herein and supersedes all prior or contemporaneous
                  discussions, understandings, and agreements, whether oral or
                  written, between You and the Institution (Salaryfy*) relating
                  to the subject matter hereof.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                     textAlign: "justify",
                  }}>
                  No delay or failure on the part of either Party to require
                  performance of any provision of this Agreement shall
                  constitute a waiver of that provision as to that or any other
                  instance.
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                     textAlign: "justify",
                  }}>
                  The laws under the Govt. of India will govern all the
                  adversarial proceedings arising out of this agreement, your
                  Institution (Salaryfy*), or your payments to Institution
                  (Salaryfy*).
                </li>
              </ol>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "15px" }}>
                <strong>18. DISPUTES:</strong>
              </h5>

              <p
                style={{
                  fontSize: "16px",
                  margin: "4px 0 15px 30px",
                  textAlign: "justify",
                  color: "#000",
                }}>
                As the exclusive means of initiating adversarial proceedings to
                resolve any dispute arising out of this agreement, or any
                proceeding commenced by either party seeking an injunction, a
                restraining order, or any other equitable remedy or a proceeding
                commenced by either party in small claims court either party may
                demand that the dispute be resolved by binding arbitration
                administered by the Indian Judical System.
              </p>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "25px" }}>
                <strong>19. COMMUNICATIONS:</strong>
              </h5>
              <ol
                className="upper-alfa"
                style={{ paddingLeft: "30px", listStyle: "upper-alpha" }}>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                     textAlign: "justify",
                  }}>
                  For any reason related to this agreement, including any
                  amounts you owe, Institution (Salaryfy*) may contact you at
                  any physical or electronic addresses or numbers (including
                  wireless cellular telephone numbers, VOIP, or other services)
                  you have provided Institution (Salaryfy*) or provide
                  Institution (Salaryfy*) in the future.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                     textAlign: "justify",
                  }}>
                  Institution (Salaryfy*) may use any means of communication,
                  including postal mail, electronic mail, voice calls, text
                  messaging, and recorded message using automatic-dialling
                  devices. You will ask that Institution (Salaryfy*) not contact
                  you using one or more of these means of contacting you.
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                     textAlign: "justify",
                  }}>
                  You must notify Institution (Salaryfy*) no later than 15 days
                  after change in your primary residence, your phone number,
                  email address, or any other contact information you previously
                  provided the Institution (Salaryfy*).
                </li>
              </ol>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "25px" }}>
                <strong>20. CONFIDENTIALITY:</strong>
              </h5>
              <ol
                className="upper-alfa"
                style={{ paddingLeft: "30px", listStyle: "upper-alpha" }}>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                     textAlign: "justify",
                  }}>
                  You agree and understand that as part of the Course, the
                  Institution (Salaryfy*) will make available to You various
                  course materials including by way of the online course,
                  assessment material, study modules, and various other
                  information/documents (“Confidential Information”).
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                     textAlign: "justify",
                  }}>
                  You agree to treat as confidential the Confidential
                  Information and shall not during the duration of the Course
                  and for a period of 3 years from the Course Completion Date
                  disclose any such Confidential Information to any person,
                  firm, corporation, association or other entity for any reason
                  or purpose Whatsoever.
                </li>
              </ol>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "25px" }}>
                <strong>
                  21. VERIFICATION OF REVIEW AND INDEPENDENT DECISION TO ENTER
                  INTO ISA:
                </strong>
              </h5>

              <p
                style={{
                  fontSize: "16px",
                  margin: "4px 0 15px 30px",
                  textAlign: "justify",
                  color: "#000",
                }}>
                By signing below, You acknowledge and agree:
              </p>
              <ol
                className="upper-alfa"
                style={{ paddingLeft: "30px", listStyle: "upper-alpha" }}>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                     textAlign: "justify",
                  }}>
                  That this Agreement is entered into voluntarily and as an
                  arms-length transaction.
                </li>
                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                     textAlign: "justify",
                  }}>
                  That You are of legal age to execute this Agreement;
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                     textAlign: "justify",
                  }}>
                  That You have had the opportunity to read this Agreement and
                  to review its terms and conditions with Your legal and
                  financial advisors of Your choosing;
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                     textAlign: "justify",
                  }}>
                  That the Institution (Salaryfy*) is not an agent or fiduciary
                  or advisor acting for Your benefit or in Your favor in
                  connection with the execution of this Agreement;
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                     textAlign: "justify",
                  }}>
                  That Institution (Salaryfy*) has not provided You with any
                  legal, accounting, investment, regulatory or tax advice with
                  respect to this Agreement;
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                     textAlign: "justify",
                  }}>
                  that Institution (Salaryfy*) has not made any promises or
                  assurances to You that are not expressly set forth in writing
                  in this Agreement.
                </li>

                <li
                  style={{
                    margin: "9px 0",
                    fontSize: "17px",
                    fontWeight: "400",
                    lineHeight: "21px",
                     textAlign: "justify",
                  }}>
                  You understand that, by entering into this Agreement, You are
                  irrevocably agreeing to share a fixed portion of Your future
                  Earned Income in consideration of receiving the Training /
                  Placement, in accordance with the terms and conditions of this
                  Agreement.
                </li>
              </ol>
            </div>

            <div className="heading" style={{ margin: "40px 0 20px" }}>
              <h5 className="main-title-2" style={{ marginBottom: "25px" }}>
                <strong>22. Student Consent Form:</strong>
              </h5>
              <p style={{ margin: "10px 0 0", verticalAlign: "middle",  textAlign: "justify", color: "#000", display: "flex" }}>
              <span style={{ marginRight: "8px" }}>
              <input type="checkbox" id="masterCheckbox" checked={isChecked} onChange={handleMasterCheckbox} />
              </span>{" "}
              Select All
              </p>
              <p style={{ margin: "10px 0 0", verticalAlign: "middle",  textAlign: "justify", color: "#000", display: "flex" }}>
                {" "}
                <span style={{ marginRight: "8px" }}>
                  <input type="checkbox" class="childCheckbox" name="attendance1" checked={childChecked.attendance1} onChange={handleChildCheckbox} />
                </span>{" "}
                I will give 80% or more attendance during the course duration which is to delivered online.

              </p>
              <p style={{ margin: "8px 0 0", verticalAlign: "middle",  textAlign: "justify", color: "#000", display: "flex" }}>
                <span style={{ marginRight: "8px" }}>
                  <input type="checkbox" name="attendance2" checked={childChecked.attendance2} onChange={handleChildCheckbox}/>
                </span>{" "}
                I will never indulge in any kind of unethical practice (Sharing code etc.)

              </p>

              <p style={{ margin: "8px 0 0", verticalAlign: "middle",  textAlign: "justify", color: "#000", display: "flex" }}>
                <span style={{ marginRight: "8px" }}>
                  <input type="checkbox" name="attendance3" checked={childChecked.attendance3} onChange={handleChildCheckbox} />
                </span>{" "}
                I am ready to adhere to course timings for full-time.

              </p>
              <p style={{ margin: "8px 0 0", verticalAlign: "middle",  textAlign: "justify", color: "#000", display: "flex" }}>
                <span style={{ marginRight: "8px" }}>
                  <input type="checkbox" name="attendance4" checked={childChecked.attendance4} onChange={handleChildCheckbox} />
                </span>{" "}
                I plan to work full time immediately after completing the course.
              </p>
              <p style={{ margin: "8px 0 0", verticalAlign: "middle",  textAlign: "justify", color: "#000", display: "flex" }}>
                <span style={{ marginRight: "8px" }}>
                  <input type="checkbox" name="attendance5" checked={childChecked.attendance5} onChange={handleChildCheckbox}/>
                </span>{" "}
                I have a laptop and have access to a stable WiFi connection.
              </p>
              <p style={{ margin: "8px 0 0", verticalAlign: "middle",  textAlign: "justify", color: "#000", display: "flex" }}>
                <span style={{ marginRight: "8px" }}>
                  <input type="checkbox" name="attendance6" checked={childChecked.attendance6} onChange={handleChildCheckbox}/>
                </span>{" "}
                I have a savings bank account.

              </p>

              <p style={{ margin: "8px 0 0", verticalAlign: "middle",  textAlign: "justify", color: "#000", display: "flex" }}>
                <span style={{ marginRight: "8px" }}>
                  <input type="checkbox" name="attendance7" checked={childChecked.attendance7} onChange={handleChildCheckbox} />
                </span>{" "}
                I have access to internet banking.

              </p>
              <p style={{ margin: "8px 0 0", verticalAlign: "middle",  textAlign: "justify", color: "#000", display: "flex" }}>
                <span style={{ marginRight: "8px" }}>
                  <input type="checkbox" name="attendance8" checked={childChecked.attendance8} onChange={handleChildCheckbox} />
                </span>{" "}
                My CIBIL (Credit Score) is ablove 650.

              </p>
              <p style={{ margin: "8px 0 0", verticalAlign: "middle",  textAlign: "justify", color: "#000", display: "flex" }}>
                <span style={{ marginRight: "8px" }}>
                  <input type="checkbox" name="attendance9" checked={childChecked.attendance9} onChange={handleChildCheckbox}/>
                </span>{" "}
                I have read and understood the Salaryfy program.

              </p>
              <p style={{ margin: "8px 0 0", verticalAlign: "middle",  textAlign: "justify", color: "#000", display: "flex" }}>
                <span style={{ marginRight: "8px" }}>
                  <input type="checkbox" name="attendance10" checked={childChecked.attendance10} onChange={handleChildCheckbox} />
                </span>{" "}
                I have read and understood Salaryfy Code of Conduct.
              </p>
              <p style={{ margin: "8px 0 0", verticalAlign: "middle",  textAlign: "justify", color: "#000", display: "flex" }}>
                <span style={{ marginRight: "8px" }}>
                  <input type="checkbox" name="attendance11" checked={childChecked.attendance11} onChange={handleChildCheckbox} />
                </span>{" "}
                I have and understood the Income Sharing Agreement (ISA).

              </p>

              <p style={{ margin: "8px 0 0", verticalAlign: "middle",  textAlign: "justify", color: "#000", display: "flex" }}>
                <span style={{ marginRight: "8px" }}>
                  <input type="checkbox" name="attendance12" checked={childChecked.attendance12} onChange={handleChildCheckbox}/>
                </span>{" "}
                I understand after successfully completing all the TERMS with a score above than  75% and availing a job, I will pay 12% from the annual package to the institution as the ISA amount.

              </p>
              <p style={{ margin: "8px 0 0", verticalAlign: "middle",  textAlign: "justify", color: "#000", display: "flex" }}>
                <span style={{ marginRight: "8px" }}>
                  <input type="checkbox" name="attendance13" checked={childChecked.attendance13} onChange={handleChildCheckbox}/>
                </span>{" "}
                I understand that if I successfully complete all the TERMS with a score below 75%, I will pay 10% from the annual package to the institution as the ISA amount.
              </p>
              <p style={{ margin: "8px 0 0", verticalAlign: "middle",  textAlign: "justify", color: "#000", display: "flex" }}>
                <span style={{ marginRight: "8px"  }}>
                  <input type="checkbox" name="attendance14" checked={childChecked.attendance14} onChange={handleChildCheckbox}/>
                </span>{" "}
                I understand that in case I avail a job by myself / a vendor/ third-party/ through college within the 6 months from the course completion , I will still be liable to pay 10% of my annual package to the institution.

              </p>
              <p style={{ margin: "8px 0 0", verticalAlign: "middle",  textAlign: "justify", color: "#000", display: "flex" }}>
                <span style={{ marginRight: "8px" }}>
                  <input type="checkbox" name="attendance15" checked={childChecked.attendance15} onChange={handleChildCheckbox}/>
                </span>{" "}
                I am aware that documents collected are for verification purposes and

              </p>
              <p style={{ margin: "8px 0 0", verticalAlign: "middle",  textAlign: "justify", color: "#000", display: "flex" }}>
                <span style={{ marginRight: "8px" }}>
                  <input type="checkbox" name="attendance16" checked={childChecked.attendance16} onChange={handleChildCheckbox}/>
                </span>{" "}
                I authorize Data Folkz to keep my KYC related documents with NBFC partners to process my application.

              </p>

              <p style={{ margin: "8px 0 0", verticalAlign: "middle",  textAlign: "justify", color: "#000", display: "flex" }}>
                <span style={{ marginRight: "8px" }}>
                  <input type="checkbox" name="attendance17" checked={childChecked.attendance17} onChange={handleChildCheckbox}/>
                </span>{" "}
                I am responsible to any Forgery or falsification of any document is a serious offence under Section 465 of the Indian Penal Code of 1860.
              </p>

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
                          <td>Student Full Name:</td>
                          {/* <td><input type="text"  style={{ width: "100%", border: "0", outline: "none", background: "transparent"}}/></td> */}
                         <td>{capitalizedName}</td>
                        </tr>

                        <tr>
                          <td>Date of  Birth:</td>
                          {/* <td><input type="date" max="2015-12-31"   style={{ width: "100%", border: "0", outline: "none", background: "transparent"}}/></td> */}
                         <td><DatePicker
                          className="custom-datepicker"
                          id="dob-input"
                          dateFormat="dd/MM/yyyy"
                          selected={dob}
                          maxDate={new Date("2005-12-31")}
                          onChange={date => setDob(date)}
                          placeholderText="Select date"
                          popperPlacement="top"
                          /></td>      
                        </tr>

                        <tr>
                          <td>Email id:</td>
                          {/* <td><input type="text"  style={{ width: "100%", border: "0", outline: "none", background: "transparent"}}/></td> */}
                          <td>{email}</td>
                        </tr>

                        <tr>
                          <td>Contact Number:</td>
                          <td>{ phoneno.phone}</td>
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
                          value={phone.phone}
                          />
                         </td>
                        </tr>

                        <tr>
                          <td>Course Name:</td>
                          <td>{course }</td>
                        </tr>

                       
                        <tr>
                          <td>Residential Address:</td>
                          <td><input type="text"
                         value={residentialAddress}
                         onChange={(e) => setResidentialAddress(e.target.value)}
                         style={{ width: "100%", border: "0", outline: "none", background: "transparent" }} /></td>
                        </tr>
                        <p>{signature && <img src={signature} alt="signature" />}</p>
                      </tbody>
                    </table>

            </div>







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
             
              <p className="message ">Hi {name}, you have successfully signed your ISA</p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgreementPage;
