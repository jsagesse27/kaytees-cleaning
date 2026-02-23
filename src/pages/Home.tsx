import { motion } from 'motion/react';
import Hero from '../components/Hero';
import Pricing from '../components/Services';
import ServicesGrid from '../components/ServicesGrid';
import QuoteCalculator from '../components/QuoteCalculator';
import CoverageMap from '../components/CoverageMap';
import Testimonials from '../components/Testimonials';
import BookingCTA from '../components/BookingCTA';
import AboutSection from '../components/AboutSection';
import { Shield, Sparkles, Heart, Zap, Award, ThumbsUp, Leaf, Clock8 } from 'lucide-react';

export default function Home() {
  const features = [
    { icon: Shield, title: "Fully Insured", desc: "Bonded and insured for your total protection and peace of mind." },
    { icon: Sparkles, title: "Eco-Friendly", desc: "Non-toxic, green products safe for your employees and customers." },
    { icon: Heart, title: "Vetted Pros", desc: "Rigorous background checks and professional training for every crew member." },
    { icon: Zap, title: "Instant Booking", desc: "Book online in seconds with real-time availability and pricing." },
    { icon: ThumbsUp, title: "Satisfaction", desc: "100% happiness guarantee on every single service visit." },
    { icon: Clock8, title: "After-Hours", desc: "We work around your business hours so there's zero disruption, every time." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-0"
    >
      <Hero />

      {/* Problem Statement */}
      <section className="py-24 px-6 bg-brand-bg text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Your space deserves care that <span className="text-brand-primary">reflects your standards.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-10">
              Whether it's your office, storefront, or home, a clean environment isn't just about appearances. It's about health, confidence, and peace of mind.
              Let our professional team handle the cleaning so you can focus on what truly matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features / Why Us */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-brand-primary/20 group cursor-pointer"
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

      <ServicesGrid />
      <Pricing />
      <QuoteCalculator />
      <Testimonials />
      <AboutSection />
      <CoverageMap />
      <BookingCTA />
    </motion.div>
  );
}
