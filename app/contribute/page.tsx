import GitSandbox from "@/components/GitSandbox";
import { LearningPageShell, ModuleSection } from "@/components/LearningPageShell";

export default function ContributePage() {
  return (
    <LearningPageShell
      eyebrow="OPEN SOURCE · 5 MINUTES"
      title="Make the learning platform better with others."
      description="Demystifier_OS is open source. Start by understanding the basic Git flow, then use the contribution guide to suggest or build an improvement."
    >
      <ModuleSection title="Practice the Git flow" description="This visual sandbox shows the journey from a file on your computer to a shared update on GitHub.">
        <GitSandbox />
      </ModuleSection>
    </LearningPageShell>
  );
}