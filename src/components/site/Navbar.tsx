import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#solutions", label: "Solutions" },
  { href: "#products", label: "Products" },
  { href: "#research", label: "Research" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-5 md:px-8`}>
        <div
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all ${
            scrolled
              ? "glass-strong shadow-lg shadow-black/5 border border-white/20"
              : "bg-white/60 backdrop-blur-sm border border-white/10"
          }`}
        >
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center glow-neon">
              <span className="font-display font-bold text-primary-foreground text-base">R</span>
              <div className="absolute inset-0 rounded-xl border border-primary/40" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-semibold text-sm md:text-base">Rumuri</div>
              <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Intelligence
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="p-2 rounded-lg glass hover:bg-primary/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-5 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Let's Connect
            </a>
            <button
              className="lg:hidden p-2 rounded-lg glass"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-white/5 text-sm"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
