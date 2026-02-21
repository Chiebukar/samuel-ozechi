import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="px-4 py-24 pb-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-3">Let's Connect</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Open to collaborations, research opportunities, and conversations about AI/ML.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:OzechiSamuel@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" /> OzechiSamuel@gmail.com
            </a>
            <span className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4" /> Lagos, Nigeria
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
