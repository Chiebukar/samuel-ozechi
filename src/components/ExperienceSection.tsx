import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Interswitch Group",
    industry: "Fintech",
    role: "AI/ML Engineer",
    location: "Lagos, Nigeria",
    period: "Mar 2023 – Present",
    summary:
      "Building production ML pipelines, LLM-based applications (RAG, fine-tuning), and deploying AI models as REST APIs. Led customer profitability analysis, sales forecasting, and recommender systems to optimize revenue across business units.",
  },
  {
    company: "Sharesafe Services Ltd.",
    industry: "Energy",
    role: "Data Analyst",
    location: "Port Harcourt, Nigeria",
    period: "Nov 2021 – Sep 2022",
    summary:
      "Created real-time dashboards for offshore oil facility maintenance tracking, inventory management, and demand forecasting for safety systems.",
  },
  {
    company: "iSmile Technologies",
    industry: "IT",
    role: "Data Scientist",
    location: "Illinois, USA (Remote)",
    period: "Apr – Nov 2021",
    summary:
      "Developed CNN-based medical imaging models, LSTM stock forecasting pipelines, and B2B customer segmentation using K-Means clustering.",
  },
  {
    company: "Draft.Dev",
    industry: "Technical Content",
    role: "Content Developer (Data Science)",
    location: "Illinois, USA (Remote)",
    period: "Sep 2020 – Mar 2021",
    summary:
      "Authored technical articles and built hands-on ML projects including recommender systems and guides on generative AI for customer analytics.",
  },
  {
    company: "Havilah and Hills Innovations",
    industry: "Digital Commerce",
    role: "Data Scientist (Intern)",
    location: "Port Harcourt, Nigeria",
    period: "Feb – Aug 2020",
    summary:
      "Ran A/B tests on ad creatives, analyzed campaign performance metrics, and built KPI prediction models to optimize marketing spend and ROI.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 250, damping: 22 },
  },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-4 py-16 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">
              Work Experience
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-lg">
            6+ years across fintech, energy, IT, and digital commerce.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-[19px]" />

          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                variants={itemVariant}
                className="group relative pl-12"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-2.5 top-5 w-3 h-3 rounded-full border-2 border-primary bg-background z-10 group-hover:bg-primary transition-colors"
                  whileHover={{ scale: 1.4 }}
                />

                <div className="bento-cell p-5 relative overflow-hidden group-hover:border-primary/30 transition-colors">
                  <motion.div
                    className="absolute inset-0 mesh-gradient opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                  />
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <div>
                        <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-medium text-primary/80">
                          {exp.company}{" "}
                          <span className="text-muted-foreground font-normal">
                            · {exp.industry}
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-0.5 flex-shrink-0">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.summary}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
