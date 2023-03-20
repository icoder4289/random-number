import React, { useState } from 'react';

export default function RandomNumberGenerator() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 10) + 1;
    setRandomNumber(newRandomNumber);
  };

  let message = null;
  if (randomNumber) {
    message = <p>Random number: {randomNumber}</p>;
  } else {
    message = <p>Enter Button On Top</p>;
  }

  return (
    <div>
      <button onClick={generateNumber}>Generate Number</button>
      {message}
    </div>
  );
}
