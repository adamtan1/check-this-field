import React from 'react'
import {
  Route,
  Routes
} from 'react-router-dom'

import Field from '../components/field'

export default function Fieldpage () {
  return (
    <Routes>
      <Route path="/" element={<Field />} />
    </Routes>
  )
}
