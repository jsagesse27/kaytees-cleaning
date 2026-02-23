import { motion } from 'motion/react';
import Hero from '../components/Hero';
import Pricing from '../components/Services'; // Renamed to Pricing in the file
import QuoteCalculator from '../components/QuoteCalculator';
import CoverageMap from '../components/CoverageMap';
import Testimonials from '../components/Testimonials';
import BookingCTA from '../components/BookingCTA';
import { Shield, Sparkles, Heart, Zap, Award, ThumbsUp, Leaf, Clock8 } from 'lucide-react';

export default function Home() {
  const features = [
    { icon: Shield, title: "Fully Insured", desc: "Bonded and insured for your total protection." },
    { icon: Sparkles, title: "Eco-Friendly", desc: "Non-toxic products safe for pets and children." },
    { icon: Heart, title: "Vetted Pros", desc: "Rigorous background checks and professional training." },
    { icon: Zap, title: "Instant Booking", desc: "Book online in seconds with real-time availability." },
    { icon: ThumbsUp, title: "Satisfaction", desc: "100% happiness guarantee on every single visit." },
    { icon: Clock8, title: "Always On Time", desc: "Punctual service you can set your watch to." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-0"
    >
      <Hero />
      
      {/* Features / Why Us */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.01 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all hover:shadow-xl hover:bg-white group"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <f.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />
      <QuoteCalculator />
      <Testimonials />
      <CoverageMap />
      <BookingCTA />
    </motion.div>
  );
}
