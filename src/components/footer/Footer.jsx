import React from 'react'
import clasess from './footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope,faLocationDot,faPhone} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className={clasess.container} dir='rtl'>
        <div className={clasess.h_line} ></div>
        <div className={clasess.content}>
            <div className={clasess.r_content}>
                <p>جميع الحقوق محفوظة لدى سلة القابضة 2023 ©</p>
            </div>
            <div className={clasess.l_content}>
                <div className={clasess.phone}>
                    <FontAwesomeIcon icon={faPhone} />
                    <p>8001111210</p>
                </div>
                <div className={clasess.addres}>
                <FontAwesomeIcon icon={faLocationDot} />
                <p>مكة المكرمة، المملكة العربية السعودية</p>
                </div>
                <div className={clasess.mail}>
                <FontAwesomeIcon icon={faEnvelope} />
                <p>info@salla.sa</p>
                </div>
                <div className={clasess.image}>
                <img className='footer_image' decoding="async" src="https://salla.com/wp-content/themes/salla-landing-page/public/images/vat.png" alt="الرقم الضريبي"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer