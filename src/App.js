import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <audio controls>
          <source src="./mp3/open-strings/emj.mp3" type="audio/mpeg"></source>
          Your browser does not support the audio element.
        </audio>
    </div>
  );
}

export default App;
