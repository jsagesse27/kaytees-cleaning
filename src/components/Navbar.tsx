import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY, IMAGES } from '../siteConfig';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-4 left-4 right-4 z-50 transition-all duration-300 px-6 py-4 rounded-2xl',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={IMAGES.logo} alt={`${COMPANY.name} Logo`} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          <span className={cn(
            "font-serif text-lg md:text-2xl font-bold tracking-tight",
            isScrolled ? "text-slate-900" : "text-white"
          )}>
            {COMPANY.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-sm",
                isScrolled ? "text-slate-600" : "text-white/90"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book"
            className="bg-brand-primary hover:bg-brand-secondary text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-brand-primary/20 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden p-2", isScrolled ? "text-slate-900" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-4 border border-slate-200"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-900 hover:text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-sm inline-block"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setIsOpen(false)}
              className="bg-brand-primary text-white p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
