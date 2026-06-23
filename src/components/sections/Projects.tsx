import { Reveal } from "../Reveal";
import {
  Megaphone,
  Landmark,
  Users,
  TrendingUp,
  Settings2,
  Truck,
  KanbanSquare,
  Calculator,
  Github,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";

// Each domain hosts a 2-per-row grid of detailed project cards
type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
};


type Domain = {
  title: string;
  description: string;
  tools: string[];
  Icon: LucideIcon;
  accent: string; // tailwind gradient classes
  projects: Project[]; // add / remove freely — they scroll horizontally
};

const domains: Domain[] = [
  {
    title: "Marketing",
    description:
      "Campaign attribution, funnel & SEO analytics with automated reporting across Shopify and WordPress.",
    tools: ["GA4", "SQL", "Looker"],
    Icon: Megaphone,
    accent: "from-pink-500/30 via-fuchsia-500/15 to-purple-500/25",
    projects: [{ title: "Project 01", description: "Add your marketing project here.", tags: ["Add", "Tags"] }],
  },
  {
    title: "Finance",
    description:
      "Forecasting, variance analysis and P&L dashboards with rolling FX-adjusted KPIs.",
    tools: ["Power BI", "DAX", "Python"],
    Icon: Landmark,
    accent: "from-emerald-500/30 via-teal-500/15 to-cyan-500/25",
    projects: [{ title: "Project 01", description: "Add your finance project here.", tags: ["Add", "Tags"] }],
  },
  {
    title: "HR",
    description:
      "Headcount, attrition and engagement analytics with predictive turnover modelling.",
    tools: ["Tableau", "SQL", "scikit-learn"],
    Icon: Users,
    accent: "from-indigo-500/30 via-violet-500/15 to-purple-500/25",
    projects: [{ title: "Project 01", description: "Add your HR project here.", tags: ["Add", "Tags"] }],
  },
  {
    title: "Sales",
    description:
      "Pipeline health, win-rate cohorts and territory pacing dashboards with star-schema models.",
    tools: ["Power BI", "Salesforce", "SQL"],
    Icon: TrendingUp,
    accent: "from-amber-500/30 via-orange-500/15 to-rose-500/25",
    projects: [{ title: "Project 01", description: "Add your sales project here.", tags: ["Add", "Tags"] }],
  },
  {
    title: "Operations",
    description:
      "Throughput, SLA and root-cause analytics for service and production workflows.",
    tools: ["Python", "SQL", "Power Query"],
    Icon: Settings2,
    accent: "from-sky-500/30 via-blue-500/15 to-indigo-500/25",
    projects: [{ title: "Project 01", description: "Add your operations project here.", tags: ["Add", "Tags"] }],
  },
  {
    title: "Supply Chain",
    description:
      "Inventory turnover, demand forecasting and supplier scorecards with anomaly detection.",
    tools: ["Python", "Prophet", "SQL"],
    Icon: Truck,
    accent: "from-lime-500/30 via-emerald-500/15 to-teal-500/25",
    projects: [{ title: "Project 01", description: "Add your supply chain project here.", tags: ["Add", "Tags"] }],
  },
  {
    title: "Project Management",
    description:
      "Burn-down, capacity and milestone analytics integrating Jira and timesheet data.",
    tools: ["Jira API", "Power BI", "DAX"],
    Icon: KanbanSquare,
    accent: "from-fuchsia-500/30 via-purple-500/15 to-indigo-500/25",
    projects: [{ title: "Project 01", description: "Add your PM project here.", tags: ["Add", "Tags"] }],
  },
  {
    title: "Accounting",
    description:
      "AR/AP aging, reconciliation automation and audit-ready ledger dashboards.",
    tools: ["Excel", "Power Query", "SQL"],
    Icon: Calculator,
    accent: "from-rose-500/30 via-pink-500/15 to-fuchsia-500/25",
    projects: [{ title: "Project 01", description: "Add your accounting project here.", tags: ["Add", "Tags"] }],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 h-[35rem] w-[35rem] rounded-full bg-purple-900/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 h-[35rem] w-[35rem] rounded-full bg-blue-900/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        <Reveal>
          <div className="mb-16">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
              SELECTED WORK
            </span>
            <h2 className="mt-4 font-sans text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl">
              Projects I’m{" "}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                proud of
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300/80">
              Eight analytics domains I’ve built dashboards, pipelines and
              models for — each grounded in real business decisions.
            </p>
          </div>
        </Reveal>

        {/* Vertical stack of domains — each row: [domain header] horizontally → [projects rail] */}
        <div className="flex flex-col gap-10">
          {domains.map((d, i) => {
            const { Icon } = d;
            return (
              <Reveal key={d.title} delay={i * 60}>
                <article
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0a20]/50 p-6 md:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-white/20 hover:shadow-purple-500/10"
                  aria-label={`${d.title} analytics domain`}
                >
                  {/* Accent gradient wash */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${d.accent} opacity-25 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none`}
                  />
                  <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/5 blur-3xl pointer-events-none" />

                  {/* Horizontal layout: domain info (left) + project rail (right) */}
                  <div className="relative z-10 flex flex-col gap-6">
                    {/* Domain info */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-4">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur shrink-0">
                          <Icon className="h-6 w-6 text-purple-200" aria-hidden />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-300/80">
                            Domain {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="mt-1 font-sans text-2xl md:text-3xl font-bold text-white tracking-tight">
                            {d.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-5 text-sm leading-relaxed text-slate-300/90">
                        {d.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {d.tools.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-purple-200/90"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project grid — 2 per row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {d.projects.map((p) => (
                        <div
                          key={p.title}
                          className="group/card rounded-[1.5rem] border border-white/10 bg-[#0c0a20]/60 p-6 backdrop-blur-xl shadow-xl hover:-translate-y-1 hover:border-white/20 transition-all duration-500"
                        >
                          {/* Image / gradient preview */}
                          <div className={`relative aspect-[16/10] mb-6 rounded-2xl overflow-hidden border border-white/5 bg-gradient-to-br ${d.accent}`}>
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.25),_transparent_60%)]" />
                            <div className="absolute h-32 w-32 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl group-hover/card:bg-fuchsia-500/15 transition-all duration-700" />
                          </div>

                          {/* Title + action icons */}
                          <div className="flex items-center justify-between gap-4">
                            <h4 className="font-sans text-lg font-bold text-purple-300 tracking-tight">
                              {p.title}
                            </h4>
                            <div className="flex items-center gap-2 shrink-0">
                              {p.github && (
                                <a
                                  href={p.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-slate-400 hover:text-white p-1 hover:bg-white/5 rounded-lg transition-colors"
                                  aria-label={`${p.title} source`}
                                >
                                  <Github className="h-4 w-4" />
                                </a>
                              )}
                              {p.link && (
                                <a
                                  href={p.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-slate-400 hover:text-white p-1 hover:bg-white/5 rounded-lg transition-colors"
                                  aria-label={`${p.title} live`}
                                >
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              )}
                            </div>
                          </div>

                          {/* Description */}
                          <p className="mt-3 text-sm leading-relaxed text-slate-300/90">
                            {p.description}
                          </p>

                          {/* Tag pills */}
                          <div className="mt-5 flex flex-wrap gap-2">
                            {p.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-purple-200/90"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={250}>
          <div className="mt-16 text-center text-sm italic text-slate-400">
            — Detailed case studies & sample dashboards available on request —
          </div>
        </Reveal>
      </div>
    </section>
  );
}
