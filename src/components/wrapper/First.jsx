import React,{useEffect,useState} from 'react'

import classes from './first.module.css'
const First = (props) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
  return (
    <section className={classes.section__first}>
    <div className={classes.section__inner}>
      <div className={classes.section_lines_desktop__vertical_line} 
      style={{height:`${offset-props.h}px`,maxHeight:`${props.mH}px` }}></div>
      {offset >props.h + 100&&<div className={classes.section_lines_desktop__horizontal_line} style={{width:`${props.w}%`,left:`${props.l}`}}></div>}
      <div className={`${classes.section_lines_desktop__vertical_line} ${classes.vr}`} 
      style={{height:`${offset-(props.h+150)}px` , left:`${props.vr}%`,maxHeight:`${props.vMH}px` }} ></div>
      <div className={`${classes.section_lines_desktop__vertical_line} ${classes.vl}`} 
      style={{height:`${offset-(props.h+150)}px`, left:`${props.vl}%`,maxHeight:`${props.vMH}px`}}></div>
    </div>
  
  </section>
  )
}

export default First