import React, { Component } from 'react';
import logo from '../logo.svg';
import '../Style/App.css';



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

  getCurrentDate(){
    let currentDate = {
      time: new Date().toString()
    };
    return currentDate;
  }

  componentDidMount() {
    let startSecond = 0;
    this.refs.curTime.innerText = new Date().toString();
    setInterval(() => {
      this.refs.curTime.innerText = new Date().toString();
      // this.refs.duration.innerText = ((window.Date.parse(new Date()) - window.Date.parse(this.refs.openTime.innerText.toString())) / 1000).toString() + "s";
      this.refs.duration.innerText = ++startSecond;
    },1000);
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
        <p className="App-intro">
          打开时间：<span ref="openTime">{this.getCurrentDate().time}</span>
        </p>
        <p className="App-intro">
          当前时间：<span ref="curTime"></span>
        </p>
        <p>
          持续时间：<span ref="duration">0</span> s
        </p>
      </div>
    );
  }
}

export default App;
