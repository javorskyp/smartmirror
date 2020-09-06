import React from 'react';
import './App.css';
import './components/Websocket';
import Websocket from './components/Websocket';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Websocket />
      </header>
    </div>
  );
}

export default App;
