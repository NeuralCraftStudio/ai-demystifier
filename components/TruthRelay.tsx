"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  RotateCcw,
  Send,
  ShieldQuestion,
  Sparkles,
  XCircle,
} from "lucide-react";

type Challenge = {
  signal: string;
  scenario: string;
  question: string;
  choices: string[];
  answer: number;
  lesson: string;
};

const challenges: Challenge[] = [
  {
    signal: "Confidence is not evidence",
    scenario: "An AI gives a polished answer with three impressive-looking citations, but none of the links open.",
    question: "What is the strongest next move?",
    choices: ["Use the answer because it sounds well researched", "Verify the important claims with reliable sources", "Ask the AI to sound even more certain"],
    answer: 1,
    lesson: "AI can generate plausible details and citations. Check the evidence before you reuse a claim.",
  },
  {
    signal: "Autonomy needs boundaries",
    scenario: "A scheduling agent can read your calendar and send messages to anyone it finds there.",
    question: "What should you define before activating it?",
    choices: ["Every possible action it can take, plus approval points", "Nothing, because automation is supposed to be hands-free", "Only its writing style"],
    answer: 0,
    lesson: "An agent is more than a chatbot when it uses tools. Clear permissions and approval steps keep people in control.",
  },
  {
    signal: "Convenience has a data cost",
    scenario: "A free AI tool asks you to paste a customer complaint so it can draft a reply.",
    question: "What protects the customer and your team?",
    choices: ["Paste the whole message immediately", "Remove personal details and use an approved tool", "Ask the tool to promise it will be private"],
    answer: 1,
    lesson: "Only share data you are allowed to share. An AI promise is not a privacy policy or a company approval process.",
  },
];

export default function TruthRelay() {
  const [round, setRound] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [shareStatus, setShareStatus] = useState("");
  const challenge = challenges[round];
  const complete = round === challenges.length;
  const score = answers.filter((answer, index) => answer === challenges[index].answer).length;

  const selectAnswer = (choice: number) => {
    if (selected !== null) return;
    setSelected(choice);
    setAnswers((current) => [...current, choice]);
  };

  const nextChallenge = () => {
    if (selected === null) return;
    setSelected(null);
    setRound((current) => current + 1);
  };

  const reset = () => {
    setRound(0);
    setAnswers([]);
    setSelected(null);
    setShareStatus("");
  };

  const shareRule = async () => {
    const text = "My AI rule: confident output is not evidence. I verify important claims, protect data, and keep people accountable. #AIDemystifier";
    try {
      if (navigator.share) {
        await navigator.share({ title: "My AI rule", text });
        setShareStatus("Your share sheet is open.");
        return;
      }

      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        setShareStatus("Your AI rule was copied. Share it with someone learning AI with you.");
        return;
      }

      setShareStatus("Sharing is unavailable in this browser. You can still copy the AI rule above.");
    } catch {
      setShareStatus("No share was sent. Your AI rule remains here whenever you are ready.");
    }
  };

  return (
    <section aria-labelledby="truth-relay-title" className="relative overflow-hidden rounded-2xl border border-amber-300/30 bg-slate-950 p-6 text-white shadow-2xl md:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(251,191,36,0.18),transparent_32%),radial-gradient(circle_at_10%_100%,rgba(34,211,238,0.12),transparent_32%)]" />
      <div className="relative">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-bold tracking-widest text-amber-100">
              <Gauge className="h-4 w-4" aria-hidden="true" /> 90-SECOND TRUTH RELAY
            </div>
            <h2 id="truth-relay-title" className="text-2xl font-black tracking-tight md:text-3xl">Before you learn AI, challenge it.</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">Three real-world calls. No jargon, no score on your personality—just the habits that make AI useful instead of risky.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-sm">
            <span className="block font-bold text-amber-100">Signal strength</span>
            <span className="text-slate-300">{Math.min(round + 1, challenges.length)} of {challenges.length} challenges</span>
          </div>
        </div>

        {!complete ? (
          <article className="mt-7 rounded-xl border border-white/10 bg-black/35 p-5 md:p-6">
            <div className="flex items-center gap-2 text-sm font-bold text-cyan-200"><ShieldQuestion className="h-5 w-5" aria-hidden="true" /> SIGNAL {round + 1}: {challenge.signal}</div>
            <p className="mt-5 border-l-2 border-amber-300/70 pl-4 text-lg font-medium leading-relaxed text-white">{challenge.scenario}</p>
            <h3 className="mt-6 text-base font-bold text-slate-200">{challenge.question}</h3>
            <div className="mt-3 grid gap-3">
              {challenge.choices.map((choice, index) => {
                const hasAnswered = selected !== null;
                const isCorrect = index === challenge.answer;
                const isSelected = selected === index;
                const stateClass = !hasAnswered
                  ? "border-white/10 bg-white/5 hover:border-amber-200/60 hover:bg-amber-300/10"
                  : isCorrect
                    ? "border-emerald-300/60 bg-emerald-400/15"
                    : isSelected
                      ? "border-rose-300/60 bg-rose-400/15"
                      : "border-white/10 bg-white/[0.03] opacity-60";
                return (
                  <button
                    key={choice}
                    type="button"
                    disabled={hasAnswered}
                    onClick={() => selectAnswer(index)}
                    className={`flex w-full items-center gap-3 rounded-lg border p-4 text-left text-sm leading-relaxed transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 disabled:cursor-default ${stateClass}`}
                  >
                    {hasAnswered && isCorrect ? <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-200" aria-label="Correct answer" /> : hasAnswered && isSelected ? <XCircle className="h-5 w-5 shrink-0 text-rose-200" aria-label="Incorrect answer" /> : <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/30 text-xs font-bold text-slate-300">{String.fromCharCode(65 + index)}</span>}
                    {choice}
                  </button>
                );
              })}
            </div>
            {selected !== null && (
              <div className="mt-5 rounded-lg border border-cyan-300/25 bg-cyan-300/10 p-4">
                <p className="text-sm leading-relaxed text-cyan-50"><span className="font-bold">Why this matters:</span> {challenge.lesson}</p>
                <button type="button" onClick={nextChallenge} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-cyan-200 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  {round === challenges.length - 1 ? "See my AI rule" : "Transmit next signal"} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            )}
          </article>
        ) : (
          <article className="mt-7 rounded-xl border border-emerald-300/30 bg-emerald-400/10 p-6 text-center">
            <Sparkles className="mx-auto h-10 w-10 text-amber-200" aria-hidden="true" />
            <h3 className="mt-3 text-2xl font-black">Your AI trust reflex is activated.</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-200">You challenged {score} of {challenges.length} signals correctly. The goal is not perfect scores—it is pausing before confidence becomes belief or automation becomes permission.</p>
            <div className="mx-auto mt-5 max-w-2xl rounded-xl border border-white/10 bg-black/25 p-4 text-left text-sm text-emerald-50">
              <span className="font-bold text-amber-100">My AI rule:</span> I verify important claims, protect data, set boundaries for agents, and remain accountable for the outcome.
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <button type="button" onClick={shareRule} className="inline-flex items-center gap-2 rounded-lg bg-amber-200 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <Send className="h-4 w-4" aria-hidden="true" /> Share my AI rule
              </button>
              <button type="button" onClick={reset} className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200">
                <RotateCcw className="h-4 w-4" aria-hidden="true" /> Relay again
              </button>
            </div>
            <p role="status" className="mt-4 min-h-6 text-sm text-emerald-100">{shareStatus}</p>
          </article>
        )}
      </div>
    </section>
  );
}