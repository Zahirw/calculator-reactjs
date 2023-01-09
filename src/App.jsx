
/* eslint no-eval: 0 */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  input,
  reset,
  save,
  selectEntry,
} from './features/counterSlice';
import "./app.scss"

function App() {
  const entry = useSelector(selectEntry);
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false)
  const [menu, setMenu] = useState('calc')
  const dataHistory = JSON.parse(localStorage.getItem('history'));

  const handleMenu = () => {
    setDropdown(!dropdown)
  }

  const handleInput = (param) => {
    dispatch(input(param))
  }

  const handleReset = () => {
    dispatch(reset())
  }

  const handleSave = () => {
    dispatch(save(eval(entry).toString()))
    const set = {
      entry: entry,
      result: eval(entry)
    }
    if (localStorage.getItem('history')) {
      const get = JSON.parse(localStorage.getItem('history'));
      localStorage.setItem("history",JSON.stringify([...get, set]));
    } else {
      localStorage.setItem("history",JSON.stringify([set]));
    }
  }
  return (
    <div className="container">
      <div className="calc">
        <div className="input">
          {entry}
        </div>
        <div className="result">
          <div style={{cursor: 'pointer'}} onClick={handleMenu}>
            =
          </div>
          <div>
          {['*', '+', '-', '/'].includes(entry.charAt(entry.length-1)) ? '' : eval(entry)}
          </div>
        </div>
        {
          dropdown && 
          <div className='dropdown'>
            { localStorage.getItem('history') &&
              <p onClick={() => {setMenu('history'); setDropdown(false)}}>History</p>
            }
            <p onClick={() => {setMenu('calc'); setDropdown(false)}}>Calculator</p>
          </div>
        }
        <hr className="separator"/>
        {
          menu === 'calc' ?
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
              <button className="btn-numeric" onClick={() => handleInput('.')}>
                .
              </button>
              <button className="btn-operator" onClick={handleSave}>
                =
              </button>
            </div>
          </div> :
          <div>
            <div className='history'>
            { dataHistory.map((record, index) => 
                <div key={index}>
                  <p>{record.entry}</p>
                  <p>= {record.result}</p>
                </div>
              )}
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <button className='btn-clear-history' onClick={() => {localStorage.clear(); window.location.reload()}}> Clear History </button>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
