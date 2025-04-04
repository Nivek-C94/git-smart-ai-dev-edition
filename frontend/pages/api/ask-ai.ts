import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  const { prompt, userId } = req.body;
  if (!prompt || !userId) {
    return res.status(400).json({ error: 'Missing prompt or userId' })
  }
  const { consumeTrial, getTrialUsage } = require('../../lib/trialManager')
  const allowed = consumeTrial(userId)
  if (!allowed) {
    return res.status(403).json({
      error: 'Trial limit reached. Upgrade to continue.',
      remaining: 0
    })
  }
  }

  try {
    const apiKey = process.env.OPENAI_API_KEY
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 1000,
        temperature: 0.7
      })
    return res.status(200).json({
      result: result.choices[0]?.message?.content,
      remaining: getTrialUsage(userId)
    })
    const result = await response.json()
    return res.status(200).json({ result: result.choices[0]?.message?.content })
  } catch (error) {
    console.error('OpenAI API Error:', error)
    return res.status(500).json({ error: 'Failed to generate response' })
  }
}