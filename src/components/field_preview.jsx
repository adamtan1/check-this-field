import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function FieldPreview (props) {
  const link = "field?fid=" + props.fid

  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }

  const boxStyle = {
    height: '200px',
    width: '200px',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // fontSize: '30px',
    cursor: 'pointer',
    color: isHover ? "blue" : "black"
  }

  return (
    <div
      style={boxStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={link} style={{ textDecoration: 'none' }}>
        <img src={props.img} height={200} alt="pic"/>
        <br />
        <p>{props.name}</p>
        <p>{props.address}</p>
        <p>{props.field_size}</p>
        <p>{props.council}</p>
      </Link>
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