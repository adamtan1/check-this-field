import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function FieldPreview (props) {
  const link = "field?fid=" + props.fid
  return (
    <div>
      <Link to={link}>
        <img src={props.img} height={200} alt="pic"/>
        <br />
        {props.name}
      </Link>
      <p>{props.address}</p>
      <p>{props.field_size}</p>
      <p>{props.council}</p>
    </div>
  )
}

FieldPreview.propTypes = {
  fid: PropTypes.any,
  name: PropTypes.string,
  address: PropTypes.string,
  field_size: PropTypes.string,
  council: PropTypes.string,
  img: PropTypes.any
}