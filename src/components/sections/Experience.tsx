import { Reveal } from "../Reveal";

const roles = [
  {
    period: "2025 — Now",
    role: "Data Analyst",
    org: "BIG Digital",
    place: "Melbourne",
    notes:
      "Working with e-commerce, customer, product, and marketing data across WordPress and Shopify. Managing product information, pricing, categorisation, inventory signals, best-selling and low-performing products, while tracking website traffic, user engagement, and campaign performance. Building automated reporting workflows with Python and SQL, reducing manual reporting time by 60% and improving access to timely business insights for stakeholders.",
  },
  {
    period: "2023 — 2024",
    role: "Web Developer",
    org: "FPT Software",
    place: "Hanoi, Vietnam",
    notes:
      "Designed and implemented responsive web applications using ReactJS, Angular, and MongoDB. Improved front-end performance, built reusable UI components, and resolved front-end/back-end issues in staging and production environments.",
  },
  {
    period: "2022 — 2023",
    role: "Web Developer",
    org: "CMC Global",
    place: "Hanoi, Vietnam",
    notes:
      "Translated wireframes and mockups into functional user interfaces using React.js. Maintained website content and features based on user feedback and business requirements, while developing strong collaboration and delivery skills.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 flex items-baseline gap-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">§ 04</span>
            <h2 className="font-serif text-4xl md:text-5xl">Work Experience</h2>
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
