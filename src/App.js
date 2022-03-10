import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
