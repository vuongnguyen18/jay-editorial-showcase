import { Reveal } from "../Reveal";
import { Parallax } from "../Parallax";

const channels = [
  { label: "Email", value: "jay@tienvuong.studio", href: "mailto:jay@tienvuong.studio" },
  { label: "GitHub", value: "github.com/tienvuong", href: "https://github.com" },
  { label: "Read.cv", value: "read.cv/tienvuong", href: "https://read.cv" },
  { label: "LinkedIn", value: "in/tienvuongnguyen", href: "https://linkedin.com" },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 flex items-baseline gap-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">§ 05</span>
            <h2 className="font-serif text-4xl md:text-5xl">Correspondence</h2>
            <span className="h-px flex-1 editorial-rule" />
          </div>
        </Reveal>

        <div className="grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <h3 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
              Let's make something{" "}
              <span className="italic text-accent">quietly extraordinary</span>.
            </h3>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-foreground/75">
              Currently considering new collaborations for late 2026 — editorial
              products, brand sites with weight, and considered design systems.
            </p>
            <a
              href="mailto:jay@tienvuong.studio"
              className="mt-10 inline-flex items-center gap-4 font-serif text-2xl italic transition-transform hover:-translate-y-0.5 md:text-3xl"
            >
              <span className="link-underline">jay@tienvuong.studio</span>
              <span aria-hidden>↗</span>
            </a>
          </Reveal>

          <Reveal delay={200} className="md:col-span-5">
            <Parallax speed={0.1}>
              <div className="glass-strong rounded-2xl p-8">
                <h4 className="font-serif text-xl italic">Elsewhere</h4>
                <ul className="mt-6 space-y-4">
                  {channels.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        className="group flex items-baseline justify-between gap-4 border-t border-white/10 pt-4 transition-colors first:border-t-0 first:pt-0 hover:text-accent"
                      >
                        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                          {c.label}
                        </span>
                        <span className="font-serif text-lg transition-transform duration-300 group-hover:-translate-x-1">
                          {c.value}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Parallax>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <footer className="mt-32 flex flex-col items-center justify-between gap-4 border-t border-ink/15 pt-10 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:text-left">
            <span>© MMXXVI — Tien Vuong Nguyen</span>
            <span className="italic font-serif normal-case tracking-normal">
              Set in Cormorant & Inter. Hand-built with care.
            </span>
            <span>Hà Nội ⇄ The World</span>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
