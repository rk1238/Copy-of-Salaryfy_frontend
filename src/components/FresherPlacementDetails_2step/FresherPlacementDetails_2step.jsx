import React, { useState } from "react";
import roadMap from "../img/fresher-eligibility-images/road_map_3.png";
import lenskartCover from "../img/lenskart_cover.png";
import lenskartProfile from "../img/lenskart.png";
import getHired from "../img/hired.png";
import placementDetailsSecondStep from "../img/placement_details_step2.png";
import placementDetailsIcon from "../img/placement_details_first_icon.png";
import StarRatings from "react-star-ratings";
import recordVideo from "../img/record_video.png";
import uploadVideo from "../img/upload_video.png";
import recordAudio from "../img/record_audio.png";
import uploadAudio from "../img/upload_audio.png";
import videoRecordVideo from "../img/video_recordVideo.png";
import audioRecordVideo from '../img/audio_recordAudio.png'
import Modal from "react-bootstrap/Modal";
import closeIcon from "../img/close_icon.png";
import backButton from "../img/back_button.png";
import next from "../img/next.png";
import videoFirst from "../img/video_first.png";
import videoSecond from "../img/video_second.png";
import videoThird from "../img/video_third.png";
import videoFourth from "../img/video_fourth.png";

import audioFirst from "../img/audio_first.png";
import audioSecond from "../img/audio_second.png";
import audioThird from "../img/audio_third.png";
import audioFinal from "../img/audio_final.png";

import playIcon from "../img/play_icon.png";
import submitVideo from "../img/submit_video.png";
import tickSymbol from "../img/tick_symbol.png";
import okayButton from "../img/okay_button.png";
import recordingProgress from "../img/recording_progress.png";
import submitRecording from "../img/submit_recording.png";
import {Link} from 'react-router-dom'
import uploadImage from '../img/upload_photo.png'

