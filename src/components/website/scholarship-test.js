import React, { useEffect, useState } from "react";
import Logo from "../img/footer-logo.png";
import CompanyLogo from "../img/conpany-logo.png";

import { useNavigate } from "react-router-dom";
import { ApiBaseUrl } from "../BaseUrl/baseUrl";


const ScholarshipTest = () => {
  const [testQuestions, setTestQuestions] = useState([]);
  const [item, setItem] = useState(testQuestions[0]);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const course_id = JSON.parse(window.localStorage.getItem("course_id"));
  
  const Token = JSON.parse(window.localStorage.getItem("token"));

  let navigate = useNavigate();
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const [errorMessage, setErrorMessage] = useState();
  const [timerFinished, setTimerFinished] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(15);
  const [showModal, setShowModal] = useState(false);
  
  const [isPortrait, setIsPortrait] = useState(
    window.matchMedia("(orientation: portrait)").matches
  );
  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: portrait)");
    const handleOrientationChange = (e) =>
      setIsPortrait(e.matches);
    mediaQuery.addListener(handleOrientationChange);
    return () => mediaQuery.removeListener(handleOrientationChange);
  }, []);

  const shouldPreventScreenshot = isPortrait && window.innerWidth < 768;

  useEffect(() => {
    handleFullScreenClick()
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  function handleFullScreenChange() {
    if (!document.fullscreenElement) {
      alert("Error: Screen has been removed!");
    }
  }

  useEffect(() => {
    // Get questions through Api
    console.log("course_id0000api", ApiBaseUrl);
    let Api = ApiBaseUrl + "scholarship-test-questions/" + course_id;
    const fetchQuestionsApiData = async (url) => {
      try {
        const res = await fetch(url, {
          headers: {
            "x-access-token": Token,
          },
        });
        const data = await res.json();
        console.log("data here", data.questions);
        setTestQuestions(data.questions);

        //    isLoading=false;
      } catch (error) {}
    };
    fetchQuestionsApiData(Api);
  }, []);

  const columnsPerRow = 5;
  const rows = [];

  for (let i = 0; i < Math.ceil(testQuestions.length / columnsPerRow); i++) {
    const columns = [];
    for (let j = 0; j < columnsPerRow; j++) {
      const index = i * columnsPerRow + j;
      if (index >= testQuestions.length) {
        break;
      }
      columns.push(
        <a
          className={`nav-link ${
            selectedQuestionIndex === index ? "active-tab" : ""
          } ${
            selectedAnswers[testQuestions[index].id]
              ? "answer-selected"
              : "not-selected"
          }`}
          id={`tab-${index}`}
          data-toggle="pill"
          href={`#pane-${index}`}
          role="tab"
          aria-controls={`pane-${index}`}
          aria-selected={index === selectedQuestionIndex}
          key={index}
          onClick={() => setSelectedQuestionIndex(index)}>
          {index + 1}
          {selectedAnswers[testQuestions[index].id].answerLetter &&
            selectedAnswers[testQuestions[index].id].answerLetter}
        </a>
      );
    }
    rows.push(
      <div className="nav nav-pills" key={i}>
        {columns}
      </div>
    );
  }

  // responsive question numbers
  const columnsPerRow1 = 1;
  const rows1 = [];

  for (let i = 0; i < Math.ceil(testQuestions.length / columnsPerRow1); i++) {
    const columns = [];
    for (let j = 0; j < columnsPerRow1; j++) {
      const index = i * columnsPerRow1 + j;
      if (index >= testQuestions.length) {
        break;
      }
      columns.push(
        <a
          className={`nav-link ${
            selectedQuestionIndex === index ? "active-tab" : ""
          } ${
            selectedAnswers[testQuestions[index].id]
              ? "answer-selected"
              : "not-selected"
          }
          `}
          id={`tab-${index}`}
          data-toggle="pill"
          href={`#pane-${index}`}
          role="tab"
          aria-controls={`pane-${index}`}
          aria-selected={index === selectedQuestionIndex}
          key={index}
          onClick={() => setSelectedQuestionIndex(index)}
          // style={{ color: selectedAnswers[testQuestions[index].id] ? 'blue' : 'inherit' }}
        >
          {index + 1}
          {selectedAnswers[testQuestions[index].id]?.answerLetter &&
            selectedAnswers[testQuestions[index].id].answerLetter}
        </a>
      );
    }
    rows1.push(
      <div
        className="nav nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
        key={i}>
        {columns}
      </div>
    );
  }
  useEffect(() => {
    setItem(testQuestions[0]);
  }, [testQuestions]);

  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    setSelectedAnswerId(parseInt(value));
    const questionId = testQuestions[selectedQuestionIndex].id;
    const answerIndex = testQuestions[selectedQuestionIndex].answers.findIndex(
      (answer) => answer.id === parseInt(value)
    );
    const answerLetter = (() => {
      switch (answerIndex) {
        case 0:
          return "A";
        case 1:
          return "B";
        case 2:
          return "C";
        case 3:
          return "D";
        default:
          return "";
      }
    })();
    console.log("hhoo", questionId, value);
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: {
        question_id: questionId,
        answer_id: value,
        answerLetter: answerLetter,
      },
    });
  };
  const submitTest = () => {
    // convert selectedAnswers object to an array of {questionId, answerId} objects
    // const answersArray = Object.values(selectedAnswers);
    const answersArray = Object.values(selectedAnswers).map((answer) => {
      return {
        question_id: answer.question_id,
        answer_id: answer.answer_id,
      };
    });

    if (!timerFinished && answersArray.length < 30) {
      setErrorMessage("Please attempt more questions");
    }
    // send a POST request to the API with the answers data in the body
    else {
      fetch(ApiBaseUrl + "scholarship-test-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": Token,
        },
        body: JSON.stringify({ answers: answersArray, course_id: course_id }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Response from API:", data);
         
          
          window.localStorage.setItem('total_percentage', JSON.stringify(data.total_percentage))
          window.localStorage.setItem('security_fee', JSON.stringify(data.security_fee))
          window.localStorage.setItem('transaction', JSON.stringify(data.transaction))
          window.localStorage.setItem('total_attempts', JSON.stringify(data.total_attempts))
          window.localStorage.setItem('course_id', JSON.stringify(data.course_id))

          // handle API response as needed
        })
        .catch((error) => {
          console.error("Error submitting test:", error);
          // handle error as needed
        });
      navigate("/AfterScholarshipTestDashboard");
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }
  };

  const handleNextQuestion = () => {
    if (selectedQuestionIndex < testQuestions.length - 1) {
      setSelectedQuestionIndex(selectedQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (selectedQuestionIndex > 0) {
      setSelectedQuestionIndex(selectedQuestionIndex - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
          setTimerFinished(true);
          submitTest();
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, minutes, submitTest, navigate]);

  // security for test prevent copy-paste right-Click and any key enter msg modal open==================

  function handleFullScreenClick() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }

    // Add event listeners for fullscreenchange and fullscreenerror events
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    document.addEventListener("MSFullscreenChange", handleFullScreenChange);
    document.addEventListener("fullscreenerror", handleFullScreenError);
    document.addEventListener("webkitfullscreenerror", handleFullScreenError);
    document.addEventListener("mozfullscreenerror", handleFullScreenError);
    document.addEventListener("MSFullscreenError", handleFullScreenError);

    // Add event listeners for keydown and contextmenu events
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("contextmenu", handleContextMenu);
  }

  function handleContextMenu(event) {
    // Prevent context menu from appearing
    event.preventDefault();
  }

  function handleFullScreenChange() {
    if (
      !document.fullscreenElement &&
      !document.webkitFullscreenElement &&
      !document.mozFullScreenElement &&
      !document.msFullscreenElement
    ) {
      // Fullscreen mode has been exited, remove event listeners for fullscreenchange and fullscreenerror events
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullScreenChange
      );
      document.removeEventListener("fullscreenerror", handleFullScreenError);
      document.removeEventListener(
        "webkitfullscreenerror",
        handleFullScreenError
      );
      document.removeEventListener("mozfullscreenerror", handleFullScreenError);
      document.removeEventListener("MSFullscreenError", handleFullScreenError);

      // Remove event listeners for keydown and contextmenu events
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", handleContextMenu);

      // Show modal
      handleFullScreenError();
    }
  }

  function handleKeyDown(event) {
    // Check if full-screen mode is active, and prevent default behavior of all keys if it is
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    ) {
      event.preventDefault();
    }
    // this will check if during fullscreen anyone click on key it will show modal msg
    if (document.fullscreenElement && event.key !== "Escape") {
      // Call handleFullScreenError to display modal
      handleFullScreenError();
    }
  }
  function handleContextMenu(event) {
    // Prevent context menu from appearing
    event.preventDefault();
  }

  function handleFullScreenChange() {
    if (
      !document.fullscreenElement &&
      !document.webkitFullscreenElement &&
      !document.mozFullScreenElement &&
      !document.msFullscreenElement
    ) {
      // Fullscreen mode has been exited, remove event listeners for fullscreenchange and fullscreenerror events
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullScreenChange
      );
      document.removeEventListener("fullscreenerror", handleFullScreenError);
      document.removeEventListener(
        "webkitfullscreenerror",
        handleFullScreenError
      );
      document.removeEventListener("mozfullscreenerror", handleFullScreenError);
      document.removeEventListener("MSFullscreenError", handleFullScreenError);

      // Remove event listeners for keydown and contextmenu events
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", handleContextMenu);

      // Show modal
      handleFullScreenError();
    }
  }

  function handleFullScreenError() {
    // An error has occurred while entering fullscreen mode, show modal
    console.log("modal has been changed");
    setShowModal(true);
  }

  function handleButton1Click() {
    // Handle button 1 click
    // setShowModal(false);
    navigate("/DisclaimerPage");
    console.log("Button 1 clicked");
  }

  function handleButton2Click() {
    // Handle button 2 click
    handleFullScreenClick();
    setShowModal(false);
    console.log("Button 2 clicked");
  }
  //end the security
  return (
    <div className={shouldPreventScreenshot ? "prevent-screenshot" : ""}>
      <section className="eligiblity-option-header scholarship-header scholarship_test_header">
        <div className="container custom-container ">
          <p className="right-para">
            <img src={Logo} />
          </p>
          <div className="scholarship-table  scholarship-test-table col-lg-6">
            <p className="left-para">Merit criteria</p>

            <div className="table-responsive-xl special-inclusions-table">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Above 75%</td>
                    <td>50% to 75%</td>
                    <td>Below 50%</td>
                  </tr>
                  <tr>
                    <td>₹ 0</td>
                    <td> ₹ 5,000</td>
                    <td> ₹ 10,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="right-para">
            <span id="time_countdown-6">
              {minutes.toString().padStart(2, "0")}:
              {seconds.toString().padStart(2, "0")}{" "}
            </span>
            min remaining
          </p>
        </div>
      </section>

      <section className="eligiblity-option-body">
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6 order-lg-1 order-md-2 order-sm-2 order-2">
              <div className="number-list" id="status_review_section_show">
                <p>Review your answers</p>

                <div className="pills-tab-border">{rows}</div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-md-1 order-sm-1 order-1">
              <div className="question-block">
                <div className="tab-content" id="v-pills-tabContent">
                  {testQuestions.map((question, index) => (
                    <div
                      className={`tab-pane fade ${
                        index === selectedQuestionIndex ? "show active" : ""
                      }`}
                      id={`pane-${index}`}
                      role="tabpanel"
                      aria-labelledby={`tab-${index}`}
                      key={index}>
                      <p className="question">
                        <span className="question-number">
                          Q.{index + 1} &nbsp;
                        </span>
                        <span>{question.question}</span>
                      </p>
                      <form>
                        {question.answers.map((answer, answerIndex) => (
                          <div
                            className="custom-control custom-radio"
                            key={answerIndex}>
                            <input
                              type="radio"
                              id={`customRadio${answer.id}`}
                              name={`answer-${question.id}`}
                              className="custom-control-input"
                              value={answer.id}
                              defaultChecked={selectedAnswerId === answer.id}
                              onChange={handleAnswerChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor={`customRadio${answer.id}`}>
                              {answer.answer}
                            </label>
                          </div>
                        ))}
                      </form>

                      <div className="submit full_show">
                        <button
                          type="button"
                          id="id1"
                          className={`theme_btn previous ${
                            index === 0 || index === 29 ? "d-none" : ""
                          }`}
                          onClick={handlePreviousQuestion}>
                          Prev
                        </button>
                        <button
                          type="button"
                          id="id1"
                          className={`theme_btn next ${
                            index === 0 || index === 29 ? "d-none" : ""
                          }`}
                          onClick={handleNextQuestion}>
                          Next
                        </button>
                        {index === 29 && (
                          <>
                            <div
                              className="error-message text-center text-danger m-0"
                              style={{ fontSize: "14px", fontWeight: "500" }}>
                              {errorMessage}
                            </div>
                            <button
                              type="button"
                              id="id1"
                              className="theme_btn submit-btn"
                              onClick={submitTest}>
                              Submit
                              <span></span>
                            </button>
                          </>
                        )}

                        {index === 0 && (
                          <button
                            type="button"
                            id="id1"
                            className="theme_btn submit-btn"
                            onClick={handleNextQuestion}>
                            Next
                            <span></span>
                          </button>
                        )}
                      </div>
                      {/* responsive mobile view question numbers */}
                      <div className="submit five_show">
                        <button
                          type="button"
                          id="id1"
                          className={`theme_btn previous ${
                            index === 0 || index === 29 ? "d-none" : ""
                          }`}
                          onClick={handlePreviousQuestion}>
                          Prev
                        </button>
                        <button
                          type="button"
                          id="id1"
                          className={`theme_btn next ${
                            index === 0 || index === 29 ? "d-none" : ""
                          }`}
                          onClick={handleNextQuestion}>
                          Next
                        </button>
                        {index === 29 && (
                          <>
                            <span
                              className="error-message text-center text-danger m-0"
                              style={{ fontSize: "14px", fontWeight: "500" }}>
                              {errorMessage}
                            </span>
                            <button
                              type="button"
                              id="id1"
                              className="theme_btn submit-btn"
                              onClick={submitTest}>
                              Submit
                              <span></span>
                            </button>
                          </>
                        )}
                        {index === 0 && (
                          <button
                            type="button"
                            id="id1"
                            className="theme_btn submit-btn"
                            onClick={handleNextQuestion}>
                            Next
                            <span></span>
                          </button>
                        )}
                      </div>
                      <div
                        className="number-list "
                        id="status_review_section_hide">
                        
                        <p>To review your answers, scroll left or right</p>
                        <div className="pills-tab-border">{rows1}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="scholership_client_logo">
           <img src={CompanyLogo} alt=""/>
          </div>
        </div>
      </section>
      {showModal && (
        <div className="modal_center_dilog">
          <div id="modal-1" className="modal-new-fullscreen">
            <div className="modal-content">
              <p>
                Click ‘Continue’ to enter fullscreen mode and begin the
                scholarship test.
              </p>
              <p>Click ‘Exit’ to end the test.</p>
              <div className="buttons_modal">
                <button
                  onClick={handleButton1Click}
                  className=" theme_btn exit">
                  Exit
                </button>
                <button
                  onClick={handleButton2Click}
                  className="theme_btn continue">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScholarshipTest;
