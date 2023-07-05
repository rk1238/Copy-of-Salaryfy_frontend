import React from "react";
import { useNavigate } from "react-router-dom";

const ScholarTimer = ({ hoursMinSecs }) => {
  const navigate = useNavigate();
  const { hours = 0, minutes = 30, seconds = 0 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([
    hours,
    minutes,
    seconds,
  ]);

  const tick = () => {
    if (mins === 0 && secs === 0) {
      //   window.location.href = "https://www.datafolkz.co.in/";
      navigate('/SignupModalPage')
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const reset = () =>
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <React.Fragment>
      {`${mins
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}
    </React.Fragment>
  );
};

export default ScholarTimer;