const FresherPlacementDetailsFirstStep = () => {
  const changeRating = () => {};

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [isActiveTab, setIsActiveTab] = useState(1);

  const [recordModalState, setRecordModalState] = useState(null);
  const [uploadModalState, setUploadModalState] = useState(null);

  const [audioRecordModalState, setAudioRecordModalState] = useState(null);
  const [audioUploadModalState, setAudioUploadModalState] = useState(null);

  const [isVideoSubmitted, setIsVideoSubmitted] = useState(false);

  const [isAudioSubmitted, setIsAudioSubmitted] = useState(false);


  return (
    <div>
      <Modal
        size="xl"
        show={show}
        onHide={handleClose}
        className="fresher_placement_details_modal_container"
      >
        <Modal.Header
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <Modal.Title>Record an Introduction</Modal.Title>
          <img onClick={handleClose} src={closeIcon} alt="close" />
        </Modal.Header>
        <div>
          <img
            style={{ width: "20%", marginLeft: "30px", marginTop: "15px" }}
            src={videoRecordVideo}
            alt="video"
          />
        </div>

        <Modal.Body>
          {/* first modal for upload screen */}
          {recordModalState === 1 && (
            <div className="placement_details_modal_body_content">
              <p className="placement_details_tab_upload_red">
                Your device does not support actrive camera recording or does
                not have webcam device enabled.
              </p>
              <p className="placement_details_tab_upload_grey">
                Please
                <span
                  onClick={() => setRecordModalState(2)}
                  className="placement_details_tab_upload_green"
                >
                  &nbsp; upload a video &nbsp;
                </span>
                instead if problem persists.
              </p>
            </div>
          )}

          {/* this modal for upload video button */}
          {uploadModalState === 1 && (
            <div className="placement_details_second_modal_container">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setUploadModalState(2)}
                  src={uploadVideo}
                  alt="upload-video"
                />
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {recordModalState === 2 && (
            <div className="placement_details_second_modal_container">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setRecordModalState(3)}
                  src={videoFirst}
                  alt="upload-video"
                />
                <div></div>
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {uploadModalState === 2 && (
            <div className="placement_details_second_modal_container_bottom">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setRecordModalState(4)}
                  src={videoSecond}
                  alt="upload-video"
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "90%",
                    marginTop: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <img src={playIcon} alt="play" />
                    <p className="placement_details_camera_time">2:13 Mins</p>
                  </div>
                  <div
                    style={{
                      textDecoration: "underline",
                      color: "red",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </div>
                </div>

                <img
                  onClick={() => setUploadModalState(3)}
                  style={{ marginTop: "50px", cursor: "pointer" }}
                  src={submitVideo}
                  alt="submit"
                />
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {uploadModalState === 3 && (
            <div className="placement_details_second_modal_container_flex_column">
              <img src={tickSymbol} alt="tick" />
              <br />
              <h3 className="placement_details_instruction_video_success">
                Video submitted successfully
              </h3>
              <br />
              <img
                style={{ cursor: "pointer" }}
                onClick={()=>{
                  handleClose();
                  setIsVideoSubmitted(true)}}
                src={okayButton}
                alt="okay"
              />
            </div>
          )}

          {recordModalState === 3 && (
            <div className="placement_details_second_modal_container">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setRecordModalState(4)}
                  src={videoThird}
                  alt="upload-video"
                />
                <div>
                  <img
                    onClick={() => setRecordModalState(4)}
                    style={{ marginTop: "20px" }}
                    src={recordingProgress}
                    alt="record"
                  />
                </div>
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {recordModalState === 4 && (
            <div className="placement_details_second_modal_container_bottom">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setRecordModalState(4)}
                  src={videoSecond}
                  alt="upload-video"
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "90%",
                    marginTop: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <img src={playIcon} alt="play" />
                    <p className="placement_details_camera_time">2:13 Mins</p>
                  </div>
                  <div
                    style={{
                      textDecoration: "underline",
                      color: "red",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </div>
                </div>

                <img
                  onClick={() => setRecordModalState(5)}
                  style={{ marginTop: "50px", cursor: "pointer" }}
                  src={submitRecording}
                  alt="submit"
                />
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {recordModalState === 5 && (
            <div className="placement_details_second_modal_container_flex_column">
              <img src={tickSymbol} alt="tick" />
              <br />
              <h3 className="placement_details_instruction_video_success">
                Recording submitted successfully
              </h3>
              <br />
              <img
                style={{ cursor: "pointer" }}
                onClick={()=>{
                  handleClose();
                  setIsVideoSubmitted(true)}}
                src={okayButton}
                alt="okay"
              />
            </div>
          )}
        </Modal.Body>
      </Modal>


      <Modal
        size="xl"
        show={show1}
        onHide={handleClose1}
        className="fresher_placement_details_modal_container"
      >
        <Modal.Header
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <Modal.Title>Record an Introduction</Modal.Title>
          <img onClick={handleClose} src={closeIcon} alt="close" />
        </Modal.Header>
        <div>
          <img
            style={{ width: "20%", marginLeft: "30px", marginTop: "15px" }}
            src={audioRecordVideo}
            alt="video"
          />
        </div>

        <Modal.Body>
          {/* first modal for upload screen */}
          {audioRecordModalState === 1 && (
            <div className="placement_details_modal_body_content">
              <p className="placement_details_tab_upload_red">
                Your device does not support actrive camera recording or does
                not have webcam device enabled.
              </p>
              <p className="placement_details_tab_upload_grey">
                Please
                <span
                  onClick={() => setAudioRecordModalState(2)}
                  className="placement_details_tab_upload_green"
                >
                  &nbsp; upload a audio &nbsp;
                </span>
                instead if problem persists.
              </p>
            </div>
          )}

          {/* this modal for upload video button */}
          {audioUploadModalState === 1 && (
            <div className="placement_details_second_modal_container">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setAudioUploadModalState(2)}
                  src={uploadAudio}
                  alt="upload-video"
                />
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {audioRecordModalState === 2 && (
            <div className="placement_details_second_modal_container">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setAudioRecordModalState(3)}
                  src={audioFirst}
                  alt="upload-video"
                />
                <div></div>
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {audioUploadModalState === 2 && (
            <div className="placement_details_second_modal_container_bottom">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setAudioRecordModalState(4)}
                  src={audioSecond}
                  alt="upload-video"
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "90%",
                    marginTop: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <img src={playIcon} alt="play" />
                    <p className="placement_details_camera_time">2:13 Mins</p>
                  </div>
                  <div
                    style={{
                      textDecoration: "underline",
                      color: "red",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </div>
                </div>

                <img
                  onClick={() => setAudioUploadModalState(3)}
                  style={{ marginTop: "50px", cursor: "pointer" }}
                  src={submitVideo}
                  alt="submit"
                />
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {audioUploadModalState === 3 && (
            <div className="placement_details_second_modal_container_flex_column">
              <img src={tickSymbol} alt="tick" />
              <br />
              <h3 className="placement_details_instruction_video_success">
                Video submitted successfully
              </h3>
              <br />
              <img
                style={{ cursor: "pointer" }}
                onClick={()=>{
                  handleClose1();
                  setIsAudioSubmitted(true)}}
                src={okayButton}
                alt="okay"
              />
            </div>
          )}

          {audioRecordModalState === 3 && (
            <div className="placement_details_second_modal_container">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setAudioRecordModalState(4)}
                  src={audioThird}
                  alt="upload-video"
                />
                <div>
                  <img
                    onClick={() => setAudioRecordModalState(4)}
                    style={{ marginTop: "20px" }}
                    src={recordingProgress}
                    alt="record"
                  />
                </div>
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {audioRecordModalState === 4 && (
            <div className="placement_details_second_modal_container_bottom">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setAudioRecordModalState(4)}
                  src={audioSecond}
                  alt="upload-video"
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "90%",
                    marginTop: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <img src={playIcon} alt="play" />
                    <p className="placement_details_camera_time">2:13 Mins</p>
                  </div>
                  <div
                    style={{
                      textDecoration: "underline",
                      color: "red",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </div>
                </div>

                <img
                  onClick={() => setAudioRecordModalState(5)}
                  style={{ marginTop: "50px", cursor: "pointer" }}
                  src={submitRecording}
                  alt="submit"
                />
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {audioRecordModalState === 5 && (
            <div className="placement_details_second_modal_container_flex_column">
              <img src={tickSymbol} alt="tick" />
              <br />
              <h3 className="placement_details_instruction_video_success">
                Recording submitted successfully
              </h3>
              <br />
              <img
                style={{ cursor: "pointer" }}
                onClick={()=>{
                  handleClose1();
                  setIsAudioSubmitted(true)}}
                src={okayButton}
                alt="okay"
              />
            </div>
          )}
        </Modal.Body>
      </Modal>
      <div className="container" style={{ marginTop: "150px" }}>
        <section className="roadMap-section">
          <img
            style={{ margin: "5px auto", width: "100%" }}
            src={roadMap}
            alt="road-map"
          />
        </section>
        <section>
          <div className="fresher_placement_details_cover">
            <div
              style={{
                backgroundImage: `url(${lenskartCover})`,
                position: "relative",
                backgroundSize: "cover",
                width: "100%",
                height: "138px",
                backgroundColor: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.14) 21.88%, rgba(0, 0, 0, 0.41) 50%, rgba(0, 0, 0, 0.62) 69.27%, #000000 100%)`,
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "color",
              }}
              className="fresher_placement_details_cover_image"
            >
              <img
                className="fresher_placement_details_profile_icon"
                src={lenskartProfile}
                alt="lenskart"
              />
              <div className="fresher_placement_details_cover_container">
                <p className="fresher_placement_details_job_interview">
                  Interview on
                </p>
                <p className="fresher_placement_details_job_date">
                  04 May 2023
                </p>
                <Link to="/fresher-placement-details-first-step">
                <img src={getHired} alt="get-hired" />
                </Link>
                
              </div>
            </div>
          </div>
          <div className="fresher_placement_details_profile_bottom_container">
            <p className="fresher_placement_details__profile_title">Lenskart</p>
            <div>
              <h3 className="fresher_placement_details__profile_job_title">
                Sales Associates (Frontend Sales)
              </h3>
              <div className="fresher_placement_details_container_flex">
                <div className="fresher_placement_job_location_container">
                  <p className="fresher_placement_job_location">Location:</p>
                  <p className="fresher_placement_job_location_second">
                    &nbsp; Bangalore
                  </p>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div style={{ color: "rgba(14, 95, 89, 0.3)" }}>|</div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="fresher_placement_job_salary_container">
                  <p className="fresher_placement_job_salary">
                    Starting Salary:
                  </p>
                  <p className="fresher_placement_job_salary_second">
                    &nbsp; Upto 4LPA
                  </p>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div style={{ color: "rgba(14, 95, 89, 0.3)" }}>|</div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="fresher_placement_job_type_container">
                  <p className="fresher_placement_job_type">Job Type:</p>
                  <p className="fresher_placement_job_type_second">
                    {" "}
                    &nbsp;On-Site
                  </p>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div style={{ color: "rgba(14, 95, 89, 0.3)" }}>|</div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="fresher_placement_job_posts_container">
                  <p className="fresher_placement_job_posts">No. of Posts:</p>
                  <p className="fresher_placement_job_posts_second">
                    {" "}
                    &nbsp;38
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="placement_details_instruction_first_step_container">
            <p className="placement_details_instruction">
              Please follow the below steps to Submit your Application{" "}
            </p>
            <img src={placementDetailsSecondStep} alt="placement-details" />

            <div style={{ marginLeft: "20px" }}>
              <h3 className="placement_details_instruction_company_screening_question">
                Record an Introduction
              </h3>

              <div className="placement_details_instruction_tab_container">
                <h3
                  onClick={() => setIsActiveTab(1)}
                  className={`placement_details_instruction_tab_content ${
                    isActiveTab === 1 && "activeTab"
                  } `}
                >
                  Video
                </h3>
                <h3
                  onClick={() => setIsActiveTab(2)}
                  className={`placement_details_instruction_tab_content ${
                    isActiveTab === 2 && "activeTab"
                  } `}
                >
                  Audio
                </h3>
                <h3
                  onClick={() => setIsActiveTab(3)}
                  className={`placement_details_instruction_tab_content ${
                    isActiveTab === 3 && "activeTab"
                  } `}
                >
                  Upload Photo
                </h3>
              </div>
              <hr />


              {
                isActiveTab===1&&
                !isVideoSubmitted ? (
                <div>
                  <img
                    style={{ cursor: "pointer" }}
                    src={recordVideo}
                    alt="record-video"
                    onClick={() => {
                      handleShow();
                      setRecordModalState(1);
                      setUploadModalState(null);
                    }}
                  />
                  <img
                    style={{ cursor: "pointer" }}
                    src={uploadVideo}
                    alt="upload-video"
                    onClick={() => {
                      handleShow();
                      setUploadModalState(1);
                      setRecordModalState(null);
                    }}
                  />
                </div>
              ) : (
                <div className="placement_details_flex_video_container">
                  {/* <img src={videoThird} alt="video" />
                  <div
                    style={{
                      textDecoration: "underline",
                      color: "red",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </div> */}
                </div>
              )}


              {
                isActiveTab===2?
                !isAudioSubmitted ? (
                <div>
                  <img
                    style={{ cursor: "pointer" }}
                    src={recordAudio}
                    alt="record-video"
                    onClick={() => {
                      handleShow1();
                      setAudioRecordModalState(1);
                      setAudioUploadModalState(null);
                    }}
                  />
                  <img
                    style={{ cursor: "pointer" }}
                    src={uploadAudio}
                    alt="upload-video"
                    onClick={() => {
                      handleShow1();
                      setAudioUploadModalState(1);
                      setAudioRecordModalState(null);
                    }}
                  />
                </div>
              ) : (
                <div className="placement_details_flex_video_container">
                  <img src={audioFinal} alt="video" />
                  <div
                    style={{
                      textDecoration: "underline",
                      color: "red",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </div>
                </div>
              )
              :null}


{
  isActiveTab===3?

  <div>
  <div>
                  <img
                    style={{ cursor: "pointer" }}
                    src={uploadImage}
                    alt="record-video"
                    onClick={() => {
                      handleShow1();
                      setAudioRecordModalState(1);
                      setAudioUploadModalState(null);
                    }}
                  />
               
                </div>
  </div>
  :null
}





            </div>
          </div>
          <div className="placement_details_first_button_container">
          <Link to="/fresher-placement-details-first">
          <img style={{ cursor: "pointer" }} src={backButton} alt="back" />
          </Link>
            
            <Link to="/fresher-placement-details-third-step">
            <img style={{ cursor: "pointer" }} src={next} alt="next" />
            </Link>
            
          </div>
          <br />
          <br />
        </section>
      </div>
    </div>
  );
};

export default FresherPlacementDetailsFirstStep;
