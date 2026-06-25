import { useMemo, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";

export type Project = {
  title: string;
  client: string;
  category: "Land Administration" | "Surveying" | "Planning" | "Infrastructure" | "GIS";
  description: string;
  tech: string[];
  coords: [number, number];
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Land Information Management System",
    client: "Nakuru County",
    category: "Land Administration",
    description:
      "Designed and supported implementation of a county-wide LIMS integrating land records, valuation, planning, cadastral information and revenue systems.",
    tech: ["GIS", "FME", "ArcGIS", "Land Administration", "Database Design"],
    coords: [-0.3031, 36.08],
    accent: "from-geo to-emerald",
  },
  {
    title: "Land Information Management System",
    client: "Lamu County",
    category: "Land Administration",
    description:
      "Developed geospatial standards and integrated cadastral and registration datasets into a digital land administration platform.",
    tech: ["Geospatial Standards", "Cadastral Data", "FME", "ArcGIS"],
    coords: [-2.2717, 40.902],
    accent: "from-emerald to-geo",
  },
  {
    title: "Land Information Management System",
    client: "Kitui County",
    category: "Land Administration",
    description:
      "Designed integrated land administration workflows, cadastral databases, metadata standards and user training programs.",
    tech: ["Workflow Design", "Metadata", "Training", "GIS"],
    coords: [-1.367, 38.0106],
    accent: "from-geo to-emerald",
  },
  {
    title: "Lake Amu Trading Centre Planning & Regularization",
    client: "Lamu County",
    category: "Planning",
    description:
      "Supported planning and regularization of approximately 8 hectares through cadastral surveys, GIS mapping and stakeholder coordination.",
    tech: ["Cadastral Survey", "GIS Mapping", "Stakeholder Engagement"],
    coords: [-2.21, 40.92],
    accent: "from-emerald to-geo",
  },
  {
    title: "Ugunja Municipality Development Plan",
    client: "Siaya County",
    category: "Planning",
    description:
      "Conducted GIS mapping, boundary surveys, zoning analysis and planning support for municipal development.",
    tech: ["Boundary Surveys", "Zoning Analysis", "QGIS", "ArcGIS"],
    coords: [0.046, 34.298],
    accent: "from-geo to-emerald",
  },
  {
    title: "Greater Githurai Water Supply Project",
    client: "Toddy Civil Engineering",
    category: "Infrastructure",
    description:
      "Performed engineering surveys, control establishment, setting-out, as-built surveys and construction support for major water infrastructure works.",
    tech: ["Engineering Survey", "Setting-Out", "As-Built", "GNSS"],
    coords: [-1.2007, 36.918],
    accent: "from-emerald to-geo",
  },
];

const FILTERS = ["All", "Surveying", "GIS", "Planning", "Land Administration", "Infrastructure"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter || (filter === "GIS" && p.tech.includes("GIS")))),
    [filter],
  );

  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Featured Work
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Projects that map progress across Kenya
            </h2>
            <p className="mt-4 text-muted-foreground">
              A selection of land administration systems, planning support, surveys and infrastructure work delivered
              with county governments and engineering partners.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
                  filter === f
                    ? "border-transparent bg-gradient-accent text-white shadow-elevated"
                    : "border-border bg-card text-muted-foreground hover:border-geo/40 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.title + p.client}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-geo/40 hover:shadow-elevated"
            >
              {/* Cover */}
              <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.accent}`}>
                <svg viewBox="0 0 400 200" className="absolute inset-0 h-full w-full opacity-50">
                  <defs>
                    <pattern id={`grid-${p.client}`} width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeOpacity="0.25" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#grid-${p.client})`} />
                  <path
                    d="M 20 150 Q 80 80 160 110 T 320 70 T 400 100"
                    fill="none"
                    stroke="white"
                    strokeOpacity="0.7"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 0 170 Q 100 110 200 140 T 400 120"
                    fill="none"
                    stroke="white"
                    strokeOpacity="0.45"
                    strokeWidth="1"
                  />
                  <circle cx="220" cy="100" r="6" fill="white" />
                  <circle cx="220" cy="100" r="14" fill="none" stroke="white" strokeOpacity="0.5" />
                </svg>
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                  {p.category}
                </div>
                <div className="absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-full bg-black/30 px-2.5 py-1 text-[11px] text-white backdrop-blur">
                  <MapPin className="h-3 w-3" /> {p.coords[0].toFixed(2)}, {p.coords[1].toFixed(2)}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-geo">{p.client}</div>
                <h3 className="mt-1.5 font-display text-lg font-bold leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs font-medium text-muted-foreground">Case study</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-foreground transition group-hover:bg-gradient-accent group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
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
