# browser-use-node

Browser automation powered by LLMs in JavaScript/TypeScript.

## Overview

`browser-use-node` is a powerful library that combines browser automation capabilities with Large Language Models (LLMs) to create intelligent browser interactions. Built on top of Playwright and LangChain, it provides a seamless way to automate browser tasks with AI assistance.

This is a JavaScript/TypeScript port of the original [browser-use](https://github.com/browser-use/browser-use) Python library.

## Credits

This project is based on [browser-use](https://github.com/browser-use/browser-use), originally created by:
- [Shroominic](https://github.com/Shroominic)
- [LangChain](https://github.com/langchain-ai)

We are grateful for their pioneering work in browser automation with LLMs.

## Features

- LLM-powered browser automation
- Multi-tab support
- Built on reliable technologies (Playwright, LangChain)
- TypeScript support
- Modern async/await API

## Installation

```bash
npm install browser-use-node
```

### Requirements

- Node.js >= 18.0.0
- npm or yarn
- OpenAI API key

### Setting Up Your OpenAI API Key

There are several ways to configure your OpenAI API key:

1. Using environment variables directly:
```bash
export OPENAI_API_KEY=your_api_key_here
```

2. Using a `.env` file:
```bash
# Create a .env file in your project root
echo "OPENAI_API_KEY=your_api_key_here" > .env

# Install dotenv if you haven't already
npm install dotenv

# In your code
import * as dotenv from 'dotenv';
dotenv.config();
```

3. Using environment variables in Windows:
```cmd
set OPENAI_API_KEY=your_api_key_here
```

4. Passing the API key directly in code (not recommended for production):
```typescript
const llm = new ChatOpenAI({
  modelName: "gpt-4",
  openAIApiKey: "your_api_key_here", // Not recommended for production
  maxTokens: 500,
  temperature: 0,
});
```

> ⚠️ **Security Note**: Never commit your API key to version control. Always use environment variables or secure secret management in production.

## Quick Start

First, make sure to set up your OpenAI API key in your environment variables:

```bash
export OPENAI_API_KEY=your_api_key_here
```

Then, create a simple browser automation script:

```typescript
import { ChatOpenAI } from "langchain/chat_models/openai";
import { Agent } from "browser-use-node";

async function main() {
  // Initialize the LLM
  const llm = new ChatOpenAI({
    modelName: "gpt-4",
    openAIApiKey: process.env.OPENAI_API_KEY,
    maxTokens: 500,
    temperature: 0,
  });

  // Create and run the agent
  const agent = new Agent({
    task: "Search for a product on Amazon",
    llm,
  });

  try {
    const result = await agent.run(5); // Allow up to 5 steps for the operation
    console.log("Agent result:", result);
  } catch (error) {
    console.error("Error running agent:", error);
  }
}

main().catch(console.error);
```

This example demonstrates how to:
1. Set up the LLM (GPT-4 in this case)
2. Create an Agent with a specific task
3. Run the agent and handle the results

## Examples

The library comes with several example scripts that demonstrate its capabilities:

1. Amazon Search Example:
```bash
npm run example:amazon
```

2. Multi-tab Operations:
```bash
npm run example:multi-tab
```

## API Documentation

Coming soon...

## Development

To set up the development environment:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Lint the code
npm run lint

# Format the code
npm run format
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
Please see [CONTRIBUTING.md](CONTRIBUTING.md) for more information.


## Roadmap

# Browser Agent TODO List

## Core Features & Improvements

Action System:
[ ] Update action registration to match Python decorator style
[ ] Add proper validation for action parameters
[ ] Add network stabilization checks between actions
[ ] Add proper state tracking in multiAct

Logging & Error Handling:
[ ] Add proper logging system using Python's logging module
[ ] Add proper error handling with context and stack traces
[ ] Add proper state persistence between actions
[ ] Add proper event management system
[ ] Add proper resource cleanup

Testing & Documentation:
[ ] Add proper test coverage for all actions
[ ] Add proper documentation for all actions
[ ] Add proper configuration management
[ ] Add proper performance monitoring
[ ] Add proper security measures

Monitoring & Reliability:
[ ] Add proper error reporting
[ ] Add proper debugging support
[ ] Add proper monitoring system
[ ] Add proper metrics collection
[ ] Add proper analytics support

System Health & Resilience:
[ ] Add proper health checks
[ ] Add proper rate limiting
[ ] Add proper caching system
[ ] Add proper retry mechanism
[ ] Add proper timeout handling
[ ] Add proper fallback mechanisms
[ ] Add proper circuit breaker
[ ] Add proper bulkhead pattern
[ ] Add proper throttling
[ ] Add proper backpressure handling
[ ] Add proper graceful degradation
[ ] Add proper service discovery
[ ] Add proper load balancing
[ ] Add proper health monitoring
[ ] Add proper alerting system
[ ] Add proper monitoring dashboard

Registry Module:
[ ] Add dynamic action registration
[ ] Implement action validation
[ ] Add action documentation generation

## Technical Debt & Improvements

Linter Fixes:
[ ] Replace 'any' types with proper types
[ ] Fix non-null assertions
[ ] Fix property access on DOMBaseNode
[ ] Fix XPath regex patterns
[ ] Add proper type definitions

Testing:
[ ] Add unit tests for core modules
[ ] Add integration tests
[ ] Add browser automation tests
[ ] Add performance benchmarks

Documentation:
[ ] Add API documentation
[ ] Add usage examples
[ ] Add troubleshooting guide
[ ] Add architecture overview

## Configuration Enhancements

Missing Options:
[ ] Add vision support
[ ] Add network timeouts
[ ] Add enhanced proxy settings
[ ] Add Chrome instance settings

Default Values:
[ ] Update browser window size
[ ] Update network timeouts
[ ] Update security settings

## Performance & Architecture

Performance Optimizations:
[ ] Add resource pooling
[ ] Add connection reuse
[ ] Add memory management
[ ] Add cache strategies

Architecture Improvements:
[ ] Enhance logging system
[ ] Improve error handling
[ ] Add state persistence
[ ] Improve event management
[ ] Add resource cleanup

Dependencies Needed:
[ ] winston - For logging system that matches Python's logging module
[ ] winston-daily-rotate-file - For rotating log files
[ ] winston-transport - For custom log transports
[ ] @types/winston - For TypeScript type definitions
[ ] @sentry/node - For error tracking
[ ] @sentry/tracing - For performance monitoring
[ ] pino - For high-performance logging
[ ] bunyan - For structured logging
[ ] debug - For debug logging
[ ] source-map-support - For proper stack traces

Logging System Implementation:
[ ] Create Logger class that matches Python's logging module
[ ] Add log rotation support
[ ] Add custom log formats
[ ] Add log file transport
[ ] Add console transport
[ ] Add error logging with stack traces
[ ] Add debug logging
[ ] Add performance logging
[ ] Add request/response logging
[ ] Add audit logging
[ ] Add security logging
[ ] Add application logging
[ ] Add system logging
[ ] Add access logging
[ ] Add error reporting
[ ] Add log aggregation
[ ] Add log analysis
[ ] Add log visualization
[ ] Add log alerting
[ ] Add log monitoring
[ ] Add log archiving
[ ] Add log cleanup

Error Handling Improvements:
[✓] Add proper error types for all possible errors
[✓] Add error context with stack traces
[✓] Add error recovery strategies
[✓] Add error reporting to monitoring system
[ ] Add error aggregation
[ ] Add error analysis
[ ] Add error visualization
[ ] Add error alerting
[ ] Add error monitoring
[ ] Add error archiving
[ ] Add error cleanup

Next Steps for Error Handling:
[ ] Add error tracking service integration (e.g., Sentry)
[ ] Add error rate monitoring
[ ] Add error pattern detection
[ ] Add error correlation
[ ] Add error impact analysis
[ ] Add error resolution tracking
[ ] Add error notification system
[ ] Add error escalation system
[ ] Add error documentation system
[ ] Add error prevention system

State Management Improvements:
[ ] Add proper state persistence
[ ] Add state recovery
[ ] Add state validation
[ ] Add state cleanup
[ ] Add state monitoring
[ ] Add state visualization
[ ] Add state analysis
[ ] Add state alerting
[ ] Add state archiving

Performance Monitoring:
[ ] Add performance metrics collection
[ ] Add performance analysis
[ ] Add performance visualization
[ ] Add performance alerting
[ ] Add performance monitoring
[ ] Add performance optimization
[ ] Add performance testing
[ ] Add performance benchmarking
[ ] Add performance profiling
[ ] Add performance tuning

Security Improvements:
[ ] Add security audit logging
[ ] Add security monitoring
[ ] Add security alerting
[ ] Add security analysis
[ ] Add security visualization
[ ] Add security testing
[ ] Add security scanning
[ ] Add security hardening
[ ] Add security compliance
[ ] Add security reporting

Testing Improvements:
[ ] Add unit tests for all components
[ ] Add integration tests
[ ] Add end-to-end tests
[ ] Add performance tests
[ ] Add security tests
[ ] Add load tests
[ ] Add stress tests
[ ] Add chaos tests
[ ] Add compliance tests
[ ] Add acceptance tests

Documentation Improvements:
[ ] Add API documentation
[ ] Add user documentation
[ ] Add developer documentation
[ ] Add deployment documentation
[ ] Add operation documentation
[ ] Add troubleshooting documentation
[ ] Add security documentation
[ ] Add compliance documentation
[ ] Add architecture documentation
[ ] Add design documentation
