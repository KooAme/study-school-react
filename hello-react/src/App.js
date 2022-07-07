import React, { Component } from 'react';
import './App.css';
import EventPractice from './EventPractice';
import MapTestComFun from './MapTestComFun';
import IterationSample from './IterationSample';
import LifeCycleCls from './LifeCycleCls';
import ErrorLifeCycleCls from './ErrorLifeCycleCls';

const getRandColor = () => {
  return '#' + Math.floor(Math.random() * 16777215);
  //ffffff(16진수):6777215(10진수)
};

class App extends Component {
  state = { color: '#000000' };
  onClick = (e) => {
    this.setState({
      color: getRandColor(),
    });
  };
  render() {
    const test = 'react';
    return (
      <>
        <EventPractice></EventPractice>
        <MapTestComFun></MapTestComFun>
        <IterationSample></IterationSample>
        <button onClick={this.onClick}>랜덤색상</button>
        <LifeCycleCls color={this.state.color}></LifeCycleCls>
        <ErrorLifeCycleCls></ErrorLifeCycleCls>
      </>
    );
  }
}

export default App;
