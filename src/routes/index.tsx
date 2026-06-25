import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { MapShowcase } from "@/components/sections/MapShowcase";
import { Certifications } from "@/components/sections/Certifications";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

const TITLE = "Melvin K. Ngeno — Geospatial Engineer & GIS Specialist | Kenya";
const DESC =
  "Geospatial Engineer and GIS Specialist in Kenya with 6+ years in GIS, cadastral surveying, land information management systems, FME data integration, ArcGIS, remote sensing and spatial planning.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "Geospatial Engineer Kenya, GIS Specialist Kenya, Surveyor Kenya, Land Information Management Systems, GIS Consultant Kenya, ArcGIS Professional, FME Certified Professional, Cadastral Surveying, Spatial Data Management, Geospatial Consulting",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Melvin Kipkemoi Ngeno",
          jobTitle: "Geospatial Engineer & GIS Specialist",
          worksFor: { "@type": "Organization", name: "Digireg Kenya Ltd" },
          address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
          knowsAbout: [
            "GIS",
            "Cadastral Surveying",
            "Land Information Management Systems",
            "ArcGIS",
            "FME",
            "Remote Sensing",
            "Spatial Planning",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <MapShowcase />
        <Certifications />
        <Experience />
        <TechStack />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
