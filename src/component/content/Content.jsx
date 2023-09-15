import React from 'react'
import './content.css'

function Content({content}) {
    // console.log(content[1] )
    // const joinedContent = content.map((x) => x.subtitle).join('\n');
  return (
    <div className='content'>
       {
        content.map((x)=>{
            return <p>{x.subtitle}</p>
        })
       }
    </div>
  )
}

export default Content
