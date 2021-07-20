import React, { useEffect, useState } from "react";

import { numbers } from "./numberCoords";

import "./App.scss";

import Clock from "./Clock";

function App() {
  console.log(numbers[0]);
  // const [time, SetTime] = useState("");
  // const [firstMinute, setFirstMinute] = useState();
  // const [secondMinute, setSecondMinute] = useState();

  // const [firstHour, setFirstHour] = useState();
  // const [secondHour, setSecondHour] = useState();

  // SetTime(new Date());
  // console.log(time);

  // // useEffect(() => {
  // // }, [time]);

  // setInterval(function (currentNumber) {
  //   let newNumber = currentNumber + 1;
  //   paintNumber(newNumber);
  // }, 60 * 1000);

  // const paintNumber = (number) => {
  //   numbers[number].map((coord, index) => {
  //     return (
  //       <Clock key={index} hourDegrees={coord[0]} minuteDegrees={coord[1]} />
  //     );
  //   });
  // };

  return (
    <div className="App">
      <main>
        <div className="clock-wrap">
          <section className="number">
            {numbers[0].map((coord, index) => {
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
      </main>
    </div>
  );
}

export default App;
