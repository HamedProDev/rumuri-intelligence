import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const languages = [
  {
    name: "Kinyarwanda",
    speakers: "12M+",
    region: "Rwanda",
    x: 52,
    y: 48,
    color: "oklch(0.55 0.2 260)",
  },
  {
    name: "Kirundi",
    speakers: "8M+",
    region: "Burundi",
    x: 53,
    y: 52,
    color: "oklch(0.6 0.2 290)",
  },
  {
    name: "Swahili",
    speakers: "100M+",
    region: "East Africa",
    x: 56,
    y: 42,
    color: "oklch(0.65 0.18 230)",
  },
  {
    name: "Luganda",
    speakers: "10M+",
    region: "Uganda",
    x: 51,
    y: 38,
    color: "oklch(0.6 0.22 320)",
  },
  {
    name: "Amharic",
    speakers: "32M+",
    region: "Ethiopia",
    x: 58,
    y: 32,
    color: "oklch(0.55 0.22 260)",
  },
  {
    name: "Yoruba",
    speakers: "45M+",
    region: "Nigeria",
    x: 30,
    y: 40,
    color: "oklch(0.7 0.18 200)",
  },
  {
    name: "Zulu",
    speakers: "27M+",
    region: "South Africa",
    x: 50,
    y: 72,
    color: "oklch(0.6 0.22 27)",
  },
  {
    name: "Hausa",
    speakers: "80M+",
    region: "West Africa",
    x: 28,
    y: 32,
    color: "oklch(0.65 0.18 280)",
  },
];

export function LanguageMap() {
  const [active, setActive] = useState<(typeof languages)[0] | null>(null);

  return (
    <section id="languages" className="relative py-28 md:py-36 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-primary text-xs font-medium tracking-[0.25em] uppercase">
            <span className="w-8 h-px bg-primary" />
            Languages
            <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4">
            Speaking <span className="text-gradient-neon">every African language.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our AI models understand and generate text across major African languages, with deep
            expertise in East African dialects.
          </p>
        </div>

        <div className="relative glass-strong rounded-3xl p-8 md:p-12 overflow-hidden min-h-[400px]">
          {/* Simplified Africa outline using CSS */}
          <div className="absolute inset-0 opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M35,15 Q50,10 60,15 Q75,20 80,35 Q85,50 75,65 Q70,75 60,80 Q50,85 45,80 Q35,75 30,65 Q25,55 25,45 Q25,30 35,15Z"
                fill="currentColor"
                className="text-primary"
              />
            </svg>
          </div>

          {/* Language dots */}
          {languages.map((lang) => (
            <button
              key={lang.name}
              className="absolute w-4 h-4 rounded-full transition-all hover:scale-150 z-10"
              style={{
                left: `${lang.x}%`,
                top: `${lang.y}%`,
                backgroundColor: lang.color,
                boxShadow: active?.name === lang.name ? `0 0 20px ${lang.color}` : "none",
              }}
              onMouseEnter={() => setActive(lang)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active?.name === lang.name ? null : lang)}
            >
              <span
                className="absolute -top-1 -left-1 w-6 h-6 rounded-full border-2 border-current animate-ping opacity-0"
                style={{ color: lang.color }}
              />
            </button>
          ))}

          {/* Tooltip */}
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute z-20 glass-strong rounded-xl p-4 shadow-xl min-w-[200px]"
                style={{
                  left: `${Math.min(active.x + 3, 70)}%`,
                  top: `${Math.max(active.y - 15, 5)}%`,
                }}
              >
                <div className="font-display font-semibold text-lg">{active.name}</div>
                <div className="text-sm text-muted-foreground">{active.region}</div>
                <div className="text-sm mt-1">
                  <span className="text-primary font-medium">{active.speakers}</span> speakers
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
