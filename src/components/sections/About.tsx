import { Reveal } from "../Reveal";
import { Parallax } from "../Parallax";

export function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 flex items-baseline gap-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">§ 01</span>
            <h2 className="font-serif text-4xl md:text-5xl">About</h2>
            <span className="h-px flex-1 editorial-rule" />
          </div>
        </Reveal>

        <div className="grid gap-16 md:grid-cols-12">
          <Reveal delay={100} className="md:col-span-7">
            <p className="font-serif text-2xl leading-relaxed md:text-3xl">
              I'm <span className="italic">Jay</span> — a Data Analyst with a background in computer science and a current Master of Data Science student at Deakin University.
            </p>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/75">
              <p>
                I work with data to turn messy business information into clear dashboards, reliable analysis, and practical recommendations. My experience includes building Power BI reports, cleaning and modelling data with SQL and Python, and developing predictive models for real-world use cases.
              </p>
              <p>
                Recently, I have worked on analytics projects across e-commerce, property sales, pizza sales performance, and Netflix content strategy. These projects helped me strengthen my skills in Power BI, DAX, Power Query, Python, SQL, machine learning, and business storytelling.
              </p>
              <p>
                I’m currently seeking a full-time office-based Data Analyst or Business Intelligence role where I can apply my analytical and technical skills to help teams understand performance, identify opportunities, and make better decisions from data.
              </p>
            </div>
          </Reveal>

          <Reveal delay={250} className="md:col-span-5">
            <Parallax speed={0.08}>
              <div className="glass-strong rounded-2xl p-8 transition-transform duration-500 hover:-translate-y-1">
                <h3 className="font-serif text-2xl italic">How I work</h3>
                <ul className="mt-6 space-y-4 text-sm">
                  {[
                    ["Clear before complex", "I focus on making analysis easy to understand before adding complexity."],
                    ["Business first", "Every dashboard or model should answer a real business question."],
                    ["Clean data matters", "Reliable insights start with well-structured and well-modelled data."],
                    ["Insight into action", "I aim to turn analysis into practical recommendations, not just charts."],
                  ].map(([t, d]) => (
                    <li key={t} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                      <div className="font-serif text-lg">{t}</div>
                      <div className="mt-1 text-muted-foreground">{d}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </Parallax>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
