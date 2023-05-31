import React from 'react'
import {
  Route,
  Routes
} from 'react-router-dom'

import Home from '../components/home'

export default function Homepage () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
