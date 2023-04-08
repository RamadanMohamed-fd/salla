import React,{useEffect,useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './Op_item.module.css'
const OpItem = (props) => {
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
  return (
    <div className={classes.content} dir='rtl'>
    {offset>1000&& <div className={classes.circle}>
    <FontAwesomeIcon icon={props.icon} className={classes.icon}/>
   <div className={classes.text}>
   <h2>{props.h}</h2>
    <p>{props.par}</p>
   </div>
    </div>}
    </div>
  )
}

export default OpItem