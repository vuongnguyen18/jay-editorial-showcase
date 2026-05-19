import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CursorTrail } from "@/components/CursorTrail";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tien Vuong Nguyen (Jay) — Product Engineer & Design Technologist" },
      {
        name: "description",
        content:
          "Portfolio of Tien Vuong Nguyen (Jay) — a product engineer and design technologist crafting quietly considered software, editorial interfaces, and design systems.",
      },
      { property: "og:title", content: "Tien Vuong Nguyen (Jay) — Portfolio" },
      {
        property: "og:description",
        content:
          "Editorial portfolio of a product engineer crafting quietly considered software.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <ParticleBackground />
      <CursorTrail />
      <Nav />
      <main
        className="relative opacity-0"
        style={{ animation: "fade-in 0.9s ease-out forwards" }}
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
