import { Typewriter } from "../Typewriter";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pt-32">
      <div className="mx-auto w-full max-w-6xl">
        <div
          className="mb-8 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground opacity-0"
          style={{ animation: "fade-up 0.9s 0.1s cubic-bezier(0.22,1,0.36,1) forwards" }}
        >
          <span className="h-px w-12 bg-ink/40" />
          Portfolio — Vol. 01 · MMXXVI
        </div>

        <h1
          className="font-serif text-7xl leading-[0.92] tracking-[-0.04em] sm:text-8xl md:text-[9rem] lg:text-[11rem] opacity-0"
          style={{ animation: "fade-up 1.1s 0.25s cubic-bezier(0.22,1,0.36,1) forwards" }}
        >
          Tien Vuong<br />
          <span className="italic text-accent">Nguyen</span>
          <span className="text-accent">.</span>
        </h1>

        <div
          className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between opacity-0"
          style={{ animation: "fade-up 1.1s 0.5s cubic-bezier(0.22,1,0.36,1) forwards" }}
        >
          <p className="max-w-md font-serif text-2xl leading-snug text-foreground/80 md:text-3xl">
            A{" "}
            <Typewriter
              className="italic text-foreground"
              phrases={[
                "product engineer",
                "design technologist",
                "systems thinker",
                "storyteller in code",
              ]}
            />
            <br />
            crafting quietly considered software.
          </p>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Currently
            </span>
            <span className="font-serif text-lg italic">
              Building thoughtful interfaces — open to new chapters.
            </span>
            <div className="mt-2 flex gap-3">
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.2em] text-paper transition-transform hover:-translate-y-0.5"
              >
                <span className="relative z-10">View work</span>
              </a>
              <a
                href="#contact"
                className="rounded-full border border-ink/40 px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all hover:border-ink hover:bg-ink/5"
              >
                Say hello
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-20 flex items-center justify-between opacity-0"
          style={{ animation: "fade-up 1.1s 0.75s cubic-bezier(0.22,1,0.36,1) forwards" }}
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Scroll to read
          </span>
          <span aria-hidden className="flex h-10 w-px bg-ink/40 animate-float" />
        </div>
      </div>
    </section>
  );
}
