'use client'
import { useEffect } from 'react'
import Transcript from './transcript'
import transcriptData from './transcriptData.json';


function TranscriptBlock() {
  return (
    <Transcript audioSrc="./Crash Course Artificial Intelligence Preview.mp3" />
  )
}
//------------------------------------------------------------------------------
// Export ----------------------------------------------------------------------
export default TranscriptBlock