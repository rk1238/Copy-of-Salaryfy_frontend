import React, { useEffect, useState, useRef } from "react";
import NavbarTwo from "../common/navbar-two";
import d6Green from "../img/icons/d-6green.png";
import dCall from "../img/icons/d-call.png";
import Calendar from "../img/icons/calendar.png";
import Expand from "../img/expand-img.png";
import Call from "../img/icons/call.png";
import Mail from "../img/mail.png";
import Arrow from "../img/arrow.png";
import Upload from "../img/icons/upload.png";
import Slider from "@material-ui/core/Slider";
import Box from "@mui/material/Box";
import SvgArrow from "../img/arrow-svg.svg";
import RightGreen from "../img/right-green.png";
import SignWhite from "../img/sign-white.png";

import UploadWhite from "../img/upload-white.png";
import { useNavigate } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Slider1 from "@mui/material/Slider";
import axios from "axios";
import { ApiBaseUrl } from "../BaseUrl/baseUrl";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const UploadDocs = () => {
  const [values, setValues] = useState([10]);
  const [values2, setValues2] = useState([12]);
  const Token = JSON.parse(window.localStorage.getItem("token"));
  const userName =  JSON.parse(localStorage.getItem("name"));
  const course_id = JSON.parse(window.localStorage.getItem("course_id"));

  const Total_payable_amount = Math.round(values * 100000 * 0.12);
  const Total_payable_amount_GST = Math.round(Total_payable_amount * 1.18);
  const Monthly_payable_amount = Math.round(Total_payable_amount / values2);
  const Monthly_payable_amount_GST = Math.round(
    Total_payable_amount_GST / values2
  );
  const [fileSelected, setFileSelected] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  
  const [fileSelectedPan, setFileSelectedPan] = useState(false);
  const [fileUploadedPan, setFileUploadedPan] = useState(false);

  const [selectedFileName1, setSelectedFileName1] = useState('');
  const [selectedFileName2, setSelectedFileName2] = useState('');
 
  const [submitClicked, setSubmitClicked] = useState(false);

  const max = 60;
  const marks1 = [
    {
      value: 60,
      label: "60 LPA",
    },
  ];
function valuetext2(value) {
    return `${value}`+'LPA';
}
function valuetext3(value) {
  return `${value}`+' '+'LPA';
}
const railColor = (val) => {
  return (val <= values && val >= 0) ? 'green' : 'rgba(0, 0, 0, 0.38)'; 
}
const railColor1 = (val) => {
  return (val <= values && val >= 0) ? '#FECD08' : 'rgba(0, 0, 0, 0.38)'; 
}  
const getAriaLabel = (index) => {
  return { 'aria-label': `slider` };
};
let navigate = useNavigate();
const [file1, setFile1] = useState({
    aadhar_card:''
});
const [file2, setFile2] = useState({
    pan_card:''
});

  const handleFileSelect1 = (event) => {
    console.log('gggg',course_id)
    const selectedFile = event.target.files[0];
    if (selectedFile.type !== "application/pdf") {
      alert("Please select a pdf file.");
      return;
    }
    const fileSizeInMB = selectedFile.size / (1024 * 1024);
    if (fileSizeInMB > 1) {
      alert("Please select a PDF document that is less than or equal to 1MB.");
      return;
    }
    const formData = new FormData();
    formData.append('aadhar_card', selectedFile);

    fetch(ApiBaseUrl+'document-upload', {
      method: 'POST',
      body: formData,
      headers: {
        'x-access-token':
        Token,
      },
    })
      .then((response) => {
        // Handle the response from the API
        if (response.ok) {
          setSelectedFileName1(selectedFile.name);
          setFileSelected(true);
          setFileUploaded(true);
          console.log('File uploaded successfully');
        } else {
          console.error('Failed to upload file');
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the upload
        console.error('An error occurred during the upload', error);
      });
  };

  const handleFileSelect2 = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile.type !== "application/pdf") {
      alert("Please select a pdf file.");
      return;
    }
    const fileSizeInMB = selectedFile.size / (1024 * 1024);
    if (fileSizeInMB > 1) {
      alert("Please select a PDF document that is less than or equal to 1MB.");
      return;
    }
    const formData = new FormData();
    formData.append('pan_card', selectedFile);

    fetch(ApiBaseUrl+'document-upload', {
      method: 'POST',
      body: formData,
      headers: {
        'x-access-token': Token,
      },
    })
      .then((response) => {
        // Handle the response from the API
        if (response.ok) {
          setSelectedFileName2(selectedFile.name);
          setFileSelectedPan(true);
          setFileUploadedPan(true);
          console.log('File uploaded successfully');
        } else {
          console.error('Failed to upload file');
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the upload
        console.error('An error occurred during the upload', error);
      });
  };

  const handleSubmit = (e) => {
    console.log("form submitted ");
    setModalShow(true)
    // navigate("/AgreementPage/"+course_id);
    e.preventDefault();
    setSubmitClicked(true); // set submitClicked to true when submit button is clicked
    if (!fileSelected) {
      return; // don't submit if required field is not selected
    }
    if (!fileSelectedPan) {
      return; // don't submit if required field is not selected
    }
    navigate("/AgreementPage/"+course_id);
  };

  const handleInputChange = (event, index) => {
    const newValue = parseInt(event.target.value);
    setValues(
      values.map((value, i) => {
        if (i === index) {
          return newValue;
        }
        return value;
      })
    );
  };

  const handleInputChange2 = (event, index) => {
    const newValue = parseInt(event.target.value);
    setValues2(
      values.map((value, i) => {
        if (i === index) {
          return newValue;
        }
        return value;
      })
    );
  };
  const handleSliderChange2 = (event, newValues) => {
    setValues2(newValues);

  };
  const handleSliderChange = (event, newValues) => {
    setValues(newValues);
  };



  const YellowSlider = withStyles({
    root: {
      color: "#fecd08",
    },
    thumb: {
      backgroundColor: "#fecd08",
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit",
      },
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)",
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 3,
      borderRadius: 4,
      backgroundColor: "rgba(0, 0, 0, 0.38)",
    },
  })(Slider);

  const marks = [
    {
      value: 3,
      label: (
        <strong
          style={{
            fontSize: "15px",
            fontFamily: "Lexend",
            fontStyle: "normal",
          }}>
          3
        </strong>
      ),
    },

    {
      value: 6,
      label: (
        <strong
          style={{
            fontSize: "16px",
            fontFamily: "Lexend",
            fontStyle: "normal",
          }}>
          6
        </strong>
      ),
    },

    {
      value: 9,
      label: (
        <strong
          style={{
            fontSize: "16px",
            fontFamily: "Lexend",
            fontStyle: "normal",
          }}>
          9
        </strong>
      ),
    },

    {
      value: 12,
      label: (
        <strong
          style={{
            fontSize: "16px",
            fontFamily: "Lexend",
            fontStyle: "normal",
          }}>
          12
        </strong>
      ),
    },

    {
      value: 15,
      label: (
        <strong
          style={{
            fontSize: "16px",
            fontFamily: "Lexend",
            fontStyle: "normal",
          }}>
          15
        </strong>
      ),
    },
    {
      value: 18,
      label: (
        <strong
          style={{
            fontSize: "16px",
            fontFamily: "Lexend",
            fontStyle: "normal",
          }}>
          18
        </strong>
      ),
    },
    {
      value: 21,
      label: (
        <strong
          style={{
            fontSize: "16px",
            fontFamily: "Lexend",
            fontStyle: "normal",
          }}>
          21
        </strong>
      ),
    },
    {
      value: 24,
      label: (
        <strong
          style={{
            fontSize: "16px",
            fontFamily: "Lexend",
            fontStyle: "normal",
          }}>
          24
        </strong>
      ),
    },
  ];

  const [modalShow, setModalShow] = React.useState(false);
  const handleNextPage = ()=>{
    navigate('/LearningMethod')
  }

  
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{width:'100vw'}}
      >
        <Modal.Header closeButton>
          
        </Modal.Header>
        {
          
        }
        <Modal.Body style={{padding:'20px 50px',height:'50vh',overflow:'scroll'}}>
        <div>
  <h1 className="c22 c19 c33" id="h.2pqi16pbimlh" style={{color: '#000000', fontSize: '20pt', fontFamily: '"Arial"', paddingTop: '20pt', borderBottomWidth: '0pt', paddingBottom: '15pt', lineHeight: '1.5', borderBottomStyle: 'solid', pageBreakAfter: 'avoid', textAlign: 'center', orphans: 2, widows: 2, backgroundColor: '#ffffff'}}>
    <span className="c21 c8 c31" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecoration: 'none', fontSize: '20pt', fontWeight: 700}}>INCOME SHARING AGREEMENT (ISA)</span>
  </h1>
  <p className="c19 c20" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', borderBottomWidth: '0pt', paddingBottom: '15pt', lineHeight: '1.5', borderBottomStyle: 'solid', orphans: 2, widows: 2, textAlign: 'center', backgroundColor: '#ffffff'}}>
    <span className="c7" style={{fontSize: '12pt'}}>This Income Share Agreement ("ISA" or "Agreement")
      is between: Student , (hereinafter referred to as the </span><span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>"Student", "Trainee", "You", or
      "Your</span><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>", and which expression shall mean and includes the legal heirs,
      executors and administrators of the student) of the ONE PART;</span>
  </p>
  <p className="c20 c19" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', borderBottomWidth: '0pt', paddingBottom: '15pt', lineHeight: '1.5', borderBottomStyle: 'solid', orphans: 2, widows: 2, textAlign: 'center', backgroundColor: '#ffffff'}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>PARENT / GUARDIAN / SPOUSE </span><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>(hereinafter referred to as the "Parent", and which
      expression shall mean and includes the legal heirs, executors and
      administrators) of the SECOND PART.</span>
  </p>
  <p className="c20 c19" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', borderBottomWidth: '0pt', paddingBottom: '15pt', lineHeight: '1.5', borderBottomStyle: 'solid', orphans: 2, widows: 2, textAlign: 'center', backgroundColor: '#ffffff'}}><span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>AND</span></p>
  <p className="c12 c22" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center', orphans: 2, widows: 2}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>Salaryfy*</span><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>&nbsp;duly incorporated under Data Folkz Private Limited, under the
      Indian Law of Governance (hereinafter -“the Institution
      (Salaryfy*)”), as the Placement provider.</span>
  </p>
  <p className="c12 c22 c26" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center', orphans: 2, widows: 2, height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c12 c22" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center', orphans: 2, widows: 2}}>
    <span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>THIS IS A LEGALLY BINDING CONTRACT. &nbsp;</span>
  </p>
  <p className="c12 c22" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center', orphans: 2, widows: 2}}>
    <span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>READ IT CAREFULLY BEFORE SIGNING. </span>
  </p>
  <p className="c11 c22" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left', height: '11pt', orphans: 2, widows: 2}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c2" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify'}}>
    <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>By entering into this Agreement, you agree to pay a percentage of your
      earned income to the Institution (Salaryfy*) in accordance with the
      terms and conditions of this Agreement in exchange for receiving the
      training and placement provided by Salaryfy*.
    </span>
  </p>
  <p className="c11 c22" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left', height: '11pt', orphans: 2, widows: 2}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c2" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify'}}>
    <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>WHEREAS: The Institution (Salaryfy*) is in the business of placing
      students in training programmes related to a variety of courses, and You
      have agreed to enrol with the Institution (Salaryfy*) for the purpose of
      obtaining Training and Placement on the terms and conditions as stated
      in this Agreement.</span>
  </p>
  <p className="c11 c22" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left', height: '11pt', orphans: 2, widows: 2}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c2" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify'}}>
    <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>If you are under the age of 24 (twenty-four), please ask your legal
      representatives (parent or legal guardian) to refer to the contract
      conditions in accordance with the terms and conditions outlined in this
      Agreement, you have accepted to enrol with the Institute (Salaryfy*) in
      order to take advantage of the Training and Placement.</span>
  </p>
  <p className="c1 c27" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt', marginLeft: '36pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c2 c19" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff'}}>
    <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>In exchange for the Training and Placement offered by the Institution
      (Salaryfy*) and subject to all of the terms, commitments, obligations,
      and conditions specified in this Agreement, You and the Institution
      (Salaryfy*) agree as follows:</span>
  </p>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <ol className="c6 lst-kix_6pbphlkze45l-0 start" start={1} style={{padding: 0, margin: 0, listStyleType: 'none', counterReset: 'lst-ctn-kix_6pbphlkze45l-0 0'}}>
    <li className="c14 c5 c27 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', paddingLeft: '0pt', marginLeft: '36pt', counterIncrement: 'lst-ctn-kix_6pbphlkze45l-0'}}>
      <span className="c13 c8 c7" style={{textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>DEFINITIONS: </span><span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>For purposes of this Agreement:</span>
    </li>
  </ol>
  <ol className="c6 lst-kix_c54j4idzqx9-0 start" start={1} style={{padding: 0, margin: 0, listStyleType: 'none', counterReset: 'lst-ctn-kix_c54j4idzqx9-0 0'}}>
    <li className="c2 c18 li-bullet-1" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '46pt', paddingLeft: '3.6pt', counterIncrement: 'lst-ctn-kix_c54j4idzqx9-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>"Earned Income" / "CTC" refers to your entire
        salary (including variable pay), compensation, and gross income from
        employment or self-employment in any organization that has been
        reported or is needed to be reported on an income tax return.</span>
    </li>
  </ol>
  <ul className="c6 lst-kix_q5k350rrfndu-0 start" style={{padding: 0, margin: 0, listStyleType: 'none'}}>
    <li className="c2 c19 c5 c28 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', paddingLeft: '0pt', marginLeft: '72pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Earned income also includes any non-cash consideration received or
        deemed earned by You, directly or indirectly, such as contributions to
        qualified and non-qualified deferred compensation and retirement
        benefit plans, fringe benefits not reported as wages for compensation,
        income and distributions from Your active participation in any entity,
        and equity rights or deferred compensation generated or attributable
        to the current period of Your employment.
      </span>
    </li>
    <li className="c2 c19 c5 c28 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', paddingLeft: '0pt', marginLeft: '72pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Moreover, Earned Income includes any amounts earned or payable to
        You, directly or indirectly, as a result of Your provision of services
        to a related party.</span>
    </li>
    <li className="c2 c19 c5 c28 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', paddingLeft: '0pt', marginLeft: '72pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>The Institution (Salaryfy*) may estimate Your Earned Income using
        documentation other than Your income tax return at its discretion,
        provided that the documentation is from another verifiable source
        acceptable to the Institution.</span>
    </li>
    <li className="c2 c19 c5 c28 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', paddingLeft: '0pt', marginLeft: '72pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>It is clarified that any dispute on Your Earned Income (including if
        the Earned Income was earned pursuant to the skill developed through
        Training) shall be determined by the Institution (Salaryfy*) at its
        sole discretion and such determination shall be binding on You.</span>
    </li>
  </ul>
  <ol className="c6 lst-kix_c54j4idzqx9-0" start={2} style={{padding: 0, margin: 0, listStyleType: 'none'}}>
    <li className="c2 c18 li-bullet-2" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '46pt', paddingLeft: '3.6pt', counterIncrement: 'lst-ctn-kix_c54j4idzqx9-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>"Employer" refers to any person or organization for whom
        You provide services, whether as an employee, an independent
        contractor, or in any other capacity..</span>
    </li>
    <li className="c2 c18 li-bullet-2" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '46pt', paddingLeft: '3.6pt', counterIncrement: 'lst-ctn-kix_c54j4idzqx9-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>"Certification Completion Date" refers the date on which
        You obtained the certificate after completing and passing all
        curriculum-related assessments stated in the Course or as personally
        assigned to You by the career coaches/trainers/mentors/batch
        coordinators of the Institution(Salaryfy*).</span>
    </li>
    <li className="c2 c18 li-bullet-1" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '46pt', paddingLeft: '3.6pt', counterIncrement: 'lst-ctn-kix_c54j4idzqx9-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>“Income Share" refers to a fixed percentage of Your Earned
        Income. Your Income Share under this Agreement is at least 12.00%
        (twelve percent) of the Earned Income, subject to adjustment for
        underreporting or overreporting of Earned Income, as described
        herein.</span>
    </li>
    <li className="c2 c18 li-bullet-2" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '46pt', paddingLeft: '3.6pt', counterIncrement: 'lst-ctn-kix_c54j4idzqx9-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>"Monthly Payment" means the amount of Your Income Share
        times Your Earned Income.</span>
    </li>
    <li className="c2 c18 li-bullet-2" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '46pt', paddingLeft: '3.6pt', counterIncrement: 'lst-ctn-kix_c54j4idzqx9-0'}}>
      <span className="c7" style={{fontSize: '12pt'}}>"Payment Term"</span><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>&nbsp;refers to the period commencing upon Your Earned Income during
        which period You have an obligation to make Monthly Payments/ ISA
        threshold amount to the Institution (Salaryfy*), as provided under
        this Agreement.</span>
    </li>
    <li className="c2 c18 li-bullet-1" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '46pt', paddingLeft: '3.6pt', counterIncrement: 'lst-ctn-kix_c54j4idzqx9-0'}}>
      <span className="c7" style={{fontSize: '12pt'}}>“</span><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Terminal Exam” refers to the exam/ test conducted by the end of
        each term by the Institution (Salaryfy*) during the program.</span>
    </li>
    <li className="c2 c18 li-bullet-1" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '46pt', paddingLeft: '3.6pt', counterIncrement: 'lst-ctn-kix_c54j4idzqx9-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>"Person" means any individual, partnership, corporation,
        limited liability partnership, trust or unincorporated association,
        joint venture, or other entity or governmental body.</span>
    </li>
  </ol>
  <p className="c10 c27" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt', marginLeft: '36pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c14" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left'}}>
    <span className="c7" style={{fontSize: '12pt'}}>2.</span><span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>&nbsp;</span><span className="c13 c8 c7 c21" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>Payment Channels</span>
  </p>
  <ol className="c6 lst-kix_2xtp79rvj4zh-0 start" start={1} style={{padding: 0, margin: 0, listStyleType: 'none', counterReset: 'lst-ctn-kix_2xtp79rvj4zh-0 0'}}>
    <li className="c14 c5 c27 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', paddingLeft: '0pt', marginLeft: '36pt', counterIncrement: 'lst-ctn-kix_2xtp79rvj4zh-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>NBFC/ Credit Card</span>
    </li>
  </ol>
  <p className="c2 c4" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt'}}>
    <span className="c7" style={{fontSize: '12pt'}}>You will either be using a credit card or an NBFC to make your
      threshold ISA payment to the institution (Salaryfy*). As per the terms
      of this agreement, you shall pay the Institution (Salaryfy*) 12% of your
      yearly income by an NBFC or credit card within 30 days of the start date
      of employment.</span>
  </p>
  <ol className="c6 lst-kix_2xtp79rvj4zh-0" start={2} style={{padding: 0, margin: 0, listStyleType: 'none'}}>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_2xtp79rvj4zh-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Bank auto-sweep</span>
    </li>
  </ol>
  <p className="c2 c4" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt'}}>
    <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>You have the option of repaying monthly payments for threshold ISA
      payments to institutions (Salaryfy*) by bank-auto sweep unless the bank
      account where the payments are made is the same as the one where your
      earned income is received.</span>
  </p>
  <p className="c1 c27" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt', marginLeft: '36pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c14" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left'}}>
    <span className="c7" style={{fontSize: '12pt'}}>3. </span><span className="c21 c13 c8 c7" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>RIGHTS AND OBLIGATIONS UNDER THIS AGREEMENT</span>
  </p>
  <ol className="c6 lst-kix_cfbk03o8i2z7-0 start" start={1} style={{padding: 0, margin: 0, listStyleType: 'none', counterReset: 'lst-ctn-kix_cfbk03o8i2z7-0 0'}}>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_cfbk03o8i2z7-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>The Institution (Salaryfy*) agrees to provide You with the Training
        and hence Placement, subject to the terms and conditions of this
        Agreement.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_cfbk03o8i2z7-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>It is clarified that CTC will include the total of the fixed salary
        (+) the variable pay (+) the employment benefits.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_cfbk03o8i2z7-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>You agree to pay the Institution (Salaryfy*) in exchange for the
        Training. The ISA amount of 12% must be paid to the institution within
        30 days of the start date of employment. It can be paid directly,
        through NBFCs, or with a credit card. It is clarified that You can
        only pay the fee to the Institution (Salaryfy*) in a single
        transaction.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_cfbk03o8i2z7-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>This Agreement shall be valid for a period of 12 months from the
        Certification Date.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_cfbk03o8i2z7-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>You agree that the Institution (Salaryfy*) will manage and process
        all parts of this Agreement.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_cfbk03o8i2z7-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>You also undertake to cooperate with all inquiries made by the
        Institution regarding Your compliance with the terms and circumstances
        of this Agreement, including providing information, documents, and
        authorizations as requested.</span>
    </li>
  </ol>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c14" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left'}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>4. </span><span className="c21 c13 c8 c7" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>OBLIGATIONS OF THE STUDENTS</span>
  </p>
  <ol className="c6 lst-kix_zegiv1y46upy-0 start" start={1} style={{padding: 0, margin: 0, listStyleType: 'none', counterReset: 'lst-ctn-kix_zegiv1y46upy-0 0'}}>
    <li className="c14 c5 c27 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', paddingLeft: '0pt', marginLeft: '36pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>For the assessment year in which Your Payment begins, You agree to
        file your income tax returns no later than 31st March for the
        financial each year, and to timely file any state or local tax returns
        by the applicable due date. You agree to perform any similar
        requirements or procedures for any other country’s taxing
        authority, as applicable.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>You shall submit to the Institution (Salaryfy*), on or before the 10
        April of the calendar year, the proof of filing of the income tax
        returns as set out in Clause 5.A.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>If You fail to file the income tax returns as set out in Clause 5.A
        and to submit to the Institution (Salaryfy*) the proof of filing of
        the income tax returns in the manner as set out in Clause 5.B. above,
        the Institution (Salaryfy*) shall be entitled to pursue legal
        proceedings and the Institution (Salaryfy*) shall also be entitled to
        transfer the amounts payable by You from your bank account to the bank
        account of the Institution (Salaryfy*).</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>You shall provide to the Institution (Salaryfy*), Your salary slips
        as provided by the Employer or such other proof of payment as required
        by the Institution (Salaryfy*) on a monthly basis either through the
        student dashboard or by emailing the same to such email address as
        designated by the Institution (Salaryfy*).</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>If You fail to provide the salary slips or such other proof of
        payment as required by the Institution (Salaryfy*) for one calendar
        month, the Institution (Salaryfy*) shall issue You a request calling
        upon you to provide the salary slips or such other proof of payment as
        required by the Institution (Salaryfy*).</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>If, however, You fail to provide the salary slips or such other proof
        of payment as required by the Institution (Salaryfy*) for two
        consecutive months, the Institution (Salaryfy*) shall be entitled to
        take necessary actions for the recovery of the amount due and payable
        by You and the Institution (Salaryfy*) shall also to transfer the
        amounts payable by You from Your bank account to the bank account of
        the Institution (Salaryfy*).</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>In addition to the salary slips, You shall provide to the Institution
        (Salaryfy*), the bank statement for the Approved Bank Account, and
        such other bank accounts in which Your Earned Income is
        deposited.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c13 c7" style={{textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontSize: '12pt'}}>Job Guarantee Criteria</span><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>: In order to guarantee a 100% placement through this programme, the
        student hereby consents to the following terms.</span>
    </li>
  </ol>
  <ol className="c6 lst-kix_zegiv1y46upy-1 start" start={1} style={{padding: 0, margin: 0, listStyleType: 'none', counterReset: 'lst-ctn-kix_zegiv1y46upy-1 0'}}>
    <li className="c2 c19 c5 c28 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', paddingLeft: '0pt', marginLeft: '72pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-1'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>In all of his TERMS, the student must consistently maintain an
        attendance record of higher than 80%.</span>
    </li>
    <li className="c2 c19 c5 c28 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', paddingLeft: '0pt', marginLeft: '72pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-1'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>The student is required to complete all of the assignments and online
        exercises that are listed in the course syllabus.</span>
    </li>
    <li className="c2 c19 c5 c28 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', paddingLeft: '0pt', marginLeft: '72pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-1'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>The student must receive a score of at least 75% on each of the
        terminal exams.</span>
    </li>
    <li className="c2 c19 c5 c28 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', paddingLeft: '0pt', marginLeft: '72pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-1'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>The course completion exam must be passed with a score of at least
        75%.</span>
    </li>
  </ol>
  <ol className="c6 lst-kix_zegiv1y46upy-0" start={9} style={{padding: 0, margin: 0, listStyleType: 'none'}}>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Also, in each of the terminal exam, if the student receives a score
        of less than 75% even after two attempts, they will be given the
        opportunity to retake the exam by paying the institution Rs. 3,000 as
        a restitution charge (Non-Refundable).</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>The student might also choose to receive the NASSCOM Certificate for
        the specific term by paying the institution a Rs. 1000 amount.
        However, in any of the aforementioned scenarios, the security deposit
        will not be refunded to the students.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c13 c7" style={{textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontSize: '12pt'}}>Your Obligations in Relation to Securing a Job Offer</span><span className="c7" style={{fontSize: '12pt'}}>: </span><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>For the Institution (Salaryfy*) to assist You to secure a job for
        You, You must have completed and passed all the career and skill
        development tasks both listed in the Course/curriculum in the order
        they appear in the Course and as personally assigned to you by career
        coaches of the Institution (Salaryfy*) and shall have completed your
        Certification. It is clarified that if You do not complete and pass
        the Certification, You will not be eligible to appear for placement
        through the placement services of the Institution (Salaryfy*).</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>You hereby agree to accept job offers and to relocate for the
        purposes of a job secured either through the placement related
        services of the Institution (Salaryfy*) or through your own
        efforts.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>You should actively take guidance from Your mentor from the
        Institution (Salaryfy*) and from the placement services team of the
        Institution (Salaryfy*) and You shall be bound to follow their
        recommendations including in making applications for such jobs that
        are appropriate for You as decided by the Institution
        (Salaryfy*).</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>When making applications for a job, the Institution (Salaryfy*) shall
        &nbsp;apply for roles that are suited to Your level of experience and
        areas of expertise and as will be determined by the Institution
        (Salaryfy*) and You shall also maintain realistic expectations about
        the nature and kind of job that You are likely to be offered in the
        respected domain of training you pursued in the Institution
        (Salaryfy*).</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>You must respond to placement-related communications from
        representatives of the Institution (Salaryfy*) within 24-48 hours by
        email or on call.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>You must always act reasonably and take all necessary efforts in good
        faith efforts to secure a job.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c7" style={{fontSize: '12pt'}}>If You do not attend the interviews for the placements offered by the
        Institution (Salaryfy*) for a period of 2 weeks from the Certification
        Date, the Institution (Salaryfy*) is not obliged to secure a placement
        for You.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>You are obliged to pay the Income share uptil six months of post
        certificate completion date even if You do not communicate with the
        placement team of the Institution (Salaryfy*) consistently throughout
        Your search for a job and do not notify/inform the Institution
        (Salaryfy*) of any of the offers that You have received
        otherwise.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>The Institution (Salaryfy*) is not obliged to secure a placement for
        You if You do not follow through with the interview process in a
        timely and professional manner, including but not limited to, not
        participating as expected by the employer in the interview process by
        providing responses to employer communications, not showing up on time
        for interviews and not providing documents or not following up as
        expected by employers. But the Institution (Salaryfy*) shall be
        entitled to take necessary steps for recovery of the amount due.
      </span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_zegiv1y46upy-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>The Institution (Salaryfy*) shall also be entitled to sweep from Your
        designated bank account the amounts payable by You to the Institution
        (Salaryfy*) in case explained in the Clauses 5.(N) / 5.(O)./
        5.(P).</span>
    </li>
  </ol>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c14" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left'}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>5. </span><span className="c21 c13 c8 c7" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>MAKING PAYMENTS FROM EARNED INCOME</span>
  </p>
  <ol className="c6 lst-kix_bs9u26doid67-0 start" start={1} style={{padding: 0, margin: 0, listStyleType: 'none', counterReset: 'lst-ctn-kix_bs9u26doid67-0 0'}}>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_bs9u26doid67-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Once Your Earned Income Growth, either on account of securing a job
        or a change in job or on account of an increment granted to You by an
        Employer, exceeds the initial CTC at any time during a period of 1
        (one) years from the Certification Date, the Payment Term will
        commence and You shall be liable to pay to the Institution (Salaryfy*)
        the Monthly Payments. Such payment to the Institution (Salaryfy*)
        shall be made on or before such day of each calendar month as
        stipulated in the Agreement (“Payment Due-Date”).</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_bs9u26doid67-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>In the event of the termination of Your employment or if Your income
        falls below the initial CTC Your obligations to make the Monthly
        Payments to the Institution (Salaryfy*) from your own income shall
        still be continued on the same amount.
      </span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_bs9u26doid67-0'}}>
      <span className="c7" style={{fontSize: '12pt'}}>If your employment is once terminated within one month , the
        Institution (Salaryfy*) shall, on a best effort basis, attempt to
        secure You a new employment. It is however clarified that there should
        be no obligation on the Institution (Salaryfy*) to secure a new
        employment offer for You. But You are obligated to make ISA threshold
        payment to the Institution (Salaryfy*</span><span className="c7" style={{fontSize: '12pt'}}>)/ NBFC/Credit Card/ Bank </span><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>from your own income shall still be continued on the same amount till
        you complete your payment term.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_bs9u26doid67-0'}}>
      <span className="c13 c7" style={{textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontSize: '12pt'}}>Default in payment of the Monthly Payments </span><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>– in the event of a delay in making payment of the Monthly
        Payment, of more than 30 (thirty) days beyond the Payment Due Date
        (“Payment Default”), the Institution (Salaryfy*) shall be
        entitled to initiate legal actions for recovery of the amounts due and
        payable to the Institution (Salaryfy*).
      </span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_bs9u26doid67-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Further, on account of Payment Default, You will be liable to pay
        such additional amounts and/or default charges as set out in the
        Agreement. The Institution (Salaryfy*) may, at its discretion,
        initiate appropriate legal proceedings for recovery of the amounts due
        and payable under the Agreement. The Institution (Salaryfy*) shall
        also be entitled to sweep from your designated bank account the
        amounts payable by You to the Institution (Salaryfy*).</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_bs9u26doid67-0'}}>
      <span className="c21 c13 c7 c30" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 400, fontSize: '12pt'}}>Student Exit Policy: (Voluntarily)</span>
    </li>
  </ol>
  <ul className="c6 lst-kix_216muxsppp1o-0 start" style={{padding: 0, margin: 0, listStyleType: 'none'}}>
    <li className="c14 c5 c28 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', paddingLeft: '0pt', marginLeft: '72pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>The student may also opt out of the 100% Employment Guarantee Program
        if he: willingly quits the programme within 7 days of the batch's
        start date.</span>
    </li>
    <li className="c14 c5 c28 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', paddingLeft: '0pt', marginLeft: '72pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>However, if You decide to drop off / Withdraw anytime after one week
        of the Course Training and the Placement Process, You shall pay to the
        Institution (Salaryfy*):
      </span>
    </li>
  </ul>
  <a id="t.22b9da5a5a2e4d8510d38679ba0c5c59d03aa03b" /><a id="t.0" />
  <table className="c27 c35" style={{borderSpacing: 0, borderCollapse: 'collapse', marginRight: 'auto', marginLeft: '36pt'}}>
    <tbody><tr className="c24" style={{height: '0pt'}}>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Withdrawal Fee (Obligatory)</span></p>
        </td>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Terms and Conditions</span></p>
        </td>
      </tr>
      <tr className="c24" style={{height: '0pt'}}>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Rs.5000</span></p>
        </td>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}>
            <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>during or after the 1st Term</span>
          </p>
        </td>
      </tr>
      <tr className="c24" style={{height: '0pt'}}>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Rs. 10000</span></p>
        </td>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}>
            <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>during or after the 2nd Term</span>
          </p>
        </td>
      </tr>
      <tr className="c24" style={{height: '0pt'}}>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Rs.15000</span></p>
        </td>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}>
            <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>during or after the 3rd Term</span>
          </p>
        </td>
      </tr>
      <tr className="c24" style={{height: '0pt'}}>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Rs.20000</span></p>
        </td>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}>
            <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>during or after the 4th Term</span>
          </p>
        </td>
      </tr>
      <tr className="c24" style={{height: '0pt'}}>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Rs.25000</span></p>
        </td>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}>
            <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>during or after the 5th Term</span>
          </p>
        </td>
      </tr>
      <tr className="c24" style={{height: '0pt'}}>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Rs.30000</span></p>
        </td>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}>
            <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>during or after the 6th Term</span>
          </p>
        </td>
      </tr>
      <tr className="c24" style={{height: '0pt'}}>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Rs.35000</span></p>
        </td>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}>
            <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>during or after the 7th Term</span>
          </p>
        </td>
      </tr>
      <tr className="c24" style={{height: '0pt'}}>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Rs.40000</span></p>
        </td>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}>
            <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>during or after the 8th Term</span>
          </p>
        </td>
      </tr>
      <tr className="c24" style={{height: '0pt'}}>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Rs.45000</span></p>
        </td>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}>
            <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>during or after the 9th Term</span>
          </p>
        </td>
      </tr>
      <tr className="c24" style={{height: '0pt'}}>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Rs.50000</span></p>
        </td>
        <td className="c16" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '222.8pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c12" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'center'}}>
            <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>during or after the 10th Term</span>
          </p>
        </td>
      </tr>
    </tbody></table>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c10 c28" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt', marginLeft: '72pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <ul className="c6 lst-kix_ypuy7rxpyiqc-0 start" style={{padding: 0, margin: 0, listStyleType: 'none'}}>
    <li className="c14 c5 c28 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', paddingLeft: '0pt', marginLeft: '72pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Though for the above stated conditions, the student is eligible to
        receive a NASSCOM Certificate after completing the first 5 TERMS by
        paying an amount of Rs. 1000 to the Institute; nevertheless, the
        security amount will not be repaid to the students in any of the
        conditions indicated above.</span>
    </li>
  </ul>
  <ol className="c6 lst-kix_bs9u26doid67-0" start={7} style={{padding: 0, margin: 0, listStyleType: 'none'}}>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_bs9u26doid67-0'}}>
      <span className="c7 c13" style={{textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontSize: '12pt'}}>Student Exit Policy: (Performance Based): </span><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>The student may also opt out of the 100% Employment Guarantee Program
        if he is unable to satisfy any of these conditions:</span>
    </li>
  </ol>
  <ul className="c6 lst-kix_y867gnjkiug7-0 start" style={{padding: 0, margin: 0, listStyleType: 'none'}}>
    <li className="c14 c5 c28 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', paddingLeft: '0pt', marginLeft: '72pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Even after two attempts, the student is unable to achieve a score of
        more than 75% on any of the Terminal exams.</span>
    </li>
    <li className="c14 c5 c28 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', paddingLeft: '0pt', marginLeft: '72pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>In addition, for a fee of Rs.1000, the student can obtain a NASSCOM
        Certificate for the specific term.</span>
    </li>
    <li className="c14 c5 c28 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', paddingLeft: '0pt', marginLeft: '72pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>However, in any of the instances stated above, the security deposit
        will not be reimbursed to the students.</span>
    </li>
  </ul>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c2 c19" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff'}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>6.</span><span className="c13 c8 c7" style={{textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>&nbsp;Reporting of all Earned Income</span><span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>:</span>
  </p>
  <p className="c2 c4" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt'}}>
    <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Upon completion of Your Training and throughout the Payment Term, You
      agree to communicate:</span>
  </p>
  <ul className="c6 lst-kix_ew3wq0xtm0bp-0 start" style={{padding: 0, margin: 0, listStyleType: 'none'}}>
    <li className="c2 c19 c5 c29 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', paddingLeft: '0pt', marginLeft: '35.4pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Your Earned Income </span>
    </li>
    <li className="c2 c19 c5 c29 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', paddingLeft: '0pt', marginLeft: '35.4pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>All employment positions You accept including, if requested, a
        description of the business and products or services provided by each
        Employer and the nature of Your position with each Employer;
      </span>
    </li>
    <li className="c2 c19 c5 c29 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', paddingLeft: '0pt', marginLeft: '35.4pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Your projected annual gross Earned Income; and </span>
    </li>
    <li className="c2 c19 c5 c29 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', paddingLeft: '0pt', marginLeft: '35.4pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Any changes in employment. </span>
    </li>
    <li className="c2 c19 c5 c29 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', paddingLeft: '0pt', marginLeft: '35.4pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>You further agree during the Payment Term to update any changes in
        Your Earned Income within thirty (30) days of any event giving rise to
        such Change.</span>
    </li>
  </ul>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c14" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left'}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>7. </span><span className="c13 c8 c7" style={{textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>Deposit of all Earned Income into Bank Account</span><span className="c7 c8" style={{fontWeight: 700, fontSize: '12pt'}}>:</span>
  </p>
  <ol className="c6 lst-kix_972768ct3vf0-0 start" start={1} style={{padding: 0, margin: 0, listStyleType: 'none', counterReset: 'lst-ctn-kix_972768ct3vf0-0 0'}}>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_972768ct3vf0-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>You agree that during the entire Payment Term You shall deposit all
        Earned Income received by You from any and all sources directly into
        Your Bank Account.
      </span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_972768ct3vf0-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>If You are employed, You agree to cause Your Employer to arrange for
        the direct deposit of all of Your Earned Income to Your Bank Account.
        Your refusal or failure to establish the Bank Account for the purpose
        of making Monthly Payments or other payments hereunder shall not
        relieve You of any of Your obligations under this Agreement.</span>
    </li>
  </ol>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c14" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left'}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>8. </span><span className="c21 c13 c8 c7" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>Survival of Obligations:</span>
  </p>
  <p className="c2 c4" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt'}}>
    <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Expiration of the Payment Term only terminates Your obligation to make
      Monthly Payments from Earned Income. However, it does not terminate this
      ISA or any continuing obligations You may have to the Institution
      (Salaryfy*) to this Agreement, including but not limited to the
      obligation to make an additional payment if the Institution (Salaryfy*)
      determines that You underreported Your Earned Income.</span>
  </p>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c14" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left'}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>9. </span><span className="c21 c13 c8 c7" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>RECONCILIATION:</span>
  </p>
  <p className="c2 c4" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt'}}>
    <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>From time to time during the Payment Term, and for a period of one year
      following the end of the calendar year in which the Payment Term
      expires, Institution (Salaryfy*) shall have the right to examine and
      audit Your records pertaining to Your employment and to verify your
      Earned Income at any point to ensure that You have properly reported or
      projected Your Earned Income and to verify that the Institution
      (Salaryfy*) has properly calculated the Monthly Payments due and payable
      under this Agreement (“Reconciliation”). You agree to
      cooperate with the Institution (Salaryfy*) in the Reconciliation
      process.</span>
  </p>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c14" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left'}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>10. </span><span className="c21 c13 c8 c7" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>Confirmation of Earned Income and Employment:</span>
  </p>
  <p className="c2 c4" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt'}}>
    <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>To permit the Institution (Salaryfy*) to perform Reconciliation, You
      agree that You shall, within thirty (30) days of a request by the
      Institution (Salaryfy*) provide the Institution (Salaryfy*) with the
      name, address, and phone number of any Employers from which You have
      received Earned Income and authorise each of Your Employers to disclose
      to the Institution (Salaryfy*) all forms of cash and non-cash
      compensation paid or provided to or earned by You and provide such other
      documentation (including Your salary slips, a summary of any non-written
      or oral non-cash consideration, equity or deferred compensation
      arrangements) as may be reasonably requested by the Institution
      (Salaryfy*) for the purpose of performing the Reconciliation.</span>
  </p>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c14" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left'}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>11.</span><span className="c21 c13 c8 c7" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>&nbsp;Under-reported Earned Income:</span>
  </p>
  <ol className="c6 lst-kix_vrh48nksrnco-0 start" start={1} style={{padding: 0, margin: 0, listStyleType: 'none', counterReset: 'lst-ctn-kix_vrh48nksrnco-0 0'}}>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_vrh48nksrnco-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>If at any time during the Payment Term or pursuant to Reconciliation,
        whether intentionally or unintentionally, You under-report Your Earned
        Income, resulting in a lower amount of Monthly Payment being made to
        the Institution (Salaryfy*), Institution (Salaryfy*) will have the
        right to revise the Monthly Payment, in its discretion, by
        &nbsp;increasing Your Income Share as the new CTC.
      </span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_vrh48nksrnco-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Alternatively, if a Reconciliation shows that You underreported Your
        Earned Income at any time</span>
    </li>
  </ol>
  <p className="c2 c4" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt'}}>
    <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>during the Payment Term so that You made one or lower Monthly Payments
      than Institution (Salaryfy*) is entitled to receive under this
      Agreement, Institution (Salaryfy*) shall give You notice within 15
      (fifteen) days of completion of the Reconciliation of the amount of the
      underpayment and reasonable documentation of the underpayment
      calculation. You agree to pay the Institution (Salaryfy*) the aggregate
      amount of the underpayment within thirty (30) days of receiving such
      notice. The Institution (Salaryfy*) shall also be entitled to sweep from
      your designated bank account the amounts payable by You pursuant to this
      Clause.</span>
  </p>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c14" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left'}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>12. </span><span className="c21 c13 c8 c7" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>PREPAYMENT AMOUNT:</span>
  </p>
  <p className="c14 c32" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', textIndent: '36pt'}}>
    <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>You may at any time pay in full Your obligation to the Institution
      (Salaryfy*) by paying an</span>
  </p>
  <p className="c14 c32" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', textIndent: '36pt'}}>
    <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>amount equal to the Prepayment Amount which is a fixed percentage of
      your CTC.</span>
  </p>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c14" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left'}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>13. </span><span className="c21 c13 c8 c7" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>ADDITIONAL PROVISIONS AFFECTING PAYMENTS:</span>
  </p>
  <ol className="c6 lst-kix_t7gzcatasl0g-0 start" start={1} style={{padding: 0, margin: 0, listStyleType: 'none', counterReset: 'lst-ctn-kix_t7gzcatasl0g-0 0'}}>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_t7gzcatasl0g-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>International Work - If You move out of India during Your Payment
        Term, You agree to continue to report Earned Income and to continue
        paying Your Income Share of Earned Income during the Payment Terms.
        You shall not be in breach of this Agreement so long as You continue
        to make the required Monthly Payments pursuant to the terms of this
        Agreement.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_t7gzcatasl0g-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Waiver of ISA Due to Death or Total Disability: &nbsp;We will waive
        what You owe under this Agreement, including any past due amounts and
        fees, in the case of any unfortunate event leading to death or
        permanent total disability; if You would like to assert a waiver based
        on disability, You will need to provide documentation showing that You
        have been found to be permanently disabled by the state agency due to
        a condition that began or deteriorated after the Effective Date.</span>
    </li>
  </ol>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c14" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left'}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>14. </span><span className="c21 c13 c8 c7" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>CODE OF CONDUCT FOR THE STUDENTS:</span>
  </p>
  <p className="c2 c4" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt'}}>
    <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>By entering into this Agreement, You represent, warrant, and promise to
      the Institution (Salaryfy*)
    </span>
  </p>
  <ol className="c6 lst-kix_qbphcycjw1qb-0 start" start={1} style={{padding: 0, margin: 0, listStyleType: 'none', counterReset: 'lst-ctn-kix_qbphcycjw1qb-0 0'}}>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_qbphcycjw1qb-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>That You are entering into this Agreement in good faith and with the
        intention to pay the Institution (Salaryfy*) by making Monthly
        Payments or the Course Fee payment when due;</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_qbphcycjw1qb-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>That all the information You have provided to Institution (Salaryfy*)
        in connection with entering into this Agreement is true and accurate
        and that You have not provided any false, misleading, or deceptive
        statements or omissions of fact;</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_qbphcycjw1qb-0'}}>
      <span className="c7" style={{fontSize: '12pt'}}>That you agree to abide by the rules and guidelines laid by the </span><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Institution (Salaryfy*).</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_qbphcycjw1qb-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>That you maintain a steady attendance rate of at least 80% in all of
        the TERMs.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_qbphcycjw1qb-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>That you secure a score of atleast 75% to qualify any TERM (within 2
        attempts).</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_qbphcycjw1qb-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>That you abide by the Job Guarantee Criteria stated above in Clause
        4(H).</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_qbphcycjw1qb-0'}}>
      <span className="c7" style={{fontSize: '12pt'}}>That you abide by the Student Exit Policies (</span><span className="c7" style={{fontSize: '12pt'}}>Voluntarily an</span><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>d Performance based) stated above in clause 4(H) and 4(G)
        respectively.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_qbphcycjw1qb-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>That You are an Indian citizen or a permanent resident and the legal
        right to work in India;</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_qbphcycjw1qb-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>That You will make reasonable and good faith efforts to seek
        employment immediately following completion of the Training and during
        all times during the Payment Term that You are not employed.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_qbphcycjw1qb-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>That You will timely and fully provide all information and
        documentation required under the terms of this Agreement or as
        reasonably requested by Institution (Salaryfy*) (including any
        assignee of Institution (Salaryfy*)) and that such information or
        documentation shall be true, complete, and accurate;</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_qbphcycjw1qb-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>That You shall keep accurate records relating to Your Earned Income
        for each year of Your Payment Term, including any invoices or payments
        relating to self-employment services You provide; and that You will
        retain all such records for a period of at least one (1) year
        following the date You fulfil all Your payment obligations under this
        Agreement.</span>
    </li>
  </ol>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c14" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left'}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>15. </span><span className="c21 c13 c8 c7" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>TERM:</span>
  </p>
  <p className="c2 c4" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt'}}>
    <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>This Agreement shall be effective from the Execution Date and shall be
      valid and binding till an &nbsp;amount equal to the Income Share has
      been repaid by You in the manner as set out in this</span>
  </p>
  <p className="c2 c19 c32" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', textIndent: '36pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Agreement.</span></p>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c14" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left'}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>16. </span><span className="c21 c13 c8 c7" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>BREACH AND REMEDIES:</span>
  </p>
  <ol className="c6 lst-kix_i17r0smwciux-0 start" start={1} style={{padding: 0, margin: 0, listStyleType: 'none', counterReset: 'lst-ctn-kix_i17r0smwciux-0 0'}}>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_i17r0smwciux-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Upon breach by You of this Agreement, the Institution (Salaryfy*)
        shall be entitled to: &nbsp;</span>
    </li>
  </ol>
  <ul className="c6 lst-kix_cugx3zpjpppv-0 start" style={{padding: 0, margin: 0, listStyleType: 'none'}}>
    <li className="c2 c19 c5 c23 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', paddingLeft: '0pt', marginLeft: '56.7pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>collect the amounts due and payable by You under this Agreement;
      </span>
    </li>
    <li className="c2 c19 c5 c23 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', paddingLeft: '0pt', marginLeft: '56.7pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>enforce all legal rights and remedies in the collection of such
        amount and related fees (including any rights available to Institution
        (Salaryfy*) to garnish wages or set off any tax refund and to sweep
        from your designated bank account the amounts payable by You to the
        Institution (Salaryfy*)); or
      </span>
    </li>
    <li className="c2 c19 c5 c23 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', paddingLeft: '0pt', marginLeft: '56.7pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>utilise any combination of these remedies. </span>
    </li>
  </ul>
  <ol className="c6 lst-kix_i17r0smwciux-0" start={2} style={{padding: 0, margin: 0, listStyleType: 'none'}}>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_i17r0smwciux-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>You agree to pay the Institution (Salaryfy*)’s costs incurred
        by the Institution (Salaryfy*) for recovery of the amounts due and
        payable by You under this Agreement.</span>
    </li>
  </ol>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c14" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left'}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>17. </span><span className="c21 c13 c8 c7" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>GENERAL PROVISIONS:</span>
  </p>
  <ol className="c6 lst-kix_pi6nngy40eey-0 start" start={1} style={{padding: 0, margin: 0, listStyleType: 'none', counterReset: 'lst-ctn-kix_pi6nngy40eey-0 0'}}>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_pi6nngy40eey-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>This Agreement sets forth the entire agreement and understanding of
        the Parties relating to the subject matter herein and supersedes all
        prior or contemporaneous discussions, understandings, and agreements,
        whether oral or written, between You and the Institution (Salaryfy*)
        relating to the subject matter hereof.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_pi6nngy40eey-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>No delay or failure on the part of either Party to require
        performance of any provision of this Agreement shall constitute a
        waiver of that provision as to that or any other instance.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_pi6nngy40eey-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>The laws under the Govt. of India will govern all the adversarial
        proceedings arising out of this agreement, your Institution
        (Salaryfy*), or your payments to Institution (Salaryfy*).</span>
    </li>
  </ol>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c14" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left'}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>18. </span><span className="c21 c13 c8 c7" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>DISPUTES:</span>
  </p>
  <p className="c14 c27" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', marginLeft: '36pt'}}>
    <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>As the exclusive means of initiating adversarial proceedings to resolve
      any dispute arising out of this agreement, or any proceeding commenced
      by either party seeking an injunction, a restraining order, or any other
      equitable remedy or a proceeding commenced by either party in small
      claims court either party may demand that the dispute be resolved by
      binding arbitration administered by the Indian Judical System.</span>
  </p>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c14" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left'}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>19. </span><span className="c21 c13 c8 c7" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>COMMUNICATIONS:</span>
  </p>
  <ol className="c6 lst-kix_9k8pwkibb4ko-0 start" start={1} style={{padding: 0, margin: 0, listStyleType: 'none', counterReset: 'lst-ctn-kix_9k8pwkibb4ko-0 0'}}>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_9k8pwkibb4ko-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>For any reason related to this agreement, including any amounts you
        owe, Institution (Salaryfy*) may contact you at any physical or
        electronic addresses or numbers (including wireless cellular telephone
        numbers, VOIP, or other services) you have provided Institution
        (Salaryfy*) or provide Institution (Salaryfy*) in the future.
      </span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_9k8pwkibb4ko-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Institution (Salaryfy*) may use any means of communication, including
        postal mail, electronic mail, voice calls, text messaging, and
        recorded message using automatic-dialling devices. You will ask that
        Institution (Salaryfy*) not contact you using one or more of these
        means of contacting you.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_9k8pwkibb4ko-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>You must notify Institution (Salaryfy*) no later than 15 days after
        change in your primary residence, your phone number, email address, or
        any other contact information you previously provided the Institution
        (Salaryfy*).</span>
    </li>
  </ol>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c14" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left'}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>20. </span><span className="c21 c13 c8 c7" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>CONFIDENTIALITY:</span>
  </p>
  <ol className="c6 lst-kix_ttrfm9wxskse-0 start" start={1} style={{padding: 0, margin: 0, listStyleType: 'none', counterReset: 'lst-ctn-kix_ttrfm9wxskse-0 0'}}>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_ttrfm9wxskse-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>You agree and understand that as part of the Course, the Institution
        (Salaryfy*) will make available to You various course materials
        including by way of the online course, assessment material, study
        modules, and various other information/documents (“Confidential
        Information”).
      </span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_ttrfm9wxskse-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>You agree to treat as confidential the Confidential Information and
        shall not during the duration of the Course and for a period of 3
        years from the Course Completion Date disclose any such Confidential
        Information to any person, firm, corporation, association or other
        entity for any reason or purpose Whatsoever.</span>
    </li>
  </ol>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c10" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c14" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'left'}}>
    <span className="c8 c7" style={{fontWeight: 700, fontSize: '12pt'}}>21. </span><span className="c21 c13 c8 c7" style={{color: '#000000', verticalAlign: 'baseline', fontFamily: '"Arial"', fontStyle: 'normal', textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none', textDecoration: 'underline', fontWeight: 700, fontSize: '12pt'}}>VERIFICATION OF REVIEW AND INDEPENDENT DECISION TO ENTER INTO
      ISA:</span>
  </p>
  <p className="c2 c4" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt'}}>
    <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>By signing below, You acknowledge and agree:</span>
  </p>
  <ol className="c6 lst-kix_kecwxm3fxpwm-0 start" start={1} style={{padding: 0, margin: 0, listStyleType: 'none', counterReset: 'lst-ctn-kix_kecwxm3fxpwm-0 0'}}>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_kecwxm3fxpwm-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>That this Agreement is entered into voluntarily and as an arms-length
        transaction.
      </span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_kecwxm3fxpwm-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>That You are of legal age to execute this Agreement;
      </span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_kecwxm3fxpwm-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>That You have had the opportunity to read this Agreement and to
        review its terms and conditions with Your legal and financial advisors
        of Your choosing;</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_kecwxm3fxpwm-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>That the Institution (Salaryfy*) is not an agent or fiduciary or
        advisor acting for Your benefit or in Your favor in connection with
        the execution of this Agreement;</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_kecwxm3fxpwm-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>That Institution (Salaryfy*) has not provided You with any legal,
        accounting, investment, regulatory or tax advice with respect to this
        Agreement;
      </span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_kecwxm3fxpwm-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>that Institution (Salaryfy*) has not made any promises or assurances
        to You that are not expressly set forth in writing in this Agreement.
      </span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt', counterIncrement: 'lst-ctn-kix_kecwxm3fxpwm-0'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>You understand that, by entering into this Agreement, You are
        irrevocably agreeing to share a fixed portion of Your future Earned
        Income in consideration of receiving the Training / Placement, in
        accordance with the terms and conditions of this Agreement.</span>
    </li>
  </ol>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c3 c9" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal', backgroundColor: '#ffff00'}} /></p>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c2 c19" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff'}}><span className="c0" style={{color: '#000000', fontWeight: 700, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>22. Student Consent Form:</span></p>
  <ul className="c6 lst-kix_svv9qqa3qs4-0 start" style={{padding: 0, margin: 0, listStyleType: 'none'}}>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>I will give 80% or more attendance during the course duration which
        is to delivered online.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>I will never indulge in any kind of unethical practice (Sharing code
        etc.)</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>I am ready to adhere to course timings for full-time.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>I plan to work full time immediately after completing the
        course.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>I have a laptop and have access to a stable WiFi connection.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>I have a savings bank account.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>I have access to internet banking.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>My CIBIL (Credit Score) is ablove 650.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>I have read and understood the Salaryfy program.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>I have read and understood Salaryfy Code of Conduct.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>I have and understood the Income Sharing Agreement (ISA).</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>I understand after successfully completing all the TERMS with a score
        above than &nbsp;75% and availing a job, I will pay 12% from the
        annual package to the institution as the ISA amount.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>I understand that if I successfully complete all the TERMS with a
        score below 75%, I will pay 10% from the annual package to the
        institution as the ISA amount.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>I understand that in case I avail a job by myself / a vendor/
        third-party/ through college within the 6 months from the course
        completion , I will still be liable to pay 10% of my annual package to
        the institution.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>I am aware that documents collected are for verification purposes
        and</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>I authorize Data Folkz to keep my KYC related documents with NBFC
        partners to process my application.</span>
    </li>
    <li className="c2 c4 c5 li-bullet-0" style={{color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', backgroundColor: '#ffffff', marginLeft: '36pt', paddingLeft: '0pt'}}>
      <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>I am responsible to any Forgery or falsification of any document is a
        serious offence under Section 465 of the Indian Penal Code of
        1860.</span>
    </li>
  </ul>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}} /></p>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c3 c9" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal', backgroundColor: '#ffff00'}} /></p>
  <a id="t.263e8daa63f9844e66afc360503fb56f300cff6e" /><a id="t.1" />
  <table className="c34" style={{borderSpacing: 0, borderCollapse: 'collapse', marginRight: 'auto'}}>
    <tbody><tr className="c24" style={{height: '0pt'}}>
        <td className="c15" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '259.2pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c17" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Student Full Name:</span></p>
        </td>
        <td className="c15" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '259.2pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c11" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left', height: '11pt'}}><span className="c3 c9" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal', backgroundColor: '#ffff00'}} /></p>
        </td>
      </tr>
      <tr className="c24" style={{height: '0pt'}}>
        <td className="c15" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '259.2pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c17" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Date of &nbsp;Birth:</span></p>
        </td>
        <td className="c15" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '259.2pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c11" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left', height: '11pt'}}><span className="c3 c9" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal', backgroundColor: '#ffff00'}} /></p>
        </td>
      </tr>
      <tr className="c24" style={{height: '0pt'}}>
        <td className="c15" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '259.2pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c17" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Email id:</span></p>
        </td>
        <td className="c15" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '259.2pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c11" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left', height: '11pt'}}><span className="c3 c9" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal', backgroundColor: '#ffff00'}} /></p>
        </td>
      </tr>
      <tr className="c24" style={{height: '0pt'}}>
        <td className="c15" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '259.2pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c17" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Contact Number:</span></p>
        </td>
        <td className="c15" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '259.2pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c11" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left', height: '11pt'}}><span className="c3 c9" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal', backgroundColor: '#ffff00'}} /></p>
        </td>
      </tr>
      <tr className="c24" style={{height: '0pt'}}>
        <td className="c15" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '259.2pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c17" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Alternate Contact Number:</span></p>
        </td>
        <td className="c15" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '259.2pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c11" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left', height: '11pt'}}><span className="c3 c9" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal', backgroundColor: '#ffff00'}} /></p>
        </td>
      </tr>
      <tr className="c24" style={{height: '0pt'}}>
        <td className="c15" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '259.2pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c17" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Course Name:</span></p>
        </td>
        <td className="c15" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '259.2pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c11" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left', height: '11pt'}}><span className="c3 c9" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal', backgroundColor: '#ffff00'}} /></p>
        </td>
      </tr>
      <tr className="c24" style={{height: '0pt'}}>
        <td className="c15" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '259.2pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c17" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Batch Start Date:</span></p>
        </td>
        <td className="c15" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '259.2pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c11" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left', height: '11pt'}}><span className="c3 c9" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal', backgroundColor: '#ffff00'}} /></p>
        </td>
      </tr>
      <tr className="c24" style={{height: '0pt'}}>
        <td className="c15" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '259.2pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c17" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left'}}><span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Residential Address:</span></p>
        </td>
        <td className="c15" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '259.2pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c11" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left', height: '11pt'}}><span className="c3 c9" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal', backgroundColor: '#ffff00'}} /></p>
        </td>
      </tr>
      <tr className="c24" style={{height: '0pt'}}>
        <td className="c15" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '259.2pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c17" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left'}}>
            <span className="c3" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal'}}>Student’s Signature with Date:</span>
          </p>
        </td>
        <td className="c15" colSpan={1} rowSpan={1} style={{borderRightStyle: 'solid', padding: '5pt 5pt 5pt 5pt', borderBottomColor: '#000000', borderTopWidth: '1pt', borderRightWidth: '1pt', borderLeftColor: '#000000', verticalAlign: 'top', borderRightColor: '#000000', borderLeftWidth: '1pt', borderTopStyle: 'solid', borderLeftStyle: 'solid', borderBottomWidth: '1pt', width: '259.2pt', borderTopColor: '#000000', borderBottomStyle: 'solid'}} valign="top">
          <p className="c11" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', textAlign: 'left', height: '11pt'}}><span className="c3 c9" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal', backgroundColor: '#ffff00'}} /></p>
        </td>
      </tr>
    </tbody></table>
  <p className="c1" style={{margin: 0, color: '#000000', fontSize: '11pt', fontFamily: '"Arial"', backgroundColor: '#ffffff', paddingTop: '0pt', paddingBottom: '0pt', lineHeight: '1.5', orphans: 2, widows: 2, textAlign: 'justify', height: '11pt'}}><span className="c3 c9" style={{color: '#000000', fontWeight: 400, textDecoration: 'none', verticalAlign: 'baseline', fontSize: '12pt', fontFamily: '"Arial"', fontStyle: 'normal', backgroundColor: '#ffff00'}} /></p>
