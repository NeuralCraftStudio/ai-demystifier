import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

const navigation = [
  { href: "/missions", label: "Mission" },
  { href: "/learn", label: "Learn" },
  { href: "/apply", label: "Apply" },
  { href: "/models", label: "Models" },
  { href: "/safety", label: "Safety" },
  { href: "/cheatsheet", label: "Cheat sheet" },
  { href: "/history", label: "History" },
];

export function LearningPageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black px-4 py-8 text-slate-200 selection:bg-cyan-300/30 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="border-b border-white/10 pb-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <Link href="/" className="inline-flex w-fit items-center gap-2 text-sm font-bold text-slate-300 transition hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All learning paths
            </Link>
            <nav aria-label="Learning paths" className="flex flex-wrap gap-2">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold tracking-widest text-cyan-100"><Compass className="h-4 w-4" aria-hidden="true" /> {eyebrow}</div>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">{title}</h1>
            <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">{description}</p>
          </div>
        </header>
        <div className="space-y-16 py-12">{children}</div>
      </div>
    </main>
  );
}

export function ModuleSection({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={title.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")} className="space-y-5">
      <div className="max-w-3xl">
        <h2 id={title.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")} className="text-2xl font-black tracking-tight text-white">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
      </div>
      {children}
    </section>
  );
}