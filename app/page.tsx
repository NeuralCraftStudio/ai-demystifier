import AIBrainVisualizer from '@/components/AIBrainVisualizer';
import PromptHacker from '@/components/PromptHacker';
import NeuralJailbreak from '@/components/NeuralJailbreak';
import ModelsExplorer from '@/components/ModelsExplorer';
import AdaptationEngine from '@/components/AdaptationEngine';
import ComputeMatrix from '@/components/ComputeMatrix';
import EdgeSovereign from '@/components/EdgeSovereign';
import GitSandbox from '@/components/GitSandbox';
import LiveIntelFeed from '@/components/LiveIntelFeed';
import { BrainCircuit, Terminal, ShieldAlert, Cpu, GitBranch, Target, Droplets, Bot, Sparkles, Globe } from 'lucide-react'; // Added Globe

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-blue-500/30 font-sans">
      
      {/* 🌌 DYNAMIC BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/30 via-black to-black"></div>
      </div>

      {/* 🚀 HERO SECTION - Refocused on Education */}
      <header className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-mono tracking-widest text-blue-300 mb-6">
          <Sparkles className="w-4 h-4" />
          FREE OPEN-SOURCE LEARNING PLATFORM
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-300 to-slate-600 mb-6 drop-shadow-sm">
          Demystifier_OS
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
          The AI black box, cracked open for absolute beginners. Learn how Large Language Models actually work, which tools to use for daily life, and how to take control of the technology.
        </p>
      </header>

      {/* 🧩 THE PROTOCOLS */}
      <main className="max-w-6xl mx-auto px-4 pb-32 relative z-10">
        <div className="space-y-24">
          
          {/* PHASE 1: THE FOUNDATION */}
          <div className="space-y-8">
            <div className="pb-4 border-b border-white/10 flex items-center gap-4">
              <h2 className="text-2xl font-black text-white/80 tracking-widest uppercase">Phase 1: How AI Actually Thinks</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>

            <section className="space-y-6">
              <div className="flex items-center gap-3 text-white">
                <div className="p-2 bg-purple-500/20 rounded text-purple-400"><BrainCircuit className="w-5 h-5"/></div>
                <h2 className="text-xl font-bold">Protocol 01: The Neural Visualizer</h2>
              </div>
              <AIBrainVisualizer />
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3 text-white">
                <div className="p-2 bg-pink-500/20 rounded text-pink-400"><Terminal className="w-5 h-5"/></div>
                <h2 className="text-xl font-bold">Protocol 02: Prompt Engineering Lab</h2>
              </div>
              <PromptHacker />
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3 text-white">
                <div className="p-2 bg-red-500/20 rounded text-red-400"><ShieldAlert className="w-5 h-5"/></div>
                <h2 className="text-xl font-bold">Protocol 03: Neural Jailbreak</h2>
              </div>
              <NeuralJailbreak />
            </section>
          </div>

          {/* PHASE 2: DAILY APPLICATION (Moved up based on your requirements!) */}
          <div className="space-y-8">
            <div className="pb-4 border-b border-white/10 flex items-center gap-4">
              <h2 className="text-2xl font-black text-white/80 tracking-widest uppercase">Phase 2: Your Daily Arsenal</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>

            <section className="space-y-6">
              <div className="flex items-center gap-3 text-white">
                <div className="p-2 bg-blue-500/20 rounded text-blue-400"><Bot className="w-5 h-5"/></div>
                <h2 className="text-xl font-bold">Protocol 04: The Model Directory</h2>
              </div>
              <ModelsExplorer />
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3 text-white">
                <div className="p-2 bg-emerald-500/20 rounded text-emerald-400"><Target className="w-5 h-5"/></div>
                <h2 className="text-xl font-bold">Protocol 05: The Adaptation Engine</h2>
              </div>
              <AdaptationEngine />
            </section>
          </div>

          {/* PHASE 3: BEHIND THE CURTAIN */}
          <div className="space-y-8">
            <div className="pb-4 border-b border-white/10 flex items-center gap-4">
              <h2 className="text-2xl font-black text-white/80 tracking-widest uppercase">Phase 3: Behind The Curtain</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>

            <section className="space-y-6">
              <div className="flex items-center gap-3 text-white">
                <div className="p-2 bg-amber-500/20 rounded text-amber-400"><Droplets className="w-5 h-5"/></div>
                <h2 className="text-xl font-bold">Protocol 06: The Compute Matrix</h2>
              </div>
              <ComputeMatrix />
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3 text-white">
                <div className="p-2 bg-indigo-500/20 rounded text-indigo-400"><Cpu className="w-5 h-5"/></div>
                <h2 className="text-xl font-bold">Protocol 07: Local Edge Sovereign</h2>
              </div>
              <EdgeSovereign />
            </section>
          </div>

{/* PHASE 4: THE COMMUNITY & LIVE DATA */}
          <div className="space-y-8">
            <div className="pb-4 border-b border-white/10 flex items-center gap-4">
              <h2 className="text-2xl font-black text-white/80 tracking-widest uppercase">Phase 4: Enter the Community</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>

            {/* NEW PROTOCOL 09 */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 text-white">
                <div className="p-2 bg-cyan-500/20 rounded text-cyan-400"><Globe className="w-5 h-5"/></div>
                <h2 className="text-xl font-bold">Protocol 09: Live API Intel</h2>
              </div>
              <LiveIntelFeed />
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3 text-white">
                <div className="p-2 bg-slate-500/20 rounded text-slate-400"><GitBranch className="w-5 h-5"/></div>
                <h2 className="text-xl font-bold">Protocol 10: Open Source Sandbox</h2>
              </div>
              <GitSandbox />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}