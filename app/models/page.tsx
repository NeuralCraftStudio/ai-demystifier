import EdgeSovereign from "@/components/EdgeSovereign";
import HardwareMatrix from "@/components/HardwareMatrix";
import { LearningPageShell, ModuleSection } from "@/components/LearningPageShell";
import LiveIntelFeed from "@/components/LiveIntelFeed";
import ModelsExplorer from "@/components/ModelsExplorer";

export default function ModelsPage() {
  return (
    <LearningPageShell
      eyebrow="MODELS AND OWNERSHIP · 25 MINUTES"
      title="Choose tools with context, not hype."
      description="Compare common model strengths, see how open models appear in the wild, and understand the difference between cloud AI and running a model locally."
    >
      <ModuleSection title="1. Compare everyday model strengths" description="Model names change quickly. Start with the job you need done and the trade-offs you accept.">
        <ModelsExplorer />
      </ModuleSection>
      <ModuleSection title="2. See the open model ecosystem" description="Use live model activity as an invitation to investigate, not as a recommendation to download the newest upload.">
        <LiveIntelFeed />
      </ModuleSection>
      <ModuleSection title="3. Understand local and cloud trade-offs" description="Privacy, cost, performance, and device capability all shape the right choice.">
        <EdgeSovereign />
      </ModuleSection>
      <ModuleSection title="4. Match a model format to your hardware" description="This advanced guide explains why local models need compatible formats, engines, and memory.">
        <HardwareMatrix />
      </ModuleSection>
    </LearningPageShell>
  );
}