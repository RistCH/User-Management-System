import { useState, useEffect } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());
 
    useEffect(() => {
     const interval = setInterval(() => {
       setTime(new Date());
     }, 1000);
 
     return () => clearInterval(interval);
    }, []);
 
    const formattedTime = time.toLocaleTimeString([], {
       hour: "2-digit",
       minute: "2-digit",
       second: "2-digit",
    });
 
    return (
       <div className="text-5xl
       text-penn-blue
       font-bold
       py-7
       px-6
       text-center">
         {formattedTime}
       </div>
    )
 }

 export default DigitalClock;