import GitSandbox from '@/components/GitSandbox';
import AIBrainVisualizer from '@/components/AIBrainVisualizer';
import PromptHacker from '@/components/PromptHacker';
import { Sparkles, Code2, BrainCircuit, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-200 font-sans relative selection:bg-purple-500/30">
      
      {/* Immersive Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed top-[40%] left-[50%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[100px] transform -translate-x-1/2 pointer-events-none" />

      {/* Glassmorphism Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-2xl">
          <div className="flex items-center gap-2 font-bold text-white tracking-widest uppercase text-sm">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Demystifier<span className="text-slate-500">_OS</span>
          </div>
          <div className="flex gap-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">
            <span className="hover:text-white cursor-pointer transition">Git_Sandbox</span>
            <span className="hover:text-white cursor-pointer transition">AI_Brain</span>
            <span className="hover:text-white cursor-pointer transition">Prompt_Lab</span>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 pt-32 pb-24 space-y-32 relative z-10">
        
        {/* Futuristic Hero */}
        <header className="text-center space-y-8 py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 text-slate-300 rounded-full text-xs font-mono mb-4 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            System Online. Ready to Learn.
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
            Hack the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
              Black Box.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light">
            You don't need a PhD to understand Artificial Intelligence. 
            Welcome to your interactive, open-source training ground.
          </p>
        </header>

        {/* Section 1 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-white">
            <div className="p-2 bg-blue-500/20 rounded text-blue-400"><Code2 className="w-5 h-5"/></div>
            <h2 className="text-2xl font-bold">Protocol 01: The Cloud Sandbox</h2>
          </div>
          <div className="p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
            {/* We place the GitSandbox inside a glass wrapper so it looks good on dark mode */}
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <GitSandbox />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-white">
            <div className="p-2 bg-purple-500/20 rounded text-purple-400"><BrainCircuit className="w-5 h-5"/></div>
            <h2 className="text-2xl font-bold">Protocol 02: Neural Visualizer</h2>
          </div>
          <div className="p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
            <div className="rounded-xl overflow-hidden shadow-2xl bg-white">
              <AIBrainVisualizer />
            </div>
          </div>
        </section>

        {/* Section 3 (The New Dark Component) */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-white">
            <div className="p-2 bg-emerald-500/20 rounded text-emerald-400"><Terminal className="w-5 h-5"/></div>
            <h2 className="text-2xl font-bold">Protocol 03: Prompt Engineering Lab</h2>
          </div>
          <PromptHacker />
        </section>

      </div>
    </main>
  );
}