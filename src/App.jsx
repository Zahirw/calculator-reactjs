
import { useState, useEffect } from "react";
import "./app.scss"

function App() {
  const [number, setNumber] = useState([])

  useEffect(() => {
    console.log(number)
  },[number])
  return (
    <div className="container">
      <div className="calc">
        <div className="input">
          {number}
        </div>
        <div className="result">
          <div>
            =
          </div>
          <div>
            100
          </div>
        </div>
        <hr className="separator"/>
        <div className="button-group">
          <div className="header-button">
            <button className="btn-clear">
              CLEAR
            </button>
            <button className="btn-operator">
              x
            </button>
          </div>
          <div className="body-button">
            <button className="btn-numeric" onClick={() => setNumber((prev) => ([...prev, 1]))}>
              1
            </button>
            <button className="btn-numeric" onClick={() => setNumber((prev) => ([...prev, 2]))}>
              2
            </button>
            <button className="btn-numeric">
              3
            </button>
            <button className="btn-operator">
              +
            </button>
          </div>
          <div className="body-button">
            <button className="btn-numeric">
              4
            </button>
            <button className="btn-numeric">
              5
            </button>
            <button className="btn-numeric">
              6
            </button>
            <button className="btn-operator">
              -
            </button>
          </div>
          <div className="body-button">
            <button className="btn-numeric">
              7
            </button>
            <button className="btn-numeric">
              8
            </button>
            <button className="btn-numeric">
              9
            </button>
            <button className="btn-operator">
              %
            </button>
          </div>
          <div className="body-button">
            <button className="btn-operator">
              +/-
            </button>
            <button className="btn-numeric">
              0
            </button>
            <button className="btn-numeric">
              .
            </button>
            <button className="btn-operator">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
