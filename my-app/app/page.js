'use client'
// import Transcript from '@/components/transcript'
import TranscriptBlock from '/components/transcriptBlock.js'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <h1>This is a transcript</h1>
      <TranscriptBlock/>
    </div>
    </main>
  )
}
