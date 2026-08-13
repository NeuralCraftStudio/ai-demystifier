import AdaptationEngine from "@/components/AdaptationEngine";
import FutureCompass from "@/components/FutureCompass";
import { LearningPageShell, ModuleSection } from "@/components/LearningPageShell";
import LearningLaunchpad from "@/components/LearningLaunchpad";

export default function ApplyPage() {
  return (
    <LearningPageShell
      eyebrow="PRACTICAL AI · 20 MINUTES"
      title="Use AI for a real goal while keeping your agency."
      description="Choose a task, map what AI can do, set the human boundaries, and create a working agreement you can use outside this site."
    >
      <ModuleSection title="1. Make an AI Action Map" description="Choose a real task and separate human judgment, AI assistance, safe tools, risks, and evidence.">
        <LearningLaunchpad />
      </ModuleSection>
      <ModuleSection title="2. Adapt a workflow" description="Explore practical learning, business, and creative uses that start with a clear outcome rather than a tool.">
        <AdaptationEngine />
      </ModuleSection>
      <ModuleSection title="3. Define your human role" description="Consider what should remain human as AI moves from assistant to agent and collaborator.">
        <FutureCompass />
      </ModuleSection>
    </LearningPageShell>
  );
}