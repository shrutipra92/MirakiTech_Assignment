import React from 'react'
import './section1.css'


const Section1 = () => {
  return (
    <div className='section1'>
        <div className='section-title' >
            <div><h1>Say goodbye to the stress of forgotten passwords and the fear of data breaches</h1></div>
            <div><h3>Say goodbye to the stress of forgotten passwords and the fear of data breaches</h3></div>
        </div>
        
        <div className='subsec1'>
        <button type = "button" className='btn1'>Try Now</button>
        <button type = "button" className='btn2'>Learn</button>
        </div>
        <div>
            <img src='../images\img1.png' alt='img1' />
        </div>
     
    </div>
  )
}

export default Section1
