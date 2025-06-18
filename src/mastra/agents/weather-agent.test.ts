import { describe, it, expect } from 'vitest'
import { evaluate } from '@mastra/evals'
import { ToneConsistencyMetric } from '@mastra/evals/nlp'

import { weatherAgent } from './weather-agent'

describe('Weather Agent', () => {
  it('should fail when validating tone consistency with `evaluate`', async () => {
    const metric = new ToneConsistencyMetric()
    const result = await evaluate(weatherAgent, 'What can you do?', metric)
    expect(result.score).toBeGreaterThan(0.8)
  })

  it('should validate tone consistency when measuring it directly', async () => {
    const input = 'What can you do?'
    const metric = new ToneConsistencyMetric()
    const { text: output } = await weatherAgent.generate(input)
    const result = await metric.measure(input, output)
    expect(result.score).toBeGreaterThan(0.9)
  })
})
