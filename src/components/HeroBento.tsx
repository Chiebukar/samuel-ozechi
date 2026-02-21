import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, BookOpen, ArrowUpRight } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const socials = [
  { icon: Github, href: "https://github.com/Chiebukar", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/0zexhi", label: "Twitter" },
  { icon: BookOpen, href: "https://samuel-ozechi.medium.com/", label: "Medium" },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" as const },
});

const HeroBento = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main hero cell */}
        <motion.div
          {...fadeUp(0.1)}
          className="md:col-span-2 md:row-span-2 bento-cell glow-border relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col justify-between h-full min-h-[340px]">
            <div>
              <motion.p {...fadeUp(0.2)} className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
                AI/ML Engineer
              </motion.p>
              <motion.h1 {...fadeUp(0.3)} className="text-4xl md:text-6xl font-bold text-gradient leading-tight mb-4">
                Samuel Ozechi
              </motion.h1>
              <motion.p {...fadeUp(0.4)} className="text-muted-foreground text-lg max-w-lg leading-relaxed">
                Applied ML Researcher with 5+ years building data pipelines, fine-tuning LLMs, and shipping AI systems across fintech, energy & digital commerce.
              </motion.p>
            </div>
            <motion.div {...fadeUp(0.5)} className="flex items-center gap-3 mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Get in Touch <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-foreground font-medium text-sm hover:border-primary/50 transition-colors"
              >
                View Projects
              </a>
            </motion.div>
          </div>
          <div className="absolute inset-0 mesh-gradient opacity-40 pointer-events-none" />
        </motion.div>

        {/* Profile image cell */}
        <motion.div {...fadeUp(0.2)} className="bento-cell glow-border-hover p-0 overflow-hidden">
          <img
            src={profileImg}
            alt="Samuel Ozechi"
            className="w-full h-full object-cover min-h-[200px]"
          />
        </motion.div>

        {/* Social links cell */}
        <motion.div {...fadeUp(0.3)} className="bento-cell glow-border-hover">
          <p className="text-sm text-muted-foreground mb-4 font-medium">Connect</p>
          <div className="flex flex-col gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors group"
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{label}</span>
                <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Skills cell */}
        <motion.div {...fadeUp(0.35)} className="bento-cell glow-border-hover md:col-span-2">
          <p className="text-sm text-muted-foreground mb-3 font-medium">Core Stack</p>
          <div className="flex flex-wrap gap-2">
            {["Python", "TensorFlow", "PyTorch", "LangChain", "RAG", "Scikit-Learn", "FastAPI", "SQL", "GCP", "Azure", "AWS", "Docker"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stats cell */}
        <motion.div {...fadeUp(0.4)} className="bento-cell glow-border-hover">
          <p className="text-sm text-muted-foreground mb-4 font-medium">Experience</p>
          <div className="space-y-3">
            <div>
              <p className="text-3xl font-bold text-gradient">5+</p>
              <p className="text-xs text-muted-foreground">Years in Industry</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gradient">MSc</p>
              <p className="text-xs text-muted-foreground">Financial Engineering</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBento;
