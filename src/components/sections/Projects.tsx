import { Reveal } from "../Reveal";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Analytics",
    description: "Built automated marketing and sales reporting pipelines for WordPress and Shopify platforms, optimizing SEO keywords and tracking visitor engagement.",
    tags: ["Python", "SQL", "Shopify", "WordPress", "Data Pipelines"],
    github: "https://github.com/vuongnguyen18",
    link: "https://github.com/vuongnguyen18",
  },
  {
    title: "Property Sales Predictor",
    description: "Designed a machine learning workflow to clean, model, and predict property sales value trends across regional and metropolitan housing markets.",
    tags: ["Python", "scikit-learn", "SQL", "Regression", "Predictive Modelling"],
    github: "https://github.com/vuongnguyen18",
    link: "https://github.com/vuongnguyen18",
  },
  {
    title: "Pizza Sales Performance",
    description: "Developed an interactive Power BI dashboard featuring dynamic DAX metrics and star-schema modeling to optimize sales, pacing, and inventory.",
    tags: ["Power BI", "DAX", "Power Query", "Data Modelling", "Star Schema"],
    github: "https://github.com/vuongnguyen18",
    link: "https://github.com/vuongnguyen18",
  },
  {
    title: "Netflix Content Strategy",
    description: "Conducted regional content gap analysis and TF-IDF semantic clustering on Netflix streaming catalogs to identify emerging audience trends.",
    tags: ["Python", "TF-IDF", "K-Means", "Clustering", "Tableau"],
    github: "https://github.com/vuongnguyen18",
    link: "https://github.com/vuongnguyen18",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-0 h-[35rem] w-[35rem] rounded-full bg-purple-900/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 h-[35rem] w-[35rem] rounded-full bg-blue-900/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        <Reveal>
          <div className="mb-16">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
              SELECTED WORK
            </span>
            <h2 className="mt-4 font-sans text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl">
              Projects I’m <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">proud of</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="glass-strong rounded-[2rem] border border-white/10 bg-[#0c0a20]/45 p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:-translate-y-1.5 hover:shadow-purple-500/5 hover:border-white/20 transition-all duration-500">
                
                {/* Beautiful Gradient Placeholder Block */}
                <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-6 relative border border-white/5 flex items-center justify-center bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/20 shadow-inner">
                  {/* Subtle pulsing background mesh */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-[#0c0a20]/90 to-[#050510]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-fuchsia-500/5 to-pink-500/10 opacity-70 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
                  
                  {/* Soft light orb in center */}
                  <div className="absolute h-32 w-32 rounded-full bg-purple-500/10 blur-2xl group-hover:bg-fuchsia-500/15 transition-all duration-700 pointer-events-none" />
                </div>

                {/* Title & Icons Row */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-sans text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors duration-300">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-white/5 rounded-lg"
                      title="View Code"
                    >
                      <Github className="h-4.5 w-4.5" />
                    </a>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-white/5 rounded-lg"
                      title="Live Demo"
                    >
                      <ExternalLink className="h-4.5 w-4.5" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-slate-300 min-h-[48px]">
                  {p.description}
                </p>

                {/* Badges / Tech Stack Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/5 border border-white/10 text-xs px-3 py-1 rounded-full text-purple-200/90 font-medium hover:bg-purple-500/10 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={250}>
          <div className="mt-16 text-center text-sm italic text-muted-foreground">
            — More analytics reports & models available on request —
          </div>
        </Reveal>
      </div>
    </section>
  );
}
