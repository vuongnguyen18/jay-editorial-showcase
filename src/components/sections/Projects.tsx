import { Reveal } from "../Reveal";
import {
  Github,
  ExternalLink,
  Megaphone,
  TrendingUp,
  Users,
  BarChart3,
  Sliders,
  Truck,
  FolderKanban,
  Calculator,
} from "lucide-react";
import type { ComponentType } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  isComingSoon?: boolean;
}

interface Domain {
  id: string;
  label: string;
  title: string;
  summary: string;
  tools: string[];
  icon: ComponentType<{ className?: string }>;
  projects: Project[];
}

const domains: Domain[] = [
  {
    id: "01",
    label: "Marketing",
    title: "Audience Intelligence & Content Strategy",
    summary:
      "Using content analytics, audience signals, and trend discovery to uncover engagement patterns, positioning opportunities, and strategic insights.",
    tools: [
      "Python",
      "TF-IDF",
      "K-Means",
      "Clustering",
      "NLP",
      "pandas",
      "Matplotlib",
      "Seaborn",
      "scikit-learn",
    ],
    icon: Megaphone,
    projects: [
      {
        title: "Netflix Content Strategy",
        description:
          "Conducted content trend analysis and audience insight exploration on Netflix streaming catalogues to identify genre patterns, release behaviour, and emerging viewer interests.",
        tags: [
          "Python",
          "pandas",
          "Matplotlib",
          "Seaborn",
          "scikit-learn",
          "NLP",
        ],
        imageUrl: "/images/netflix_logo.png",
        githubUrl: "https://github.com/vuongnguyen18/Netflix_Study_Case",
        liveDemoUrl: "https://github.com/vuongnguyen18/Netflix_Study_Case",
      },
      {
        title: "Coming Soon",
        description:
          "Upcoming campaign attribution modelling analysing cross-channel conversions and ad budget allocation.",
        tags: ["Python", "Attribution Modelling", "Marketing Mix"],
        isComingSoon: true,
      },
    ],
  },
  {
    id: "02",
    label: "Finance",
    title: "Predictive Asset Pricing & Market Insights",
    summary:
      "Applying pricing analysis, forecasting, and predictive modelling to identify value patterns, market differences, and financial decision-support opportunities.",
    tools: ["Power BI", "Python", "DAX", "Power Query", "Random Forest"],
    icon: TrendingUp,
    projects: [
      {
        title: "Melbourne Housing Sales Predictor",
        description:
          "Designed a machine learning workflow and interactive dashboard to compare property prices, identify pricing drivers, and classify housing listings as undervalued, overvalued, or fairly priced.",
        tags: [
          "Power BI",
          "Python",
          "DAX",
          "Power Query",
          "Regression",
          "Random Forest",
        ],
        imageUrl: "/images/melbourne_housing.png",
        githubUrl: "https://github.com/vuongnguyen18/Melbourne-Housing-Visualization",
        liveDemoUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiMmQ3NDViYjMtOWExMi00ZDE5LWIyMDMtODE1MDA2Y2I5ZGU1IiwidCI6ImMyMDI1ODljLTdiMGUtNDY3YS1iMTFhLTM4Y2Q1NDk0OGNmMyJ9&pageName=99af864dd87e48b9ff86",
      },
      {
        title: "Coming Soon",
        description:
          "Stochastic risk assessment calculations assessing portfolio optimisation parameters.",
        tags: ["Python", "Portfolio Theory", "Stochastic Modelling"],
        isComingSoon: true,
      },
    ],
  },
  {
    id: "03",
    label: "HR",
    title: "Workforce Analytics & Attrition",
    summary:
      "Upcoming tools for organisational mapping, sentiment auditing, and predictive turnover analytics.",
    tools: ["People Analytics", "NLP", "Power BI"],
    icon: Users,
    projects: [
      {
        title: "Coming Soon",
        description:
          "Predictive analytics application forecasting employee attrition metrics using survey sentiment analysis.",
        tags: ["People Analytics", "Surveys", "Logistic Regression"],
        isComingSoon: true,
      },
      {
        title: "Coming Soon",
        description:
          "Workplace pay grade equity audit reviewing salary ranges and role scope mappings.",
        tags: ["Tableau", "SQL", "Equity Auditing"],
        isComingSoon: true,
      },
    ],
  },
  {
    id: "04",
    label: "Sales",
    title: "Revenue Performance & Customer Demand Analysis",
    summary:
      "Exploring revenue trends, customer ordering behaviour, product demand, and commercial performance through interactive sales analytics dashboards.",
    tools: ["Power BI", "DAX", "SQL", "Data Modelling", "Sales Analytics"],
    icon: BarChart3,
    projects: [
      {
        title: "Pizza Sales Performance",
        description:
          "Developed an interactive Power BI dashboard to analyse revenue trends, customer ordering behaviour, product demand, and operational workload across pizza sales activity.",
        tags: [
          "Power BI",
          "DAX",
          "Power Query",
          "Data Modelling",
          "Sales Analytics",
        ],
        imageUrl: "/images/pizza_sales.png",
        githubUrl: "https://github.com/vuongnguyen18/Pizza_PowerBI_Vizualization",
        liveDemoUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiZDY4Yzk5NjQtZjI2Ny00OWYyLTkyY2ItZjkxNjdmMjlhYzliIiwidCI6ImMyMDI1ODljLTdiMGUtNDY3YS1iMTFhLTM4Y2Q1NDk0OGNmMyJ9",
      },
      {
        title: "Supermarket Sales Analytics",
        description:
          "Built a large-scale Power BI and SQL Server dashboard to monitor supermarket revenue performance, customer segments, product movement, and price-band contribution across 6.7M+ transactions.",
        tags: [
          "Power BI",
          "SQL Server",
          "DAX",
          "Sales Analytics",
          "Price Band Analysis",
          "Revenue Analytics",
        ],
        imageUrl: "/images/supermarket_sales.png",
        githubUrl: "https://github.com/vuongnguyen18/Supermarket_Sales_Analytics",
        liveDemoUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiMzY5OWQwMTQtOTZiMi00MDZjLThmNjAtMTIzM2MxZDMzN2U1IiwidCI6ImMyMDI1ODljLTdiMGUtNDY3YS1iMTFhLTM4Y2Q1NDk0OGNmMyJ9",
      },
    ],
  },
  {
    id: "05",
    label: "Operations",
    title: "Operations Automation & Pipeline Monitoring",
    summary:
      "Automating Shopify/WordPress sales integrations and cleaning multi-platform marketing datasets.",
    tools: ["Python", "SQL", "Shopify", "WordPress", "Data Pipelines"],
    icon: Sliders,
    projects: [
      {
        title: "Coming Soon",
        description:
          "Real-time process monitoring interface tracking cycle times and support queues.",
        tags: ["Python", "Process Mining", "Dashboards"],
        isComingSoon: true,
      },
    ],
  },
  {
    id: "06",
    label: "Supply Chain",
    title: "Inventory & Supermarket Demand Forecasting",
    summary:
      "Optimising inventory stockouts and tracing logistics turnover using supermarket purchase telemetry.",
    tools: ["Python", "SQL", "Tableau", "Forecasting"],
    icon: Truck,
    projects: [
      {
        title: "Coming Soon",
        description:
          "Multi-distribution network routing optimiser calculating optimal cargo dispatch paths.",
        tags: ["Python", "Operations Research", "Network Graphs"],
        isComingSoon: true,
      },
    ],
  },
  {
    id: "07",
    label: "Project Management",
    title: "Agile Project Delivery & Velocity Dashboard",
    summary:
      "Upcoming visual indicators tracking agile team sprint velocity, milestone metrics, and blocker counts.",
    tools: ["Jira API", "Python", "Tableau", "Agile Metrics"],
    icon: FolderKanban,
    projects: [
      {
        title: "Coming Soon",
        description:
          "Agile velocity tracker forecasting potential milestone delay probabilities.",
        tags: ["Agile Metrics", "Jira API", "Python"],
        isComingSoon: true,
      },
    ],
  },
  {
    id: "08",
    label: "Accounting",
    title: "Ledger Reconciliation & Expense Auditing",
    summary: "Upcoming automated expense validation and discrepancy discovery models.",
    tools: ["Excel Automation", "Python", "Audit Trail"],
    icon: Calculator,
    projects: [
      {
        title: "Coming Soon",
        description:
          "Reconciliation script identifying differences between bank telemetry and ledger databases.",
        tags: ["Python", "Excel Automation", "Ledgers"],
        isComingSoon: true,
      },
    ],
  },
];

