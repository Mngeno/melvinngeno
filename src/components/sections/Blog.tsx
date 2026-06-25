import { ArrowUpRight, Clock } from "lucide-react";

const POSTS = [
  {
    tag: "GIS",
    title: "Designing County Land Information Systems that scale",
    excerpt: "Lessons from rolling out integrated LIMS platforms across Kenyan counties — from data models to user adoption.",
    read: "8 min",
    accent: "from-geo to-emerald",
  },
  {
    tag: "Surveying",
    title: "GNSS workflows for cm-level cadastral accuracy",
    excerpt: "A practical look at RTK observation discipline, network corrections and post-processing for cadastral surveys.",
    read: "6 min",
    accent: "from-emerald to-geo",
  },
  {
    tag: "Automation",
    title: "Automating spatial ETL with FME",
    excerpt: "How to compose resilient FME workspaces that transform messy land records into clean enterprise-grade datasets.",
    read: "10 min",
    accent: "from-geo to-emerald",
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative scroll-mt-24 overflow-hidden bg-surface py-24 sm:py-32">
      <div className="absolute inset-0 bg-topo opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Writing
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Notes on GIS, surveying & land administration
            </h2>
          </div>
          <a href="#contact" className="text-sm font-semibold text-geo hover:underline">
            Get notified when I publish →
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-geo/40 hover:shadow-elevated"
            >
              <div className={`h-32 bg-gradient-to-br ${p.accent} relative`}>
                <svg viewBox="0 0 400 150" className="h-full w-full opacity-50">
                  <path
                    d="M0 100 Q 100 40 200 80 T 400 60"
                    fill="none"
                    stroke="white"
                    strokeOpacity="0.7"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M0 130 Q 120 70 240 110 T 400 90"
                    fill="none"
                    stroke="white"
                    strokeOpacity="0.4"
                    strokeWidth="1"
                  />
                </svg>
                <span className="absolute left-4 top-4 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold leading-snug">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {p.read} read
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent transition group-hover:bg-gradient-accent group-hover:text-white">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
