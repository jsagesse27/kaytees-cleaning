import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

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
    { name: 'About', href: '/#about' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
            K
          </div>
          <span className={cn(
            "font-serif text-2xl font-bold tracking-tight",
            isScrolled ? "text-slate-900" : "text-white"
          )}>
            Kaytee's
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-accent",
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
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-900 hover:text-brand-primary"
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

import { AnimatePresence } from 'motion/react';
