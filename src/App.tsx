import {ChangeEvent, useState, useEffect } from 'react';
import './App.css';

import { Color } from './App.type';

export const replaceCamelWithSpaces = (colorName: string) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] =
    useState<Color>('MediumVioletRed');
  const [buttonIsDisabled, setButtonIsDisabled] =
    useState(false);
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

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
        style={{ backgroundColor:
            buttonIsDisabled ?
              'gray' :
              buttonColor
        }}
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
