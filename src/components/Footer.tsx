import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <img src="/logo.png" alt="Kaytee's Logo" className="w-10 h-10 object-contain brightness-0 invert" />
            <span className="font-serif text-2xl font-bold text-white">Kaytee's</span>
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Premium cleaning services for homes and businesses. We bring sparkle and peace of mind to your space.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-accent transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-brand-accent transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-brand-accent transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="/#services" className="hover:text-white transition-colors">Our Services</a></li>
            <li><a href="/#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
            <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><Link to="/book" className="hover:text-white transition-colors">Book a Clean</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/services/residential" className="hover:text-white transition-colors">Residential Cleaning</Link></li>
            <li><Link to="/services/commercial" className="hover:text-white transition-colors">Commercial Cleaning</Link></li>
            <li><Link to="/services/deep-clean" className="hover:text-white transition-colors">Deep Cleaning</Link></li>
            <li><Link to="/services/move-in-out" className="hover:text-white transition-colors">Move In/Out</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-accent" />
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-accent" />
              <span>hello@kayteescleaning.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-brand-accent" />
              <span>123 Sparkle Way, Clean City, ST 12345</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-brand-primary/20 flex flex-col md:row justify-between items-center gap-4 text-xs">
        <p>© {new Date().getFullYear()} Kaytee's Cleaning Services. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
