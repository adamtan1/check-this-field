import React from 'react'
import Grid from '@mui/material/Grid'
import fieldsList from '../database.json'
import FieldPreview from './field_preview'

export default function Results(props) {
  const filteredData = fieldsList.fields.filter((el) => {
    if (props.input === '') {
      return el
    }
    else {
      return (
        el.name.toLowerCase().includes(props.input) ||
        el.address.toLowerCase().includes(props.input) ||
        el.council.toLowerCase().includes(props.input)
      )
    }
  })

  return (
    <Grid container>
      {filteredData.map((field) => (
        <Grid item xs={3}>
          <FieldPreview
            fid={field.fid}
            name={field.name}
            address={field.address}
            field_size={field.field_size}
            council={field.council}
            img={field.img}
            />
        </Grid>
      ))}
    </Grid>
  )
}