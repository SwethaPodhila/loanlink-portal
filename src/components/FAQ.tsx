import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How long does approval take?", a: "Most loan applications are processed within 24-48 hours. Personal loans can be approved in as little as 4 hours." },
  { q: "What documents are required?", a: "You'll need a valid ID proof, address proof, income proof (salary slips or IT returns), and bank statements for the last 6 months." },
  { q: "Can I apply for multiple loans?", a: "Yes, you can apply for multiple loan types simultaneously. Each application is evaluated independently based on your eligibility." },
  { q: "Is there a prepayment penalty?", a: "We offer flexible prepayment options. Most loans have zero prepayment charges after the initial lock-in period." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Find answers to common queries.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-foreground">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-muted-foreground transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
