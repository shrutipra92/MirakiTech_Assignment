import React from 'react'
import './section2.css'

const Section2 = () => {

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
        },
        {
            id:3,
            head:"head3",
            para:"para3",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTol2ypajTL_DfGCDp5xBZ9W-IEi6wCLOb9pKYoXl-bAO5jLU5JQJozu1OcZQCQcMgeo04&usqp=CAU"
        },
        {
            id:4,
            head:"head4",
            para:"para4",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPVc3XnAuJtfuohfSCNfuLoSLObxwNKh_RHrbAZ49LzAVlZyue4SBYhwSj4dXuXotCeU&usqp=CAU"
        }
    ]



  return (
    <div className='section2'>
        <div className='section-title1' >
            <h1>Say goodbye to the stress of forgotten passwords and the fear of data breaches</h1>
            <h3>Say goodbye to the stress of forgotten passwords and the fear of data breaches</h3>
        </div>
        
        <div className='subsec2'>
            {CardData && CardData.map((item)=>
        <div class="flex-item" key={item.id}>
            <h4>{item.head}</h4>
            <p>{item.para}</p>
            <img src={item.url} alt=''/>
        </div>
        )}

            
        </div>
     
    </div>
  )
}

export default Section2
