import React from 'react';
import './App.css';
import ReviewBlock from './ReviewBlock.js'
import Search from './Search.js'
function App() {
  return (
    <div className="App">
      <div className="Main">
        <ReviewBlock/><Search/><ReviewBlock/>
      </div>
    </div>
  );
}

export default App;
