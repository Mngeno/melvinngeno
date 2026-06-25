import { Award } from "lucide-react";

const CERTS = [
  { name: "FME Certified Professional", issuer: "Safe Software" },
  { name: "Imagery in Action", issuer: "ESRI" },
  { name: "Going Places with Spatial Analysis", issuer: "ESRI" },
  { name: "GIS for Climate Action", issuer: "ESRI" },
  { name: "Spatial Data Science", issuer: "ESRI" },
  { name: "GIS in Conservation Mapping", issuer: "RCMRD" },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Credentials
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Certifications & continuous learning
          </h2>
          <p className="mt-4 text-muted-foreground">
            Industry credentials from the leading authorities in GIS, data integration and regional remote sensing.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c) => (
            <div
              key={c.name}
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-geo/40 hover:shadow-elevated"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-30 blur-md transition group-hover:opacity-60" />
                <div className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-accent text-white shadow-elevated">
                  <Award className="h-6 w-6" />
                </div>
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-semibold uppercase tracking-widest text-geo">{c.issuer}</div>
                <div className="mt-0.5 font-display text-base font-bold leading-snug">{c.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
