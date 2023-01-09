
/* eslint no-eval: 0 */
import { useSelector, useDispatch } from 'react-redux';
import {
  input,
  reset,
  selectEntry,
} from './features/counterSlice';
import "./app.scss"

function App() {
  const entry = useSelector(selectEntry);
  const dispatch = useDispatch();

  const handleInput = (param) => {
    dispatch(input(param))
  }

  const handleReset = () => {
    dispatch(reset())
  }
  return (
    <div className="container">
      <div className="calc">
        <div className="input">
          {entry}
        </div>
        <div className="result">
          <div>
            =
          </div>
          <div>
          {['*', '+', '-', '/'].includes(entry.charAt(entry.length-1)) ? '' : eval(entry)}
          </div>
        </div>
        <hr className="separator"/>
        <div className="button-group">
          <div className="header-button">
            <button className="btn-clear" onClick={handleReset}>
              CLEAR
            </button>
            <button className="btn-operator" onClick={() => handleInput('*')}>
              x
            </button>
          </div>
          <div className="body-button">
            <button className="btn-numeric" onClick={() => handleInput(1)}>
              1
            </button>
            <button className="btn-numeric" onClick={() => handleInput(2)}>
              2
            </button>
            <button className="btn-numeric" onClick={() => handleInput(3)}>
              3
            </button>
            <button className="btn-operator" onClick={() => handleInput('+')}>
              +
            </button>
          </div>
          <div className="body-button">
            <button className="btn-numeric" onClick={() => handleInput(4)}>
              4
            </button>
            <button className="btn-numeric" onClick={() => handleInput(5)}>
              5
            </button>
            <button className="btn-numeric" onClick={() => handleInput(6)}>
              6
            </button>
            <button className="btn-operator" onClick={() => handleInput('-')}>
              -
            </button>
          </div>
          <div className="body-button">
            <button className="btn-numeric" onClick={() => handleInput(7)}>
              7
            </button>
            <button className="btn-numeric" onClick={() => handleInput(8)}>
              8
            </button>
            <button className="btn-numeric" onClick={() => handleInput(9)}>
              9
            </button>
            <button className="btn-operator" onClick={() => handleInput('/')}>
              /
            </button>
          </div>
          <div className="body-button">
            <button className="btn-operator" onClick={() => handleInput('-')}>
              +/-
            </button>
            <button className="btn-numeric" onClick={() => handleInput(0)}>
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
