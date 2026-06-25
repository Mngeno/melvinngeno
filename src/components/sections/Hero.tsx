import { ArrowRight, Download, MapPin, Satellite, Compass } from "lucide-react";
import heroBg from "@/assets/hero-gis.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy text-navy-foreground">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/70 via-navy/85 to-navy" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" aria-hidden />

      {/* floating accent rings */}
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-geo/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-emerald/20 blur-3xl" aria-hidden />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 pt-36 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:px-8 lg:pb-32 lg:pt-44">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-emerald" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            Available for new projects · Nairobi, Kenya
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            Transforming{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Spatial Data</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 8 Q 50 -2 100 6 T 198 6"
                  stroke="oklch(0.69 0.16 162)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            into Actionable Insights
          </h1>

          <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
            <span className="font-semibold text-white">Geospatial Engineer</span> · GIS Specialist · Surveying & Land Information Systems Professional
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
            Experienced Geospatial Engineer with over 6 years of experience delivering GIS, cadastral surveying, land
            administration systems, spatial analysis, and geospatial data solutions for government agencies, county
            governments, infrastructure projects, and private-sector organizations across Kenya.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="/melvin-ngeno-cv.pdf"
              download
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-accent px-6 text-sm font-semibold text-white shadow-elevated transition hover:opacity-95"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a
              href="#contact"
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Contact Me
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {[
              { v: "6+", l: "Years experience" },
              { v: "10+", l: "Major projects" },
              { v: "5", l: "Counties served" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-3xl font-bold text-white">{s.v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-white/55">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right visual: stylised radar / map widget */}
        <div className="relative hidden lg:block">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-elevated" />
            <div className="absolute inset-6 rounded-2xl border border-emerald/30 bg-navy/40">
              {/* Radar rings */}
              <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
                {[40, 70, 95].map((r) => (
                  <circle
                    key={r}
                    cx="100"
                    cy="100"
                    r={r}
                    fill="none"
                    stroke="oklch(0.69 0.16 162 / 0.35)"
                    strokeDasharray="2 4"
                  />
                ))}
                <line x1="100" y1="5" x2="100" y2="195" stroke="oklch(0.69 0.16 162 / 0.25)" />
                <line x1="5" y1="100" x2="195" y2="100" stroke="oklch(0.69 0.16 162 / 0.25)" />
                {/* Coordinate points */}
                {[
                  { x: 130, y: 60 },
                  { x: 70, y: 110 },
                  { x: 145, y: 130 },
                  { x: 90, y: 75 },
                ].map((p, i) => (
                  <g key={i}>
                    <circle cx={p.x} cy={p.y} r="3" fill="oklch(0.52 0.22 264)" />
                    <circle cx={p.x} cy={p.y} r="8" fill="none" stroke="oklch(0.52 0.22 264 / 0.5)" />
                  </g>
                ))}
                <path
                  d="M30 140 Q 80 90 130 120 T 180 70"
                  fill="none"
                  stroke="oklch(0.69 0.16 162)"
                  strokeWidth="1.5"
                  strokeDasharray="200"
                  strokeDashoffset="200"
                  style={{ animation: "draw 3s ease-out forwards" }}
                />
              </svg>

              {/* HUD labels */}
              <div className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-widest text-emerald/90">
                <div>LAT 1.286°S</div>
                <div>LON 36.817°E</div>
              </div>
              <div className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-widest text-white/60">
                WGS84 · UTM 37M
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/60">
                <span>SCALE 1:24 000</span>
                <span className="text-emerald">● Live</span>
              </div>
            </div>

            {/* floating chips */}
            <div className="absolute -left-6 top-12 animate-float rounded-2xl border border-white/10 bg-card/90 px-4 py-3 text-card-foreground shadow-card-soft backdrop-blur">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <Satellite className="h-3.5 w-3.5 text-geo" /> Remote Sensing
              </div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">Sentinel · Landsat</div>
            </div>
            <div
              className="absolute -right-4 bottom-16 animate-float rounded-2xl border border-white/10 bg-card/90 px-4 py-3 text-card-foreground shadow-card-soft backdrop-blur"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex items-center gap-2 text-xs font-semibold">
                <Compass className="h-3.5 w-3.5 text-emerald" /> GNSS / RTK
              </div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">cm-level accuracy</div>
            </div>
            <div
              className="absolute -bottom-6 left-12 animate-float rounded-2xl border border-white/10 bg-card/90 px-4 py-3 text-card-foreground shadow-card-soft backdrop-blur"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-2 text-xs font-semibold">
                <MapPin className="h-3.5 w-3.5 text-geo" /> 47 Counties · Kenya
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
