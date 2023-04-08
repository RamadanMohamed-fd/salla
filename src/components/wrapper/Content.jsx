import React,{useEffect,useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStore,faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import classes from './content.module.css';
const Content = (props) => {
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
  return (
    <div className={classes.content} dir='rtl'>
    {offset>450&& <div className={classes.circle}><FontAwesomeIcon icon={faStore} className={classes.icon}/>
    <h2><span className={classes.c}></span>,000+</h2>
    <p>متجر إلكتروني</p>
    </div>}
   {offset>450&& <div className={classes.circle}><FontAwesomeIcon icon={faMoneyCheckDollar} className={classes.icon}/>
    <h2><span className={classes.c1}></span>000M +</h2>
    <p>مبيعات المنصة</p>
    </div>}

    </div>
  )
}

export default Content