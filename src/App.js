import './App.css';
import { useState, useEffect, useRef} from "react";

let currentTime
let newYear
let newYearDate
let curTimeSec
let newYearTimeSec

function App() {  

  useEffect(()=>{
    currentTime = new Date()
    newYear = currentTime.getUTCFullYear()+1
    newYearDate =  new Date(newYear, 0,1)
    newYearTimeSec = parseInt(newYearDate.getTime()/1000)
    curTimeSec = parseInt(currentTime.getTime()/1000)
  },[])

  const [totalCnt,setTotal] = useState(parseInt(new Date(new Date().getUTCFullYear()+1,0,1).getTime()/1000) - parseInt(new Date().getTime()/1000))
  const [Days, setDays] = useState(Math.floor(totalCnt/(60*60*24)))
  const[Hours,setHours] = useState(Math.floor((totalCnt % (60 * 60 * 24)) / (60 * 60)))
  const[Mins,setMins] = useState(Math.floor((totalCnt % (60 * 60 )) / (60)))
  const[Secs,setSecs] = useState(Math.floor((totalCnt % (60 ))))

  // 시간 경과 체크를 위한 useEffect
  useEffect(() => {
      const tick = setTimeout(() => {
        setTotal(totalCnt - 1);
        setDays(Math.floor(totalCnt/(60*60*24)))
        setHours(Math.floor((totalCnt % (60 * 60 * 24)) / (60 * 60)))
        setMins(Math.floor((totalCnt % (60 * 60 )) / (60)))
        setSecs(Math.floor((totalCnt % (60 ))))
      }, 1000);

      // eslint-disable-next-line consistent-return
      return () => clearTimeout(tick);
  }, [totalCnt]);

  return (
  <div className="App">
      <div className="clock-container">
        <div className="clock-col">
          <p className="day-Time">{Days}
          </p>
          <p className="clock-label">
            Day
          </p>
        </div>
        <div className="clock-col">
          <p className="hour-Time">{Hours}
          </p>
          <p className="clock-label">
            Hours
          </p>
        </div>
        <div className="clock-col">
          <p className="min-Time">{Mins}
          </p>
          <p className="clock-label">
            Minutes
          </p>
        </div>
        <div className="clock-col">
          <p className="sec-Time">{Secs}
          </p>
          <p className="clock-label">
            Seconds
          </p>
        </div>
      </div>
    </div>
  )
}

export default App;
