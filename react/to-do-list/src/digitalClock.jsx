import { useEffect } from "react";
import { useState } from "react";



function DigitalClock() {


    const [time,setTime]=useState(new Date())

    useEffect(()=>{
        const intervalID=setInterval(() => {
            setTime(new Date());
        }, 1000);

        return ()=> {
            clearInterval(intervalID);
        }

    },[])

function formatTime(){
    let hours=time.getHours();
    const minutes=time.getMinutes();
    const seconds=time.getSeconds();
    const marediam = hours>12?"PM":"AM";

    hours=hours%12||12;

    return(`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${marediam}`)

}

function padZero(number)
{
    return (number<10?"0":"")+number;
}
  return (
    <div className="digital-container">
        <div className="clock">
            <span>{formatTime()}</span>
        </div>

    </div>

  );


}

export default DigitalClock;
