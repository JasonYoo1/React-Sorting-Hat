import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SortingButton from './components/SortingButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to HogWarts</h1>
        </header>
      <SortingButton ></SortingButton>
      </div>
    );
  }
}

export default App;
