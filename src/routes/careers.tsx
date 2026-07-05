import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MapPin, Clock, ArrowRight, Users, Heart, Zap, Globe } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Sections";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
});

const benefits = [
  { icon: Globe, title: "Remote-first", desc: "Work from anywhere in Africa or the world." },
  {
    icon: Zap,
    title: "Cutting-edge AI",
    desc: "Work on frontier AI research for African languages.",
  },
  {
    icon: Heart,
    title: "Health & wellness",
    desc: "Comprehensive health insurance and wellness programs.",
  },
  {
    icon: Users,
    title: "Team culture",
    desc: "Collaborative, inclusive, and mission-driven environment.",
  },
];

const jobs = [
  {
    title: "Senior NLP Researcher",
    department: "Research",
    location: "Kigali / Remote",
    type: "Full-time",
    description: "Lead research on multilingual NLP models for African languages.",
  },
  {
    title: "ML Engineer — Speech",
    department: "Engineering",
    location: "Kigali / Remote",
    type: "Full-time",
    description: "Build and deploy speech recognition and synthesis systems.",
  },
  {
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build beautiful interfaces for our AI products.",
  },
  {
    title: "Data Engineer",
    department: "Data",
    location: "Kigali",
    type: "Full-time",
    description: "Design and maintain data pipelines for model training.",
  },
  {
    title: "Research Intern",
    department: "Research",
    location: "Kigali / Remote",
    type: "Internship",
    description: "3-6 month internship working on active research projects.",
  },
];

function CareersPage() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div className="pt-32 pb-20 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-2 text-primary text-xs font-medium tracking-[0.25em] uppercase">
              <span className="w-8 h-px bg-primary" /> Careers
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-semibold mt-4">
              Join the <span className="text-gradient-neon">future of African AI.</span>
            </h1>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl">
              We're building the foundational AI technologies for Africa. Come shape the future with
              us.
            </p>
          </motion.div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-strong rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="font-display font-medium mb-1">{b.title}</div>
                <div className="text-xs text-muted-foreground">{b.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Open Positions */}
          <h2 className="font-display text-3xl font-semibold mb-8">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group glass-strong rounded-2xl p-6 hover-lift flex flex-col md:flex-row md:items-center gap-4 cursor-pointer"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-lg font-medium group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <span className="text-[10px] tracking-wider uppercase glass rounded-full px-2.5 py-1 text-primary">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{job.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" /> {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {job.location}
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center shrink-0 bg-primary/5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
