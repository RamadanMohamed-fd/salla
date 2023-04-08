import './App.css';
import Landing from './components/landing1/Landing';
import Intro from './components/intro/Intro';
import First from './components/wrapper/First';
import Title from './components/title/Title';
import Content from './components/wrapper/Content';
import React,{useEffect,useState} from 'react';
import T from './components/t/T';
import Part from './components/part/Part';
import Owner from './components/owner/Owner';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import OpItems from './components/op_items/OpItems';

import { dummy_data } from './components/data/dummy_data';
function App() {
const h1="أكبر منصَّة سعودية للتجارة الإلكترونيَّة في الشرق الأوسط";
const p1="أنشئ متجرك الإلكتروني، وانضمَّ لعشرات الآلاف من العلامات المحلية والعالمية الناجحة مع سلة اليوم";
const title='متجرك، على ذوقك'
const title2='تجارة لا تعرف حدودًا'
const image1="https://salla.com/wp-content/themes/salla-landing-page/public/images/artworks/intro.svg";


  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="App">
      <Header/>
   <div className='burn_mask'>
      <Landing/>
      <Intro/>
   </div>
      <div className='first'>
      <Title h={h1} p={p1} />
      <First w={60} vr={20} vl={79.7} h={260} mH={70} l={'auto'} vMH={70}/>
      <Content/>
      </div>
 
      
      <OpItems/>
    

      <section className="title3">
      {offset>1650 && <T title={title} image1={image1} dir={'row'} dummy_data={dummy_data[0]}/>}
      </section>

      <section className="title2">
        {offset>2400 &&   <T title={title2} dummy_data={dummy_data[1]} image1={image1} dir={"row-reverse"} />}
      </section>

      <section className="title5">
        {offset>3100 && <Part/>}
      </section>

      <section className="title4">
     {offset>3400 &&<Owner/>}
      </section>

      <section className="title5">
     {offset>3900 && <Contact/>}
      </section>

      <Footer/>
    </div>
  );
}
export default App;
