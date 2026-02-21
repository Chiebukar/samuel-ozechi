import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="px-4 py-16 pb-28 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bento-cell glow-border p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-3">Let's Connect</h2>
            <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">
              Open to collaborations, research opportunities, and conversations about AI/ML.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="mailto:OzechiSamuel@gmail.com"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
              >
                <Mail className="w-5 h-5" /> Get in Touch <ArrowUpRight className="w-4 h-4" />
              </motion.a>
              <span className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" /> Lagos, Nigeria
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
