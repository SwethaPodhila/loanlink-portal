import { motion } from "framer-motion";
import {
  Wallet, Home, GraduationCap, Briefcase, Gem, Car, Bike,
} from "lucide-react";

const loans = [
  { name: "Personal Loan", rate: "8.5%", desc: "Quick funds for personal needs.", icon: Wallet },
  { name: "Home Loan", rate: "8.5%", desc: "Make your dream home a reality.", icon: Home },
  { name: "Study Loan", rate: "9.0%", desc: "Invest in your future with education loans.", icon: GraduationCap },
  { name: "Business Loan", rate: "12.0%", desc: "Flexible financing options.", icon: Briefcase },
  { name: "Gold Loan", rate: "7.5%", desc: "Unlock your gold value at competitive rates.", icon: Gem },
  { name: "Car Loan", rate: "9.5%", desc: "Drive your dream car hassle-free.", icon: Car },
  { name: "Bike Loan", rate: "11.0%", desc: "Quick two-wheeler loans.", icon: Bike },
];

const LoanTypes = () => (
  <section id="loans" className="py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Explore Our Loan Products</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Find the perfect loan tailored to your needs with competitive interest rates.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loans.map((loan, i) => (
          <motion.div
            key={loan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group bg-card rounded-2xl p-6 border border-border shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center mb-4">
              <loan.icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">{loan.name}</h3>
            <p className="text-sm text-muted-foreground mb-3">{loan.desc}</p>
            <p className="text-sm font-medium text-primary mb-4">From {loan.rate}</p>
            <a
              href="#"
              className="inline-block text-sm font-medium px-5 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Apply Now
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LoanTypes;
