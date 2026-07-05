import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, LayoutGrid } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { MeshWave } from "@/components/site/MeshWave";
import { Particles } from "@/components/site/Particles";
import {
  About,
  Solutions,
  Stats,
  Products,
  Research,
  Founder,
  Partners,
  Contact,
  Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen relative overflow-x-clip">
      <Navbar />
      <Hero />
      <Solutions />
      <Stats />
      <About />
      <Products />
      <Research />
      <Founder />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] pt-32 md:pt-40 pb-16 px-5 md:px-8 overflow-hidden">
      {/* backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-[-10%] w-[900px] h-[900px] -translate-y-1/2 opacity-90">
          <MeshWave />
        </div>
        <Particles count={50} />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-10 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full pl-1 pr-4 py-1 text-xs mb-6"
          >
            <span className="inline-flex items-center gap-1.5 bg-primary/15 text-primary rounded-full px-2.5 py-1">
              <Sparkles className="w-3 h-3" /> New
            </span>
            <span className="text-muted-foreground">Kinyabase-1 · Kinyarwanda foundation model</span>
            <ArrowRight className="w-3 h-3 text-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="font-display text-[44px] leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[88px] font-semibold tracking-tight"
          >
            Building the Intelligence
            <br /> that Empowers{" "}
            <span className="text-gradient-neon">Rwanda</span>{" "}
            <span className="text-muted-foreground/40">and</span>{" "}
            <span className="text-gradient-neon">Africa.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-muted-foreground text-base md:text-lg mt-7 max-w-xl leading-relaxed"
          >
            Rumuri Intelligence is an AI research and product company building
            the foundational technologies for a smarter, more inclusive
            future — in African languages, for African people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3 mt-9"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium glow-neon hover:scale-[1.02] transition-transform"
            >
              Explore Our Work
              <span className="w-6 h-6 rounded-full bg-primary-foreground/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3.5 text-sm font-medium hover:border-primary/40 transition-colors"
            >
              <LayoutGrid className="w-4 h-4 text-primary" /> Our Solutions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-14 inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs text-muted-foreground"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            AI for Good. Intelligence for All.
          </motion.div>
        </div>

        {/* right visual on mobile stacks below */}
        <div className="relative h-[380px] lg:h-[560px] hidden lg:block">
          <div className="absolute inset-0">
            <MeshWave />
          </div>
        </div>
      </div>
    </section>
  );
}
