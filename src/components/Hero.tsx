import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center hero-gradient overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-foreground/5" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-primary-foreground/5" />
      <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-primary-foreground/5" />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6"
      >
        Get Your Loan Instantly.
        <br />
        Apply Online in Minutes.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
      >
        Quick, Transparent, and Hassle-Free Loan Applications for Everyone.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        href="#loans"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-foreground text-primary font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        Apply Now <ArrowRight size={20} />
      </motion.a>
    </div>
  </section>
);

export default Hero;
