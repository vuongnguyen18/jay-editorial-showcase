import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  z: number;
  color: string;
  phase: number;
  pulseSpeed: number;
  isHub: boolean;
  clusterCX: number;
  clusterCY: number;
  clusterWeight: number;
}

interface Packet {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

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

    const particles: Node[] = [];
    
    // Four intentional cluster center configurations
    const clusters = [
      { cx: 0.76, cy: 0.22, count: 12, weight: 1.0, isAccent: true },   // Top-Right cluster
      { cx: 0.82, cy: 0.72, count: 14, weight: 1.0, isAccent: true },   // Lower-Right (behind/around card)
      { cx: 0.16, cy: 0.80, count: 8,  weight: 0.45, isAccent: false }, // Lower-Left (fainter cluster, protects text)
      { cx: 0.12, cy: 0.18, count: 6,  weight: 0.35, isAccent: false }  // Top-Left background cluster
    ];

    // 1. Generate cluster nodes
    clusters.forEach((c) => {
      for (let k = 0; k < c.count; k++) {
        const z = Math.random() * 0.75 + 0.25; // Focal depth plane: [0.25, 1.0]
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 110; // Dispersal radius
        const startX = (window.innerWidth * c.cx) + Math.cos(angle) * dist;
        const startY = (window.innerHeight * c.cy) + Math.sin(angle) * dist;
        
        const isHub = k === 0; // The first node in each cluster is a prominent hub
        
        let color = "rgba(174, 194, 224, 0.48)"; // Standard mid-ground node
        if (isHub) {
          color = "rgba(122, 192, 233, 0.95)"; // Cyan-blue hub
        } else if (c.isAccent && Math.random() > 0.65) {
          color = "rgba(122, 192, 233, 0.72)"; // Sky-blue highlight node
        } else if (z < 0.45) {
          color = "rgba(148, 163, 184, 0.25)"; // Distant soft node
        }

        particles.push({
          x: startX,
          y: startY,
          vx: (Math.random() - 0.5) * 0.2 * z,
          vy: (Math.random() - 0.5) * 0.2 * z,
          r: (isHub ? 2.8 : Math.random() * 1.5 + 1.0) * z,
          z,
          color,
          phase: Math.random() * Math.PI * 2,
          pulseSpeed: isHub ? 0.0035 : 0.002 + Math.random() * 0.004,
          isHub,
          clusterCX: c.cx,
          clusterCY: c.cy,
          clusterWeight: c.weight
        });
      }
    });

