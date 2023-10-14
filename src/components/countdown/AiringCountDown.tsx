import React, { useState, useEffect } from 'react';
import moment from 'moment';

interface AiringCountdownProps {
    airingAt : number;
    episode : number;
}

const   AiringCountdown = ({ airingAt,episode }:AiringCountdownProps) => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().unix();
      const remaining = airingAt - now;
      setRemainingTime(remaining > 0 ? remaining : 0);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [airingAt]);

  const formatTime = (time:any) => {
    return time < 10 ? `${time}` : time;
  };

  const days = Math.floor(remainingTime / 86400);
  const hours = Math.floor((remainingTime % 86400) / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  return  airingAt && (
      <div className='text-white flex gap-1 text-base'>
        <div className='text-gray-300'>Episode <span className="text-zinc-500"> {episode}</span>  in </div>
        <div className='space-x-[2.5px] txt-primary font-semibold'>
          {days !== 0 && <span>{formatTime(days)}<small className='txt-primary text-sm'>d</small>,</span>}
          
          <span>{formatTime(hours)}<small className='txt-primary text-sm'>h</small></span>
          <span>{formatTime(minutes)}<small className='txt-primary text-sm'>m</small></span>

          <span className="countdown">
  <span style={{"--value":formatTime(seconds)} as any}></span>s
</span>

          {/* <span>{formatTime(seconds)}<small className='txt-primary text-sm'>s</small></span> */}
        </div>
      </div>

    )
  
};

export default AiringCountdown;
