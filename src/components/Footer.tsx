import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-bold">L</span>
            </div>
            <span className="font-bold text-lg">LoanEase</span>
          </div>
          <p className="text-sm opacity-70">Your trusted partner for quick, transparent, and hassle-free loan applications.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity">Home</a>
            <a href="#" className="hover:opacity-100 transition-opacity">About Us</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Loan Products</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <span className="flex items-center gap-2"><Mail size={14} /> support@loanease.com</span>
            <span className="flex items-center gap-2"><Phone size={14} /> +91 98765 43210</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> Mumbai, India</span>
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-60">© 2026 LoanEase. All rights reserved.</p>
        <div className="flex gap-4">
          {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="opacity-60 hover:opacity-100 transition-opacity">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
