import { motion } from "framer-motion";
import { FileText, ArrowUpRight, FlaskConical } from "lucide-react";

const research = [
  {
    title: "Movie Recommender System Using Collaborative Filtering",
    description:
      "Designed and developed a movie recommender system as a hands-on learning resource for ML engineers on collaborative filtering techniques.",
    tags: ["Recommender Systems", "Collaborative Filtering", "Python"],
  },
  {
    title: "Real-Time Data Processing & Analytics",
    description:
      "In-depth technical article on the techniques, technologies, and applications of real-time data processing and analytics pipelines.",
    tags: ["Data Engineering", "Stream Processing", "Analytics"],
  },
  {
    title: "Generative Models for Customer Segmentation",
    description:
      "Authored research on practical applications of generative models for enhancing customer segmentation, personalization, and recommendation systems.",
    tags: ["Generative AI", "Segmentation", "Personalization"],
  },
  {
    title: "COVID-19 X-Ray Abnormality Segmentation",
    description:
      "Utilized CNNs to develop an object segmentation model identifying and localizing early-stage COVID-19 abnormalities on chest radiographs.",
    tags: ["CNN", "Medical Imaging", "TensorFlow"],
  },
  {
    title: "AI-Driven Customer Analytics for Business Growth",
    description:
      "Demonstrated how AI-driven customer analytics can drive business growth and improve customer satisfaction through data-driven strategies.",
    tags: ["AI Analytics", "Business Intelligence", "ML"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, x: -20, scale: 0.97 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 250, damping: 22 },
  },
};

const ResearchSection = () => {
  return (
    <section id="research" className="px-4 py-16 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <FlaskConical className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">
              Research & Publications
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-lg">
            Applied research in ML, deep learning, and AI-driven business
            solutions.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-3"
        >
          {research.map((item, i) => (
            <motion.div
              key={item.title}
              variants={cardVariant}
              whileHover={{ x: 6, scale: 1.01 }}
              className="group bento-cell relative overflow-hidden cursor-pointer flex items-start gap-5"
              style={{ padding: "1.25rem 1.5rem" }}
            >
              <motion.div
                className="absolute inset-0 mesh-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              />
              <div className="relative z-10 flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="relative z-10 flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] rounded-md bg-secondary text-secondary-foreground font-medium"
                    >
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

export default ResearchSection;
