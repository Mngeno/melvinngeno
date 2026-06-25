import { MapPin, Mail, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <a href="#top" className="flex items-center gap-2.5 font-display font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-accent text-white">
              <MapPin className="h-4 w-4" />
            </span>
            <span className="text-base">Melvin K. Ngeno</span>
          </a>
          <p className="mt-4 max-w-md text-sm text-white/65">
            Geospatial Engineer & GIS Specialist building digital land administration, survey and spatial data
            infrastructure for Kenya.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/55">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["About", "#about"],
              ["Projects", "#projects"],
              ["Map", "#map"],
              ["Experience", "#experience"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="text-white/75 transition hover:text-white">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/55">Connect</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2 text-white/75">
              <Mail className="h-4 w-4 text-emerald" /> melvin.ngeno@example.com
            </li>
            <li className="flex items-center gap-2 text-white/75">
              <Linkedin className="h-4 w-4 text-emerald" /> linkedin.com/in/melvin-ngeno
            </li>
            <li className="flex items-center gap-2 text-white/75">
              <MapPin className="h-4 w-4 text-emerald" /> Nairobi, Kenya
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/55 sm:flex-row sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} Melvin Kipkemoi Ngeno. All rights reserved.</span>
          <span className="font-mono uppercase tracking-widest">WGS84 · EPSG:4326</span>
        </div>
      </div>
    </footer>
  );
}
