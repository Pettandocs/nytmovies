import React from 'react';
import './App.css';
import LatestReviewBlock from './ReviewBlock.js';
import CriticsLatestPicks from './CriticsLatestPicks.js';
import Search from './Search.js'

function App() {
  return (
    <div className="App">
      <div className="Main">
        <LatestReviewBlock/><Search/><CriticsLatestPicks/>
      </div>
    </div>
  );
}

export default App;
