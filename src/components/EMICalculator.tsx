import { useState } from "react";
import { motion } from "framer-motion";

const EMICalculator = () => {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(10);
  const [tenure, setTenure] = useState(24);

  const monthlyRate = rate / 12 / 100;
  const emi =
    monthlyRate > 0
      ? (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
        (Math.pow(1 + monthlyRate, tenure) - 1)
      : amount / tenure;

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Quick EMI Calculator</h2>
          <p className="text-muted-foreground">Plan your repayments before you apply.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border p-8 shadow-[var(--card-shadow)]"
        >
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Loan Amount: ₹{amount.toLocaleString()}
              </label>
              <input
                type="range"
                min={50000}
                max={5000000}
                step={10000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Interest Rate: {rate}%
              </label>
              <input
                type="range"
                min={5}
                max={25}
                step={0.5}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Tenure: {tenure} months
              </label>
              <input
                type="range"
                min={6}
                max={360}
                step={6}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
          </div>
          <div className="mt-8 p-6 rounded-xl hero-gradient text-center">
            <p className="text-primary-foreground/80 text-sm mb-1">Your Monthly EMI</p>
            <p className="text-4xl font-bold text-primary-foreground">
              ₹{Math.round(emi).toLocaleString()}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EMICalculator;
