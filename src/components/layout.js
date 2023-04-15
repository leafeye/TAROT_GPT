// src/components/layout.js

import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <h1>Tarot Card Spread Generator</h1>
      </header>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
