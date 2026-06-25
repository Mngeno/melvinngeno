import { Database, Globe, Layers, Map, PenTool, Radar, Ruler, Satellite } from "lucide-react";

const STACK = [
  { name: "ArcGIS", icon: Map },
  { name: "QGIS", icon: Globe },
  { name: "FME", icon: Layers },
  { name: "AutoCAD", icon: PenTool },
  { name: "GNSS", icon: Radar },
  { name: "Total Station", icon: Ruler },
  { name: "Remote Sensing", icon: Satellite },
  { name: "Spatial DBs", icon: Database },
];

export function TechStack() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Tools & Platforms
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {STACK.map((s, i) => (
            <div
              key={s.name}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-geo/40 hover:shadow-card-soft"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-geo transition group-hover:bg-gradient-accent group-hover:text-white">
                <s.icon className="h-6 w-6" />
              </span>
              <span className="text-center text-xs font-semibold text-foreground">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
