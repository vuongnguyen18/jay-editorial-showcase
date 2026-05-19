import { useEffect, useRef } from "react";

/**
 * Glassmorphism background:
 *  - Three large, slow-drifting gradient "orbs" rendered as blurred divs
 *    (provide the colorful blobs that frosted cards diffract).
 *  - A canvas layer with small floating particles + faint connecting threads
 *    for subtle depth and motion.
 *
 * Respects prefers-reduced-motion. Pointer-events disabled; aria-hidden.
 */
export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const count = Math.min(
      80,
      Math.floor((window.innerWidth * window.innerHeight) / 22000)
    );
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.4,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const p of particles) {
        if (!prefersReduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
          if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * (1 - d / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Colorful gradient orbs that the glass cards refract */}
      <div
        className="absolute -top-32 -left-32 h-[55vw] w-[55vw] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.25 320 / 0.9), transparent 70%)",
          animation: "orb-drift-a 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[60vw] w-[60vw] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.22 230 / 0.9), transparent 70%)",
          animation: "orb-drift-b 28s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-20vh] left-1/4 h-[50vw] w-[50vw] rounded-full opacity-55 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.20 180 / 0.85), transparent 70%)",
          animation: "orb-drift-c 32s ease-in-out infinite",
        }}
      />

      {/* Subtle grain via canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-80" />
    </div>
  );
}
