import React from 'react';
import ICountdown from './utils/ICountdown';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ICountdown date={39} hours={60} minutes={60} seconds={60} />
      </header>
    </div>
  );
}

export default App;
