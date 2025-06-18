Mastra Eval with Agent using instructions function
==================================================

This repository is a reproduction of an issue found when trying to evaluate an
agent which has its instructions set via a function rather than a constant. To
use it:

```sh
pnpm install
pnpm run test
```

You should see the error:

```
stderr | src/mastra/agents/weather-agent.test.ts > Weather Agent > should validate tone consistency
Global run id not set, you should run "globalSetup" from "@mastra/evals" before evaluating.
{"message":"Instructions are not compatible when instructions are a function. Please use getInstructions() instead.","details":{"message":"Instructions are not compatible when instructions are a function. Please use getInstructions() instead.","domain":"AGENT","category":"USER","details":{"agentName":"Weather Agent"}},"code":"AGENT_INSTRUCTIONS_INCOMPATIBLE_WITH_FUNCTION_INSTRUCTIONS"}

 ❯ src/mastra/agents/weather-agent.test.ts (1 test | 1 failed) 1834ms
   × Weather Agent > should validate tone consistency 1834ms
     → Instructions are not compatible when instructions are a function. Please use getInstructions() instead.

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/mastra/agents/weather-agent.test.ts > Weather Agent > should validate tone consistency
Error: Instructions are not compatible when instructions are a function. Please use getInstructions() instead.
 ❯ Agent.get instructions [as instructions] node_modules/.pnpm/@mastra+core@0.10.6_openapi-types@12.1.3_react@19.1.0_zod@3.25.67/node_modules/@mastra/core/dist/chunk-RFGZJIMI.js:260:27
 ❯ evaluate node_modules/.pnpm/@mastra+evals@0.10.4_@mastra+core@0.10.6_ai@4.3.16/node_modules/@mastra/evals/dist/index.js:29:25
 ❯ src/mastra/agents/weather-agent.test.ts:10:20
      8|   it('should validate tone consistency', async () => {
      9|     const metric = new ToneConsistencyMetric()
     10|     const result = await evaluate(weatherAgent, 'What can you do?', metric)
       |                    ^
     11|     expect(result.score).toBeGreaterThan(0.8)
     12|   })

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯


 Test Files  1 failed (1)
      Tests  1 failed (1)
```

When the expected output was for the test to succeed.
