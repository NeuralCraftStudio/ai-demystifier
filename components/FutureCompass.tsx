"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Telescope,
  UsersRound,
} from "lucide-react";

type Moment = "learn" | "create" | "decide";
type Ownership = "judgment" | "relationships" | "accountability";
type Horizon = "assistant" | "agent" | "collaborator";

const moments: Record<Moment, { title: string; description: string; icon: typeof BrainCircuit }> = {
  learn: { title: "Learn something difficult", description: "Turn confusion into understanding instead of collecting quick answers.", icon: BrainCircuit },
  create: { title: "Make something meaningful", description: "Use AI to explore possibilities while protecting your original point of view.", icon: Sparkles },
  decide: { title: "Make a high-stakes decision", description: "Use AI to widen the evidence, not to outsource accountability.", icon: Compass },
};

const ownerships: Record<Ownership, { title: string; description: string; icon: typeof ShieldCheck }> = {
  judgment: { title: "My judgment", description: "I decide what is true enough, fair enough, and useful enough.", icon: BrainCircuit },
  relationships: { title: "My relationships", description: "I remain present with people instead of automating trust or care.", icon: HeartHandshake },
  accountability: { title: "My accountability", description: "I own the outcome, even when AI contributed to the work.", icon: ShieldCheck },
};

const horizons: Record<Horizon, { title: string; description: string; icon: typeof Telescope }> = {
  assistant: { title: "AI as assistant", description: "It responds when you ask and helps you draft, explain, or organize.", icon: Sparkles },
  agent: { title: "AI as agent", description: "It can pursue a limited goal with tools, so permissions and review must be explicit.", icon: Compass },
  collaborator: { title: "AI in a team", description: "It changes how groups research, create, and make decisions together.", icon: UsersRound },
};

const futureSkills = [
  "Frame a problem before asking AI to solve it.",
  "Inspect evidence and notice persuasive but unsupported claims.",
  "Set boundaries for data, permissions, and human approval.",
  "Bring empathy, context, and accountability to the final decision.",
];

export default function FutureCompass() {
  const [moment, setMoment] = useState<Moment | null>(null);
  const [ownership, setOwnership] = useState<Ownership | null>(null);
  const [horizon, setHorizon] = useState<Horizon | null>(null);
  const [pactCreated, setPactCreated] = useState(false);

  const selections = [moment, ownership, horizon].filter(Boolean).length;
  const ready = moment !== null && ownership !== null && horizon !== null;
  const pact = useMemo(() => {
    if (!ready || !moment || !ownership || !horizon) return null;

    return {
      mission: `For ${moments[moment].title.toLowerCase()}, I will use ${horizons[horizon].title.toLowerCase()} to extend my capability, not replace my responsibility.`,
      boundary: `I will protect ${ownerships[ownership].title.toLowerCase()} by checking important output and keeping the final decision human.`,
      nextMove: horizon === "agent"
        ? "Before using an agent, write the goal, list the tools it may use, and define which actions require your approval."
        : horizon === "collaborator"
          ? "Invite a human challenge step: ask someone to review the assumptions and sources before the team acts."
          : "Run one small task, compare AI output with a reliable source, and record what you changed."
    };
  }, [horizon, moment, ownership, ready]);

  return (
    <section aria-labelledby="compass-title" className="relative overflow-hidden rounded-2xl border border-fuchsia-400/25 bg-gradient-to-br from-slate-950 via-purple-950/40 to-slate-950 p-6 text-white shadow-2xl md:p-8">
      <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="relative">
        <div className="flex flex-col gap-5 border-b border-white/10 pb-6 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-fuchsia-300/25 bg-fuchsia-300/10 px-3 py-1 text-xs font-bold tracking-widest text-fuchsia-100">
              <Telescope className="h-4 w-4" aria-hidden="true" /> FUTURE COMPASS
            </div>
            <h2 id="compass-title" className="text-2xl font-black tracking-tight md:text-3xl">Design your human role in an AI-shaped future</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
              This is not a personality test. You set the direction. Choose a real moment, name what must remain human, and explore how your relationship with AI could evolve.
            </p>
          </div>
          <div className="min-w-36 rounded-xl border border-white/10 bg-black/25 p-3 text-sm">
            <div className="flex items-center justify-between text-slate-300"><span>Compass</span><span>{selections}/3</span></div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300 transition-all duration-500" style={{ width: `${(selections / 3) * 100}%` }} />
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          <ChoiceGroup title="1. Start with a real moment" options={moments} value={moment} onChange={(value) => { setMoment(value); setPactCreated(false); }} />
          <ChoiceGroup title="2. Protect what stays human" options={ownerships} value={ownership} onChange={(value) => { setOwnership(value); setPactCreated(false); }} />
          <ChoiceGroup title="3. Explore what comes next" options={horizons} value={horizon} onChange={(value) => { setHorizon(value); setPactCreated(false); }} />
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <article className="rounded-xl border border-white/10 bg-black/30 p-5">
            <h3 className="text-lg font-bold">What gets more valuable as AI improves?</h3>
            <p className="mt-1 text-sm text-slate-400">The future is uncertain. These are durable practices that keep people in control of their work.</p>
            <ul className="mt-4 space-y-3">
              {futureSkills.map((skill) => (
                <li key={skill} className="flex gap-3 text-sm leading-relaxed text-slate-200"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-fuchsia-200" aria-hidden="true" />{skill}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-fuchsia-300/25 bg-fuchsia-950/30 p-5">
            <h3 className="text-lg font-bold text-fuchsia-100">Your Human-AI Pact</h3>
            {pact ? (
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-200">
                <p>{pact.mission}</p>
                <p><span className="font-bold text-fuchsia-200">Boundary:</span> {pact.boundary}</p>
                <p><span className="font-bold text-fuchsia-200">Next move:</span> {pact.nextMove}</p>
                <button
                  type="button"
                  onClick={() => setPactCreated(true)}
                  className="inline-flex items-center gap-2 rounded-lg bg-fuchsia-200 px-4 py-2.5 font-bold text-slate-950 transition hover:bg-fuchsia-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Make this my first pact <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            ) : (
              <p className="mt-4 text-sm leading-relaxed text-slate-300">Complete the three selections to generate a short, practical agreement for how you want to use AI.</p>
            )}
            <p role="status" className="mt-4 min-h-6 text-sm font-medium text-emerald-200">
              {pactCreated && "Pact created. Bring it to the next protocol and use it to challenge every AI-assisted decision."}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function ChoiceGroup<T extends string>({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: Record<T, { title: string; description: string; icon: typeof Compass }>;
  value: T | null;
  onChange: (value: T) => void;
}) {
  return (
    <fieldset className="rounded-xl border border-white/10 bg-black/25 p-4">
      <legend className="mb-3 text-sm font-bold text-slate-200">{title}</legend>
      <div className="space-y-2">
        {(Object.keys(options) as T[]).map((id) => {
          const option = options[id];
          const Icon = option.icon;
          const isSelected = value === id;
          return (
            <button
              key={id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onChange(id)}
              className={`w-full rounded-lg border p-3 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-200 ${isSelected ? "border-fuchsia-300 bg-fuchsia-300/15" : "border-white/10 bg-white/5 hover:bg-white/10"}`}
            >
              <span className="flex items-center gap-2 font-bold text-sm"><Icon className={`h-4 w-4 ${isSelected ? "text-fuchsia-200" : "text-slate-400"}`} aria-hidden="true" />{option.title}</span>
              <span className="mt-1 block text-xs leading-relaxed text-slate-400">{option.description}</span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}