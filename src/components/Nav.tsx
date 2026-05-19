import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
      >
        <a href="#top" className="font-serif text-lg tracking-tight">
          <span className="italic">Tien Vuong</span> Nguyen
          <span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] md:flex">
          {links.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline text-muted-foreground hover:text-foreground transition-colors">
                <span className="mr-2 font-mono text-[10px] text-accent">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full border border-ink/30 px-4 py-1.5 text-xs uppercase tracking-[0.18em] transition-all hover:border-ink hover:bg-ink hover:text-paper md:inline-block"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
