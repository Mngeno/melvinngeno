import { Award, Briefcase, GraduationCap, MapPinned, Building2, BadgeCheck, Globe2, Compass } from "lucide-react";

const facts = [
  { icon: Briefcase, label: "Years Experience", value: "6+" },
  { icon: MapPinned, label: "Major Projects", value: "10+" },
  { icon: Award, label: "FME", value: "Certified Pro" },
  { icon: GraduationCap, label: "ISK", value: "Graduate Member" },
  { icon: Building2, label: "Current Role", value: "GIS Specialist · Digireg Kenya" },
  { icon: BadgeCheck, label: "Specialty", value: "Land Information Systems" },
];

const pillars = [
  "GIS & Remote Sensing",
  "Land Information Management Systems",
  "Cadastral & Engineering Surveys",
  "Physical Planning Support",
  "Geospatial Data Infrastructure",
  "Project Management & Stakeholder Engagement",
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Visual identity card */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-accent opacity-20 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-navy text-navy-foreground shadow-card-soft">
              <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-geo/40 blur-3xl" aria-hidden />
              <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-emerald/30 blur-3xl" aria-hidden />

              <div className="relative aspect-[4/5] p-7">
                {/* HUD corners */}
                <div className="absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-emerald/70" />
                <div className="absolute right-4 top-4 h-5 w-5 border-r-2 border-t-2 border-emerald/70" />
                <div className="absolute bottom-4 left-4 h-5 w-5 border-b-2 border-l-2 border-emerald/70" />
                <div className="absolute bottom-4 right-4 h-5 w-5 border-b-2 border-r-2 border-emerald/70" />

                {/* Coordinates header */}
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/60">
                  <span>WGS84 · EPSG:4326</span>
                  <span className="inline-flex items-center gap-1 text-emerald">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Live
                  </span>
                </div>

                {/* Monogram */}
                <div className="mt-10 flex items-center gap-5">
                  <div className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-gradient-accent text-white shadow-elevated">
                    <span className="font-display text-3xl font-extrabold tracking-tight">MN</span>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold leading-tight text-white">
                      Melvin K.
                      <br />
                      Ngeno
                    </div>
                    <div className="mt-1 text-xs text-white/65">Geospatial Engineer · GIS Specialist</div>
                  </div>
                </div>

                {/* Decorative contour svg */}
                <svg viewBox="0 0 320 200" className="mt-8 h-32 w-full opacity-80">
                  <defs>
                    <linearGradient id="aboutLine" x1="0" x2="1">
                      <stop offset="0" stopColor="oklch(0.52 0.22 264)" />
                      <stop offset="1" stopColor="oklch(0.69 0.16 162)" />
                    </linearGradient>
                  </defs>
                  {[0, 20, 40, 60, 80, 100].map((o, i) => (
                    <path
                      key={i}
                      d={`M0 ${150 - o * 0.6} Q 80 ${90 - o * 0.4} 160 ${120 - o * 0.5} T 320 ${80 - o * 0.4}`}
                      fill="none"
                      stroke="url(#aboutLine)"
                      strokeOpacity={0.7 - i * 0.1}
                      strokeWidth={1}
                    />
                  ))}
                  <circle cx="80" cy="105" r="3" fill="oklch(0.69 0.16 162)" />
                  <circle cx="200" cy="95" r="3" fill="oklch(0.69 0.16 162)" />
                  <circle cx="280" cy="70" r="3" fill="oklch(0.69 0.16 162)" />
                </svg>

                {/* Bottom chips */}
                <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-white/80 backdrop-blur">
                    <Globe2 className="h-3.5 w-3.5 text-emerald" /> Worldwide
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-white/80 backdrop-blur">
                    <Compass className="h-3.5 w-3.5 text-emerald" /> 6+ Yrs
                  </div>
                </div>
              </div>
            </div>

            {/* Accent badge */}
            <div className="absolute -right-4 -top-4 hidden h-24 w-24 rotate-6 place-items-center rounded-2xl border border-emerald/40 bg-card text-center shadow-elevated sm:grid">
              <div>
                <div className="font-display text-2xl font-extrabold text-emerald">6+</div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Years</div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              About
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Engineering precision into every <span className="text-gradient">coordinate</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm a geospatial engineer specialising in the design and delivery of digital land administration
              systems, cadastral and engineering surveys, and spatial analytics that help institutions make confident,
              place-based decisions. My work bridges field survey, enterprise GIS, and policy — turning fragmented
              spatial datasets into trusted, governance-ready infrastructure.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {pillars.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald/15 text-emerald">
                    <BadgeCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-medium text-foreground">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-2xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:border-geo/40 hover:shadow-card-soft"
                >
                  <f.icon className="h-5 w-5 text-geo" />
                  <div className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {f.label}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-foreground">{f.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
