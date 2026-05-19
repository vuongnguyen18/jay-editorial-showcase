import { Reveal } from "../Reveal";

const roles = [
  {
    period: "2023 — Now",
    role: "Founding Engineer",
    org: "Independent Studio",
    place: "Remote",
    notes:
      "Partnering with founders and design studios on editorial products, brand-led web experiences, and design systems.",
  },
  {
    period: "2021 — 2023",
    role: "Senior Product Engineer",
    org: "Linear-adjacent SaaS",
    place: "San Francisco",
    notes:
      "Shipped the writing & collaboration surfaces. Led the typography and motion language for the v3 product.",
  },
  {
    period: "2019 — 2021",
    role: "Product Designer & Engineer",
    org: "Boutique design agency",
    place: "Berlin",
    notes:
      "Designed and built award-winning sites for cultural institutions, including two FWA-of-the-day projects.",
  },
  {
    period: "2016 — 2019",
    role: "Frontend Engineer",
    org: "Early-stage startups",
    place: "Hà Nội · Singapore",
    notes:
      "Wore many hats. Learned the craft. Made everything I'd later refine.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 flex items-baseline gap-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">§ 04</span>
            <h2 className="font-serif text-4xl md:text-5xl">A Brief Chronology</h2>
            <span className="h-px flex-1 editorial-rule" />
          </div>
        </Reveal>

        <ol className="relative border-l border-ink/15 pl-8 md:pl-12">
          {roles.map((r, i) => (
            <Reveal key={r.period} delay={i * 90} as="li" className="relative mb-14 last:mb-0">
              <span
                aria-hidden
                className="absolute -left-[37px] top-2 h-2 w-2 rounded-full bg-accent md:-left-[49px]"
              />
              <div className="grid gap-4 md:grid-cols-12">
                <div className="md:col-span-3">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {r.period}
                  </div>
                  <div className="mt-1 font-serif text-sm italic text-muted-foreground">
                    {r.place}
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-2xl md:text-3xl">
                    {r.role}{" "}
                    <span className="italic text-muted-foreground">— {r.org}</span>
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-foreground/75">
                    {r.notes}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
