import { describe, it, expect } from 'vitest'
import { evaluate } from '@mastra/evals'
import { ToneConsistencyMetric } from '@mastra/evals/nlp'

import { weatherAgent } from './weather-agent'

describe('Weather Agent', () => {
  it('should validate tone consistency', async () => {
    const metric = new ToneConsistencyMetric()
    const result = await evaluate(weatherAgent, 'What can you do?', metric)
    expect(result.score).toBeGreaterThan(0.8)
  })
})
