import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

// import StoreProvider from './utils/store'
import Nav from './components/nav'
import Homepage from './pages/homepage'
import Fieldpage from './pages/fieldpage'

function App () {
  return (
    <Router>
      <div>
        <Nav />
        <Body />
      </div>
    </Router>
  )
}

function Body () {
  return (
    <Routes>
      <Route path="/check-this-field" element={<Homepage />} />
      <Route path="/check-this-field/field" element={<Fieldpage />} />
    </Routes>
  )
}

export default App
