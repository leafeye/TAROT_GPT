// src/components/ReadingGenerator.js

import React, { useState } from 'react';
import GenerateButton from './GenerateButton';

const ReadingGenerator = ({ tarotCards, selectedCards, onSelectCards }) => {
  const [showReadingButton, setShowReadingButton] = useState(false);

  const getRandomCards = (cards, count) => {
    const selectedCards = [];
    const cardsCopy = [...cards];

    // Select `count` random cards from the `cards` array
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * cardsCopy.length);
      selectedCards.push(cardsCopy[randomIndex]);
      cardsCopy.splice(randomIndex, 1);
    }

    return selectedCards;
  };

  return (
    <>
     {/* Render the GenerateButton component with an `onClick` handler */}
      <GenerateButton onClick={() => {
          onSelectCards(getRandomCards(tarotCards, 3));
          setShowReadingButton(true);
        }}
      />
      {/* Render the "Generate Reading" button conditionally */}
      {showReadingButton && (
        <button className="generate-reading-button">
          Generate Reading
        </button>
      )}
    </>
  );
};

export default ReadingGenerator;
