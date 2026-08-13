import type { Metadata } from "next";
import { BookOpenCheck, CalendarDays, ExternalLink } from "lucide-react";
import { LearningPageShell, ModuleSection } from "@/components/LearningPageShell";

export const metadata: Metadata = {
  title: "AI History | Demystifier OS",
  description: "A concise, sourced history of AI, machine learning, language models, and how people began using them.",
};

const milestones = [
  { year: "1950", title: "Can machines think?", text: "Alan Turing's paper frames a practical way to discuss machine intelligence, including the imitation game later called the Turing test.", source: "Turing, Computing Machinery and Intelligence", href: "https://doi.org/10.1093/mind/LIX.236.433" },
  { year: "1956", title: "The field gets a name", text: "The Dartmouth summer research proposal used the term artificial intelligence and helped define AI as a research field.", source: "Dartmouth AI proposal", href: "http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf" },
  { year: "1958", title: "The perceptron", text: "Frank Rosenblatt described the perceptron, an early learning system that influenced later neural-network research.", source: "Rosenblatt, The Perceptron", href: "https://psycnet.apa.org/record/1959-09865-001" },
  { year: "1986", title: "Learning through backpropagation", text: "Backpropagation became a foundational practical method for training multi-layer neural networks.", source: "Rumelhart, Hinton, and Williams", href: "https://www.nature.com/articles/323533a0" },
  { year: "1997", title: "Chess becomes a public symbol", text: "IBM Deep Blue defeated world champion Garry Kasparov in a match, demonstrating narrow but highly capable search and evaluation systems.", source: "IBM Deep Blue archive", href: "https://www.ibm.com/history/deep-blue" },
  { year: "2012", title: "Deep learning changes computer vision", text: "AlexNet's ImageNet result showed the power of deep convolutional networks trained with GPUs and large labeled datasets.", source: "Krizhevsky, Sutskever, and Hinton", href: "https://proceedings.neurips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html" },
  { year: "2017", title: "The Transformer", text: "The Transformer architecture used attention without recurrence or convolutions, making sequence modeling more parallelizable and influencing today's language models.", source: "Attention Is All You Need", href: "https://arxiv.org/abs/1706.03762" },
  { year: "2020", title: "Few-shot language use at scale", text: "GPT-3 reported 175 billion parameters and showed that tasks and examples could often be specified through text interaction rather than model retraining.", source: "Language Models are Few-Shot Learners", href: "https://openai.com/index/language-models-are-few-shot-learners/" },
  { year: "2022", title: "Conversational AI reaches the public", text: "ChatGPT's research preview made natural-language interaction with a large language model widely accessible and exposed both usefulness and limitations.", source: "Introducing ChatGPT", href: "https://openai.com/index/chatgpt/" },
  { year: "2023 onward", title: "From chat to connected systems", text: "Retrieval, multimodal models, tool use, and agents increasingly connect models to external information and actions—raising the need for permissions, evaluation, and human review.", source: "Use the AI Cheat Sheet for current terms", href: "/cheatsheet" },
];

const usageEras = [
  { title: "Rules and expert systems", years: "1950s–1990s", text: "AI was mostly used in research labs and narrow business systems. People encoded rules or built specialized programs for a specific task." },
  { title: "Predictions in everyday products", years: "2000s–2010s", text: "Machine learning spread through search, recommendations, spam filters, translation, maps, fraud detection, and image recognition." },
  { title: "Generative assistants", years: "Late 2010s–early 2020s", text: "Foundation models made text, code, images, audio, and summaries accessible through natural language interfaces." },
  { title: "Connected and agentic workflows", years: "Current direction", text: "Models are being connected to tools and data. The important question shifts from 'can it answer?' to 'what may it access, change, or decide?'" },
];

const facts = [
  { number: "175B", label: "GPT-3 parameters", detail: "Reported in 2020. Parameter count signals scale, but it does not measure truthfulness, usefulness, or safety on its own." },
  { number: "2017", label: "Transformer paper", detail: "The attention-based architecture became foundational for many modern language models." },
  { number: "2 phases", label: "Training and inference", detail: "Training learns model weights. Inference uses those weights to create an output." },
  { number: "1 rule", label: "Confidence is not evidence", detail: "A polished answer can still be unsupported. Verify claims that matter." },
];

export default function HistoryPage() {
  return (
    <LearningPageShell
      eyebrow="AI HISTORY · 10 MINUTES"
      title="AI did not arrive overnight."
      description="A compact map of how ideas from logic, learning, data, and compute became today's language models and connected AI systems. Dates are milestones, not a complete history."
    >
      <ModuleSection title="The evolution in one line" description="From hand-written rules, to learned patterns, to generative models, to systems that can connect with tools and data.">
        <div className="grid gap-4 md:grid-cols-4">
          {usageEras.map((era, index) => <article key={era.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5"><span className="text-xs font-bold uppercase tracking-widest text-cyan-200">0{index + 1} · {era.years}</span><h3 className="mt-3 text-lg font-bold text-white">{era.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{era.text}</p></article>)}
        </div>
      </ModuleSection>

      <ModuleSection title="Milestones that shaped modern AI" description="Each link leads to a primary or archival source. Use sources because history is more useful when it is inspectable.">
        <ol className="space-y-5 border-l border-cyan-300/30 pl-5 md:pl-8">
          {milestones.map((item) => <li key={item.year} className="relative"><span className="absolute -left-[2.05rem] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-200/60 bg-slate-950 text-[10px] font-black text-cyan-100 md:-left-[2.8rem]"><CalendarDays className="h-3 w-3" aria-hidden="true" /></span><article className="rounded-xl border border-white/10 bg-black/25 p-5"><div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><h3 className="text-xl font-bold text-white">{item.year} · {item.title}</h3><a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="inline-flex items-center gap-1 text-sm font-bold text-cyan-200 hover:text-cyan-100">{item.source}{item.href.startsWith("http") && <ExternalLink className="h-3 w-3" aria-hidden="true" />}</a></div><p className="mt-3 text-sm leading-relaxed text-slate-300">{item.text}</p></article></li>)}
        </ol>
      </ModuleSection>

      <ModuleSection title="Numbers and facts worth remembering" description="These figures are context, not hype. Model capabilities, costs, and public usage change rapidly.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {facts.map((fact) => <article key={fact.label} className="rounded-xl border border-fuchsia-300/20 bg-fuchsia-300/5 p-5"><div className="text-3xl font-black text-fuchsia-100">{fact.number}</div><h3 className="mt-2 font-bold text-white">{fact.label}</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{fact.detail}</p></article>)}
        </div>
      </ModuleSection>

      <section className="rounded-2xl border border-amber-300/25 bg-amber-300/10 p-6"><div className="flex gap-3"><BookOpenCheck className="h-6 w-6 shrink-0 text-amber-100" aria-hidden="true" /><div><h2 className="text-xl font-black text-amber-50">The lesson from history</h2><p className="mt-2 max-w-3xl text-sm leading-relaxed text-amber-50">AI capabilities change, but human responsibility does not disappear. The useful questions are: What is this system actually doing? What evidence supports its output? What data and permissions does it have? Who is accountable if it is wrong?</p></div></div></section>
    </LearningPageShell>
  );
}