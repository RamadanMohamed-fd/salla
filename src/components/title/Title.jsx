import React from 'react'
import clasess from './title.module.css'
const Title = (props) => {
  return (
    <div className={clasess.content} dir='rtl'>
        <h2>{props.h}</h2>
        <p>{props.p}</p>
    </div>
  )
}

export default Title