import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlashCards from './components/FlashCards';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Flash Cards</h2>
        </div>
        <FlashCards />
      </div>
    );
  }
}

export default App;
