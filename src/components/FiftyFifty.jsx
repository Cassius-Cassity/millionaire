import React, { useState } from 'react';
import '../App.css'

function FiftyFifty({ question, handleFiftyFifty }) {
  const [used, setUsed] = useState(false);

  const handleFiftyFiftyClick = () => {
    if (!used) {
      setUsed(true);
      handleFiftyFifty(question.correctAnswer);
    }
  };

  return (
    <div className="fifty-fifty">
      <button className={used ? 'used' : ''} onClick={handleFiftyFiftyClick}>
        50/50
      </button>
    </div>
  );
}

export default FiftyFifty;