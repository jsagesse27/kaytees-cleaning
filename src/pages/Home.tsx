import { motion } from 'motion/react';
import Hero from '../components/Hero';
import Pricing from '../components/Services';
import ServicesGrid from '../components/ServicesGrid';
import QuoteCalculator from '../components/QuoteCalculator';
import CoverageMap from '../components/CoverageMap';
import Testimonials from '../components/Testimonials';
import BookingCTA from '../components/BookingCTA';
import TrustBadges from '../components/TrustBadges';
import AboutSection from '../components/AboutSection';
import DiscountPopup from '../components/DiscountPopup';
import { Shield, Sparkles, Heart, Zap, ThumbsUp, Clock8 } from 'lucide-react';
import { FEATURES, PROBLEM_STATEMENT } from '../siteConfig';

const iconMap = { Shield, Sparkles, Heart, Zap, ThumbsUp, Clock8 } as const;

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-0"
    >
      <Hero />
      <DiscountPopup />
      <TrustBadges />

      {/* Problem Statement */}
      <section className="py-24 px-6 bg-brand-bg text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              {PROBLEM_STATEMENT.headline} <span className="text-brand-primary">{PROBLEM_STATEMENT.headlineAccent}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-10">
              {PROBLEM_STATEMENT.body}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features / Why Us */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {FEATURES.map((f, i) => {
              const Icon = iconMap[f.icon];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-brand-primary/20 group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials />
      <ServicesGrid />
      <Pricing />
      <QuoteCalculator />
      <AboutSection />
      <CoverageMap />
      <BookingCTA />
    </motion.div>
  );
}
