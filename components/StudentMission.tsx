"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  CircleCheck,
  ClipboardCheck,
  Copy,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

const steps = ["Challenge", "Build", "Verify", "Keep"];

const outcomes = {
  explain: {
    title: "Explain it clearly",
    prompt: "Help me explain the idea clearly in my own words.",
    success: "I can explain the core idea in 60 seconds without notes.",
  },
  practice: {
    title: "Practice solving it",
    prompt: "Help me practise solving problems step by step without revealing answers too early.",
    success: "I can solve one representative problem without AI help.",
  },
  prepare: {
    title: "Prepare for an assessment",
    prompt: "Help me prepare for an assessment by finding the gaps in my understanding.",
    success: "I can answer three assessment-style questions from memory.",
  },
};

type StudyOutcome = keyof typeof outcomes;

export default function StudentMission() {
  const [step, setStep] = useState(0);
  const [firstAnswer, setFirstAnswer] = useState<number | null>(null);
  const [topic, setTopic] = useState("");
  const [outcome, setOutcome] = useState<StudyOutcome>("explain");
  const [promptCreated, setPromptCreated] = useState(false);
  const [checks, setChecks] = useState({ source: false, ownWords: false, boundaries: false });
  const [copyStatus, setCopyStatus] = useState("");

  const prompt = useMemo(() => {
    const subject = topic.trim() || "my course topic";
    return `Act as a supportive study coach. ${outcomes[outcome].prompt} My topic is ${subject}. First ask me what I already know. Then explain one idea at a time using a simple example. Give me three practice questions, wait for my answers, and point out gaps in my reasoning. Cite or name the sources you rely on, and clearly mark anything you are unsure about.`;
  }, [outcome, topic]);

  const allChecksComplete = Object.values(checks).every(Boolean);
  const firstAnswerCorrect = firstAnswer === 1;

  const toggleCheck = (key: keyof typeof checks) => {
    setChecks((current) => ({ ...current, [key]: !current[key] }));
  };

  const copyStudyPact = async () => {
    const text = `MY 20-MINUTE AI STUDY SPRINT\n\nTopic: ${topic.trim() || "My course topic"}\n\nSuccess condition: ${outcomes[outcome].success}\n\n1. 2 minutes — Paste this prompt into an approved AI tool:\n${prompt}\n\n2. 8 minutes — Read one short explanation, then explain the idea back in your own words.\n3. 7 minutes — Answer three practice questions without asking AI for the answers.\n4. 3 minutes — Verify one important claim with your course materials or a reliable source.\n\nMy guardrails:\n- I verify important claims with reliable course sources.\n- I do not paste personal, private, or restricted material into unapproved tools.\n- AI can help me learn. I remain responsible for my work.`;

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        setCopyStatus("Study sprint copied. Paste it into your notes, then start the first 20-minute session today.");
        return;
      }
      setCopyStatus("Copy is unavailable in this browser. You can still copy the study prompt and checklist above.");
    } catch {
      setCopyStatus("The study pact was not copied. You can still copy the study prompt and checklist above.");
    }
  };

  const resetMission = () => {
    setStep(0);
    setFirstAnswer(null);
    setTopic("");
    setOutcome("explain");
    setPromptCreated(false);
    setChecks({ source: false, ownWords: false, boundaries: false });
    setCopyStatus("");
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to the AI explorer
        </Link>

        <header className="mt-8 rounded-2xl border border-cyan-300/25 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.2),transparent_36%),linear-gradient(135deg,rgba(15,23,42,1),rgba(49,46,129,0.45))] p-6 shadow-2xl md:p-9">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-bold tracking-widest text-cyan-100"><GraduationCap className="h-4 w-4" aria-hidden="true" /> STUDENT MISSION · 5 MINUTES</div>
          <h1 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Learn with AI without outsourcing your thinking.</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-300">One guided mission. You will catch a weak claim, create a study prompt that demands understanding, and leave with a 20-minute study sprint you can use today.</p>
        </header>

        <nav aria-label="Mission progress" className="mt-7 grid grid-cols-4 gap-2">
          {steps.map((label, index) => (
            <div key={label} className={`rounded-lg border p-3 text-center text-xs font-bold sm:text-sm ${index === step ? "border-cyan-300 bg-cyan-300/15 text-cyan-100" : index < step ? "border-emerald-300/35 bg-emerald-300/10 text-emerald-100" : "border-white/10 bg-white/5 text-slate-500"}`}>
              <span className="block text-[10px] tracking-widest opacity-70">{index + 1}</span>{label}
            </div>
          ))}
        </nav>

        <section aria-label={`Mission step ${step + 1}: ${steps[step]}`} className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl md:p-8">
          {step === 0 && (
            <div>
              <StepHeading icon={<ShieldCheck className="h-6 w-6" />} eyebrow="Step 1 · Challenge" title="Do not confuse confidence with evidence." description="An AI produces this claim: ‘Sleep learning lets students master a language while asleep, according to a 2025 university study.’ It gives no study name or working link." />
              <h2 className="mt-7 text-lg font-bold">What is your first move?</h2>
              <div className="mt-4 grid gap-3">
                {["Use the claim because it includes a university study", "Ask for a verifiable source, then check the claim independently", "Rewrite the claim so it sounds more persuasive"].map((option, index) => {
                  const answered = firstAnswer !== null;
                  const correct = index === 1;
                  const selected = firstAnswer === index;
                  const className = !answered ? "border-white/10 bg-white/5 hover:border-cyan-300 hover:bg-cyan-300/10" : correct ? "border-emerald-300/60 bg-emerald-300/10" : selected ? "border-rose-300/60 bg-rose-300/10" : "border-white/10 bg-white/[0.03] opacity-50";
                  return <button key={option} type="button" disabled={answered} onClick={() => setFirstAnswer(index)} className={`rounded-lg border p-4 text-left text-sm leading-relaxed transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 disabled:cursor-default ${className}`}>{option}</button>;
                })}
              </div>
              {firstAnswer !== null && <div className="mt-5 rounded-xl border border-cyan-300/25 bg-cyan-300/10 p-4 text-sm leading-relaxed text-cyan-50"><span className="font-bold">Core habit:</span> {firstAnswerCorrect ? "Correct. AI can invent plausible sources, so trace important claims back to evidence you can inspect." : "Not quite. A source-like phrase is not proof. Trace important claims back to evidence you can inspect."}</div>}
              <StepButton disabled={!firstAnswerCorrect} onClick={() => setStep(1)}>Continue to prompt lab</StepButton>
            </div>
          )}

          {step === 1 && (
            <div>
              <StepHeading icon={<Target className="h-6 w-6" />} eyebrow="Step 2 · Build" title="Make AI work for your understanding." description="Choose a topic and a real outcome. The mission will create a prompt that makes AI coach, question, and cite—not just answer." />
              <label htmlFor="study-topic" className="mt-7 block text-sm font-bold text-slate-200">What do you need to study today?</label>
              <input id="study-topic" value={topic} onChange={(event) => { setTopic(event.target.value); setPromptCreated(false); }} placeholder="Example: cell biology" className="mt-3 w-full rounded-lg border border-white/15 bg-black/35 p-4 text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/30" />
              <fieldset className="mt-6">
                <legend className="text-sm font-bold text-slate-200">What must you be able to do after this study sprint?</legend>
                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  {(Object.keys(outcomes) as StudyOutcome[]).map((id) => (
                    <button key={id} type="button" aria-pressed={outcome === id} onClick={() => { setOutcome(id); setPromptCreated(false); }} className={`rounded-lg border p-4 text-left text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 ${outcome === id ? "border-cyan-300 bg-cyan-300/10 text-cyan-50" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"}`}>
                      <span className="block font-bold">{outcomes[id].title}</span>
                      <span className="mt-1 block text-xs leading-relaxed text-slate-400">{outcomes[id].success}</span>
                    </button>
                  ))}
                </div>
              </fieldset>
              <button type="button" onClick={() => setPromptCreated(true)} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-cyan-200 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><Sparkles className="h-4 w-4" aria-hidden="true" /> Create my study prompt</button>
              {promptCreated && <div className="mt-5 rounded-xl border border-cyan-300/25 bg-black/30 p-5"><p className="text-xs font-bold uppercase tracking-widest text-cyan-200">Your tool-ready prompt</p><p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-slate-200">{prompt}</p></div>}
              <StepButton disabled={!promptCreated} onClick={() => setStep(2)}>Continue to verification</StepButton>
            </div>
          )}

          {step === 2 && (
            <div>
              <StepHeading icon={<BookOpenCheck className="h-6 w-6" />} eyebrow="Step 3 · Verify" title="Add the human checks AI cannot perform for you." description="Before using an AI-assisted answer, commit to all three checks." />
              <div className="mt-7 space-y-3">
                <CheckItem checked={checks.source} onChange={() => toggleCheck("source")} label="I will verify important facts against my course materials or a reliable source." />
                <CheckItem checked={checks.ownWords} onChange={() => toggleCheck("ownWords")} label="I will explain the final answer in my own words before I rely on it." />
                <CheckItem checked={checks.boundaries} onChange={() => toggleCheck("boundaries")} label="I will not paste private, personal, or restricted material into an unapproved AI tool." />
              </div>
              <StepButton disabled={!allChecksComplete} onClick={() => setStep(3)}>Finish my study pact</StepButton>
            </div>
          )}

          {step === 3 && (
            <div>
              <StepHeading icon={<ClipboardCheck className="h-6 w-6" />} eyebrow="Step 4 · Keep" title="You now have a study sprint, not just a prompt." description="Copy this plan, set a 20-minute timer, and start the first session today." />
              <article className="mt-7 rounded-xl border border-emerald-300/30 bg-emerald-300/10 p-5">
                <h2 className="text-xl font-black text-emerald-50">My 20-minute AI Study Sprint</h2>
                <p className="mt-3 text-sm text-emerald-50"><span className="font-bold">Topic:</span> {topic.trim() || "My course topic"}</p>
                <p className="mt-2 text-sm text-emerald-50"><span className="font-bold">Success condition:</span> {outcomes[outcome].success}</p>
                <ol className="mt-5 space-y-3 text-sm leading-relaxed text-emerald-50">
                  <li><span className="font-bold">2 minutes:</span> Paste your prompt into an approved AI tool.</li>
                  <li><span className="font-bold">8 minutes:</span> Read one explanation, then explain it back in your own words.</li>
                  <li><span className="font-bold">7 minutes:</span> Answer three practice questions without AI answers.</li>
                  <li><span className="font-bold">3 minutes:</span> Verify one important claim with course materials or a reliable source.</li>
                </ol>
                <p className="mt-5 text-sm leading-relaxed text-emerald-50"><span className="font-bold">My rule:</span> AI can help me learn, but I verify claims, explain ideas in my own words, protect sensitive information, and remain responsible for my work.</p>
              </article>
              <div className="mt-5 flex flex-wrap gap-3">
                <button type="button" onClick={copyStudyPact} className="inline-flex items-center gap-2 rounded-lg bg-emerald-200 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><Copy className="h-4 w-4" aria-hidden="true" /> Copy my study sprint</button>
                <button type="button" onClick={resetMission} className="rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200">Run the mission again</button>
              </div>
              <p role="status" className="mt-4 min-h-6 text-sm text-emerald-200">{copyStatus}</p>
              <Link href="/#learning-launchpad" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-200 transition hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">Next: build an AI Action Map <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function StepHeading({ icon, eyebrow, title, description }: { icon: React.ReactNode; eyebrow: string; title: string; description: string }) {
  return <><div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cyan-200">{icon}{eyebrow}</div><h2 className="mt-3 text-2xl font-black tracking-tight md:text-3xl">{title}</h2><p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">{description}</p></>;
}

function StepButton({ children, disabled, onClick }: { children: React.ReactNode; disabled: boolean; onClick: () => void }) {
  return <button type="button" disabled={disabled} onClick={onClick} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-fuchsia-200 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-fuchsia-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-40">{children}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>;
}

function CheckItem({ checked, label, onChange }: { checked: boolean; label: string; onChange: () => void }) {
  return <label className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 text-sm leading-relaxed transition ${checked ? "border-emerald-300/50 bg-emerald-300/10 text-emerald-50" : "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"}`}><input type="checkbox" checked={checked} onChange={onChange} className="sr-only" /><span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${checked ? "border-emerald-200 bg-emerald-200 text-slate-950" : "border-white/30"}`}>{checked && <CircleCheck className="h-4 w-4" aria-hidden="true" />}</span>{label}</label>;
}