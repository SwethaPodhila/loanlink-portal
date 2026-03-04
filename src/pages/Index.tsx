import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LoanTypes from "@/components/LoanTypes";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import EMICalculator from "@/components/EMICalculator";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <LoanTypes />
    <Features />
    <HowItWorks />
    <EMICalculator />
    <Stats />
    <Testimonials />
    <FAQ />
    <Footer />
  </div>
);

export default Index;