</div>


        </Modal.Body>
        <div className="form-check" style={{paddingLeft:'40px'}}>
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="invalidCheck2"
                                          // checked={isChecked}
                                          // onChange={handleCheckboxChange}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="invalidCheck2">
                                         I acknowledged that I have carefully read all the terms and conditions as mentioned in the <br />above document.
                                        </label>
                                      </div>
        <Modal.Footer style={{width:'100%',margin:'auto'}}>
        <Button style={{color:'green',border:'1px solid green',background:'white'}} onClick={props.onHide}>Close</Button>
          <Button onClick={()=>{
            handleNextPage();
            // eslint-disable-next-line no-unused-expressions
            props.onHide
          }} style={{background:'green',color:'white'}} >Next</Button>
        </Modal.Footer>
      </Modal>
    );
  }






  return (
    <React.Fragment>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <NavbarTwo />
      <section className="eligiblity-form-sec student-dashboard select-plan range-slider-plan full_show">
        <a className="call-btn-2 expand-button call-btn">
          {" "}
          <img src={Call} alt="arrow" className="expand-img" />
          <img src={Expand} alt="" className="expand-img-2" />
          <div className="d-block">
            <p className="text">Need help?</p>
            <p>Chat or call with our counselor</p>
          </div>
        </a>
        <div className="">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-9 m-auto margin-auto-hide">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active range-slider-tab"
                  id="v-pills-messages-3"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-3-tab">
                  <section className="">
                    <div className="container">
                      <div className="timeline-pop">
                        <ol>
                          <li className="active">
                            <span className="active-border">1</span>
                            <p>Upload documents</p>
                          </li>
                          <li>
                            <span>2</span>
                            <p>Enter placement drive</p>
                          </li>
                          <li>
                            <span>3</span>
                            <p>Get job</p>
                          </li>
                        </ol>
                      </div>
                      <div
                        className="row basket-banner
                                            eligiblity-form-filds">
                        <div className="col-lg-8">
                          <div
                            className="range-slider-sec
                                                    calculator-sec">
                            <div className="range-list">
                              <h3>Hi {userName}, </h3>
                              <p>
                                please upload your document and sign your ISA
                              </p>

                              <div className="row upload_docs_wrappper">
                                <div className="col-lg-6 col-md-6 col-sm-9 upload_space">
                                  <div
                                    className={`upload-buttons ${
                                      fileSelected ? "selected" : ""
                                    } ${fileUploaded ? "after-upload" : ""}`}>
                                    <form>
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlFile1">
                                          {fileUploaded === true ? (
                                            <img
                                              src={UploadWhite}
                                              alt=""
                                              className="white-img"
                                            />
                                          ) : (
                                            <img
                                              src={Upload}
                                              alt=""
                                              className="green-img"
                                            />
                                          )}

                                          <div className="upload-msg">
                                            <p>Upload Aadhar </p>
                                            <p className="parag">
                                            <span>{selectedFileName1 &&  selectedFileName1}</span>
                                            </p>
                                            {!fileSelected && submitClicked && (
                                            <p
                                             style={{ color: "red" }}
                                             className="formErrors">
                                             Please select a file*
                                            </p>
                                            )}
                                          </div>
                                        </label>
                                        <input
                                          type="file"
                                          className="form-control-file"
                                          id="exampleFormControlFile1"
                                          onChange={handleFileSelect1}
                                        />
                                        {/* <p></p> */}
                                      </div>
                                    </form>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-9 upload_space">
                                  <div
                                    className={`upload-buttons ${
                                      fileSelectedPan ? "selected" : ""
                                    } ${
                                      fileUploadedPan ? "after-upload" : ""
                                    }`}>
                                    <form>
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlFile2">
                                          {fileUploadedPan === true ? (
                                            <img
                                              src={UploadWhite}
                                              alt=""
                                              className="white-img"
                                            />
                                          ) : (
                                            <img
                                              src={Upload}
                                              alt=""
                                              className="green-img"
                                            />
                                          )}
                                          <div className="upload-msg">
                                            <p>Upload PAN </p>
                                            <p className="parag">
                                              {" "}
                                              <span>{selectedFileName2 &&  selectedFileName2}</span>
                                            </p>
                                            {!fileSelectedPan && submitClicked && (
                                              <p
                                                style={{ color: "red" }}
                                                className="formErrors">
                                                Please select a file*
                                              </p>
                                            )}
                                          </div>
                                        </label>
                                        <input
                                          type="file"
                                          className="form-control-file"
                                          id="exampleFormControlFile2"
                                          onChange={handleFileSelect2}
                                        />
                                        {/* <p></p> */}
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                              <div className="range-container">
                                <div className="right-block fresher-test">
                                  <a
                                    onClick={(e) => {
                                      handleSubmit(e)
                                      
                                    }}
                                    className="theme_btn tertiary">
                                    <img
                                      src={d6Green}
                                      alt="arrow"
                                      className="img-1 sign_img"
                                    />
                                    <img
                                      src={SignWhite}
                                      className="partners-img img-2 sign_img"
                                      alt=""
                                    />
                                    Sign your ISA now{" "}
                                    <img
                                      src={RightGreen}
                                      alt="arrow"
                                      className="img-1"
                                    />
                                    <img
                                      src={SvgArrow}
                                      className="partners-img img-2"
                                      alt=""
                                    />
                                    <span></span>
                                  </a>
                                </div>
                              </div>

                              <div className="range-inner-wrapper">
                                <h4>12% ISA fee Calculator</h4>
                                <div className="form-row range-input-group">
                                  <label>Your CTC (LPA)</label>
                                  {values.map((value, index) => (
                                    <div
                                      className="input-group col-lg-3 col-md-4 col-sm-5 col-5"
                                      key={index}>
                                      <input
                                        className="form-control"
                                        type="number"
                                        value={value}
                                        onChange={(event) =>
                                          handleInputChange(event, index)
                                        }
                                        min={0}
                                        max={60}
                                        step="any"
                                        inputMode="decimal"
                                        pattern="[0-9]+([,.][0-9]+)?"
                                        lang="en-US"
                                      />
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          ₹
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                  <Box sx={{ width: 300 }}>
                                    <Slider1
                                      getAriaLabel={getAriaLabel}
                                      value={values}
                                      onChange={handleSliderChange}
                                      getAriaValueText={valuetext2}
                                      min={5}
                                      max={max}
                                      step={0.5}
                                      marks={[
                                        { value: max, label: `${max}LPA` },
                                      ]}
                                      valueLabelFormat={valuetext3}
                                      valueLabelDisplay="on"
                                      style={{ color: railColor }}
                                      sx={{
                                        "& .MuiSlider-rail": {
                                          background: (theme) =>
                                            `linear-gradient(to right, ${railColor(
                                              5
                                            )}, ${railColor(values)} ${
                                              ((values - 5) / (60 - 5)) * 100
                                            }%, ${theme.palette.grey[300]} ${
                                              ((values - 5) / (60 - 5)) * 100
                                            }%, ${
                                              theme.palette.grey[300]
                                            } 100%)`, // set the color of the rail track dynamically based on the value
                                        },
                                      }}
                                    />
                                  </Box>
                                </div>
                                <div className="form-row range-input-group">
                                  <label>Tenure</label>

                                  {values2.map((value, index) => (
                                    <div
                                      className="input-group col-lg-5  col-md-5 col-sm-6 col-5"
                                      key={index}>
                                      <input
                                        className="form-control"
                                        type="number"
                                        value={value}
                                        onChange={(event) =>
                                          handleInputChange2(event, index)
                                        }
                                        inputprops={{
                                          min: 0,
                                          max: 24,
                                          step: 1,
                                        }}
                                      />
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          Months
                                        </span>
                                      </div>
                                    </div>
                                  ))}

                                  <Box sx={{ width: 300 }}>
                                    <YellowSlider
                                      getAriaLabel={getAriaLabel}
                                      value={values2}
                                      onChange={handleSliderChange2}
                                      min={3}
                                      max={24}
                                      step={3}
                                      marks={marks}
                                      valueLabelDisplay="auto"
                                      style={{ width: 400, height: 40,color: railColor }}
                                      getAriaValueText={(value) => `${value}%`}
                                    />
                                  </Box>
                                </div>
                                <div className="all-range-inputs">
                                  <div className="form-row range-input-group">
                                    <label> ISA Fee</label>
                                    <div className="input-group col-lg-4 col-md-5 col-sm-4 col-5">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder={Total_payable_amount}
                                        aria-label="Amount (to the nearest dollar)"
                                      />
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          ₹
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-row range-input-group">
                                    <label>
                                      ISA Fee
                                      <br />
                                      with 18% GST
                                    </label>
                                    <div className="input-group  col-lg-4 col-md-5 col-sm-4 col-5">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder={Total_payable_amount_GST}
                                        aria-label="Amount  (to
                                          the
                                          nearest
                                          dollar)"
                                      />
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          ₹
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="form-row
                                                                    range-input-group">
                                    <label>Monthly ISA Fee</label>
                                    <div
                                      className="input-group
                                      col-lg-4 col-md-5 col-sm-4 col-5">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder={Monthly_payable_amount}
                                        aria-label="Amount
                                                                            (to
                                                                            the
                                                                            nearest
                                                                            dollar)"
                                      />
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          ₹
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-row range-input-group">
                                    <label>
                                      Monthly ISA Fee
                                      <br />
                                      with 18% GST
                                    </label>
                                    <div
                                      className="input-group
                                      col-lg-4 col-md-5 col-sm-4 col-5">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder={Monthly_payable_amount_GST}
                                        aria-label="Amount
                                                                            (to
                                                                            the
                                                                            nearest
                                                                            dollar)"
                                      />
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          ₹
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 basket-row range-basket-row">
                          <div className="summary-table mb-5">
                            <h2
                              className="text-center
                                                        mb-4">
                              Having doubts?
                            </h2>
                            <div
                              className="table-responsive-xl
                                                        special-inclusions-table">
                              <div className="having-doughts-sec">
                                <p className="text-center">
                                 Get in touch with our counselor
                                </p>
                                <div className="call-session">
                                  <p>Email us!</p>
                                  <p className="number-cell">
                                    <a href="#">contact@salaryfy.com</a>
                                  </p>
                                  <img src={Mail} alt="icon" className="icon" />
                                </div>
                                <p
                                  className="text-center
                                                                mt-3">
                                  or
                                </p>
                                <div className="call-session">
                                  <p>Let us call you!</p>
                                  <p className="number-cell">
                                    <a href="#">Book a slot now</a>
                                  </p>
                                  <img
                                    src={Calendar}
                                    alt="icon"
                                    className="icon"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================mobile-view========== */}

      <section className="eligiblity-form-sec student-dashboard select-plan range-slider-plan five_show">
        <a className="call-btn-2 expand-button call-btn">
          {" "}
          <img src={Call} alt="arrow" className="expand-img" />
          <img src={Expand} alt="" className="expand-img-2" />
          <div className="d-block">
            <p className="text">Need help?</p>
            <p>Chat or call with our counselor</p>
          </div>
        </a>
        <div className="">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-9 m-auto margin-auto-hide">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active range-slider-tab"
                  id="v-pills-messages-3"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-3-tab">
                  <section className="">
                    <div className="container">
                      <div className="timeline-pop">
                        <ol>
                          <li className="active">
                            <span className="active-border">1</span>
                            <p>Upload documents</p>
                          </li>
                          <li>
                            <span>2</span>
                            <p>Enter placement drive</p>
                          </li>
                          <li>
                            <span>3</span>
                            <p>Get job</p>
                          </li>
                        </ol>
                      </div>
                      <div className="row basket-banner  eligiblity-form-filds">
                        <div className="col-lg-8">
                          <div
                            className="range-slider-sec calculator-sec">
                                                   
                            <div className="range-list">
                              <h3>Hi {userName}, </h3>
                              <p>
                                please upload your document and sign your ISA
                              </p>

                              <div className="row upload_docs_wrappper">
                                <div className="col-lg-6 upload_space">
                                <div
                                    className={`upload-buttons ${
                                      fileSelected ? "selected" : ""
                                    } ${fileUploaded ? "after-upload" : ""}`}>
                                    <form>
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlFile1">
                                          {fileUploaded === true ? (
                                            <img
                                              src={UploadWhite}
                                              alt=""
                                              className="white-img"
                                            />
                                          ) : (
                                            <img
                                              src={Upload}
                                              alt=""
                                              className="green-img"
                                            />
                                          )}

                                          <div className="upload-msg">
                                            <p>Upload Aadhar </p>
                                            <p className="parag">
                                            <span>{selectedFileName1 &&  selectedFileName1}</span>
                                            </p>
                                            {!fileSelected && submitClicked && (
                                            <p
                                             style={{ color: "red" }}
                                             className="formErrors">
                                             Please select a file*
                                            </p>
                                            )}
                                          </div>
                                        </label>
                                        <input
                                          type="file"
                                          className="form-control-file"
                                          id="exampleFormControlFile1"
                                          onChange={handleFileSelect1}
                                        />
                                        {/* <p></p> */}
                                      </div>
                                    </form>
                                </div>
                                </div>
                                <div className="col-lg-6 upload_space">
                                <div
                                    className={`upload-buttons ${
                                      fileSelectedPan ? "selected" : ""
                                    } ${
                                      fileUploadedPan ? "after-upload" : ""
                                    }`}>
                                    <form>
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlFile2">
                                          {fileUploadedPan === true ? (
                                            <img
                                              src={UploadWhite}
                                              alt=""
                                              className="white-img"
                                            />
                                          ) : (
                                            <img
                                              src={Upload}
                                              alt=""
                                              className="green-img"
                                            />
                                          )}
                                          <div className="upload-msg">
                                            <p>Upload PAN </p>
                                            <p className="parag">
                                              {" "}
                                              <span>{selectedFileName2 &&  selectedFileName2}</span>
                                            </p>
                                            {!fileSelectedPan && submitClicked && (
                                              <p
                                                style={{ color: "red" }}
                                                className="formErrors">
                                                Please select a file*
                                              </p>
                                            )}
                                          </div>
                                        </label>
                                        <input
                                          type="file"
                                          className="form-control-file"
                                          id="exampleFormControlFile2"
                                          onChange={handleFileSelect2}
                                        />
                                        {/* <p></p> */}
                                      </div>
                                    </form>
                                </div>
                                </div>
                              </div>
                              <div className="range-container">
                                <div className="right-block fresher-test">
                                <a
                                    onClick={(e) => {
                                      handleSubmit(e)
                                    }}
                                    className="theme_btn tertiary">
                                    <img
                                      src={d6Green}
                                      alt="arrow"
                                      className="img-1 sign_img"
                                    />
                                    <img
                                      src={SignWhite}
                                      className="partners-img img-2 sign_img"
                                      alt=""
                                    />
                                    Sign your ISA now{" "}
                                    <img
                                      src={RightGreen}
                                      alt="arrow"
                                      className="img-1"
                                    />
                                    <img
                                      src={SvgArrow}
                                      className="partners-img img-2"
                                      alt=""
                                    />
                                    <span></span>
                                  </a>
                                </div>
                              </div>

                              <div className="range-inner-wrapper">
                                <h4>12% ISA fee Calculator</h4>
                                <div className="form-row range-input-group">
                                  <label>Your CTC (LPA)</label>
                                  {values.map((value, index) => (
                                    <div
                                      className="input-group col-lg-3 col-md-4 col-sm-5 col-5"
                                      key={index}>
                                      <input
                                        className="form-control"
                                        type="number"
                                        value={value}
                                        onChange={(event) =>
                                          handleInputChange(event, index)
                                        }
                                        inputprops={{
                                          min: 0,
                                          max: 60,
                                          step: 5,
                                        }}
                                      />
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          ₹
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                  <Box sx={{ width: 300 }}>
                                    <Slider1
                                      getAriaLabel={getAriaLabel}
                                      value={values}
                                      onChange={handleSliderChange}
                                      getAriaValueText={valuetext2}
                                      min={5}
                                      max={max}
                                      step={0.5}
                                      marks={[
                                        { value: max, label: `${max}LPA` },
                                      ]}
                                      valueLabelFormat={valuetext3}
                                      valueLabelDisplay="on"
                                      style={{ color: railColor1 }}
                                      sx={{
                                        "& .MuiSlider-rail": {
                                          background: (theme) =>
                                            `linear-gradient(to right, ${railColor1(
                                              5
                                            )}, ${railColor1(values)} ${
                                              ((values - 5) / (60 - 5)) * 100
                                            }%, ${theme.palette.grey[300]} ${
                                              ((values - 5) / (60 - 5)) * 100
                                            }%, ${
                                              theme.palette.grey[300]
                                            } 100%)`, // set the color of the rail track dynamically based on the value
                                        },
                                      }}
                                    />
                                  </Box>
                                </div>
                                <div className="form-row range-input-group">
                                  <label>Tenure</label>

                                  {values2.map((value, index) => (
                                    <div
                                      className="input-group col-lg-5  col-md-5 col-sm-6 col-5"
                                      key={index}>
                                      <input
                                        className="form-control"
                                        type="number"
                                        value={value}
                                        onChange={(event) =>
                                          handleInputChange2(event, index)
                                        }
                                        inputprops={{
                                          min: 0,
                                          max: 24,
                                          step: 1,
                                        }}
                                      />
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          Months
                                        </span>
                                      </div>
                                    </div>
                                  ))}

                                  <Box sx={{ width: 300 }}>
                                    <YellowSlider
                                     getAriaLabel={getAriaLabel}
                                      value={values2}
                                      onChange={handleSliderChange2}
                                      min={3}
                                      max={24}
                                      step={3}
                                      marks={marks}
                                      valueLabelDisplay="auto"
                                      style={{ width: 400, height: 40 }}
                                      getAriaValueText={(value) => `${value}%`}
                                    />
                                  </Box>
                                </div>
                                <div className="all-range-inputs">
                                  <div className="form-row range-input-group">
                                    <label>ISA Fee</label>
                                    <div className="input-group col-lg-4 col-md-5 col-sm-4 col-5">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder={Total_payable_amount}
                                        aria-label="Amount (to the nearest dollar)"
                                      />
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          ₹
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-row range-input-group">
                                    <label>
                                      ISA Fee
                                      <br />
                                      with 18% GST
                                    </label>
                                    <div className="input-group  col-lg-4 col-md-5 col-sm-4 col-5">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder={Total_payable_amount_GST}
                                        aria-label="Amount  (to
                                          the
                                          nearest
                                          dollar)"
                                      />
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          ₹
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="form-row
                                                                    range-input-group">
                                    <label>Monthly ISA Fee</label>
                                    <div
                                      className="input-group
                                      col-lg-4 col-md-5 col-sm-4 col-5">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder={Monthly_payable_amount}
                                        aria-label="Amount
                                                                            (to
                                                                            the
                                                                            nearest
                                                                            dollar)"
                                      />
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          ₹
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="form-row
                                                                    range-input-group">
                                    <label>
                                      Monthly ISA Fee
                                      <br />
                                      with 18% GST
                                    </label>
                                    <div
                                      className="input-group
                                      col-lg-4 col-md-5 col-sm-4 col-5">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder={Monthly_payable_amount_GST}
                                        aria-label="Amount
                                                                            (to
                                                                            the
                                                                            nearest
                                                                            dollar)"
                                      />
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          ₹
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 basket-row range-basket-row full_show">
                          <div className="summary-table mb-5">
                            <h2
                              className="text-center mb-4">
                              Having doubts?
                            </h2>
                            <div
                              className="table-responsive-xl
                                                        special-inclusions-table">
                              <div className="having-doughts-sec">
                                <p className="text-center">
                                 Get in touch with our counselor
                                </p>
                                <div className="call-session">
                                  <p>Email us!</p>
                                  <p className="number-cell">
                                    <a href="#">contact@salaryfy.com</a>
                                  </p>
                                  <img src={Mail} alt="icon" className="icon" />
                                </div>
                                <p
                                  className="text-center
                                                                mt-3">
                                  or
                                </p>
                                <div className="call-session">
                                  <p>Let us call you!</p>
                                  <p className="number-cell">
                                    <a href="#">Book a slot now</a>
                                  </p>
                                  <img
                                    src={Calendar}
                                    alt="icon"
                                    className="icon"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================mobile-view-end========== */}
    </React.Fragment>
  );
};

export default UploadDocs;
