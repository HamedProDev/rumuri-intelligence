import { useEffect, useRef } from "react";

export function Particles({ count = 40 }: { count?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Skip on SSR
  }, []);
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {Array.from({ length: count }).map((_, i) => {
        const size = 1 + (i % 4);
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const dur = 6 + (i % 8);
        const delay = (i % 10) * 0.4;
        return (
          <span
            key={i}
            className="absolute rounded-full animate-pulse-glow"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              background: "oklch(0.62 0.19 148)",
              boxShadow: "0 0 8px oklch(0.62 0.19 148 / 0.6)",
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}