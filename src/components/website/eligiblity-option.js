import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SubmitGif from "../img/application-submitted.gif";
// import Footer from "../common/footer";
import { PublicUrl } from "../PublicUrl/publicurl";
import { ApiBaseUrl } from "../BaseUrl/baseUrl";
import FooterLogo from "../img/footer-logo.png";

import "./js/security";
const EligibilityOption = () => {
  const questionBucket = PublicUrl + "question/";
  const answerBucket = PublicUrl + "answer/";

  const [testQuestions, setTestQuestions] = useState([]);
  const [item, setItem] = useState(testQuestions[0]);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [centeredQuestionIndex, setCenteredQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [AllTestFormValue, setAllTestFormValue] = useState([]);

  let navigate = useNavigate();
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);

  const [timerFinished, setTimerFinished] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const [showModal, setShowModal] = useState(false);

  const [nextButtonClicked, setNextButtonClicked] = useState(false);
  const activeTabRef = useRef(null);

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
    let Api = ApiBaseUrl + "test-questions";
    const fetchQuestionsApiData = async (url) => {
      try {
        const res = await fetch(Api);
        const data = await res.json();
        console.log(data.questions);
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
          } ${selectedAnswers[testQuestions[index].id] ? "answer-selected" : ""}
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
    rows.push(
      <div className="nav nav-pills" key={i}>
        {columns}
      </div>
    );
  }

  // mobile-view question numbers
  const columnsPerRow1 = 1;
  const rows1 = [];

  for (let i = 0; i < Math.ceil(testQuestions.length / columnsPerRow1); i++) {
    const columns = [];
    for (let j = 0; j < columnsPerRow1; j++) {
      const index = i * columnsPerRow1 + j;
      if (index >= testQuestions.length) {
        break;
      }
      rows1.push(
        <a
          className={`nav-link mobile-view ${
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
          onClick={() => {
            setSelectedQuestionIndex(index);
            setCenteredQuestionIndex(index);
          }}
          ref={selectedQuestionIndex === index ? activeTabRef : null}
        
          // style={{ color: selectedAnswers[testQuestions[index].id] ? 'blue' : 'inherit' }}
        >
          {index + 1}
          {selectedAnswers[testQuestions[index].id]?.answerLetter &&
            selectedAnswers[testQuestions[index].id].answerLetter}
        </a>
      );
    }
    // rows1.push(
    //   // <div
    //   //   className="nav nav-pills"
    //   //   id="v-pills-tab"
    //   //   role="tablist"
    //   //   aria-orientation="vertical"
    //   //   key={i}
    //   // >
    //     {columns}
    //   // </div>
    // );
  }

  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [selectedQuestionIndex]);

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
    const answersArray = Object.values(selectedAnswers).map((answer) => {
      return {
        question_id: answer.question_id,
        answer_id: answer.answer_id,
      };
    });
    console.log("answerarray", answersArray.length);
    if (!timerFinished && answersArray.length < 20) {
      setErrorMessage("Please attempt more questions");
    } else {
      console.log("see", selectedAnswers);
      console.log("selectedans", answersArray.length);
      const newFormValue = {
        answers: answersArray,
      };
      setAllTestFormValue([...AllTestFormValue, newFormValue]);

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
        navigate("/SignupModalPage");
        if (document.fullscreenElement) {
          document.exitFullscreen();
        }
      }, 2000);
    }
  };

  useEffect(() => {
    console.log("value of answer in parent component", AllTestFormValue);
    localStorage.setItem("AllTestFormValue", JSON.stringify(AllTestFormValue));
  }, [AllTestFormValue]);

  const handleNextQuestion = () => {
    if (selectedQuestionIndex < testQuestions.length - 1) {
      setSelectedQuestionIndex(selectedQuestionIndex + 1);
      setNextButtonClicked(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (selectedQuestionIndex > 0) {
      setSelectedQuestionIndex(selectedQuestionIndex - 1);
    }
  };

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(5);

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
    navigate("/ReadyTestModel");
    console.log("Button 1 clicked");
  }

  function handleButton2Click() {
    // Handle button 2 click
    handleFullScreenClick();
    setShowModal(false);
    console.log("Button 2 clicked");
  }
  return (
    <div>
      {/* <button onClick={handleFullScreenClick}>Go Full Screen</button> */}

      <section className="eligiblity-option-header">
        <div className="full_show">
          <div className="container custom-container ">
            {/* <p className="left-para">Average pass percentage: 45%</p> */}
            <img src={FooterLogo} alt="" className="w-70 logo" />
            <p className="right-para"> Eligiblity Test</p>
            <p className="right-para">
              {minutes.toString().padStart(2, "0")}:
              {seconds.toString().padStart(2, "0")} min remaining
            </p>
          </div>
        </div>
        <div className="five_show">
          <div className="container custom-container ">
            {/* <p className="left-para">Average pass percentage: 45%</p> */}
            <img src={FooterLogo} alt="" className="eligiblity_logo_mobile" />
            <div>
              <p className="right-para"> Eligiblity Test</p>
              <p className="right-para">
                {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")} min remaining
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="eligiblity-option-body eligiblity-test-body">
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6 order-lg-1 order-md-2 order-sm-2 order-2">
              <div className="number-list full_show" id="">
                <p>Click to review your answers</p>
                <div className="pills-tab-border">{rows}</div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-md-1 order-sm-1 order-1">
              <div className="question-block">
                <div className="tab-content" id="v-pills-tabContent">
                  {testQuestions.map((question, index) => (
                    <div
                      onCopy={(event) => {
                        event.preventDefault();
                      }}
                      className={`tab-pane fade ${
                        index === selectedQuestionIndex ? "show active" : ""
                      }`}
                      id={`pane-${index}`}
                      role="tabpanel"
                      aria-labelledby={`tab-${index}`}
                      key={index}>
                      <p className="question">
                        <span className="question-number">
                          {" "}
                          Q.{index + 1} &nbsp;
                        </span>
                        <span>
                          {question.is_media === null ? (
                            question.question
                          ) : (
                            <>
                              {question.question}

                              <img
                                src={questionBucket + question.media_path}
                                alt="media_path"
                              />
                            </>
                          )}
                        </span>
                      </p>

                      <form
                        className={`${
                          question.answers[1].is_media === !null
                            ? "options-grid"
                            : ""
                        }`}>
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
                              {answer.is_media === null ? (
                                answer.answer
                              ) : answer.is_media === !null ? (
                                <>
                                  {answer.answer}
                                  <img
                                    src={answerBucket + answer.media_path}
                                    alt="media_path"
                                  />
                                </>
                              ) : (
                                answer.answer
                              )}
                            </label>
                          </div>
                        ))}
                      </form>
                      <div className="submit full_show">
                        <button
                          type="button"
                          id="id1"
                          className={`theme_btn previous ${
                            index === 0 || index === 19 ? "d-none" : ""
                          }`}
                          onClick={handlePreviousQuestion}>
                          Prev
                        </button>
                        <button
                          type="button"
                          id="id1"
                          className={`theme_btn next ${
                            index === 0 || index === 19 ? "d-none" : ""
                          }`}
                          onClick={handleNextQuestion}>
                          Next
                        </button>
                        {index === 19 && (
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
                      {/* responsive mobile view question numbers ==================================================================================*/}
                      <div className="submit five_show">
                        <button
                          type="button"
                          id="id1"
                          className={`theme_btn previous ${
                            index === 0 || index === 19 ? "d-none" : ""
                          }`}
                          onClick={handlePreviousQuestion}>
                          Prev
                        </button>
                        <button
                          type="button"
                          id="id1"
                          className={`theme_btn next ${
                            index === 0 || index === 19 ? "d-none" : ""
                          }`}
                          onClick={handleNextQuestion}>
                          Next
                        </button>
                        {index === 19 && (
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
                      <div className="number-list five_show" id="">
                        <p>To review your answers, scroll left or right</p>
                        <div
                          className="pills-tab-border"
                          id="mobile-view-container">
                          <div
                            className="nav nav-pills"
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical">
                            {rows1}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade sign-in-modal test-submit-modal"
          id="submitTestModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body ready-list gif_test_img">
                <img src={SubmitGif} alt="" />
                <p className="message ">
                  Your eligibility test has been successfully submitted.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="modal_center_dilog">
            <div id="modal-1" className="modal-new-fullscreen">
              <div className="modal-content">
                <p>
                  Click ‘Continue’ to enter fullscreen mode and begin the
                  eligibility test.
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
      </section>
    </div>
  );
};

export default EligibilityOption;
