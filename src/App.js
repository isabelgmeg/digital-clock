import "./App.scss";

import Clock from "./Clock";

function App() {
  const a = ["a", 0, 90];
  const b = ["b", 0, 180];
  const c = ["c", 180, 90];
  const d = ["d", 270, 90];
  const e = ["e", 270, 0];
  const f = ["f", 270, 180];
  const g = ["g", 315, 315];
  const h = ["h", 135, 135];

  const zero = [
    a,
    b,
    b,
    c,
    d,
    a,
    c,
    d,
    d,
    d,
    d,
    d,
    d,
    d,
    d,
    d,
    d,
    e,
    f,
    d,
    e,
    b,
    b,
    f,
  ];

  const one = [
    a,
    b,
    c,
    h,
    e,
    c,
    d,
    h,
    g,
    d,
    d,
    h,
    g,
    d,
    d,
    h,
    a,
    f,
    e,
    c,
    e,
    b,
    b,
    f,
  ];

  return (
    <div className="App">
      <main>
        <div className="clock-wrap">
          <section className="number">
            {zero.map((coord) => {
              return <Clock hourDegrees={coord[1]} minuteDegrees={coord[2]} />;
            })}
          </section>

          <section className="number">
            {one.map((coord) => {
              return <Clock hourDegrees={coord[1]} minuteDegrees={coord[2]} />;
            })}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
