import './App.css';
import { useState, useEffect } from "react";

function App() {
  var currentTime = new Date();

  var newYear = currentTime.getUTCFullYear()+1;
  var newYearDate = new Date(newYear, 0,1)

  var currentTimeSec = parseInt(currentTime.getTime()/1000);
  var newYearTimeSec = parseInt(newYearDate.getTime()/1000);


  const [cnt,setCnt] = useState(newYearTimeSec - currentTimeSec)

  function CountDown(){
    currentTime = new Date();
    currentTimeSec = parseInt(currentTime.getTime()/1000)
    setCnt(newYearTimeSec - currentTimeSec)
  }

  setInterval(CountDown,1000)

  return (
    <div className="App">
      <h1>{cnt}</h1>
    </div>
  );
}

export default App;
