import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

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
    title: "12 Essential Tips for Building Effective Forecasting Models",
    subtitle: "Practical guidance for building accurate and reliable forecasting systems",
    url: "https://samuel-ozechi.medium.com/12-essential-tips-for-building-effective-forecasting-models-6fad38585f7d",
    date: "2023",
    publication: "Medium",
  },
  {
    title: "Evaluating Deep Learning Models Using Validation",
    subtitle: "4 techniques for evaluating the performance of deep learning models",
    url: "https://medium.com/pydatascience/4-techniques-of-evaluating-the-performance-of-deep-learning-models-using-validation-35ef4b12e8d8",
    date: "2021",
    publication: "pyDataScience",
  },
];

const ArticlesSection = () => {
  return (
    <section id="articles" className="px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-3">Articles</h2>
          <p className="text-muted-foreground">Recent writing on ML, deep learning and data science on Medium.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bento-cell glow-border-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary font-medium">
                    {article.publication}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" /> {article.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{article.subtitle}</p>
              </div>
              <div className="flex items-center gap-1 mt-4 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Read on Medium <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