    // 2. Generate free-floating connector bridge nodes (10 nodes) to span vacancies
    for (let k = 0; k < 10; k++) {
      const z = Math.random() * 0.5 + 0.25;
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.16 * z,
        vy: (Math.random() - 0.5) * 0.16 * z,
        r: (Math.random() * 1.2 + 0.9) * z,
        z,
        color: "rgba(148, 163, 184, 0.22)",
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.002 + Math.random() * 0.003,
        isHub: false,
        clusterCX: -1, // No cluster center attraction
        clusterCY: -1,
        clusterWeight: 0.55
      });
    }

    // Flow packets that travel along connection routes
    let packets: Packet[] = [];

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // 1. Draw nodes with parallax drift, spring clusters, and hub glow rings
      for (const p of particles) {
        if (!prefersReduced) {
          // If part of a cluster constellation, apply spring attraction to its percentage home coordinate
          if (p.clusterCX !== -1) {
            const homeX = window.innerWidth * p.clusterCX;
            const homeY = window.innerHeight * p.clusterCY;
            
            const dx = homeX - p.x;
            const dy = homeY - p.y;
            
            // Gentle gravitational pull to maintain cluster grouping over time
            p.vx += dx * 0.000018;
            p.vy += dy * 0.000018;
            
            // Motion friction/damping
            p.vx *= 0.985;
            p.vy *= 0.985;
          }

          p.x += p.vx;
          p.y += p.vy;

          // Seamless boundary wrap around screen margins
          if (p.x < -30) p.x = window.innerWidth + 30;
          if (p.x > window.innerWidth + 30) p.x = -30;
          if (p.y < -30) p.y = window.innerHeight + 30;
          if (p.y > window.innerHeight + 30) p.y = -30;
        }

        const breath = Math.sin(Date.now() * p.pulseSpeed + p.phase) * 0.15 + 0.85;
        let currentRadius = p.r;

        if (p.isHub) {
          // Hubs gently pulse in size
          const sizePulse = Math.sin(Date.now() * 0.0016 + p.phase) * 0.3 + 1.0;
          currentRadius = p.r * sizePulse;

          // Sky-blue hub outer halo ring
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(122, 192, 233, ${0.12 * breath})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = breath;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      // 2. Render analytical connection paths with depth constraints
      const activeConnections: { i: number; j: number; avgZ: number }[] = [];

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);

          // Connection threshold (140px)
          if (d < 140) {
            const depthDiff = Math.abs(particles[i].z - particles[j].z);
            if (depthDiff < 0.35) {
              const avgZ = (particles[i].z + particles[j].z) / 2;
              activeConnections.push({ i, j, avgZ });

              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              
              // Boost line opacity by 45% for noticeable structure
              const clusterOpacity = Math.min(particles[i].clusterWeight, particles[j].clusterWeight);
              const maxOpacity = 0.28 * avgZ * clusterOpacity; 
              ctx.strokeStyle = `rgba(255, 255, 255, ${maxOpacity * (1 - d / 140)})`;
              ctx.lineWidth = 0.85 * avgZ;
              ctx.stroke();
            }
          }
        }
      }

      // 3. Flow-motion simulation: spawning packet pulses along active routes
      if (!prefersReduced) {
        // Spawn active packets when connection lanes exist
        if (activeConnections.length > 0 && packets.length < 8 && Math.random() < 0.04) {
          const conn = activeConnections[Math.floor(Math.random() * activeConnections.length)];
          const reverse = Math.random() > 0.5;
          packets.push({
            from: reverse ? conn.j : conn.i,
            to: reverse ? conn.i : conn.j,
            progress: 0,
            speed: (0.007 + Math.random() * 0.01) / (conn.avgZ * 0.8 + 0.2), // Speed relative to depth
          });
        }

        // Animate and draw data packets traveling along nodes
        packets = packets.filter((packet) => {
          const p1 = particles[packet.from];
          const p2 = particles[packet.to];
          
          if (!p1 || !p2) return false;

          packet.progress += packet.speed;
          if (packet.progress >= 1.0) return false; // Arrived

          // Linear interpolation for packet coordinates
          const x = p1.x + (p2.x - p1.x) * packet.progress;
          const y = p1.y + (p2.y - p1.y) * packet.progress;
          const z = (p1.z + p2.z) / 2;

          // Small sky-blue signal packet node
          ctx.beginPath();
          ctx.arc(x, y, 1.8 * z, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(122, 192, 233, ${0.9 * z})`;
          ctx.fill();

          // Soft atmospheric signal glow
          ctx.beginPath();
          ctx.arc(x, y, 4.0 * z, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(122, 192, 233, ${0.25 * z})`;
          ctx.fill();

          return true;
        });
      }

      // 4. Subtle background line-chart trend traces to convey BI/analytics
      if (!prefersReduced) {
        ctx.save();
        
        // Curve 1: Primary Sky-Blue Dotted Trend Curve
        ctx.beginPath();
        ctx.strokeStyle = "rgba(122, 192, 233, 0.05)";
        ctx.lineWidth = 1.0;
        ctx.setLineDash([3, 6]);
        
        const startX = -50;
        const endX = window.innerWidth + 50;
        const step = (endX - startX) / 10;
        const centerY1 = window.innerHeight * 0.65;
        
        ctx.moveTo(startX, centerY1);
        for (let i = 0; i <= 10; i++) {
          const x = startX + i * step;
          const wave = Math.sin((Date.now() * 0.00015) + i * 0.7) * 45;
          ctx.lineTo(x, centerY1 + wave);
        }
        ctx.stroke();

        // Curve 2: Secondary Slate Dotted Trend Curve
        ctx.beginPath();
        ctx.strokeStyle = "rgba(174, 194, 224, 0.03)";
        ctx.lineWidth = 0.8;
        ctx.setLineDash([4, 8]);
        
        const centerY2 = window.innerHeight * 0.75;
        ctx.moveTo(startX, centerY2);
        for (let i = 0; i <= 10; i++) {
          const x = startX + i * step;
          const wave = Math.cos((Date.now() * 0.0001) + i * 0.6) * 55;
          ctx.lineTo(x, centerY2 + wave);
        }
        ctx.stroke();

        // 5. Extremely faint long-range data transit route curves between clusters
        ctx.beginPath();
        ctx.strokeStyle = "rgba(122, 192, 233, 0.035)";
        ctx.lineWidth = 0.75;
        ctx.setLineDash([2, 8]);
        
        const w = window.innerWidth;
        const h = window.innerHeight;
        
        // Curve path 1: Top-Right to Lower-Right (down the right margin column)
        ctx.moveTo(w * 0.76, h * 0.22);
        ctx.quadraticCurveTo(w * 0.88, h * 0.45, w * 0.82, h * 0.72);
        
        // Curve path 2: Lower-Right to Lower-Left (across the page bottom)
        ctx.moveTo(w * 0.82, h * 0.72);
        ctx.quadraticCurveTo(w * 0.5, h * 0.86, w * 0.16, h * 0.80);
        
        // Curve path 3: Lower-Left to Top-Left (up the left margin column)
        ctx.moveTo(w * 0.16, h * 0.80);
        ctx.quadraticCurveTo(w * 0.06, h * 0.48, w * 0.12, h * 0.18);
        
        ctx.stroke();

        // 6. Extremely faint dashboard calibration crosshairs (+) in layout corners
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
        ctx.lineWidth = 0.75;
        ctx.setLineDash([]); // Reset dashed lines
        
        const m = 40; // Margin
        const t = 5;  // Tick size
        
        // Top-Left
        ctx.moveTo(m - t, m); ctx.lineTo(m + t, m);
        ctx.moveTo(m, m - t); ctx.lineTo(m, m + t);
        // Top-Right
        ctx.moveTo(window.innerWidth - m - t, m); ctx.lineTo(window.innerWidth - m + t, m);
        ctx.moveTo(window.innerWidth - m, m - t); ctx.lineTo(window.innerWidth - m, m + t);
        // Bottom-Left
        ctx.moveTo(m - t, window.innerHeight - m); ctx.lineTo(m + t, window.innerHeight - m);
        ctx.moveTo(m, window.innerHeight - m - t); ctx.lineTo(m, window.innerHeight - m + t);
        // Bottom-Right
        ctx.moveTo(window.innerWidth - m - t, window.innerHeight - m); ctx.lineTo(window.innerWidth - m + t, window.innerHeight - m);
        ctx.moveTo(window.innerWidth - m, window.innerHeight - m - t); ctx.lineTo(window.innerWidth - m, window.innerHeight - m + t);
        
        ctx.stroke();
        ctx.restore();
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
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#070a12]">
      {/* 1. Deep professional slate-navy base */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#0a0e17] via-[#070a12] to-[#04060b]"
      />

      {/* 2. Faint analytical dashboard layout blueprint grid */}
      <div 
        className="absolute inset-0 opacity-[0.025]" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* 3. Radial protection mask to secure left-aligned text readability */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_45%,#070a12_0%,transparent_60%)] opacity-85"
      />

      {/* 4. Soft slow-drifting slate-navy background gradients for depth */}
      <div
        className="absolute -top-32 -left-32 h-[55vw] w-[55vw] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.28 0.06 240 / 0.45), transparent 70%)",
          animation: "orb-drift-a 24s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[60vw] w-[60vw] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.24 0.05 220 / 0.35), transparent 70%)",
          animation: "orb-drift-b 30s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-10vh] left-1/4 h-[45vw] w-[45vw] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.20 0.04 230 / 0.3), transparent 70%)",
          animation: "orb-drift-c 36s ease-in-out infinite",
        }}
      />

      {/* 5. Crisp canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-90" />
    </div>
  );
}
