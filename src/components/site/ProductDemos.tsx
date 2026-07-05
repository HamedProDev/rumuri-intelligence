import { useState } from "react";
import { motion } from "motion/react";
import { Mic, MessageSquare, Languages, Eye, ArrowRight } from "lucide-react";

const demos = [
  {
    id: "voice",
    icon: Mic,
    title: "Kwanda Voice",
    subtitle: "Speech Recognition",
    placeholder: "Try speaking in Kinyarwanda...",
    mockResponse:
      "Muraho! Umukuru wacu ni Hamed Hussein. Rumuri Intelligence irimo gukora ikintu gikomeye ku buzima bw'ubumenyi mu Rwanda.",
    color: "oklch(0.55 0.2 260)",
  },
  {
    id: "chat",
    icon: MessageSquare,
    title: "Kwanda Chat",
    subtitle: "Conversational AI",
    placeholder: "Ask me anything about Rwanda...",
    mockResponse:
      "Rwanda ni igihugu gito mu majyepfo y'Afrika, aho abaturage b'ibihumbi 13 biyobowe n'umukuru witwa Paul Kagame. Kigali ni ibibanza byacyo.",
    color: "oklch(0.6 0.2 290)",
  },
  {
    id: "translate",
    icon: Languages,
    title: "Kinyarwanda NMT",
    subtitle: "Machine Translation",
    placeholder: "Type English text to translate...",
    mockResponse: "Translation: 'Hello, how are you?' → 'Muraho, umeje neza?'",
    color: "oklch(0.65 0.18 230)",
  },
  {
    id: "ocr",
    icon: Eye,
    title: "Kwanda OCR",
    subtitle: "Optical Character Recognition",
    placeholder: "Upload an image with Kinyarwanda text...",
    mockResponse: "Detected text: 'Rumuri Intelligence — Ubumenyi bw'ubukorikori bw'Afrika'",
    color: "oklch(0.6 0.22 320)",
  },
];

export function ProductDemos() {
  const [activeDemo, setActiveDemo] = useState(demos[0]);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleTry = () => {
    if (!input.trim()) return;
    setIsTyping(true);
    setResponse("");
    setTimeout(() => {
      setResponse(activeDemo.mockResponse);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section id="demos" className="relative py-28 md:py-36 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-primary text-xs font-medium tracking-[0.25em] uppercase">
            <span className="w-8 h-px bg-primary" />
            Try it Live
            <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4">
            Experience <span className="text-gradient-neon">our AI in action.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          {/* Demo selector */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => {
                  setActiveDemo(demo);
                  setResponse("");
                  setInput("");
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all shrink-0 ${
                  activeDemo.id === demo.id
                    ? "glass-strong ring-1 ring-primary/40"
                    : "hover:bg-white/5"
                }`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `color-mix(in srgb, ${demo.color} 15%, transparent)` }}
                >
                  <demo.icon className="w-5 h-5" style={{ color: demo.color }} />
                </div>
                <div className="hidden lg:block">
                  <div className="text-sm font-medium">{demo.title}</div>
                  <div className="text-xs text-muted-foreground">{demo.subtitle}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Demo area */}
          <motion.div
            key={activeDemo.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-strong rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: `color-mix(in srgb, ${activeDemo.color} 15%, transparent)`,
                }}
              >
                <activeDemo.icon className="w-5 h-5" style={{ color: activeDemo.color }} />
              </div>
              <div>
                <div className="font-display font-semibold">{activeDemo.title}</div>
                <div className="text-xs text-muted-foreground">{activeDemo.subtitle}</div>
              </div>
            </div>

            <div className="flex gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleTry()}
                placeholder={activeDemo.placeholder}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition-colors"
              />
              <button
                onClick={handleTry}
                disabled={isTyping}
                className="px-5 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {isTyping ? "Processing..." : "Try"} <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {(response || isTyping) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                {isTyping ? (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Analyzing input...
                  </div>
                ) : (
                  <div className="text-sm leading-relaxed">{response}</div>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
