import React from 'react';
import './App.css';

import { Timer } from './components/Timer';

function App() {
  return (
    <div className="App">
      <Timer 
        duration={200}
      />
    </div>
  );
}

export default App;
