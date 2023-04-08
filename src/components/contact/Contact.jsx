import React from 'react'
import clasess from './contact.module.css';
import google from '../../images/th.jpg';
import play from '../../images/th (1).jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faYoutube,faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className={clasess.container} dir='rtl'>
        <div className={clasess.c_cont}>
           <div className={clasess.item}>

            <h3>سلة</h3>
            <div className={clasess.i}>
                <p>منصة ابمقترحات</p>
                <p>أنضم لفري سلة</p>
                <p>أتفاقية الأستخدام</p>
                <p>سياسة الخصوصية</p>
            </div>
           </div>

           <div className={clasess.item}>
            <h3>متجر التطبيقات</h3>
            <div className={clasess.i}>
                <p>ما هو متجر تطبيقات سلة ؟</p>
                <p>تصفح التطبيقات</p>
            </div>
           </div>

           <div className={clasess.item}>
            <h3>صانع التطبيقات</h3>
            <div className={clasess.i}>
                <p>ما هو صانع التطبيقات ؟</p>
                <p>أصنع تطبيقاً لمتجرك</p>
            </div>
           </div>

           <div className={clasess.item}>
            <h3>الخدمات المساندة</h3>
            <div className={clasess.i}>
                <p>مركز المساعدة</p>
                <p>أكاديمة سلة</p>
                <p>مجتمع تجار سلة</p>
                <p>منصة الشكاوى</p>
            </div>
           </div>

        </div>
        <div className={clasess.r_cont}>
            <div className={clasess.store}>
                <img src={google}/>
                <img src={play}/>
            </div>
            <div className={clasess.so}>
            <FontAwesomeIcon icon={faYoutube} className={clasess.icon}/>
            <FontAwesomeIcon icon={faTwitter} className={clasess.icon}/>
            <FontAwesomeIcon icon={faInstagramSquare} className={clasess.icon}/>
            </div>
        </div>
    </div>
  )
}

export default Contact