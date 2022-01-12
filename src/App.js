import './App.css';
import { useState, useEffect, useRef} from "react";
import { Fireworks, useFireworks } from 'fireworks-js/dist/react'

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
        if(Secs===2){
          setEnabled(true)
        }
      }, 1000);

      // eslint-disable-next-line consistent-return
      return () => clearTimeout(tick);
  }, [totalCnt]);

  const { enabled, options, setEnabled } = useFireworks({
    initialStart: false,
    initialOptions: {
      hue: {
        min: 0,
        max: 345
      },
      delay: {
        min: 12,
        max: 12
      },
      rocketsPoint: 50,
      speed: 10,
      acceleration: 1.2,
      friction: 0.96,
      gravity: 1,
      particles: 90,
      trace: 3,
      explosion: 10,
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
        decay: {
          min: 0.015,
          max: 0.03
        }
      },
      boundaries: {
        visible: false
      },
      mouse: {
        click: true,
        move: false,
        max: 1
      }
    }
  })

  const style = {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    position: 'fixed',
  }


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
      <Fireworks
        style={style}
        enabled={enabled}
        options={options}
      >
      </Fireworks>
      
    </div>
  )
}

export default App;
