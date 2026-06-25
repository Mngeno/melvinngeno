import { useEffect, useMemo, useState } from "react";
import { PROJECTS } from "./Projects";
import { Layers3, Filter, Globe2 } from "lucide-react";

const CATEGORY_COLORS: Record<string, string> = {
  "Land Administration": "#2563EB",
  Planning: "#10B981",
  Infrastructure: "#0EA5E9",
  Surveying: "#8B5CF6",
  GIS: "#F59E0B",
};

const FILTERS = ["All", "Land Administration", "Planning", "Infrastructure", "Surveying"] as const;

type LeafletMods = {
  MapContainer: typeof import("react-leaflet").MapContainer;
  TileLayer: typeof import("react-leaflet").TileLayer;
  CircleMarker: typeof import("react-leaflet").CircleMarker;
  Popup: typeof import("react-leaflet").Popup;
  Tooltip: typeof import("react-leaflet").Tooltip;
};

export function MapShowcase() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [basemap, setBasemap] = useState<"streets" | "satellite" | "dark">("dark");
  const [leaflet, setLeaflet] = useState<LeafletMods | null>(null);

  useEffect(() => {
    let active = true;
    Promise.all([import("react-leaflet"), import("leaflet/dist/leaflet.css")]).then(([rl]) => {
      if (!active) return;
      setLeaflet({
        MapContainer: rl.MapContainer,
        TileLayer: rl.TileLayer,
        CircleMarker: rl.CircleMarker,
        Popup: rl.Popup,
        Tooltip: rl.Tooltip,
      });
    });
    return () => {
      active = false;
    };
  }, []);

  const projects = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  const tile = {
    streets: { url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", attr: "© OpenStreetMap" },
    satellite: {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      attr: "Tiles © Esri",
    },
    dark: {
      url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      attr: "© OSM © CARTO",
    },
  }[basemap];

  return (
    <section id="map" className="relative scroll-mt-24 overflow-hidden bg-navy py-24 text-navy-foreground sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/70 backdrop-blur">
              <Globe2 className="h-3.5 w-3.5" /> Interactive Map Portfolio
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Where the work happens
            </h2>
            <p className="mt-4 text-white/70">
              Explore project locations across Kenya. Filter by domain and switch basemaps to inspect each engagement
              in its real-world geographic context.
            </p>
          </div>

          <div className="inline-flex rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur">
            {(["streets", "satellite", "dark"] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBasemap(b)}
                className={`rounded-full px-3 py-1 text-xs font-semibold capitalize transition ${
                  basemap === b ? "bg-gradient-accent text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60">
              <Filter className="h-3.5 w-3.5" /> Filters
            </div>
            <div className="mt-3 flex flex-col gap-1.5">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`flex items-center justify-between rounded-lg border px-3 py-2 text-left text-xs font-semibold transition ${
                    filter === f
                      ? "border-emerald/40 bg-emerald/10 text-white"
                      : "border-white/10 bg-transparent text-white/70 hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: f === "All" ? "white" : CATEGORY_COLORS[f] }}
                    />
                    {f}
                  </span>
                  <span className="font-mono text-[10px] text-white/50">
                    {f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-navy/40 p-4 font-mono text-[10px] text-white/70">
              <div className="mb-2 flex items-center gap-2 text-emerald">
                <Layers3 className="h-3 w-3" /> SYSTEM
              </div>
              <div>CRS: WGS84</div>
              <div>PROJ: UTM 37M</div>
              <div>SCALE: 1 : 1.5M</div>
              <div className="mt-2 text-white/50">Points: {projects.length}</div>
            </div>
          </aside>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-elevated">
            {leaflet ? (
              <leaflet.MapContainer
                center={[-0.6, 37.5]}
                zoom={6}
                scrollWheelZoom={false}
                style={{ height: 540, width: "100%", background: "#0F172A" }}
              >
                <leaflet.TileLayer key={basemap} url={tile.url} attribution={tile.attr} />
                {projects.map((p) => (
                  <leaflet.CircleMarker
                    key={p.title + p.client}
                    center={p.coords}
                    radius={9}
                    pathOptions={{
                      color: CATEGORY_COLORS[p.category],
                      fillColor: CATEGORY_COLORS[p.category],
                      fillOpacity: 0.65,
                      weight: 2,
                    }}
                  >
                    <leaflet.Tooltip direction="top" offset={[0, -8]} opacity={1}>
                      <strong>{p.client}</strong>
                      <br />
                      <span style={{ fontSize: 11 }}>{p.category}</span>
                    </leaflet.Tooltip>
                    <leaflet.Popup>
                      <div style={{ minWidth: 220 }}>
                        <div
                          style={{
                            fontSize: 10,
                            textTransform: "uppercase",
                            letterSpacing: 1,
                            color: "#2563EB",
                            fontWeight: 700,
                          }}
                        >
                          {p.client}
                        </div>
                        <div style={{ fontWeight: 700, marginTop: 2, fontSize: 14 }}>{p.title}</div>
                        <p style={{ fontSize: 12, color: "#475569", marginTop: 6 }}>{p.description}</p>
                      </div>
                    </leaflet.Popup>
                  </leaflet.CircleMarker>
                ))}
              </leaflet.MapContainer>
            ) : (
              <div className="grid h-[540px] place-items-center bg-navy/60 text-white/50">Loading map…</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
