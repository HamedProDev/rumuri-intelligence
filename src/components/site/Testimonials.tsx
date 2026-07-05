import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Alice Mukamana",
    role: "Director of AI, RISA",
    quote:
      "Rumuri Intelligence has been instrumental in advancing Kinyarwanda NLP research. Their foundation model has transformed how we approach language technology for Rwanda.",
    rating: 5,
  },
  {
    name: "Jean-Pierre Niyonzima",
    role: "CTO, Irembo",
    quote:
      "The speech recognition accuracy of Kwanda Voice is remarkable. We've integrated it into our citizen services platform and the response has been overwhelmingly positive.",
    rating: 5,
  },
  {
    name: "Prof. Marie-Chantal Uwimana",
    role: "Carnegie Mellon Africa",
    quote:
      "Working with Rumuri has given our students access to cutting-edge AI research in African languages. Their commitment to open science is commendable.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 md:py-36 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-primary text-xs font-medium tracking-[0.25em] uppercase">
            <span className="w-8 h-px bg-primary" />
            Testimonials
            <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4">
            Trusted by <span className="text-gradient-neon">leaders in African AI.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-strong rounded-2xl p-7 hover-lift flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-sm md:text-base leading-relaxed flex-1 italic">"{t.quote}"</p>
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <div className="font-display font-medium text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
