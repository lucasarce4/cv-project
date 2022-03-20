import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Personal from './components/PersonalInfo';
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <div className="bodyContainer">
            <Personal />
            <Body />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
