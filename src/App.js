import React, { useEffect, useState } from "react";

import { numbers } from "./numberCoords";

import "./App.scss";

import Clock from "./Clock";

function App() {
  const [time, SetTime] = useState(null);

  const [minutes, setMinutes] = useState(0);

  const [firstMinute, setFirstMinute] = useState(0);
  const [secondMinute, setSecondMinute] = useState(0);

  const [hours, setHours] = useState(0);
  const [firstHour, setFirstHour] = useState(0);
  const [secondHour, setSecondHour] = useState(0);

  const formatMinutes = (number) => {
    let formattedNumber = number.toString();
    if (formattedNumber.length === 1) {
      setFirstMinute(0);
      setSecondMinute(number);
    } else {
      const chars = formattedNumber.split("");
      console.log(chars);
      setFirstMinute(chars[0]);
      setSecondMinute(chars[1]);
    }
  };

  const formatHours = (number) => {
    let formattedNumber = number.toString();
    if (formattedNumber.length === 1) {
      setFirstHour(0);
      setSecondHour(number);
    } else {
      const chars = formattedNumber.split("");
      console.log(chars);
      setFirstHour(chars[0]);
      setSecondHour(chars[1]);
    }
  };

  const formatNumbers = (number, type) => {
    type === "hour" ? formatHours(number) : formatMinutes(number);
  };

  const minute_ms = 60000;
  const hour_ms = minute_ms * 60;

  const getMinutes = () => {
    console.log("minutes are setting");
    setInterval(() => {
      let date = new Date();
      let currentMinute = date.getMinutes();
      setMinutes(currentMinute);
      formatMinutes(currentMinute);
      console.log("minutes are set");
    }, minute_ms);
    return () => clearInterval();
  };

  const getHours = () => {
    console.log("hours are setting");

    setInterval(() => {
      let date = new Date();
      let currentHour = date.getHours();
      console.log(currentHour);
      setHours(currentHour);
      formatHours(currentHour);
      console.log("hours are setting");
    }, hour_ms);
    return () => clearInterval();
  };

  const setFirstLoad = () => {
    let date = new Date();
    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    formatNumbers(currentHour, "hour");
    formatNumbers(currentMinute, "minute");
    console.log("first load");
  };

  useEffect(() => {
    setFirstLoad();
    getMinutes();
    getHours();
  }, []);

  return (
    <div className="App">
      <main>
        <div className="clock-wrap">
          <div className="hours">
            <section className="number">
              {numbers[firstHour].map((coord, index) => {
                return (
                  <Clock
                    key={index}
                    hourDegrees={coord[0]}
                    minuteDegrees={coord[1]}
                  />
                );
              })}
            </section>

            <section className="number">
              {numbers[secondHour].map((coord, index) => {
                return (
                  <Clock
                    key={index}
                    hourDegrees={coord[0]}
                    minuteDegrees={coord[1]}
                  />
                );
              })}
            </section>
          </div>
          <div className="minutes">
            <section className="number">
              {numbers[5].map((coord, index) => {
                return (
                  <Clock
                    key={index}
                    hourDegrees={coord[0]}
                    minuteDegrees={coord[1]}
                  />
                );
              })}
            </section>

            <section className="number">
              {numbers[secondMinute].map((coord, index) => {
                return (
                  <Clock
                    key={index}
                    hourDegrees={coord[0]}
                    minuteDegrees={coord[1]}
                  />
                );
              })}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
