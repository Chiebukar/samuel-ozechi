import { motion } from "framer-motion";
import { ArrowUpRight, Brain, BarChart3, Users, MessageSquare, Layers, Zap } from "lucide-react";

const projects = [
  {
    title: "LLM-Powered Workflow Automation",
    description: "Production RAG pipelines and prompt-engineered LLM apps that automate internal business workflows at Interswitch Group.",
    tags: ["LangChain", "RAG", "Python", "FastAPI"],
    icon: Brain,
  },
  {
    title: "Sales Forecasting Pipeline",
    description: "Revenue forecasting system using statistical analysis and EDA insights to predict monthly trends, improving budgeting and decision-making.",
    tags: ["Scikit-Learn", "Pandas", "Statistics"],
    icon: BarChart3,
  },
  {
    title: "Customer Recommender System",
    description: "Collaborative filtering recommender for cross-sell and upsell opportunities using sales, customer and product data.",
    tags: ["Python", "ML", "Recommendation"],
    icon: Users,
  },
  {
    title: "COVID-19 Chest X-Ray Segmentation",
    description: "CNN-based object segmentation model to identify early-stage COVID-19 abnormalities on chest radiographs.",
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
    description: "K-Means clustering model using financial, technographic and firmographic data to segment US startups for tailored marketing.",
    tags: ["K-Means", "Analytics", "Segmentation"],
    icon: MessageSquare,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-3">Projects</h2>
          <p className="text-muted-foreground max-w-lg">Production AI/ML systems and research projects across fintech, healthcare and commerce.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bento-cell glow-border-hover relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 mesh-gradient opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <project.icon className="w-6 h-6 text-primary" />
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
