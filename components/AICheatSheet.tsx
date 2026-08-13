"use client";

import { useMemo, useState } from "react";
import { Blocks, Database, Filter, Search, Server, Sparkles } from "lucide-react";

type Term = {
  term: string;
  acronym?: string;
  category: "Foundations" | "Models" | "Context" | "Agents" | "Building" | "Culture";
  meaning: string;
  why: string;
};

const terms: Term[] = [
  { term: "Artificial intelligence", acronym: "AI", category: "Foundations", meaning: "Software that performs tasks associated with perception, language, prediction, or decisions.", why: "AI is an umbrella term, not one technology or one product." },
  { term: "Machine learning", acronym: "ML", category: "Foundations", meaning: "A way to build software by learning patterns from examples instead of writing every rule by hand.", why: "Most modern AI systems are built with machine learning." },
  { term: "Deep learning", acronym: "DL", category: "Foundations", meaning: "Machine learning that uses many-layered neural networks.", why: "It enabled major progress in vision, speech, and language tasks." },
  { term: "Neural network", category: "Foundations", meaning: "A mathematical model with connected layers that transforms inputs into predictions.", why: "It is inspired by biology, but it is not a digital brain." },
  { term: "Training", category: "Foundations", meaning: "The process of adjusting a model using data and compute so it learns patterns.", why: "Training happens before you use a model; it can be costly and time-consuming." },
  { term: "Inference", category: "Foundations", meaning: "Using a trained model to generate a prediction, answer, image, or other output.", why: "Most everyday AI use is inference, not training." },
  { term: "Large language model", acronym: "LLM", category: "Models", meaning: "A model trained on large amounts of text to predict and generate token sequences.", why: "Chatbots and many AI assistants are powered by LLMs." },
  { term: "Small language model", acronym: "SLM", category: "Models", meaning: "A smaller language model designed for lower cost, faster use, or on-device deployment.", why: "Smaller can be the better trade-off when the task is narrow or privacy matters." },
  { term: "Parameters", category: "Models", meaning: "The learned numeric values inside a model that shape its behavior.", why: "Parameter count is one signal of scale, not a complete measure of quality or safety." },
  { term: "Multimodal model", category: "Models", meaning: "A model that can work with more than one kind of input or output, such as text, images, audio, or video.", why: "It expands AI use beyond typing into a chat box." },
  { term: "Reasoning model", category: "Models", meaning: "A model optimized to spend more compute on difficult tasks before producing an answer.", why: "It may improve some complex tasks, but its final answer still needs checking." },
  { term: "Open weights", category: "Models", meaning: "A model whose learned weights are available to download under a stated license.", why: "Open weights are not automatically open source, free for every use, or safe to deploy without review." },
  { term: "Token", category: "Context", meaning: "A chunk of text a language model processes; it may be a word, part of a word, punctuation, or whitespace.", why: "Tokens affect cost, context limits, and how a model reads and writes." },
  { term: "Context window", category: "Context", meaning: "The maximum amount of tokenized information a model can consider in one request.", why: "A large context window does not guarantee that every detail will be used correctly." },
  { term: "System prompt", category: "Context", meaning: "High-priority instructions that define an AI application's intended behavior.", why: "A system prompt guides behavior but is not a complete security boundary." },
  { term: "Temperature", category: "Context", meaning: "A sampling setting that influences how predictable or varied generated output is.", why: "Lower is usually steadier; higher can be more varied. Neither setting makes an answer true." },
  { term: "Hallucination", category: "Context", meaning: "A confident-looking model output that is incorrect, unsupported, or invented.", why: "Treat important claims as leads to verify, not facts to trust automatically." },
  { term: "Embedding", category: "Context", meaning: "A numeric representation of meaning used to compare related text, images, or other data.", why: "Embeddings power semantic search and retrieval systems." },
  { term: "Retrieval-augmented generation", acronym: "RAG", category: "Context", meaning: "A pattern that retrieves relevant external information and gives it to a model while answering.", why: "RAG can ground answers in current or private sources, but retrieval quality still matters." },
  { term: "Vector database", category: "Context", meaning: "A data store designed to search embeddings by similarity.", why: "It is often one part of a RAG system, not the system itself." },
  { term: "AI agent", category: "Agents", meaning: "A system that can pursue a goal through multiple steps, often using tools, memory, or plans.", why: "An agent needs clear scope, limited permissions, and human approval for consequential actions." },
  { term: "Agentic workflow", category: "Agents", meaning: "A workflow where AI plans, delegates, calls tools, or iterates toward a goal.", why: "It can save time, but it multiplies the importance of oversight." },
  { term: "Tool calling", acronym: "Function calling", category: "Agents", meaning: "A model returns a structured request for software to perform an action, such as searching, booking, or querying data.", why: "The model suggests an action; the surrounding application decides whether and how it runs." },
  { term: "Computer use", category: "Agents", meaning: "An AI capability that can interact with a graphical interface by clicking, typing, and navigating.", why: "It is powerful but risky because mistakes can affect real accounts and data." },
  { term: "Multi-agent system", category: "Agents", meaning: "Several specialized AI agents that coordinate or pass work between each other.", why: "More agents can add structure, but they also add complexity, cost, and failure points." },
  { term: "Agent2Agent", acronym: "A2A", category: "Agents", meaning: "A protocol concept for agents to discover capabilities and collaborate across systems.", why: "It aims to make agent-to-agent work more interoperable; the ecosystem is still evolving." },
  { term: "Model Context Protocol", acronym: "MCP", category: "Agents", meaning: "An open protocol for connecting AI applications to external context, tools, and services through standard interfaces.", why: "MCP can reduce one-off integrations, but every server still needs permission and data-security review." },
  { term: "MCP host", category: "Agents", meaning: "The AI application a person uses, such as a desktop app or IDE, that manages connections to MCP servers.", why: "The host is where user experience and permission choices should be visible." },
  { term: "MCP client", category: "Agents", meaning: "The connection inside an MCP host that communicates with one MCP server.", why: "Clients keep individual server connections separate inside the host." },
  { term: "MCP server", category: "Agents", meaning: "A program that exposes a limited set of tools, resources, or prompts to an MCP client.", why: "Treat it like any other integration: inspect what it can access and approve deliberately." },
  { term: "Fine-tuning", category: "Building", meaning: "Further training a base model on selected examples for a task, style, or behavior.", why: "Fine-tuning can help a repeatable task, but it is not the first answer for every problem." },
  { term: "LoRA", category: "Building", meaning: "A parameter-efficient fine-tuning method that learns small additional weight updates.", why: "It can adapt models with less compute than full fine-tuning." },
  { term: "Distillation", category: "Building", meaning: "Training a smaller model to reproduce useful behavior from a larger model or teacher system.", why: "It can make capabilities cheaper or faster, often with trade-offs." },
  { term: "Quantization", category: "Building", meaning: "Using lower-precision numbers to reduce a model's memory use and sometimes improve speed.", why: "It makes local deployment more practical, but quality can change." },
  { term: "Evaluation", acronym: "Eval", category: "Building", meaning: "A repeatable test used to measure quality, safety, reliability, or task performance.", why: "A benchmark score is evidence about a test, not proof that a system is ready for every real-world use." },
  { term: "Benchmark", category: "Building", meaning: "A standardized task or dataset used to compare systems.", why: "Benchmarks are useful, but systems can be optimized for a test without being broadly reliable." },
  { term: "Guardrail", category: "Building", meaning: "A technical or policy control intended to reduce harmful, unsafe, or unauthorized behavior.", why: "Good guardrails are layered: instructions, permissions, data controls, monitoring, and human review." },
  { term: "Red teaming", category: "Building", meaning: "Deliberately testing a system for weaknesses, misuse paths, or unsafe behavior.", why: "It helps teams discover failures before real users are harmed." },
  { term: "Synthetic data", category: "Building", meaning: "Data created by a model or simulation rather than collected directly from the real world.", why: "It can help with scale or privacy, but it can also repeat errors and bias." },
  { term: "Vibe coding", category: "Culture", meaning: "An informal term for building software by describing intent to an AI and iterating on generated code.", why: "It can accelerate prototypes; production code still needs review, tests, and security checks." },
  { term: "AI slop", category: "Culture", meaning: "A critical term for low-quality, mass-produced AI-generated content.", why: "Volume is not value. Good work still needs intent, verification, and editorial judgment." },
];

