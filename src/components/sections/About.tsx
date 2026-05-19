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
              I'm <span className="italic">Jay</span> — a product engineer who treats
              software the way a typographer treats a page: with rhythm, restraint,
              and a deep regard for the reader.
            </p>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/75">
              <p>
                Born in Hà Nội, working between codebases and design files. I've spent
                the last decade shaping products at the seam of engineering and craft —
                from early-stage startups to design-led studios. My favorite work lives
                at the intersection of clarity and intent.
              </p>
              <p>
                Outside the screen, I collect old books, brew slow coffee, and write
                essays about the quiet poetics of interfaces.
              </p>
            </div>
          </Reveal>

          <Reveal delay={250} className="md:col-span-5">
            <Parallax speed={0.08}>
              <div className="glass-strong rounded-2xl p-8 transition-transform duration-500 hover:-translate-y-1">
                <h3 className="font-serif text-2xl italic">A few principles</h3>
                <ul className="mt-6 space-y-4 text-sm">
                  {[
                    ["Calm over clever", "Restraint is a feature."],
                    ["Type as foundation", "Hierarchy before color."],
                    ["Edit relentlessly", "The best line is the one removed."],
                    ["Build for people", "Ship things that feel inevitable."],
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
