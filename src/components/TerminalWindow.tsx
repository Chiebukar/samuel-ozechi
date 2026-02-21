import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

  useEffect(() => {
    const timers = lines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="terminal" className="px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-3">Live Agent</h2>
          <p className="text-muted-foreground mb-8">Simulating an AI agent workflow in action.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl overflow-hidden border border-border glow-border"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-surface-elevated border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-muted-foreground/40" />
            <div className="w-3 h-3 rounded-full bg-muted-foreground/40" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">agent.py — AI Workflow</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm leading-7 min-h-[300px]" style={{ background: "hsl(var(--terminal-bg))" }}>
            {lines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`${line.text.startsWith("✓") ? "terminal-text" : line.text.startsWith("$") ? "text-foreground" : "text-muted-foreground"}`}
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
