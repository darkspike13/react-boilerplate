/* eslint-disable react/prop-types */
import { memo, useEffect, useState } from 'react';

import './Clock.scss';

const Tick = memo(({ name, value }) => (
    <div className={`hand ${name}`} style={{ transform: `rotate(${value}deg)` }} />
));

const Clock = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMin] = useState(0);
  const [seconds, setSec] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const today = new Date();
      const h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
      const m = today.getMinutes(); // 0 - 59
      const s = today.getSeconds(); // 0 - 59
      setHours(h * 30);
      setMin(m * 6);
      setSec(s * 6);
    }, 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  return (
      <div className="clock">
          <Tick name="hours" value={hours} />
          <Tick name="minutes" value={minutes} />
          <Tick name="seconds" value={seconds} />
          <div className="point" />
          <div className="marker">
              <span className="marker__1" />
              <span className="marker__2" />
              <span className="marker__3" />
              <span className="marker__4" />
          </div>
      </div>
  );
};

export default Clock;
