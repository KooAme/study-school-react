import React, { Component } from 'react';
import './App.css';
import EventPractice from './EventPractice';
import MapTestComFun from './MapTestComFun';

class App extends Component {
  render() {
    const test = 'react';
    return (
      <>
        <EventPractice></EventPractice>
        <MapTestComFun></MapTestComFun>
      </>
    );
  }
}

export default App;
