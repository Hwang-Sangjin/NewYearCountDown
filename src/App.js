import './App.css';
import { useState, useEffect } from "react";

function App() {  
  var currentTime = new Date();

  var newYear = currentTime.getUTCFullYear()+1;
  var newYearDate = new Date(newYear, 0,1)

  var currentTimeSec = parseInt(currentTime.getTime()/1000);
  var newYearTimeSec = parseInt(newYearDate.getTime()/1000);


  const [totalCnt,setCnt] = useState(newYearTimeSec - currentTimeSec)

  const[days,setDays] = useState(Math.floor(totalCnt/(60*60*24)))
  const[hours,setHours] = useState(Math.floor((totalCnt % (60 * 60 * 24)) / (60 * 60)))
  const[minutes,setMins] = useState(Math.floor((totalCnt % (60 * 60 )) / (60)))
  const[seconds,setSecs] = useState(Math.floor((totalCnt % (60 ))))
  

  function DayCal(totalCnt){
    setDays(Math.floor(totalCnt/(60*60*24)))
    //console.log(days)
  }
  function HourCal(totalCnt){
    setHours(Math.floor((totalCnt % (60 * 60 * 24)) / (60 * 60)))
    //console.log(hours)
  }

  function MinCal(totalCnt){
    setMins(Math.floor((totalCnt % (60 * 60 )) / (60)))
    //console.log(minutes)
  }
  function SecCal(totalCnt){
    setSecs(Math.floor((totalCnt % (60 ))))
    //console.log(minutes)
  }

  function CountDown(){
    currentTime = new Date();
    currentTimeSec = parseInt(currentTime.getTime()/1000)
    setCnt(newYearTimeSec - currentTimeSec)
  }

  setInterval(CountDown,1000)

  return (
    <div className="App">
      <div className="clock-container">
        <div className="clock-col">
          <p className="clock-day clock-timer">{days}
          </p>
          <p className="clock-label">
            Day
          </p>
        </div>
        <div className="clock-col">{hours}
          <p className="clock-hours clock-timer">
          </p>
          <p className="clock-label">
            Hours
          </p>
        </div>
        <div className="clock-col">
          <p className="clock-minutes clock-timer">{minutes}
          </p>
          <p className="clock-label">
            Minutes
          </p>
        </div>
        <div className="clock-col">
          <p className="clock-seconds clock-timer">{seconds}
          </p>
          <p className="clock-label">
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
