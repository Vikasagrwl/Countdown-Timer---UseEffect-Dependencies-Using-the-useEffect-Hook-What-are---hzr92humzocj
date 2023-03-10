import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const[timer, setTimer] = useState('0');
  const interval = setInterval(() => {
    setTimer(timer-1);
  }, 1000);

  if(timer<1){
    clearInterval(interval);
  }

  const handleKeyDown = (e)=>{
    setTimer(e.target.value)
  }

  useEffect(()=>{
    return ()=>clearInterval(interval);
  },[timer])

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={handleKeyDown} /> sec.
        </h1>
      </div>
      <div id="current-time">{!isNaN(timer)? parseInt(timer).toFixed(): '0'}</div>
    </div>
  )
}


export default App;
