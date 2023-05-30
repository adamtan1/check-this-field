import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// import StoreProvider from './utils/store';
import Fieldpage from './pages/fieldpage'

function App () {
  return (
    // <StoreProvider>
      <Router>
        <div>
          {/* <Nav /> */}
          <Body />
        </div>
      </Router>
    // </StoreProvider>
  );
}

function Body () {
  return (
    <Routes>
      <Route path="/" element={<div><p>hello this is homepage</p></div>} />
      <Route path="field" element={<Fieldpage/>} />
    </Routes>
  );
}

export default App;
