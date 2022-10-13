import {ChangeEvent, useState} from 'react';
import './App.css';

import { Color } from './App.type';

function App() {
  const [buttonColor, setButtonColor] =
    useState<Color>('red');
  const [buttonIsDisabled, setButtonIsDisabled] =
    useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const handleButtonClick = () => {
    setButtonColor(newButtonColor);
  }

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setButtonIsDisabled(event.target.checked);
  }
  return (
    <div>
      <button
        onClick={handleButtonClick}
        style={{ backgroundColor: buttonColor}}
        disabled={buttonIsDisabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disabled-button-checkbox"
        onChange={handleCheckboxChange}
      />
      <label htmlFor="disabled-button-checkbox">
        Disable button
      </label>
    </div>
  );
}

export default App;
