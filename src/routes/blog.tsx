import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Sections";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
});

const posts = [
  {
    title: "Introducing Kinyabase-1: A Foundation Model for Kinyarwanda",
    excerpt:
      "We're excited to announce Kinyabase-1, the first large language model specifically designed for Kinyarwanda, trained on 50B tokens of curated Rwandan text data.",
    date: "June 2026",
    readTime: "8 min read",
    tag: "Research",
  },
  {
    title: "How ASR is Transforming Education in Rural Rwanda",
    excerpt:
      "Our speech recognition technology is being used in 12 schools across Rwanda to help students learn reading skills through voice interaction.",
    date: "May 2026",
    readTime: "5 min read",
    tag: "Impact",
  },
  {
    title: "Building Accessible AI: Our Sign Language Translation Journey",
    excerpt:
      "Learn how we're building real-time sign language translation to make technology accessible for deaf and hard-of-hearing communities in East Africa.",
    date: "April 2026",
    readTime: "6 min read",
    tag: "Accessibility",
  },
  {
    title: "The State of AI Infrastructure in Africa: Challenges and Opportunities",
    excerpt:
      "A deep dive into the current state of GPU compute, data availability, and talent development across the African AI ecosystem.",
    date: "March 2026",
    readTime: "10 min read",
    tag: "Industry",
  },
  {
    title: "Rumuri Intelligence Joins NVIDIA Inception Program",
    excerpt:
      "We're thrilled to announce our acceptance into NVIDIA's Inception program, giving us access to cutting-edge GPU resources and AI expertise.",
    date: "February 2026",
    readTime: "3 min read",
    tag: "News",
  },
  {
    title: "Multimodal AI for African Languages: A Research Roadmap",
    excerpt:
      "Our vision for building AI systems that understand text, speech, and images across all major African languages.",
    date: "January 2026",
    readTime: "7 min read",
    tag: "Research",
  },
];

function BlogPage() {
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
              <span className="w-8 h-px bg-primary" /> Blog
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-semibold mt-4">
              Insights & <span className="text-gradient-neon">Updates</span>
            </h1>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl">
              Research articles, product updates, and stories from the frontier of African AI.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {posts.map((post, i) => (
              <motion.a
                key={post.title}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group glass-strong rounded-2xl p-7 hover-lift flex flex-col md:flex-row md:items-center gap-6"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 text-[10px] tracking-wider uppercase text-primary glass rounded-full px-2.5 py-1">
                      <Tag className="w-3 h-3" /> {post.tag}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-medium group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center shrink-0 bg-primary/5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
