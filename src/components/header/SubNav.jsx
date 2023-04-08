import React from 'react'
import clasess from './subNav.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SubNav = (props) => {
    const data=props.data
  return (
    <div className={clasess.container} dir='rtl'>
        {data.map((item)=>(
            <div className={clasess.content}>
                <div className={clasess.icon}>
                <FontAwesomeIcon icon={item.icon} className={clasess.icon}/>
                </div>
                <div className={clasess.text}>
                    <h3>{item.head}</h3>
                    <p>{item.sub}</p>
                </div>
            </div>
        )) }
    </div>
  )
}

export default SubNav