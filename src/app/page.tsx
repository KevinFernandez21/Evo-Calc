"use client";
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BasicCalculator from './components/BasicCalculator';
import DerivativeCalculator from './components/DerivativeCalculator';

const Home: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('basic');

  const renderPage = () => {
    switch (activePage) {
      case 'basic':
        return <BasicCalculator />;
      case 'derivative':
        return <DerivativeCalculator />;
      default:
        return <BasicCalculator />;
    }
  };

  return (
    <div className="App">
      <Navbar setActivePage={setActivePage} />
      {renderPage()}
    </div>
  );
};

export default Home;