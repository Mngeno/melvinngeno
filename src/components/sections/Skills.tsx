import { Layers, Ruler, Database, PenTool, Sparkles } from "lucide-react";

const groups = [
  {
    icon: Layers,
    title: "GIS & Spatial Analysis",
    skills: ["ArcGIS Pro", "ArcGIS Online", "ArcGIS Desktop", "QGIS", "Spatial Analysis", "Geodatabases", "Web GIS"],
  },
  {
    icon: Ruler,
    title: "Surveying",
    skills: ["GNSS / RTK", "Total Station", "Automatic Level", "Engineering Surveys", "Cadastral Surveys", "Topographic Surveys", "Construction Surveys"],
  },
  {
    icon: Database,
    title: "Data Integration",
    skills: ["FME", "Data Migration", "ETL Workflows", "Data Quality Management", "Spatial Databases"],
  },
  {
    icon: PenTool,
    title: "CAD & Design",
    skills: ["AutoCAD", "ZWCAD", "Survey Plotting", "Engineering Drawings"],
  },
  {
    icon: Sparkles,
    title: "Emerging Technologies",
    skills: ["AI for GIS", "Spatial Data Science", "Digital Land Administration", "Geospatial Automation"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 overflow-hidden bg-surface py-24 sm:py-32">
      <div className="absolute inset-0 bg-topo opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Capabilities
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            A full-stack geospatial toolkit
          </h2>
          <p className="mt-4 text-muted-foreground">
            From field survey instruments to enterprise GIS platforms and automation, here are the technologies and
            methods I work with every day.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, idx) => (
            <article
              key={g.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-geo/40 hover:shadow-elevated"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-accent opacity-0 blur-2xl transition group-hover:opacity-20" />
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-accent text-white shadow-elevated">
                  <g.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold">{g.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground transition group-hover:border-geo/30"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
