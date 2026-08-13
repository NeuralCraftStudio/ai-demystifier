import ComputeMatrix from "@/components/ComputeMatrix";
import { LearningPageShell, ModuleSection } from "@/components/LearningPageShell";

export default function ImpactPage() {
  return (
    <LearningPageShell
      eyebrow="IMPACT · 5 MINUTES"
      title="See the physical side of AI."
      description="Cloud AI still depends on real servers, power, water, and infrastructure. Use this simulation as a starting point for more responsible questions about scale and usage."
    >
      <ModuleSection title="Explore compute demand" description="The figures are illustrative rather than a universal measurement. Actual impact varies by model, hardware, location, and workload.">
        <ComputeMatrix />
      </ModuleSection>
    </LearningPageShell>
  );
}