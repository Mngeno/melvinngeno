import { Quote } from "lucide-react";

const ITEMS = [
  {
    quote:
      "Melvin's spatial design and data migration work were instrumental in delivering our county land information platform on time. His attention to data quality is exceptional.",
    name: "Lead Engineer",
    role: "County LIMS Programme",
  },
  {
    quote:
      "Precise, dependable and deeply technical. Melvin brought clarity to our cadastral workflows and trained the team to maintain them independently.",
    name: "Survey Manager",
    role: "Planning Consultancy",
  },
  {
    quote:
      "His combination of field survey rigour and GIS automation gave the project a level of accuracy and traceability our client had never seen before.",
    name: "Project Director",
    role: "Infrastructure Works",
  },
];

export function Testimonials() {
  return (
    <section className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Endorsements
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Trusted by partners across Kenya
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ITEMS.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card-soft transition hover:-translate-y-1 hover:border-geo/40"
            >
              <Quote className="h-7 w-7 text-geo/40" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-display text-sm font-bold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
