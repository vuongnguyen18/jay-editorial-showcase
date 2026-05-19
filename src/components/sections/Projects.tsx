import { Reveal } from "../Reveal";

const projects = [
  {
    no: "01",
    year: "2025",
    title: "Lumen Editorial",
    kind: "Publishing platform",
    blurb:
      "A long-form writing platform with typography-first composition tools and a reading layer designed for focus.",
    tags: ["React", "TypeScript", "Design systems"],
  },
  {
    no: "02",
    year: "2024",
    title: "Field Notes",
    kind: "Native iOS app",
    blurb:
      "A minimal journaling companion built around weekly reviews and seasonal reflection. Featured by Apple.",
    tags: ["Swift", "Product design", "Motion"],
  },
  {
    no: "03",
    year: "2024",
    title: "Atelier Studio",
    kind: "Agency website",
    blurb:
      "An award-winning portfolio site for a Paris-based architecture studio — built around editorial pacing and slow scroll.",
    tags: ["Next.js", "WebGL", "GSAP"],
  },
  {
    no: "04",
    year: "2023",
    title: "Quiet Metrics",
    kind: "Analytics dashboard",
    blurb:
      "A privacy-first analytics product for independent makers. Less noise. More signal. Built with care.",
    tags: ["Remix", "PostgreSQL", "Charts"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 flex items-baseline gap-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">§ 02</span>
            <h2 className="font-serif text-4xl md:text-5xl">Selected Works</h2>
            <span className="h-px flex-1 editorial-rule" />
          </div>
        </Reveal>

        <ul className="divide-y divide-ink/15 border-y border-ink/15">
          {projects.map((p, i) => (
            <Reveal key={p.no} delay={i * 80} as="li">
              <a
                href="#"
                className="group grid grid-cols-12 gap-4 py-10 transition-colors hover:bg-cream/60"
              >
                <div className="col-span-2 md:col-span-1 font-mono text-xs text-accent">{p.no}</div>
                <div className="col-span-10 md:col-span-6">
                  <h3 className="font-serif text-3xl tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                    {p.title}
                    <span className="ml-3 text-base italic text-muted-foreground">— {p.kind}</span>
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/70">
                    {p.blurb}
                  </p>
                </div>
                <div className="col-span-7 md:col-span-3 flex flex-wrap gap-2 self-center">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-ink/20 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="col-span-5 md:col-span-2 flex items-center justify-end gap-3 self-center font-mono text-xs text-muted-foreground">
                  {p.year}
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-500 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200}>
          <div className="mt-12 text-center text-sm italic text-muted-foreground">
            — More writings & case studies available on request —
          </div>
        </Reveal>
      </div>
    </section>
  );
}