export function Projects() {
  const visibleDomains = domains
    .map((domain) => ({
      ...domain,
      projects: domain.projects.filter((project) => !project.isComingSoon),
    }))
    .filter((domain) => domain.projects.length > 0);

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-32">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-[35rem] w-[35rem] rounded-full bg-purple-900/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-[35rem] w-[35rem] rounded-full bg-blue-900/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-20">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
              PORTFOLIO DOMAINS
            </span>

            <h2 className="mt-4 font-sans text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl">
              Projects by{" "}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                Business Domain
              </span>
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-400 md:text-base">
              A curated selection of analytics projects organised by business
              domain, showcasing how I use Power BI, SQL, Python, DAX, and
              machine learning to turn raw data into business insights.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-16 md:gap-24">
          {visibleDomains.map((domain, i) => {
            const displayId = String(i + 1).padStart(2, "0");
            const DomainIcon = domain.icon;

            return (
              <Reveal key={domain.id} delay={i * 50}>
                <div className="glass-strong group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0c0a20]/40 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-white/20 md:p-12">
                  {/* Subtle soft gradient highlights behind each domain block */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/0 to-transparent opacity-50" />

                  <div className="relative z-10">
                    {/* Domain Header */}
                    <div className="mb-8 border-b border-white/10 pb-8">
                      <div className="flex items-center justify-between gap-4">
                        <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                          DOMAIN {displayId} / {domain.label}
                        </span>

                        <DomainIcon className="h-6 w-6 text-purple-300" />
                      </div>

                      <h3 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                        {domain.title}
                      </h3>

                      <p className="mt-3 max-w-3xl font-sans text-sm leading-relaxed text-slate-300">
                        {domain.summary}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {domain.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {domain.projects.map((project) => (
                        <div
                          key={project.title}
                          className="group/card relative flex min-h-[360px] flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/10 hover:shadow-purple-500/5"
                        >
                          <div>
                            {/* Project Image / Thumbnail */}
                            <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-[#080816] shadow-inner">
                              {project.imageUrl ? (
                                <>
                                  <img
                                    src={project.imageUrl}
                                    alt={`${project.title} dashboard preview`}
                                    className="h-full w-full object-cover object-top opacity-90 transition-all duration-700 group-hover/card:scale-105 group-hover/card:opacity-100"
                                  />

                                  {/* Dark overlay for consistency */}
                                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050510]/45 via-transparent to-transparent" />
                                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
                                </>
                              ) : (
                                <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10">
                                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0c0a20]/80 to-[#050510]" />
                                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/10 via-fuchsia-500/5 to-pink-500/10 opacity-70 transition-transform duration-700 group-hover/card:scale-105" />
                                  <div className="pointer-events-none absolute h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition-all duration-700 group-hover/card:bg-fuchsia-500/15" />

                                  <span className="relative z-10 font-mono text-[10px] uppercase tracking-wider text-purple-300/40">
                                    Visualization Model
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Title & Icons */}
                            <div className="flex items-start justify-between gap-4">
                              <h4 className="font-sans text-lg font-semibold leading-snug text-white transition-colors group-hover/card:text-purple-300">
                                {project.title}
                              </h4>

                              <div className="flex shrink-0 items-center gap-2">
                                {project.githubUrl && (
                                  <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg p-1.5 text-slate-400 transition-all hover:bg-white/5 hover:text-white"
                                    title="View Repository"
                                    aria-label={`${project.title} GitHub repository`}
                                  >
                                    <Github className="h-4 w-4" />
                                  </a>
                                )}

                                {project.liveDemoUrl && (
                                  <a
                                    href={project.liveDemoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg p-1.5 text-slate-400 transition-all hover:bg-white/5 hover:text-white"
                                    title="Live Demo"
                                    aria-label={`${project.title} live demo`}
                                  >
                                    <ExternalLink className="h-4 w-4" />
                                  </a>
                                )}
                              </div>
                            </div>

                            <p className="mt-2 line-clamp-3 font-sans text-xs leading-relaxed text-slate-300">
                              {project.description}
                            </p>
                          </div>

                          {/* Tech stack tags */}
                          <div className="mt-6 flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-[10px] font-medium text-purple-200"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={250}>
          <div className="mt-20 text-center text-sm italic text-muted-foreground">
            — More analytics reports & models available on request —
          </div>
        </Reveal>
      </div>
    </section>
  );
}