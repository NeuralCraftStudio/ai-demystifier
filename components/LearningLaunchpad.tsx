"use client";

import { useState } from "react";
import {
  BookOpenCheck,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

type LearnerTrack = "student" | "builder" | "curious";
type TaskId = "study" | "startup" | "work";

const tracks: Record<LearnerTrack, { title: string; description: string; icon: typeof GraduationCap }> = {
  student: {
    title: "Student",
    description: "Learn a topic, test understanding, and verify sources.",
    icon: GraduationCap,
  },
  builder: {
    title: "Startup or team",
    description: "Research ideas, draft workflows, and keep human review in control.",
    icon: BriefcaseBusiness,
  },
  curious: {
    title: "Curious learner",
    description: "Understand AI clearly and use it safely in everyday life.",
    icon: Lightbulb,
  },
};

const tasks: Record<TaskId, { label: string; goal: string; human: string; ai: string; tools: string; risk: string; proof: string }> = {
  study: {
    label: "Prepare for an exam",
    goal: "Turn a topic into a study plan that checks your understanding.",
    human: "Choose the topic and explain it in your own words.",
    ai: "Create practice questions and identify unclear explanations.",
    tools: "Your syllabus, class notes, and trusted course sources.",
    risk: "Do not submit generated work as your own or trust answers without checking.",
    proof: "Answer practice questions without AI and cite the sources you used.",
  },
  startup: {
    label: "Validate a startup idea",
    goal: "Stress-test an idea before spending time or money building it.",
    human: "Set the decision criteria and interview real potential customers.",
    ai: "Draft interview questions, summarize themes, and challenge assumptions.",
    tools: "Interview notes, a spreadsheet, and public market sources.",
    risk: "Remove customer identifiers and treat AI research as leads, not evidence.",
    proof: "Record source links, interview evidence, and the decision you made.",
  },
  work: {
    label: "Improve a work process",
    goal: "Find a low-risk task where AI can save time without giving up accountability.",
    human: "Approve the final output and decide what confidential data stays private.",
    ai: "Draft, organize, summarize, or transform non-sensitive material.",
    tools: "Approved company tools, templates, and a human review checklist.",
    risk: "Never paste confidential, personal, or regulated data into an unapproved tool.",
    proof: "Compare the result against the source and obtain the required approval.",
  },
};

const foundations = [
  "AI is a pattern-prediction tool, not a source of guaranteed truth.",
  "A strong request gives a goal, useful context, and a definition of a good result.",
  "An agent adds tools and steps, so it needs clear permissions and human approval.",
];

export default function LearningLaunchpad() {
  const [track, setTrack] = useState<LearnerTrack>("student");
  const [task, setTask] = useState<TaskId>("study");
  const [mapCreated, setMapCreated] = useState(false);
  const selectedTrack = tracks[track];
  const selectedTask = tasks[task];

  return (
    <section aria-labelledby="launchpad-title" className="w-full overflow-hidden rounded-2xl border border-cyan-400/25 bg-slate-950/80 p-6 text-white shadow-2xl md:p-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-bold tracking-widest text-cyan-200">
            <Sparkles className="h-4 w-4" aria-hidden="true" /> START HERE
          </div>
          <h2 id="launchpad-title" className="text-2xl font-black tracking-tight md:text-3xl">Build your first responsible AI workflow</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
            Pick a reason for learning, then create an AI Action Map. It separates what you decide, what AI can help with, what data is safe to use, and how you will check the result.
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
          <span className="font-bold text-cyan-200">First mission:</span> 15 minutes
        </div>
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-bold uppercase tracking-widest text-slate-400">Choose your path</legend>
        <div className="grid gap-3 md:grid-cols-3">
          {(Object.keys(tracks) as LearnerTrack[]).map((id) => {
            const option = tracks[id];
            const Icon = option.icon;
            const isSelected = track === id;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setTrack(id)}
                className={`rounded-xl border p-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${isSelected ? "border-cyan-300 bg-cyan-400/15" : "border-white/10 bg-white/5 hover:bg-white/10"}`}
              >
                <Icon className={`mb-3 h-6 w-6 ${isSelected ? "text-cyan-200" : "text-slate-400"}`} aria-hidden="true" />
                <span className="block font-bold">{option.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-slate-400">{option.description}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {foundations.map((foundation, index) => (
          <article key={foundation} className="rounded-xl border border-white/10 bg-black/25 p-4">
            <span className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-black text-cyan-200">{index + 1}</span>
            <p className="text-sm leading-relaxed text-slate-300">{foundation}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 border-t border-white/10 pt-8">
        <div className="flex items-center gap-3">
          <Bot className="h-6 w-6 text-cyan-200" aria-hidden="true" />
          <div>
            <h3 className="text-xl font-bold">Your AI Action Map</h3>
            <p className="text-sm text-slate-400">A reusable playbook for a real task. AI supports the work; you remain accountable.</p>
          </div>
        </div>

        <fieldset className="mt-5">
          <legend className="sr-only">Choose a task for your AI Action Map</legend>
          <div className="flex flex-wrap gap-3">
            {(Object.keys(tasks) as TaskId[]).map((id) => (
              <button
                key={id}
                type="button"
                aria-pressed={task === id}
                onClick={() => {
                  setTask(id);
                  setMapCreated(false);
                }}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${task === id ? "border-cyan-300 bg-cyan-400/15 text-cyan-100" : "border-white/15 bg-white/5 text-slate-300 hover:bg-white/10"}`}
              >
                {tasks[id].label}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="mt-5 rounded-xl border border-cyan-300/20 bg-cyan-950/20 p-5">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-200">Goal for {selectedTrack.title.toLowerCase()} learners</p>
          <p className="mt-2 text-lg font-semibold text-white">{selectedTask.goal}</p>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <MapCard icon={<ClipboardCheck aria-hidden="true" />} title="Human judgment" text={selectedTask.human} />
            <MapCard icon={<Bot aria-hidden="true" />} title="AI assistance" text={selectedTask.ai} />
            <MapCard icon={<Wrench aria-hidden="true" />} title="Tools and data" text={selectedTask.tools} />
            <MapCard icon={<ShieldCheck aria-hidden="true" />} title="Risk boundary" text={selectedTask.risk} />
            <MapCard icon={<BookOpenCheck aria-hidden="true" />} title="Proof of quality" text={selectedTask.proof} />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMapCreated(true)}
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100"
        >
          <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> Create this Action Map
        </button>
        <p role="status" className="mt-3 min-h-6 text-sm text-emerald-200">
          {mapCreated && "Action Map created. Next: write your request, keep sensitive data out, and check the result against your proof of quality."}
        </p>
      </div>
    </section>
  );
}

function MapCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <article className="rounded-lg border border-white/10 bg-black/30 p-4">
      <div className="flex items-center gap-2 text-sm font-bold text-cyan-100">{icon}{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{text}</p>
    </article>
  );
}