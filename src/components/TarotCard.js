// src/components/TarotCard.js

import React, { useState, useEffect }from 'react';

const TarotCard = ({ card }) => {
    const [randomDelay, setRandomDelay] = useState(Math.random() * 5);// Generate a random number between 0 and 5
    const [glitchDuration, setGlitchDuration] = useState('0s');

    useEffect(() => {
        // Define the glitch effect as a function
    const glitch = () => {
      setGlitchDuration('0.2s'); // Set the duration of the glitch animation to 0.2 seconds
      setTimeout(() => {
        setGlitchDuration('0s'); // Reset the glitch duration to 0 seconds after 0.2 seconds have passed
      }, 500);
    };
    
    // Set up an interval to trigger the glitch effect at a random interval between 5s and 15s
    const interval = setInterval(() => {
      setRandomDelay(Math.random() * 5); // Set a new random delay time for the glitch effect
      glitch();
    }, 5000 + Math.random() * 10000); // Generate a random interval between 5s and 15s

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    // Render the tarot card HTML structure, including the image and name
    <div className={`tarot-card`}>
    <div className="tarot-card-image-container">
      <img src={card.image} alt={card.name} className="tarot-card-image" />
      
      {/* Render three divs with the same background image as the card, each with a different random delay time and glitch duration */}
      <div className="tarot-card-image-glitch" style={{ backgroundImage: `url(${card.image})`, '--random-delay': randomDelay, animationDuration: glitchDuration, }}></div>
      <div className="tarot-card-image-glitch" style={{ backgroundImage: `url(${card.image})`, '--random-delay': randomDelay, animationDuration: glitchDuration, }}></div>
      <div className="tarot-card-image-glitch" style={{ backgroundImage: `url(${card.image})`, '--random-delay': randomDelay, animationDuration: glitchDuration, }}></div>

    </div>
    <div className="tarot-card-name">{card.name}</div>
  </div>
  );
};

export default TarotCard;