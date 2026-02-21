import { motion } from "framer-motion";
import { ArrowUpRight, Brain, BarChart3, Users, MessageSquare, Layers, Zap } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "LLM-Powered Workflow Automation",
    description: "Production RAG pipelines and prompt-engineered LLM apps automating business workflows at Interswitch.",
    tags: ["LangChain", "RAG", "Python", "FastAPI"],
    icon: Brain,
  },
  {
    title: "Sales Forecasting Pipeline",
    description: "Revenue forecasting using statistical analysis and EDA to predict monthly trends for better decision-making.",
    tags: ["Scikit-Learn", "Pandas", "Statistics"],
    icon: BarChart3,
  },
  {
    title: "Customer Recommender System",
    description: "Collaborative filtering recommender identifying cross-sell and upsell opportunities from sales data.",
    tags: ["Python", "ML", "Recommendation"],
    icon: Users,
  },
  {
    title: "COVID-19 X-Ray Segmentation",
    description: "CNN-based model identifying early-stage COVID-19 abnormalities on chest radiographs.",
    tags: ["TensorFlow", "CNN", "Medical AI"],
    icon: Layers,
  },
  {
    title: "Stock Price Forecasting",
    description: "LSTM neural network pipeline for efficient stock price prediction using historical market data.",
    tags: ["PyTorch", "LSTM", "Finance"],
    icon: Zap,
  },
  {
    title: "B2B Customer Segmentation",
    description: "K-Means clustering on firmographic data to segment US startups for tailored marketing strategies.",
    tags: ["K-Means", "Analytics"],
    icon: MessageSquare,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 250, damping: 20 } },
};

const ProjectsSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="px-4 py-16 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-2">Projects</h2>
          <p className="text-muted-foreground text-sm max-w-lg">Production AI/ML systems across fintech, healthcare & commerce.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={cardVariant}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group bento-cell relative overflow-hidden cursor-pointer"
              style={{
                borderColor: hoveredIdx === i ? "hsl(var(--glow) / 0.4)" : undefined,
                boxShadow: hoveredIdx === i ? "0 0 30px -5px hsl(var(--glow) / 0.2)" : undefined,
              }}
            >
              <motion.div
                className="absolute inset-0 mesh-gradient"
                animate={{ opacity: hoveredIdx === i ? 0.3 : 0 }}
                transition={{ duration: 0.4 }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <motion.div
                    animate={{ rotate: hoveredIdx === i ? 10 : 0, scale: hoveredIdx === i ? 1.1 : 1 }}
                    transition={{ type: "spring" as const, stiffness: 300 }}
                  >
                    <project.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[11px] rounded-md bg-secondary text-secondary-foreground font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
