import { useState } from 'react';
import './App.css';

import { Color } from './App.type';

function App() {
  const [buttonColor, setButtonColor] =
    useState<Color>('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const handleButtonClick = () => {
    setButtonColor(newButtonColor);
  }
  return (
    <div>
      <button
        onClick={handleButtonClick}
        style={{ backgroundColor: buttonColor}}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
