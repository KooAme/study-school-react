import React, { Component } from 'react';
import './App.css';
import MyCom from './MyCom';

class App extends Component {
  render() {
    const test = 'react';
    return (
      <>
        <div className='react'>{test}</div>
        <MyCom major='japan' />
      </>
    );
  }
}

export default App;
