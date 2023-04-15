// src/App.js

import React, { useState } from 'react';
import tarotCards from './tarotCards';
import Layout from './components/layout';
import TarotCard from './components/TarotCard';
import GenerateButton from './components/GenerateButton';
import './styles.css';

const App = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const getRandomCards = (cards, count) => {
    const selectedCards = [];
    const cardsCopy = [...cards];

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * cardsCopy.length);
      selectedCards.push(cardsCopy[randomIndex]);
      cardsCopy.splice(randomIndex, 1);
    }

    return selectedCards;
  };

  return (
    <Layout>
        <GenerateButton onClick={() => setSelectedCards(getRandomCards(tarotCards, 3))} />
      <div className="tarot-card-container">
        {selectedCards.map(card => (
          <TarotCard key={card.id} card={card} />
        ))}
      </div>
      
    </Layout>
  );
};

export default App;
