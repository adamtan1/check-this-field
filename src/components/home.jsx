import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import Results from './results'

export default function Home () {
  const [inputText, setInputText] = useState("")
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase()
    setInputText(lowerCase)
  }

  return (
    <div>
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Search"
        onChange={inputHandler}
      />
      <p/>
      <Grid
        container
        direction="row">
        <Results input={inputText} />
      </Grid>
    </div>
  )
}