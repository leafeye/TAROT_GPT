// src/components/TarotCard.js

import React from 'react';

const TarotCard = ({ card }) => {
  return (
    <div className="tarot-card">
    <div className="tarot-card-image-container">
      <img src={card.image} alt={card.name} className="tarot-card-image" />
      <div className="tarot-card-image-glitch" style={{ backgroundImage: `url(${card.image})` }}></div>
      <div className="tarot-card-image-glitch" style={{ backgroundImage: `url(${card.image})` }}></div>
      <div className="tarot-card-image-glitch" style={{ backgroundImage: `url(${card.image})` }}></div>

    </div>
    <div className="tarot-card-name">{card.name}</div>
  </div>
  );
};

export default TarotCard;