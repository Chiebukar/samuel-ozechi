import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const lines = [
  { text: "$ python agent.py --task 'analyze_revenue_data'", delay: 0 },
  { text: "🔄 Loading RAG pipeline...", delay: 800 },
  { text: "✓ Connected to vector store (1,247 embeddings)", delay: 1600 },
  { text: "✓ LLM initialized: GPT-4 Turbo", delay: 2200 },
  { text: "🧠 Agent reasoning...", delay: 2800 },
  { text: "  → Querying transaction data (Q4 2025)", delay: 3400 },
  { text: "  → Running profitability analysis", delay: 4000 },
  { text: "  → Generating cross-sell recommendations", delay: 4600 },
  { text: "✓ Analysis complete. 12 opportunities identified.", delay: 5400 },
  { text: "✓ Report exported: revenue_insights_q4.pdf", delay: 6000 },
  { text: "$ █", delay: 6600 },
];

const TerminalWindow = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true);
      const timers = lines.map((line, i) =>
        setTimeout(() => setVisibleLines(i + 1), line.delay)
      );
      return () => timers.forEach(clearTimeout);
    }
  }, [isInView, started]);

  return (
    <section id="terminal" className="px-4 py-16 relative z-10" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">Live Agent</h2>
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs text-primary font-medium">Running</span>
            </motion.span>
          </div>
          <p className="text-muted-foreground text-sm">Simulating an AI agent workflow in action.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl overflow-hidden border border-border glow-border"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-surface-elevated border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
            <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">agent.py — AI Workflow</span>
          </div>

          <div className="p-5 font-mono text-sm leading-7 min-h-[280px]" style={{ background: "hsl(var(--terminal-bg))" }}>
            {lines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" as const }}
                className={`${line.text.startsWith("✓") ? "terminal-text" : line.text.startsWith("$") ? "text-foreground font-semibold" : "text-muted-foreground"}`}
              >
                {line.text}
              </motion.div>
            ))}
            {visibleLines === 0 && (
              <span className="text-muted-foreground">$ <span className="animate-blink">█</span></span>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalWindow;
