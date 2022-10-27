import React, { useEffect, useState } from 'react'

const Timer = () => {

    const[seconds,setSeconds] = useState(0);
    const[minutes,setMinutes] = useState(0);


    useEffect(()=>{
        var timer = setInterval(()=>{

            setSeconds(seconds+1);

            if (seconds===59) {
                setMinutes(minutes+1);
                setSeconds(0);
            }

        },1000)

        return ()=> clearInterval(timer)
    })

    let mins = (minutes < 10 ? '0' : '') + minutes;
    let secs = (seconds < 10 ? '0' : '') + seconds;

  return (
    <div className='timer'>
        <div className='container'>
            <h3> {mins}:{secs} / 10:00</h3>            
        </div>
    </div>
  )
}

export default Timer
