import React, { useEffect, useState } from 'react';
import TimeItem from '../../molecules/TimeItem';
import styles from './styles.module.scss';

const TimeToLaunchCardsSection = () => {
  const [seconds, setSeconds] = useState(2);
  const [minutes, setMinutes] = useState(55);
  const [hours, setHours] = useState(23);
  const [days, setDays] = useState(8);
  const [shouldUpdateCounter, setShouldUpdateCounter] = useState(false);
  const [interval, setInterval] = useState(0);

  useEffect(() => {
    setInterval(window.setInterval(() => setShouldUpdateCounter(true), 1000));
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (shouldUpdateCounter) {
      decrementOneSecond();
      setShouldUpdateCounter(false);
    }
  }, [shouldUpdateCounter]);

  const decrementOneSecond = () => {
    if (seconds === 0) {
      setSeconds(59);
      decrementOneMinute();
    } else {
      setSeconds(seconds - 1);
    }
  };

  const decrementOneMinute = () => {
    if (minutes === 0) {
      setMinutes(59);
      decrementOneHour();
    } else {
      setMinutes(minutes - 1);
    }
  };

  const decrementOneHour = () => {
    if (hours === 0) {
      setHours(23);
      decrementOneDay();
    } else {
      setHours(hours - 1);
    }
  };

  const decrementOneDay = () => {
    if (days !== 0) {
      setDays(days - 1);
    } else {
      clearInterval(interval);
    }
  };

  return (
    <div className={styles.Container}>
      <TimeItem
        label="Days"
        number={days}
      />
      <TimeItem
        label="Hours"
        number={hours}
      />
      <TimeItem
        label="Minutes"
        number={minutes}
      />
      <TimeItem
        label="Seconds"
        number={seconds}
      />
    </div>
  );
};

export default TimeToLaunchCardsSection;
