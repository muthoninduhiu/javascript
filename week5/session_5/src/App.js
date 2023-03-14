import logo from './logo.svg';
import './App.css';
import Button from './Button';
import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Button text="i am hot" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nduhiu was here!
        </p>
        <Button text="i am nduhiu" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
