import React from 'react'
import './trans.css'

import Content from '../content/Content'
import { GitHub } from '@mui/icons-material'
import { Link } from 'react-router-dom'


function Trans({transcript,videoId}) {
    console.log(videoId)
  return (
    <div className='transContainer'>
      <div className="home">
        <span className='homeText'>Source code</span>
         <div className="icon">
         <a href='https://github.com/harshit91796/Video_to_transcripy' className='gitHublink'><GitHub color='white' fontSize='large'  className='git'/></a>
          <span>Frontend</span>
         </div>
         <div className="icon">
         <a href='https://github.com/harshit91796/Video_to_transcript_backend' className='gitHublink'><GitHub fontSize='large' color='white'  className='git'/></a>
           <span>Backend</span>
         </div>
        
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
