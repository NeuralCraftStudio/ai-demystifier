import AIBrainVisualizer from "@/components/AIBrainVisualizer";
import { LearningPageShell, ModuleSection } from "@/components/LearningPageShell";
import PromptHacker from "@/components/PromptHacker";
import TruthRelay from "@/components/TruthRelay";

export default function LearnPage() {
  return (
    <LearningPageShell
      eyebrow="THE ESSENTIALS · 15 MINUTES"
      title="Learn the few AI ideas that change how you use it."
      description="Start by challenging AI, then see how language models process text and how better requests change the result. You do not need technical experience."
    >
      <ModuleSection title="1. Challenge a believable answer" description="Build your first reflex: confidence is not evidence, and automation needs clear boundaries.">
        <TruthRelay />
      </ModuleSection>
      <ModuleSection title="2. See what a language model receives" description="Explore the simplified ideas of tokens and temperature before deciding when those controls matter.">
        <AIBrainVisualizer />
      </ModuleSection>
      <ModuleSection title="3. Turn a vague request into useful collaboration" description="Experiment with role, context, and format. Then take the habit into your next real prompt.">
        <PromptHacker />
      </ModuleSection>
    </LearningPageShell>
  );
}