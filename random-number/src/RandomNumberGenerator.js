import React, { useState } from 'react';

export default function RandomNumberGenerator() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 10) + 1;
    setRandomNumber(newRandomNumber);
  };

  return (
    <div>
      <button onClick={generateNumber}>Generate Number</button>
      {randomNumber && <p>Random number: {randomNumber}</p>}
    </div>
  );
}
