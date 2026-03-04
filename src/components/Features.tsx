import { motion } from "framer-motion";
import { Zap, ShieldCheck, Settings } from "lucide-react";

const features = [
  { icon: Zap, title: "Fast Approval", desc: "Get loans approved quickly with our streamlined process." },
  { icon: ShieldCheck, title: "Secure & Transparent", desc: "100% safe and clear process with no hidden charges." },
  { icon: Settings, title: "Flexible EMI", desc: "Choose your repayment plan that suits your budget." },
];

const Features = () => (
  <section className="py-20 bg-muted/50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Why Choose Us</h2>
        <p className="text-muted-foreground">Trusted by thousands for reliable and fast financial solutions.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="text-center p-8 rounded-2xl bg-card border border-border"
          >
            <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center mx-auto mb-5">
              <f.icon size={28} className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
