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
  type LucideIcon,
} from "lucide-react";

// 8 data-analyst domains showcased as small glass cards
type Domain = {
  title: string;
  description: string;
  tools: string[];
  Icon: LucideIcon;
  accent: string; // tailwind gradient classes
};

const domains: Domain[] = [
  {
    title: "Marketing",
    description:
      "Campaign attribution, funnel & SEO analytics with automated reporting across Shopify and WordPress.",
    tools: ["GA4", "SQL", "Looker"],
    Icon: Megaphone,
    accent: "from-pink-500/30 via-fuchsia-500/15 to-purple-500/25",
  },
  {
    title: "Finance",
    description:
      "Forecasting, variance analysis and P&L dashboards with rolling FX-adjusted KPIs.",
    tools: ["Power BI", "DAX", "Python"],
    Icon: Landmark,
    accent: "from-emerald-500/30 via-teal-500/15 to-cyan-500/25",
  },
  {
    title: "HR",
    description:
      "Headcount, attrition and engagement analytics with predictive turnover modelling.",
    tools: ["Tableau", "SQL", "scikit-learn"],
    Icon: Users,
    accent: "from-indigo-500/30 via-violet-500/15 to-purple-500/25",
  },
  {
    title: "Sales",
    description:
      "Pipeline health, win-rate cohorts and territory pacing dashboards with star-schema models.",
    tools: ["Power BI", "Salesforce", "SQL"],
    Icon: TrendingUp,
    accent: "from-amber-500/30 via-orange-500/15 to-rose-500/25",
  },
  {
    title: "Operations",
    description:
      "Throughput, SLA and root-cause analytics for service and production workflows.",
    tools: ["Python", "SQL", "Power Query"],
    Icon: Settings2,
    accent: "from-sky-500/30 via-blue-500/15 to-indigo-500/25",
  },
  {
    title: "Supply Chain",
    description:
      "Inventory turnover, demand forecasting and supplier scorecards with anomaly detection.",
    tools: ["Python", "Prophet", "SQL"],
    Icon: Truck,
    accent: "from-lime-500/30 via-emerald-500/15 to-teal-500/25",
  },
  {
    title: "Project Management",
    description:
      "Burn-down, capacity and milestone analytics integrating Jira and timesheet data.",
    tools: ["Jira API", "Power BI", "DAX"],
    Icon: KanbanSquare,
    accent: "from-fuchsia-500/30 via-purple-500/15 to-indigo-500/25",
  },
  {
    title: "Accounting",
    description:
      "AR/AP aging, reconciliation automation and audit-ready ledger dashboards.",
    tools: ["Excel", "Power Query", "SQL"],
    Icon: Calculator,
    accent: "from-rose-500/30 via-pink-500/15 to-fuchsia-500/25",
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

        {/* 8 huge domain cards — 1 / 2 column layout, each ready for a project */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {domains.map((d, i) => {
            const { Icon } = d;
            return (
              <Reveal key={d.title} delay={i * 80}>
                <article
                  className="group relative flex h-full min-h-[32rem] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0a20]/50 p-8 md:p-10 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-purple-500/10"
                  aria-label={`${d.title} analytics domain`}
                >
                  {/* Accent gradient wash */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${d.accent} opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`}
                  />
                  {/* Soft orbs */}
                  <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/5 blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

                  <div className="relative z-10 flex h-full flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur">
                          <Icon className="h-6 w-6 text-purple-200" aria-hidden />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-300/80">
                            Domain {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="mt-1 font-sans text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">
                            {d.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 text-base leading-relaxed text-slate-300/90">
                      {d.description}
                    </p>

                    {/* Project slot — replace this with the actual project for this domain */}
                    <div className="mt-6 flex-1 rounded-2xl border border-dashed border-white/15 bg-white/[0.03] p-6 flex items-center justify-center text-center min-h-[12rem]">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-400">
                          Project slot
                        </p>
                        <p className="mt-2 text-sm text-slate-400/80 max-w-xs">
                          Drop your {d.title.toLowerCase()} project here —
                          screenshots, embedded dashboard, case study, or links.
                        </p>
                      </div>
                    </div>

                    {/* Tool chips */}
                    <div className="mt-6 flex flex-wrap gap-2">
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
