import Link from 'next/link';
import { ArrowRight, BookOpenCheck, BrainCircuit, ShieldCheck, Sparkles, Telescope, Tags } from 'lucide-react';

const paths = [
  {
    href: '/missions',
    title: 'Start a 5-minute mission',
    description: 'A guided student path from a weak AI claim to a reusable study pact.',
    icon: BookOpenCheck,
    accent: 'border-cyan-300/40 hover:border-cyan-200 hover:bg-cyan-300/10',
  },
  {
    href: '/learn',
    title: 'Learn the essentials',
    description: 'Challenge AI, understand language models, and make better requests.',
    icon: BrainCircuit,
    accent: 'border-purple-300/40 hover:border-purple-200 hover:bg-purple-300/10',
  },
  {
    href: '/apply',
    title: 'Apply AI to real life',
    description: 'Map a task, set safe boundaries, and build your human-AI practice.',
    icon: Sparkles,
    accent: 'border-emerald-300/40 hover:border-emerald-200 hover:bg-emerald-300/10',
  },
  {
    href: '/models',
    title: 'Explore models and tools',
    description: 'Choose cloud or local AI based on the work, privacy, and hardware.',
    icon: Telescope,
    accent: 'border-amber-300/40 hover:border-amber-200 hover:bg-amber-300/10',
  },
  {
    href: '/safety',
    title: 'Practice AI safety',
    description: 'Understand manipulation risks, guardrails, and the approvals agents need.',
    icon: ShieldCheck,
    accent: 'border-rose-300/40 hover:border-rose-200 hover:bg-rose-300/10',
  },
  {
    href: '/cheatsheet',
    title: 'Decode AI words',
    description: 'Search plain-language definitions for MCP, agents, RAG, LLMs, tokens, and current AI terms.',
    icon: Tags,
    accent: 'border-fuchsia-300/40 hover:border-fuchsia-200 hover:bg-fuchsia-300/10',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-blue-500/30 font-sans">
      
      {/* 🌌 DYNAMIC BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/30 via-black to-black"></div>
      </div>

      <header className="relative z-10 max-w-6xl mx-auto px-4 pt-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-mono tracking-widest text-blue-300 mb-6">
          <Sparkles className="w-4 h-4" />
          FREE OPEN-SOURCE LEARNING PLATFORM
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-300 to-slate-600 mb-6 drop-shadow-sm">
          Demystifier_OS
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
          A guided AI literacy journey. Choose one short path, practice a useful habit, and understand what should stay human as AI evolves.
        </p>
        <Link href="/missions" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-cyan-300 text-slate-950 font-bold rounded-full hover:bg-cyan-200 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-100">
          Begin with a 5-minute mission <ArrowRight className="w-4 h-4" />
        </Link>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-32 pt-12">
        <section aria-labelledby="choose-path-title">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h2 id="choose-path-title" className="text-2xl font-black tracking-tight text-white md:text-3xl">Choose one path. Finish with a new habit.</h2>
            <p className="mt-2 text-slate-400">No giant dashboard. Each path has a clear purpose, a short estimated time, and one outcome to take with you.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {paths.map((path) => {
              const Icon = path.icon;
              return (
                <Link key={path.href} href={path.href} className={`group rounded-2xl border bg-black/35 p-6 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 ${path.accent}`}>
                  <Icon className="h-8 w-8 text-slate-200 transition group-hover:text-white" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold text-white">{path.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{path.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">Open path <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                </Link>
              );
            })}
          </div>
        </section>
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/impact" className="font-bold text-slate-400 transition hover:text-cyan-200">Explore AI&apos;s physical impact</Link>
          <Link href="/history" className="font-bold text-slate-400 transition hover:text-cyan-200">Explore AI&apos;s history</Link>
          <Link href="/contribute" className="font-bold text-slate-400 transition hover:text-cyan-200">Learn how to contribute</Link>
        </div>
      </main>
    </div>
  );
}