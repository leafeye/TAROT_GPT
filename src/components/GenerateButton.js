// src/components/GenerateButton.js

import React from 'react';

const GenerateButton = ({ onClick }) => {
  return (
    <button className="generate-button" onClick={onClick}>
      Generate Spread
    </button>
  );
};

export default GenerateButton;
