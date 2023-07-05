import styled from "styled-components";

export const StyledSpeedometerWeb = styled.div`
  width: 100%;
  max-width: 450px;
  margin-top: 3rem;
  .guage_body {
    width: 100%;
    height: 10px;
    padding-bottom: 50%;
    background: linear-gradient(#ea4335, #9747ff, #1877f2, #4daf4a);
    border-top-left-radius: 100% 200%;
    border-top-right-radius: 100% 200%;
    position: relative;
    overflow: hidden;
    .guage_body_fill {
      position: absolute;
      top: 100%;
      left: 0;
      width: inherit;
      height: 100%;
      background: linear-gradient(#ea4335, #9747ff, #1877f2, #4daf4a);
      transform-origin: center top;
      transform: rotate(0turn);
      transition: transform 0.2s ease-in-out;
    }
    .guage_indicator {
    position: absolute;
    width: 195px;
    height: 195px;
    top: 125%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    -webkit-transform-origin: center top;
    -ms-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: rotate(0.3turn);
    -ms-transform: rotate(0.3turn);
    transform: rotate(0.3turn);
    border-radius: 50%;
    background: #fff;
    z-index: 7;
    -webkit-transition: -webkit-transform 0.2s ease-in-out;
    -webkit-transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;
    box-shadow: 0px 0px 10px #9b9898;
      &::before {
      }
    }
    .guage_indicator_slider {
        width: 120px;
        height: 14rem;
        -webkit-clip-path: polygon(50% 0%,100% 50%,50% 100%,0% 50%);
        clip-path: polygon(149% 0%,100% 58%,50% 100%,0% 58%);
        background-color: #0E5F59;
        -webkit-transform-origin: center;
        -ms-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate(0.1turn);
        -ms-transform: rotate(0.1turn);
        transform: rotate(0.1turn);
        margin-bottom: 1rem;
        -webkit-transition: -webkit-transform 3s ease-in-out;
        -webkit-transition: transform 3s ease-in-out;
        transition: transform 3s ease-in-out;
        border-radius: 60px;
    }
    .guage_body_cover {
      width: 97%;
      height: 200%;
      border-radius: 50%;
      background: #eee;
      position: absolute;
      top: 4%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .text_content {
    position: absolute;
    top: 0;
    background-color: transparant;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 55;
    h4 {
        font-family: 'Arial';
        font-style: normal;
        font-weight: 700;
        font-size: 44.1002px;
        line-height: 97.5%;
        text-align: center;
        
        color: #0E5F59;
    }
    p {
    font-family: 'Arial';
    font-style: italic;
    font-weight: 700;
    font-size: 14.4px;
    line-height: 97.5%;
    text-align: center;
    color: #0E5F59;
    max-width: 100%;
        
    }
  }
 
`;
