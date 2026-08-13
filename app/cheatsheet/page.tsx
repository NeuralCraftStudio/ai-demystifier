import type { Metadata } from "next";
import AICheatSheet from "@/components/AICheatSheet";
import { LearningPageShell } from "@/components/LearningPageShell";

export const metadata: Metadata = {
  title: "AI Cheat Sheet | Demystifier OS",
  description: "A plain-language AI glossary covering MCP, agents, LLMs, RAG, tokens, model terms, and current AI vocabulary.",
};

export default function CheatSheetPage() {
  return (
    <LearningPageShell
      eyebrow="AI CHEAT SHEET · SEARCHABLE"
      title="Decode AI words without decoding the hype."
      description="MCP, LLM, RAG, agents, tokens, evals, open weights, and more—explained in plain language with the reason each term matters."
    >
      <AICheatSheet />
    </LearningPageShell>
  );
}