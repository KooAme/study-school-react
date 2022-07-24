import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={['/about', '/info']} element={<About />} />
      </Routes>
    </>
  );
}

export default App;
