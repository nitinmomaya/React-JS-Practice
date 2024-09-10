import { useState, useRef } from "react";

const StopWatch = () => {
  const [time, setTime] = useState("00:00:00");
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const timeInterval = useRef<number>(); 

  const handleStart = () => {
    if (!isTimerStarted) {
      timeInterval.current = window.setInterval(() => {
        updateTimer();
      }, 1000);
      setIsTimerStarted(true);
    }
  };

  const stopTimer = () => {
    if (timeInterval.current) {
      clearInterval(timeInterval.current);
      
    }
    setIsTimerStarted(false);
  };

  const resetTimer = () => {
    setTime("00:00:00");
    if (timeInterval.current) {
      clearInterval(timeInterval.current);
    }
    setIsTimerStarted(false);
  };

  const updateTimer = () => {
    setTime((prevTime) => {
      
      const [hours, minutes, seconds] = prevTime.split(":").map(Number);
      const totalSeconds = hours * 3600 + minutes * 60 + seconds + 1;
      const hour = Math.floor(totalSeconds / 3600);
      const min = Math.floor((totalSeconds % 3600) / 60);
      const sec = Math.floor(totalSeconds % 60);

      return `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${
        sec < 10 ? `0${sec}` : sec
      }`;
    });
  };

  return (
    <>
      <div>{time}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
};

export default StopWatch;