const categories = ["All", "Foundations", "Models", "Context", "Agents", "Building", "Culture"] as const;
type CategoryFilter = (typeof categories)[number];

export default function AICheatSheet() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const visibleTerms = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return terms.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const searchable = `${item.term} ${item.acronym ?? ""} ${item.meaning} ${item.why}`.toLowerCase();
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [category, query]);

  return (
    <div className="space-y-10">
      <section aria-labelledby="mcp-title" className="overflow-hidden rounded-2xl border border-fuchsia-300/25 bg-gradient-to-br from-slate-950 via-fuchsia-950/40 to-slate-950 p-6 md:p-8">
        <div className="grid gap-7 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/25 bg-fuchsia-300/10 px-3 py-1 text-xs font-bold tracking-widest text-fuchsia-100"><Blocks className="h-4 w-4" aria-hidden="true" /> KEY CONCEPT</div>
            <h2 id="mcp-title" className="mt-4 text-3xl font-black tracking-tight text-white">MCP is a standard connector, not an AI brain.</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300"><strong>Model Context Protocol</strong> gives AI applications a standard way to connect with approved tools, data, and instructions. It can make integrations more reusable, but it does not remove the need for permissions, privacy review, or human approval.</p>
          </div>
          <div className="grid gap-3 text-sm">
            <McpNode icon={<Sparkles className="h-5 w-5" />} title="You and the AI app" text="The MCP host is the app where you interact with an assistant." />
            <div className="ml-7 h-5 border-l border-dashed border-fuchsia-200/50" />
            <McpNode icon={<Server className="h-5 w-5" />} title="MCP server" text="A separate program offers a limited menu of tools, resources, or prompts." />
            <div className="ml-7 h-5 border-l border-dashed border-fuchsia-200/50" />
            <McpNode icon={<Database className="h-5 w-5" />} title="Approved services" text="Examples include a calendar, file store, company database, or documentation system." />
          </div>
        </div>
        <div className="mt-6 rounded-xl border border-amber-300/25 bg-amber-300/10 p-4 text-sm leading-relaxed text-amber-50"><span className="font-bold">Permission rule:</span> An MCP server is still software with access. Know what it can read, what it can change, and which actions require confirmation.</div>
        <a href="https://modelcontextprotocol.io/docs/getting-started/intro" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-bold text-fuchsia-100 underline decoration-fuchsia-300/50 underline-offset-4 transition hover:text-white">Read the official MCP introduction</a>
      </section>

      <section aria-labelledby="glossary-title">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 id="glossary-title" className="text-2xl font-black tracking-tight text-white">AI word decoder</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">A curated working vocabulary for modern AI. Terms change quickly, so use this to understand conversations—not as a claim that every buzzword is settled or necessary.</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-400"><span className="font-bold text-cyan-200">{visibleTerms.length}</span> terms shown</div>
        </div>
        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="flex w-full items-center gap-3 rounded-xl border border-white/15 bg-black/30 px-4 py-3 lg:max-w-md"><Search className="h-5 w-5 text-slate-500" aria-hidden="true" /><span className="sr-only">Search AI terms</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search MCP, RAG, agent, token..." className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none" /></label>
          <div className="flex flex-wrap gap-2" aria-label="Filter glossary by category">
            {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`rounded-full border px-3 py-1.5 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 ${category === item ? "border-cyan-300 bg-cyan-300/15 text-cyan-100" : "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10"}`}>{item}</button>)}
          </div>
        </div>
        {visibleTerms.length > 0 ? <div className="mt-6 grid gap-4 md:grid-cols-2">
          {visibleTerms.map((item) => <article key={item.term} className="rounded-xl border border-white/10 bg-white/[0.03] p-5"><div className="flex items-start justify-between gap-3"><h3 className="text-lg font-bold text-white">{item.term}{item.acronym && <span className="ml-2 text-sm text-cyan-200">({item.acronym})</span>}</h3><span className="shrink-0 rounded-full bg-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">{item.category}</span></div><p className="mt-3 text-sm leading-relaxed text-slate-300">{item.meaning}</p><p className="mt-3 border-l-2 border-cyan-300/50 pl-3 text-sm leading-relaxed text-cyan-100"><span className="font-bold">Why it matters:</span> {item.why}</p></article>)}
        </div> : <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-8 text-center text-slate-400"><Filter className="mx-auto h-7 w-7" aria-hidden="true" /><p className="mt-3">No term matches that search yet. Try a shorter word or choose All.</p></div>}
      </section>
    </div>
  );
}

function McpNode({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <div className="flex gap-3 rounded-xl border border-white/10 bg-black/25 p-4"><div className="shrink-0 text-fuchsia-200">{icon}</div><div><h3 className="font-bold text-white">{title}</h3><p className="mt-1 leading-relaxed text-slate-300">{text}</p></div></div>;
}