import React from 'react'
import Offset from '../../Offset';
import OpItem from '../op_item/OpItem';
import Title from '../title/Title';
import { salla_op_data } from '../data/salla_op_data';
const h2="سلة تفهم كافة احتياجاتك";
const p2="مهما كان مجال تجارتك يمكنك الاعتماد على سلة ودعمها لمختلف القطاعات";
const OpItems = () => {
  return (
     <section className="title2">
        <Title h={h2} p={p2} />
        <div className='item1'>
        {salla_op_data.map((item)=>(
        <OpItem key={item.id} h={item.header} par={item.par} icon={item.icon}/>
        ))}
        </div>
    </section>
  )
}

export default OpItems