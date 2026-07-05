import { motion } from "motion/react";

// Animated SVG wireframe wave mesh with glowing gradient — the hero centerpiece.
export function MeshWave() {
  const lines = 22;
  return (
    <div className="relative w-full h-full pointer-events-none">
      <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="neonLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.55 0.22 260)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.6 0.22 280)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.65 0.2 300)" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="meshGlow" cx="0.6" cy="0.4" r="0.6">
            <stop offset="0%" stopColor="oklch(0.55 0.22 260)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="oklch(0.55 0.22 260)" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="800" height="600" fill="url(#meshGlow)" />
        <g filter="url(#glow)" stroke="url(#neonLine)" fill="none" strokeWidth="0.8">
          {Array.from({ length: lines }).map((_, i) => {
            const y = 120 + i * 18;
            const amp = 40 + i * 2.5;
            const phase = i * 0.35;
            return (
              <motion.path
                key={`h-${i}`}
                d={buildWave(y, amp, phase, 0)}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.15, 0.7, 0.15],
                  d: [
                    buildWave(y, amp, phase, 0),
                    buildWave(y, amp, phase, Math.PI),
                    buildWave(y, amp, phase, Math.PI * 2),
                  ],
                }}
                transition={{ duration: 10 + i * 0.15, repeat: Infinity, ease: "easeInOut" }}
              />
            );
          })}
          {Array.from({ length: 30 }).map((_, i) => {
            const x = 40 + i * 26;
            return (
              <motion.path
                key={`v-${i}`}
                d={`M ${x} 120 Q ${x + 20} 300 ${x} 500`}
                initial={{ opacity: 0.05 }}
                animate={{ opacity: [0.05, 0.3, 0.05] }}
                transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.05 }}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}

function buildWave(y: number, amp: number, phase: number, shift: number): string {
  const pts: string[] = [];
  for (let x = 0; x <= 800; x += 20) {
    const yy = y + Math.sin(x / 60 + phase + shift) * amp * Math.sin(x / 300);
    pts.push(`${x === 0 ? "M" : "L"} ${x} ${yy.toFixed(2)}`);
  }
  return pts.join(" ");
}
