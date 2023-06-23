import React, { useEffect, useState, useRef } from 'react';
import transcriptData from './transcriptData.json';
import './transcript.css'

function Transcript({ audioSrc }) {
  console.log('audioSrc', audioSrc)
  const [activeWordIndex, setActiveWordIndex] = useState(null);
  const audioRef = useRef();

  // Function to create the HTML for the transcript
  function createTranscript() {
    return transcriptData.words.map((word, index) => (
      <span key={index} id={`word-${index}`} className={index === activeWordIndex ? 'active' : ''}>
        {word.text + ' '}
      </span>
    ));
  }
  
  // Event handler for the timeupdate event
  function handleTimeUpdate() {
    const time = audioRef.current.currentTime * 1000; // convert to milliseconds
  
    for(let i = 0; i < transcriptData.words.length; i++) {
      const word = transcriptData.words[i];
      if (time >= word.start && time <= word.end) {
        setActiveWordIndex(i);
        break;
      }
    }
  }

  // Effect to add the event listener when the component mounts and remove it when it unmounts
  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div>
      <audio src={audioSrc} ref={audioRef} controls />
      <div id="transcript">
        {createTranscript()}
      </div>
    </div>
  );
}

export default Transcript;
