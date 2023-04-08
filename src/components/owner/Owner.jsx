import React from 'react'
import clasess from './owner.module.css'
const Owner = () => {
  return (
    <div className={clasess.container}>
        <h2>امتلك متجراً احترافياً في سلة</h2>
        <p>أنشئ متجرك الآن بأدوات مرنة وحلول متكاملة تساعدك في كل خطوة نحو نمو مبيعاتك وتسويق منتجاتك</p>
        <div className={clasess.button}>أنشئ متجرك مجاناً</div>
    </div>
  )
}

export default Owner