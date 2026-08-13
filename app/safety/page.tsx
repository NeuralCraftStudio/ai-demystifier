import { LearningPageShell, ModuleSection } from "@/components/LearningPageShell";
import NeuralJailbreak from "@/components/NeuralJailbreak";

export default function SafetyPage() {
  return (
    <LearningPageShell
      eyebrow="SAFETY LAB · 10 MINUTES"
      title="Understand why guardrails and human review matter."
      description="This simplified simulation shows how manipulative instruction patterns can create risk. The goal is to recognise unsafe behavior and design stronger boundaries, not to defeat safeguards."
    >
      <ModuleSection title="Test a simplified guardrail" description="After trying the simulation, ask: what instructions, data access, permissions, and human approvals would make a real system safer?">
        <NeuralJailbreak />
      </ModuleSection>
    </LearningPageShell>
  );
}