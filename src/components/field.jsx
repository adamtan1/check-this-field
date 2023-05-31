// import React, { useState } from 'react'
import React from 'react'
// import { useHistory } from 'react-router-dom'
// import { post } from '../utils/api'
// import { StoreContext } from '../utils/store'
import fieldsList from '../database.json'

export default function Field () {
  const queryString = window.location.search;
  const fid = new URLSearchParams(queryString).get("fid");

  const field = fieldsList.fields[fid]

  return (
    <div>
      <img src={field.img} height={200} alt="pic"/>
      <br />
      <p>{field.name}</p>
      <p>{field.address}</p>
      <p>{field.field_size}</p>
      <p>[availability]</p>
      <p>[pics]</p> 
    </div>
  )
}