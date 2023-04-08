import React from 'react'
import clasess from './t.module.css';
const T = (props) => {
  return (
    <div className={clasess.containet}>
         <h2>{props.title}</h2>
    <div className={clasess.content} dir='rtl' style={{flexDirection:props.dir}}>
        <div className={clasess.sub}>
            <p className={clasess.sub1}>{props.dummy_data.h1}</p>
           <div className={clasess.sub2}>
           <p>{props.dummy_data.p}</p>
            <p>{props.dummy_data.p1}</p>
            <p>{props.dummy_data.p2}</p>
            <p>{props.dummy_data.p3}</p>
           </div>
        </div>
        <img decoding="async" src={props.image1} alt="Intro" ></img>
    </div>
    </div>
  )
}

export default T