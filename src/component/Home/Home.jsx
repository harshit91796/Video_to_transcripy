import React, { useRef, useState } from 'react'
import './home.css'
import Trans from '../Result/Trans'
import axiosInstance from '../../api';
import axios from 'axios';

function Home() {
    const [videoLink,setVideoLink] = useState('');
    const [transcriptData,setTranscriptData] = useState([]);
    const transRef = useRef(null);
    const inputRef = useRef(null);
   
    const handleInputValidation = () => {
        const urlPattern = /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[\w-]+(&\S*)?$/;
        if (!urlPattern.test(videoLink)) {
          // Invalid URL format, set a custom error message
          inputRef.current.setCustomValidity('Please enter a valid YouTube video URL.');
        } else {
          // Valid URL, clear any custom error message
          inputRef.current.setCustomValidity('');
        }
      };

    const handleClick = async (e)=>{
          e.preventDefault();

          handleInputValidation();
         
          if(!videoLink){
            inputRef.current.setCustomValidity('Please enter a URL');
            inputRef.current.reportValidity();
            return;
          }

          const youtubeVideoUrlRegex = /^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=[A-Za-z0-9_-]{11}/;

          if (!youtubeVideoUrlRegex.test(videoLink)) {
            inputRef.current.setCustomValidity('Please enter a valid YouTube video URL');
            inputRef.current.reportValidity();
            return;
          }

          try {
            const videoId = extractVideoId(videoLink);
            // const response = await axiosInstance.get(`/?video_id=${videoId}&lang=en`)
            const response = await axios.get(`https://youtube-transcriptor.p.rapidapi.com/transcript?video_id=${videoId}&lang=en`, {
              headers: {
                'X-RapidAPI-Key': 'b35f0a8980mshfc940de92f14ad0p15b73bjsn48f6967e6738',
                'X-RapidAPI-Host': 'youtube-transcriptor.p.rapidapi.com',
              },
            });
            
            if(!response){
                console.log('no data')
            }
            const data = response.data[0];
            console.log(data.transcription)
             setTranscriptData(data.transcription);
          
             if(transRef.current){
                transRef.current.scrollIntoView({behavior : 'smooth'});
             }

          } catch (error) {
            console.error('Error fetching transcript:', error);
          }
    }

    const extractVideoId = (link) => {
        const videoIdMatch = link.match(/(?:v=|\/)([A-Za-z0-9_-]{11})/);
        if (videoIdMatch) {
            return videoIdMatch[1];
        } else {
            return ''; 
        }
    };
     const link = extractVideoId(videoLink)
    console.log(transcriptData)
    console.log(link)
  return (
    <div className='container' >
      <img className='img' src='assets/transjpg.jpg'/>
         <div className="box">
            <div className="left">
               <h1>Video to Transcript</h1>
            </div>
            <div className="right">

              <form className='form' action="" onSubmit={handleClick}>
                <div className="formInput">
                <input type='text' onBlur={handleInputValidation} ref={inputRef} pattern='^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=[A-Za-z0-9_-]{11}' required value={videoLink} onChange={(e) => setVideoLink(e.target.value)} id='input' placeholder='paste your video link'></input>
                </div>
                <div className="formButton">
                <button type='submit' id='button'>Get</button>
                </div>
              </form>

            
            </div>
         </div>

       
       <div className="ref" ref={transRef}>
       <Trans transcript={transcriptData} videoId={link}/>
       </div>
       
           

    </div>
  )
}

export default Home
