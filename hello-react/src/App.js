import React, { Component } from 'react';
import './App.css';
import StateComFun from './StateComFun';
import Counter from './Counter';
import EventExFun from './EventExFun';

class App extends Component {
  render() {
    const test = 'react';
    return (
      <>
        {/* <Counter></Counter> */}
        {/* <StateComFun></StateComFun> */}
        <EventExFun></EventExFun>
      </>
    );
  }
}

export default App;
