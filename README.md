# 🌌 Demystifier OS

> **A practical operating system for learning and living with AI.**

[![License: PolyForm Noncommercial](https://img.shields.io/badge/License-PolyForm_Noncommercial-blue.svg)](https://polyformproject.org/licenses/noncommercial/1.0.0/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

AI should not be a black box, a shortcut for avoiding thought, or a source of constant hype. **Demystifier OS** helps beginners build useful habits: challenge confident claims, set boundaries for AI tools, use AI for real work, and keep human judgment in control.

The name means exactly that: it is an **operating system for human agency in an AI-shaped world**, not an operating system for a computer.

## Start with a path

The homepage is a route chooser rather than a long dashboard. Every route has a clear purpose and practical outcome.

| Path | What learners do | Outcome |
| --- | --- | --- |
| **Student Mission** | Catch a weak AI claim, create a study prompt, and verify answers. | A copyable 20-minute AI Study Sprint. |
| **Learn** | Explore truth checking, tokens, temperature, and prompt structure. | A better mental model for using LLMs. |
| **Apply** | Map a real task, safe boundaries, and the human role. | An AI Action Map and Human–AI Pact. |
| **Models** | Compare model strengths, local AI, open models, and hardware needs. | A more informed tool choice. |
| **Safety** | Explore risky instruction patterns and defensive controls. | A practical model for permissions and approvals. |
| **AI Cheat Sheet** | Search plain-language definitions for MCP, RAG, agents, LLMs, and more. | Vocabulary to follow modern AI conversations. |
| **AI History** | Explore concise, sourced milestones from early AI to connected AI systems. | Context for what changed and what remains human. |

## What makes this different

Most AI resources stop at a list of tools or prompts. Demystifier OS uses a different loop:

1. **Challenge** an AI claim or decision.
2. **Practice** with a bounded, real-world task.
3. **Verify** facts, sources, permissions, and data boundaries.
4. **Keep** a reusable artifact such as a Study Sprint or Action Map.

The goal is not to make every learner an AI engineer. It is to help them use AI productively without outsourcing their thinking.

## Run locally

**Requirements:** Node.js 20.9 or later.

1. Clone the repository:

   ```bash
   git clone https://github.com/NeuralCraftStudio/ai-demystifier.git
   cd ai-demystifier
   ```

2. Install dependencies and start the app:

   ```bash
   npm install
   npm run dev
   ```

3. Open the local address printed by Next.js, usually `http://localhost:3000`.

### Quality checks

```bash
npm run lint
npm test -- --run
npm run build
```

## Run a small learner pilot

The best first audience is students learning with AI without outsourcing their thinking. Start with a small, friendly group rather than a huge public launch.

1. Invite 5–10 learners to complete the Student Mission.
2. Ask whether they finished the Study Sprint, understood the verification rule, and would use the plan in their next study session.
3. Repeat with a club, classroom, library, or community group.
4. Improve the mission based on where learners stop or get confused.

See [the pilot outreach playbook](docs/pilot-outreach.md) for invitation templates, fun session formats, and a plan for reaching the first 50 learners.

## Privacy and content notes

- The learning missions do not require an account or send learner answers to a server.
- The Live Model Intel feature makes a request to the public Hugging Face model API **only when a learner presses its sync button**. It does not send user-entered learning content to Hugging Face.
- AI capabilities, model names, prices, privacy policies, and terminology change quickly. Treat the model explorer and cheat sheet as learning guides; verify important current information with primary sources.
- Educational examples are simplified. They are not legal, medical, academic-integrity, or security advice.

## Contribute

Contributions are welcome from learners, educators, designers, writers, researchers, and developers—not only AI specialists.

Good first contributions include:

- source-checking or improving a glossary definition;
- adding a test or accessibility improvement;
- reporting confusing copy or a mobile issue;
- proposing a new five-minute mission with a real-world outcome;
- sharing learner-pilot feedback.

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Tech stack

- **Framework:** Next.js App Router and React
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Tests:** Vitest and Testing Library

## License

This repository is licensed under the **PolyForm Noncommercial License 1.0.0**. See [LICENSE](LICENSE) for the full terms.