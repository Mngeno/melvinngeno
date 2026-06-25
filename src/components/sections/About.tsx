import { Award, Briefcase, GraduationCap, MapPinned, Building2, BadgeCheck } from "lucide-react";
import portrait from "@/assets/melvin-portrait.jpg";

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
          {/* Portrait */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-accent opacity-20 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-card-soft">
              <img
                src={portrait}
                alt="Melvin Kipkemoi Ngeno, Geospatial Engineer"
                width={896}
                height={1120}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                <div className="font-display text-lg font-bold text-white">Melvin K. Ngeno</div>
                <div className="text-xs text-white/75">GIS Specialist · Digireg Kenya Ltd</div>
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
