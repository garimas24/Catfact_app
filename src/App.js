import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCatFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact('Failed to fetch fact. Please try again.');
      console.error('Error fetching cat fact:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Random Cat Fact</h1>
      <button onClick={fetchCatFact} className="cat-button">
        {loading ? 'Loading...' : 'Get Cat Fact'}
      </button>
      {fact && <p className="fact">{fact}</p>}
    </div>
  );
};

export default App;

