import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
import { v4 as uuidv4 } from 'uuid'

const localIdKey = 'gsa_user_id'
function getUserId() {
  const handleSubmit = async () => {
    const userId = getUserId()
    const res = await fetch('/api/ask-ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: message, userId })
    })
    const data = await res.json()
    if (data.error) {
      setResponse(`❌ ${data.error}`)
    } else {
      setResponse(`${data.result}\n\n🔁 Remaining trial uses: ${data.remaining}`)
    }
  }
    const res = await fetch('/api/ask-ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: message })
    })
    const data = await res.json()
    setResponse(data?.result || 'No response')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Head>
        <title>Git-Smart-AI</title>
      </Head>
      <main className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Git-Smart-AI</h1>
        <textarea
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe what you want to build..."
          className="w-full p-3 border border-gray-300 rounded mb-4"
        />
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-2 rounded">
          Ask AI
        </button>
        {response && (
          <pre className="bg-white mt-6 p-4 border rounded whitespace-pre-wrap">
            {response}
          </pre>
        )}
      </main>
    </div>
  )
}