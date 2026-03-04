import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", role: "Business Owner", text: "LoanEase made my business loan process incredibly smooth. Got approved in just 24 hours!" },
  { name: "Rajesh Kumar", role: "Software Engineer", text: "The home loan process was transparent and hassle-free. Highly recommended for first-time buyers." },
  { name: "Anita Desai", role: "Teacher", text: "Thanks to LoanEase, I could fund my daughter's education abroad. The study loan rates are very competitive." },
];

const Testimonials = () => (
  <section className="py-20 bg-muted/50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">What Our Customers Say</h2>
        <p className="text-muted-foreground">Real stories from real people.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-2xl border border-border p-6"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-5 italic">"{t.text}"</p>
            <div>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
