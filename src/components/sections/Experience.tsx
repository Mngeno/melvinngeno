const ITEMS = [
  {
    role: "GIS Specialist",
    org: "Digireg Kenya Ltd",
    period: "2022 – Present",
    points: [
      "County Land Information Systems",
      "Spatial Planning Projects",
      "GIS Data Management",
      "Stakeholder Coordination",
    ],
  },
  {
    role: "Surveyor",
    org: "Toddy Civil Engineering",
    period: "2020 – 2021",
    points: ["Engineering Surveys", "Water Infrastructure Projects", "Construction Support"],
  },
  {
    role: "Survey & Mapping Intern",
    org: "Kenya Forest Service",
    period: "2019",
    points: ["Forest Mapping", "Boundary Surveys", "Spatial Database Maintenance"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 overflow-hidden bg-surface py-24 sm:py-32">
      <div className="absolute inset-0 bg-topo opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Experience
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            A timeline of field & enterprise work
          </h2>
        </div>

        <ol className="relative mt-12 border-l-2 border-dashed border-geo/40">
          {ITEMS.map((item, i) => (
            <li key={item.role + item.org} className="relative ml-8 pb-12 last:pb-0">
              <span className="absolute -left-[42px] top-1 grid h-8 w-8 place-items-center rounded-full bg-gradient-accent text-white shadow-elevated ring-4 ring-background">
                <span className="font-mono text-xs font-bold">{ITEMS.length - i}</span>
              </span>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card-soft">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-bold">{item.role}</h3>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-geo">
                    {item.period}
                  </span>
                </div>
                <div className="mt-1 text-sm font-semibold text-muted-foreground">{item.org}</div>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
