import React, { useEffect, useState } from "react";

import { numbers, separation } from "./numberCoords";
import image from "./assets/image-inverted.png";
import imageTwo from "./assets/image.png";

import "./App.scss";

import Clock from "./Clock";

function App() {
  const minute_ms = 60000;
  const hour_ms = minute_ms * 60;

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
    if (type === "hour") {
      formatHours(number);
    } else if (type === "minute") {
      formatMinutes(number);
    }
  };

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

    getMinutes();
    getHours();
    console.log("first load");
  };

  useEffect(() => {
    setFirstLoad();
  }, [minutes, hours]);

  return (
    <div className="App">
      <main>
        <div className="splash">
          <h1>
            Digital clock created with react inspired in “Humans since 1982”
            famous clock
          </h1>
          <section className="splash__pic">
            <img src={image} alt="person walking"></img>
          </section>
        </div>
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
          <div className="separation">
            {separation.map((coord, index) => {
              return (
                <Clock
                  key={index}
                  hourDegrees={coord[0]}
                  minuteDegrees={coord[1]}
                />
              );
            })}
          </div>
          <div className="minutes">
            <section className="number">
              {numbers[firstMinute].map((coord, index) => {
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

        <div className="decoration">
          <section className="decoration__pic first">
            <img src={imageTwo} alt="men walking"></img>
          </section>
          <section className="decoration__pic second">
            <img src={image} alt="men walking"></img>
          </section>
          <section className="decoration__pic third">
            <img src={image} alt="men walking"></img>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
