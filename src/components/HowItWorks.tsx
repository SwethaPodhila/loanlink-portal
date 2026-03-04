import { motion } from "framer-motion";
import { UserPlus, FileText, CheckCircle } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Sign Up / Login", desc: "Create your account in seconds." },
  { icon: FileText, title: "Apply & Upload Docs", desc: "Fill in details and submit documents." },
  { icon: CheckCircle, title: "Get Approval & Track", desc: "Receive approval and track your loan status." },
];

const HowItWorks = () => (
  <section className="py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">How It Works</h2>
        <p className="text-muted-foreground">Three simple steps to your loan.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="relative text-center"
          >
            <div className="w-20 h-20 rounded-full hero-gradient flex items-center justify-center mx-auto mb-5 relative">
              <s.icon size={32} className="text-primary-foreground" />
              <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
