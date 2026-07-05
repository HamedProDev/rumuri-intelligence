import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Languages,
  Mic,
  Eye,
  Accessibility,
  Car,
  Brain,
  Cloud,
  Bot,
  Box,
  Globe,
  AudioLines,
  Users,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Quote,
  Zap,
  Youtube,
} from "lucide-react";
import kigali from "@/assets/kigali.jpg";
import founder from "@/assets/founder.jpg";
import pVoice from "@/assets/product-voice.jpg";
import pSign from "@/assets/product-sign.jpg";
import pOcr from "@/assets/product-ocr.jpg";
import pChat from "@/assets/product-chat.jpg";
import pMobility from "@/assets/product-mobility.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-primary text-xs font-medium tracking-[0.25em] uppercase">
      <span className="w-8 h-px bg-primary" />
      {children}
    </div>
  );
}

/* ============================ ABOUT / SOLUTIONS ============================ */

const solutions = [
  { icon: Languages, title: "NLP & Language AI", desc: "Kinyarwanda-first NLP, translation, chatbots, and multilingual language understanding." },
  { icon: Mic, title: "Speech & Voice AI", desc: "ASR, TTS, voice cloning and multilingual speech technologies for African languages." },
  { icon: Eye, title: "Computer Vision", desc: "Image understanding, OCR, object detection and scene reasoning at scale." },
  { icon: Accessibility, title: "AI for Accessibility", desc: "Sign-language translation and tools empowering people with disabilities." },
  { icon: Car, title: "Autonomous Mobility", desc: "Perception stacks for smart transportation and self-driving research." },
  { icon: Brain, title: "Foundation Models", desc: "Sovereign African foundation models fine-tuned for local knowledge and dialects." },
  { icon: Bot, title: "Generative AI", desc: "Creative and productivity assistants that speak, write, and reason in Kinyarwanda." },
  { icon: Cloud, title: "AI Cloud", desc: "GPU infrastructure, MLOps and inference tooling built for the African ecosystem." },
];

