// src/components/TarotCard.js

import React, { useState, useEffect }from 'react';

const TarotCard = ({ card }) => {
    const [randomDelay, setRandomDelay] = useState(Math.random() * 5);// Generate a random number between 0 and 5
    const [glitchDuration, setGlitchDuration] = useState('0s');

    useEffect(() => {
    const glitch = () => {
      setGlitchDuration('0.2s');
      setTimeout(() => {
        setGlitchDuration('0s');
      }, 500);
    };

    const interval = setInterval(() => {
      setRandomDelay(Math.random() * 5);
      glitch();
    }, 5000 + Math.random() * 10000); // Generate a random interval between 5s and 15s

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div className={`tarot-card`}>
    <div className="tarot-card-image-container">
      <img src={card.image} alt={card.name} className="tarot-card-image" />
      <div className="tarot-card-image-glitch" style={{ backgroundImage: `url(${card.image})`, '--random-delay': randomDelay, animationDuration: glitchDuration, }}></div>
      <div className="tarot-card-image-glitch" style={{ backgroundImage: `url(${card.image})`, '--random-delay': randomDelay, animationDuration: glitchDuration, }}></div>
      <div className="tarot-card-image-glitch" style={{ backgroundImage: `url(${card.image})`, '--random-delay': randomDelay, animationDuration: glitchDuration, }}></div>

    </div>
    <div className="tarot-card-name">{card.name}</div>
  </div>
  );
};

export default TarotCard;