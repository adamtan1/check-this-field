// import React, { useState } from 'react'
import React from 'react'
// import { post } from '../utils/api'
// import { StoreContext } from '../utils/store'
import FieldPreview from './field_preview'

import fieldsList from '../database.json'

export default function Home () {
  const previews = fieldsList.fields.map(field => {
    return(
      <FieldPreview
        fid={field.fid}
        name={field.name}
        address={field.address}
        field_size={field.field_size}
        council={field.council}
        img={field.img}
      />
    )
  })

  return (
    <div>
      {previews}
    </div>
  )
}