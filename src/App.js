import { useState } from "react";

const roadmap = [
  "Learn HTML",
  "Learn CSS",
  "Learn JavaScript",
  "Learn Bootstrap",
  "Learn SASS",
  "Learn React JS",
  "Learn Git and GitHub",
];

function App() {
  const [step, setStep] = useState(1);

  function next() {
    if (step <= 6) {
      setStep(step + 1);
    }
  }

  function previous() {
    if (step >= 2) {
      setStep(step - 1);
    }
  }

  return (
    <div className="container">
      <h1>Front End Roadmap</h1>
      <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          <div className={`${step >= 4 ? "active" : ""}`}>4</div>
          <div className={`${step >= 5 ? "active" : ""}`}>5</div>
          <div className={`${step >= 6 ? "active" : ""}`}>6</div>
          <div className={`${step >= 7 ? "active" : ""}`}>7</div>
        </div>

        <p className="message">{`Step ${step}: ${roadmap[step - 1]}`}</p>

        <div className="buttons">
          <button className="previous" onClick={previous}>
            Previous
          </button>
          <button className="next" onClick={next}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
