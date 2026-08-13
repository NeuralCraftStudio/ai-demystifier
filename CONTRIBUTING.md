# Contributing to Demystifier OS

Thank you for helping people build a trustworthy, practical relationship with AI. Contributions from learners, educators, writers, designers, researchers, and developers are all welcome.

## Ways to contribute without writing code

- Try a mission and report the exact point where it became unclear, boring, or useful.
- Source-check a timeline milestone, glossary term, or model claim.
- Suggest a five-minute mission that ends with a practical artifact.
- Improve wording for a younger learner, parent, teacher, or non-technical reader.
- Share feedback from a classroom, club, library, or community pilot.

## Good first contributions

Look for GitHub issues labeled `good first issue`, or propose one of these small improvements:

1. Add a source or clearer explanation to the AI Cheat Sheet.
2. Improve keyboard navigation, contrast, or screen-reader feedback.
3. Add a test for an interactive learning component.
4. Fix a mobile layout issue or unclear sentence.
5. Create a small mission card that follows the challenge → practice → verify → keep loop.

## Mission design rules

A good Demystifier OS mission is:

- **short:** it can be completed in roughly 5–20 minutes;
- **useful:** it ends with something a learner can use today;
- **honest:** it states uncertainty and avoids exaggerated capability claims;
- **human-first:** it keeps important judgment, approvals, and accountability with the person;
- **safe:** it does not reward bypassing protections, expose sensitive data, or encourage harmful tool use;
- **traceable:** factual claims link to credible sources when practical.

## Development workflow

1. Fork the repository and clone your fork.
2. Create a focused branch, for example `feat/glossary-rag-definition`.
3. Make the smallest useful change.
4. Run the quality checks:

   ```bash
   npm run lint
   npm test -- --run
   npm run build
   ```

5. Open a pull request against `main` with:
   - what changed;
   - why it helps learners;
   - how you tested it;
   - sources for educational claims, where relevant.

## Design and accessibility

- Keep the dark, calm, futuristic visual language—but never let decoration obscure learning.
- Use Tailwind CSS and `lucide-react` icons.
- Make every interactive control reachable by keyboard and understandable without color alone.
- Prefer short explanations, clear outcomes, and progressive disclosure over dense dashboards.

## Pilot feedback

If you test Demystifier OS with learners, please share:

1. Who the learners were and their familiarity with AI.
2. Which route they completed.
3. Where they paused, got confused, or lost interest.
4. Whether they used the final artifact after leaving the site.
5. One improvement they would make.

See [docs/pilot-outreach.md](docs/pilot-outreach.md) for an ethical, low-pressure way to recruit and run small pilots.