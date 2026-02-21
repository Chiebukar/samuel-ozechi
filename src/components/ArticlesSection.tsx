import { motion } from "framer-motion";
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";

const articles = [
  {
    title: "Machine Learning Pipelines",
    subtitle: "Automating Machine Learning workflows with SkLearn-Pandas",
    url: "https://samuel-ozechi.medium.com/",
    date: "Sep 2021",
    publication: "TDS Archive",
  },
  {
    title: "Stochastic Gradient Descent For Deep Learning",
    subtitle: "Understanding the parameter optimization process for deep learning models",
    url: "https://samuel-ozechi.medium.com/stochastic-gradient-descent-for-deep-learning-8d911b6b625a",
    date: "2021",
    publication: "Medium",
  },
  {
    title: "12 Essential Tips for Forecasting Models",
    subtitle: "Practical guidance for building accurate and reliable forecasting systems",
    url: "https://samuel-ozechi.medium.com/12-essential-tips-for-building-effective-forecasting-models-6fad38585f7d",
    date: "2023",
    publication: "Medium",
  },
  {
    title: "Evaluating Deep Learning Models",
    subtitle: "4 techniques for evaluating deep learning model performance with validation",
    url: "https://medium.com/pydatascience/4-techniques-of-evaluating-the-performance-of-deep-learning-models-using-validation-35ef4b12e8d8",
    date: "2021",
    publication: "pyDataScience",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 250, damping: 20 } },
};

const ArticlesSection = () => {
  return (
    <section id="articles" className="px-4 py-16 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-2">Articles</h2>
          <p className="text-muted-foreground text-sm">Writing on ML, deep learning and data science.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-3"
        >
          {articles.map((article) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardItem}
              whileHover={{ x: 6, scale: 1.005 }}
              className="group bento-cell glow-border-hover flex items-center gap-5 p-5"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {article.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5 truncate">{article.subtitle}</p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="hidden sm:inline-flex px-2 py-0.5 text-[11px] rounded-md bg-secondary text-secondary-foreground font-medium">
                  {article.publication}
                </span>
                <span className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" /> {article.date}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;
