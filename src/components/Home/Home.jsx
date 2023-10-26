import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import Section3 from '../Section3/Section3';
import Section7 from '../Section7/Section7';

import Footer from '../Footer/Footer'



const Home = () => {
  return (
    <div className='container'>
       <div className='main-section'>
       <Header/>
       <Section1/>
       </div>
       <div className='sub-section'>
       <Section2/>
       </div>
       <div className='sub-section1'>
       <Section3/>
       </div>
       <div className='sub-section7'>
        <Section7/>
       </div>
       <div className='sub-section-footer'>
        <Footer/>
       </div>
    </div>
  )
}

export default Home
