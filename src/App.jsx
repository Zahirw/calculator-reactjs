
/* eslint no-eval: 0 */
import { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
import {
  // decrement,
  // increment,
  // incrementByAmount,
  // incrementAsync,
  // selectCount,
} from './features/counterSlice';
import "./app.scss"

function App() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  const [number, setNumber] = useState('')
  // const [entry, setEntry] = useState([])

  // useEffect(() => {
  //   console.log(entry)
  // },[entry])
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
          {['*', '+', '-', '/'].includes(number.charAt(number.length-1)) ? '' : eval(number)}
          </div>
        </div>
        <hr className="separator"/>
        <div className="button-group">
          <div className="header-button">
            <button className="btn-clear" onClick={() => setNumber('')}>
              CLEAR
            </button>
            <button className="btn-operator" onClick={() => setNumber((prev) => (prev+'*'))}>
              x
            </button>
          </div>
          <div className="body-button">
            <button className="btn-numeric" onClick={() => setNumber((prev) => (prev+1))}>
              1
            </button>
            <button className="btn-numeric" onClick={() => setNumber((prev) => (prev+2))}>
              2
            </button>
            <button className="btn-numeric" onClick={() => setNumber((prev) => (prev+3))}>
              3
            </button>
            <button className="btn-numeric" onClick={() => setNumber((prev) => (prev+'+'))}>
              +
            </button>
          </div>
          <div className="body-button">
            <button className="btn-numeric" onClick={() => setNumber((prev) => (prev+4))}>
              4
            </button>
            <button className="btn-numeric" onClick={() => setNumber((prev) => (prev+5))}>
              5
            </button>
            <button className="btn-numeric" onClick={() => setNumber((prev) => (prev+6))}>
              6
            </button>
            <button className="btn-operator" onClick={() => setNumber((prev) => (prev+'-'))}>
              -
            </button>
          </div>
          <div className="body-button">
            <button className="btn-numeric" onClick={() => setNumber((prev) => (prev+7))}>
              7
            </button>
            <button className="btn-numeric" onClick={() => setNumber((prev) => (prev+8))}>
              8
            </button>
            <button className="btn-numeric" onClick={() => setNumber((prev) => (prev+9))}>
              9
            </button>
            <button className="btn-operator" onClick={() => setNumber((prev) => (prev+'/'))}>
              /
            </button>
          </div>
          <div className="body-button">
            <button className="btn-operator" onClick={() => setNumber((prev) => ('-'+prev))}>
              +/-
            </button>
            <button className="btn-numeric" onClick={() => setNumber((prev) => (prev+0))}>
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