export function Solutions() {
  return (
    <section id="solutions" className="relative py-28 md:py-36 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <SectionLabel>What we do</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4">
              AI solutions for <span className="text-gradient-neon">real-world impact.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl">
            We build and deploy ethical AI systems across language, speech,
            vision, accessibility and autonomy — engineered to solve Africa's
            most important challenges.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative glass hover-lift rounded-2xl p-6 overflow-hidden"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                <s.icon className="w-5 h-5 text-primary" />
                <div className="absolute inset-0 rounded-xl bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-display text-lg font-medium mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-primary opacity-70 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ STATS ============================ */

const stats = [
  { icon: Box, value: "25+", label: "Projects Delivered" },
  { icon: Globe, value: "10+", label: "African Languages" },
  { icon: AudioLines, value: "500K+", label: "Audio Hours Collected" },
  { icon: Users, value: "1M+", label: "Lives Impacted" },
];

export function Stats() {
  return (
    <section className="relative px-5 md:px-8 -mt-8">
      <div className="max-w-7xl mx-auto glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 relative">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl font-semibold text-gradient-neon">{s.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ ABOUT ============================ */

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-5 md:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>Who we are</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4 leading-[1.05]">
            Pioneering AI for a{" "}
            <span className="text-gradient-neon">better tomorrow.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-6 leading-relaxed">
            Rumuri Intelligence is a Rwandan AI company with a mission to build
            world-class technologies that understand Africa — in African
            languages, and for African people.
          </p>
          <p className="text-muted-foreground text-base mt-4 leading-relaxed">
            We believe AI should be ethical, inclusive, and accessible to all.
            Our work spans research, products, and partnerships that create
            meaningful and lasting impact across the continent.
          </p>
          <a
            href="#solutions"
            className="inline-flex mt-8 items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium glow-neon hover:scale-[1.02] transition-transform"
          >
            Explore our work <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden glass-strong">
            <img
              src={kigali}
              alt="Kigali Convention Center at night"
              width={1280}
              height={896}
              loading="lazy"
              className="w-full h-[440px] md:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -right-4 md:-right-8 w-64 glass-strong rounded-2xl p-5 glow-neon"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <div className="font-display font-medium">Our Mission</div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              To build ethical AI that empowers communities and drives
              sustainable development across Africa.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================ PRODUCTS ============================ */

const products = [
  { name: "Kwanda Voice", tag: "Speech", desc: "Real-time speech recognition and voice AI for Kinyarwanda.", img: pVoice },
  { name: "Kwanda Chat", tag: "Assistant", desc: "Conversational AI that understands Rwanda's context and dialects.", img: pChat },
  { name: "AI Sign", tag: "Accessibility", desc: "AI-powered sign language translation for inclusive communication.", img: pSign },
  { name: "Kwanda OCR", tag: "Vision", desc: "Extracting text from images and documents in Kinyarwanda.", img: pOcr },
  { name: "Smart Mobility", tag: "Autonomy", desc: "Perception intelligence for safer, smarter African roads.", img: pMobility },
];

export function Products() {
  return (
    <section id="products" className="relative py-28 md:py-36 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Solutions</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4">
              Intelligence in <span className="text-gradient-neon">Action.</span>
            </h2>
          </div>
          <a href="#research" className="text-sm text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
            View all projects <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {products.map((p, i) => (
            <motion.a
              key={p.name}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl overflow-hidden glass hover-lift"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  width={768}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] tracking-wider uppercase glass rounded-full px-2.5 py-1 text-primary border-primary/30">
                    {p.tag}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-lg font-medium mb-1.5">{p.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Explore</span>
                  <div className="w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ RESEARCH ============================ */

const research = [
  { area: "Foundation Models", title: "Kinyabase-1: A Kinyarwanda Foundation Model", date: "2026" },
  { area: "Speech", title: "Low-Resource ASR for East African Languages", date: "2025" },
  { area: "Accessibility", title: "Real-time Rwandan Sign Language Translation", date: "2025" },
  { area: "Vision", title: "Handwritten Kinyarwanda OCR at Scale", date: "2024" },
];

export function Research() {
  return (
    <section id="research" className="relative py-28 md:py-36 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <SectionLabel>Research</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4 max-w-3xl">
            Advancing the frontier of{" "}
            <span className="text-gradient-neon">African AI.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {research.map((r, i) => (
            <motion.a
              key={r.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass rounded-2xl p-7 hover-lift flex items-start justify-between gap-6"
            >
              <div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-primary mb-3">{r.area} · {r.date}</div>
                <h3 className="font-display text-xl md:text-2xl font-medium leading-tight group-hover:text-gradient-neon transition-all">
                  {r.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-3 flex items-center gap-1.5">
                  Read paper <ArrowUpRight className="w-3.5 h-3.5" />
                </p>
              </div>
              <div className="w-11 h-11 rounded-full border border-primary/40 flex items-center justify-center shrink-0 bg-primary/5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ FOUNDER ============================ */

export function Founder() {
  return (
    <section id="founder" className="relative py-28 md:py-36 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative glass-strong rounded-3xl p-6 md:p-10 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
          <div className="grid lg:grid-cols-[auto_1fr_auto] gap-8 lg:gap-12 items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto"
            >
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl" />
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/40 glow-neon">
                <img
                  src={founder}
                  alt="Hamed Hussein — Founder & CEO"
                  width={896}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div>
              <SectionLabel>Founder & CEO</SectionLabel>
              <h3 className="font-display text-3xl md:text-5xl font-semibold mt-3">Hamed Hussein</h3>
              <p className="text-muted-foreground mt-4 text-sm md:text-base max-w-xl leading-relaxed">
                Hamed Hussein is a visionary AI engineer and entrepreneur
                passionate about building impactful technologies for Africa.
                Through Rumuri Intelligence, he leads a team of researchers and
                builders shaping the future of intelligent systems in Kinyarwanda
                and beyond.
              </p>
              <div className="flex items-center gap-2 mt-6">
                {[Linkedin, Twitter, Mail, Github].map((Icon, i) => (
                  <a
                    key={i}
                    href="#contact"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 max-w-sm"
            >
              <Quote className="w-6 h-6 text-primary mb-3" />
              <p className="text-sm md:text-base leading-relaxed italic">
                "Our goal is not just to build AI, but to build AI that
                understands us, represents us, and uplifts us."
              </p>
              <div className="font-display text-primary mt-4 text-sm">— Hamed Hussein</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ PARTNERS ============================ */

const partners = ["RISA", "Irembo", "Microsoft for Startups", "NVIDIA Inception", "Carnegie Mellon Africa", "Africa AI", "kLab"];

export function Partners() {
  return (
    <section className="relative py-16 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>Our partners</SectionLabel>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {partners.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.85, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl px-4 py-5 text-center text-xs md:text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {p}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ CONTACT ============================ */

export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionLabel>Get in touch</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4 leading-[1.05]">
              Let's build the <span className="text-gradient-neon">future of AI</span> together.
            </h2>
            <p className="text-muted-foreground mt-6 max-w-lg">
              Partner with us on research, products, and initiatives that push
              African intelligence forward.
            </p>
            <div className="space-y-4 mt-10">
              {[
                { icon: Mail, label: "hamussein01@gmail.com" },
                { icon: Phone, label: "+250 795 123 456" },
                { icon: MapPin, label: "Kigali Heights, 4th Floor · Kigali, Rwanda" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <c.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm md:text-base">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="glass-strong rounded-3xl p-6 md:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" placeholder="Your full name" />
              <Field label="Email" placeholder="you@company.com" type="email" />
            </div>
            <Field label="Company" placeholder="Where you work" />
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:bg-white/[0.07] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium glow-neon hover:scale-[1.01] transition-transform"
            >
              <Zap className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        {...rest}
        className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:bg-white/[0.07] transition-colors"
      />
    </div>
  );
}

/* ============================ FOOTER ============================ */

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-5 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <a href="#home" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center glow-neon">
              <span className="font-display font-bold text-primary-foreground text-base">R</span>
            </div>
            <div>
              <div className="font-display font-semibold">Rumuri</div>
              <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Intelligence</div>
            </div>
          </a>
          <p className="text-sm text-muted-foreground mt-5 max-w-xs leading-relaxed">
            Building the intelligence that empowers Rwanda and Africa.
          </p>
          <div className="flex items-center gap-2 mt-6">
            {[Linkedin, Twitter, Youtube, Github].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <FooterCol title="Company" links={["About Us", "Our Team", "Careers", "News"]} />
        <FooterCol title="Solutions" links={["NLP & Language", "Speech & Voice", "Computer Vision", "Accessibility", "Mobility"]} />
        <FooterCol title="Resources" links={["Research", "Publications", "Blog", "Datasets"]} />
      </div>
      <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Rumuri Intelligence. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="font-display font-medium mb-4">{title}</div>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}