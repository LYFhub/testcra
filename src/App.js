import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sWord: "world and you",
      aParagraph: [
        <p>this is the first Paragraph</p>,
        <p>this is the second Paragraph</p>,
        <p>this is the third Paragraph</p>
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          Hello {this.state.sWord}
        </p>
        <div className="App-header">
          {this.state.aParagraph}
        </div>
      </div>
    );
  }
}

export default App;
