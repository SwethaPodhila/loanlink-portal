import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { label: "Loans Approved", target: 50000, suffix: "+" },
  { label: "Happy Users", target: 120000, suffix: "+" },
  { label: "Fast Approval", target: 4, suffix: " hrs" },
  { label: "Partner Banks", target: 25, suffix: "+" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <motion.div
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true }}
      className="text-center"
    >
      <p className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">
        {count.toLocaleString()}{suffix}
      </p>
    </motion.div>
  );
};

const Stats = () => (
  <section className="py-16 hero-gradient">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <Counter target={s.target} suffix={s.suffix} />
            <p className="text-primary-foreground/70 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
