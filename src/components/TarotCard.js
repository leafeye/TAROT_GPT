// src/components/TarotCard.js

import React, { useState } from 'react';

const TarotCard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`tarot-card${isFlipped ? ' tarot-card-flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="tarot-card-image-container">
        <img src={card.image} alt={card.name} className="tarot-card-image" />
      </div>
      <div className="tarot-card-name">{card.name}</div>
    </div>
  );
};

export default TarotCard;