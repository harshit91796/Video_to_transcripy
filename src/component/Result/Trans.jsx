import React from 'react'
import './trans.css'
import Content from '../content/Content'


function Trans({transcript,videoId}) {
    console.log(videoId)
  return (
    <div className='transContainer'>
      <div className="home">
        <span className='homeText'>Home</span>
      </div>
      <div className="videoContainer">
           <div className="video">
           <iframe
                title='Embedded Video'
                width='560'
                height='315'
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
       ></iframe>
           </div>
      </div>
     <div className="transContent">
         <Content content={transcript}/>
     </div>
      
     
    </div>
  )
}

export default Trans
