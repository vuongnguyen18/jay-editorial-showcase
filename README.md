# Tien Vuong Nguyen — Portfolio

A light editorial portfolio site. Serif typography, glassmorphism, particle background, custom cursor trail, scroll reveals, and a typewriter intro.

## Sections
Hero · About · Projects · Skills · Experience · Contact

## Stack
- React 19 + TanStack Start
- Tailwind CSS v4 (tokens in `src/styles.css`)
- Cormorant Garamond + Inter + JetBrains Mono (Google Fonts)

## Run
```bash
bun install
bun run dev
```

## Structure
```
src/
  components/
    Nav.tsx                  # Sticky glass nav
    ParticleBackground.tsx   # Canvas ink particles
    CursorTrail.tsx          # Custom cursor (desktop only)
    Typewriter.tsx           # Animated phrase cycler
    Reveal.tsx               # IntersectionObserver scroll reveal
    sections/                # Hero / About / Projects / Skills / Experience / Contact
  routes/
    __root.tsx               # Shell + fonts
    index.tsx                # Page composition
  styles.css                 # Design tokens & utilities
```

## Editing content
All copy (projects, roles, channels, skills) lives inside the section components under `src/components/sections/`. Replace text in the arrays at the top of each file.

## Accessibility
- Semantic landmarks (`header`, `main`, `nav`, `section`, `footer`)
- Decorative canvas / cursor marked `aria-hidden`
- Respects `prefers-reduced-motion` (particles freeze, cursor trail disabled)
- Cursor trail also disabled on touch devices
