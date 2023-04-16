// src/App.js

import React, { useState } from 'react';
import tarotCards from './tarotCards';
import Layout from './components/layout';
import TarotCard from './components/TarotCard';
import ReadingGenerator from './components/ReadingGenerator';
import './styles.css';

const App = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  return (
    // Render the basic layout of the app using the Layout component
    <Layout>

        {/* Render the ReadingGenerator component to handle card selection */}
      <ReadingGenerator
        tarotCards={tarotCards}
        selectedCards={selectedCards}
        onSelectCards={(cards) => setSelectedCards(cards)}
      />
      
      {/* Render the selected tarot cards using the TarotCard component */}
      <div className="tarot-card-container">
        {selectedCards.map(card => (
          <TarotCard key={card.id} card={card} />
        ))}
      </div>
    </Layout>
  );
};

export default App;
