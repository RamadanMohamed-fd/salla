import React from 'react'
import classes from "../intro/intro.module.css";

const Intro = () => {
  return (
    <section className={classes.intro}>
      <div className={classes.text_block} dir='rtl'>
        <h2 className={classes.text_block__title}>سلَّة.. تجارة ذكيَّة وسهلة</h2>
        <p>أنشئ متجرك الإلكتروني في دقائق، واربط منتجاتك بمجموعة متكاملة من الحلول الرقميَّة الذكيَّة للمدفوعات، والشحن، وإدارة المخزون، والتسويق، بكل سهولة؛ لأن نجاحك لا يحتاج إلى تعقيد.</p>
      </div>
      <div className={classes.button}>
            <div className='btn btn_1'>أشئ متجرك مجاناً</div>
            <div className='btn btn_2'>تجربت المنصة</div>
            </div>
    </section>
  )
}

export default Intro