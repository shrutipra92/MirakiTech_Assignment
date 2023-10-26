import React from 'react'
import './section3.css'


const Section3 = () => {

    const CardData= [
        {
            id:1,
            head:"head1",
            para:"para1",
            url:"https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHMlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
        },
        {
            id:2,
            head:"head2",
            para:"para2",
            url:"https://thumbs.dreamstime.com/b/female-hands-typing-laptop-keyboard-screen-table-flowers-phone-female-hands-typing-laptop-keyboard-screen-101452063.jpg"
        }
    ]

  return (
    <div className='section3'>
        <div className='section-title1' >
            <h1>Say goodbye to the stress of forgotten passwords and the fear of data breaches</h1>
            <h3>Say goodbye to the stress of forgotten passwords and the fear of data breaches</h3>
        </div>
        <div class="flex-item0">
            <h4>head</h4>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPVc3XnAuJtfuohfSCNfuLoSLObxwNKh_RHrbAZ49LzAVlZyue4SBYhwSj4dXuXotCeU&usqp=CAU" alt=''/>
        </div>

        <div className='subsec3'>
            {CardData && CardData.map((item)=>
        <div class="flex-item1" key={item.id}>
            <h4>{item.head}</h4>
            <img src={item.url} alt=''/>
        </div>
        )}

            
        </div>
     
    </div>
  )
}

export default Section3
