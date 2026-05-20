import { Reveal } from "../Reveal";

const groups = [
  {
    title: "Analysis",
    items: ["Python", "R", "SQL", "Excel", "Statistical Analysis", "Data Cleaning"],
  },
  {
    title: "Business Intelligence",
    items: ["Power BI", "Tableau", "DAX", "Power Query", "Dashboard Design", "KPI Reporting"],
  },
  {
    title: "Machine Learning",
    items: ["scikit-learn", "Predictive Modelling", "Random Forest", "TF-IDF", "SVM", "K-Means"],
  },
  {
    title: "Data & Systems",
    items: ["MySQL", "Data Modelling", "Star Schema", "CRUD Queries", "WordPress", "Shopify"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 flex items-baseline gap-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">§ 03</span>
            <h2 className="font-serif text-4xl md:text-5xl">Tools & Technologies</h2>
            <span className="h-px flex-1 editorial-rule" />
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 100}>
              <div className="glass h-full rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]">
                <div className="mb-6 flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl italic">{g.title}</h3>
                  <span className="font-mono text-[10px] text-accent">0{i + 1}</span>
                </div>
                <ul className="space-y-2 text-sm">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-3 border-t border-ink/10 pt-2 first:border-t-0 first:pt-0 transition-colors hover:text-accent"
                    >
                      <span className="h-px w-3 bg-ink/30" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
