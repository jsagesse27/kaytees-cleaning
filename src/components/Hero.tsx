import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Clock, PhoneCall, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden bg-brand-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Professional Cleaning Crew in Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/85" />
      </div>

      {/* Background Pattern/Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/20 blur-[120px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-brand-accent/20 text-brand-accent px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-sm border border-brand-accent/30">
              <Star className="w-4 h-4 fill-current" />
              <span>NYC's Trusted Cleaning Partner</span>
            </div>
            <a href={`tel:${CONTACT.phone.replace(/\D/g, '')}`} className="inline-flex items-center gap-2 bg-white/10 text-white hover:bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-sm border border-white/20 transition-colors">
              <PhoneCall className="w-4 h-4" />
              <span>{CONTACT.phone}</span>
            </a>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
            The Clean You Expect. <br />
            <span className="text-brand-accent italic">The Reliability You Deserve.</span>
          </h1>

          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
            Stop stressing about the mess. Get premium, fully-insured commercial and residential cleaning in NYC. Reclaim your time and space with our 100% Satisfaction Guarantee.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/book"
              className="bg-brand-accent hover:bg-brand-accent/90 text-slate-900 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-brand-accent/30 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#services"
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-full text-lg font-bold transition-all border border-white/30 flex items-center justify-center cursor-pointer"
            >
              View Our Services
            </a>
          </div>

          {/* Social Proof Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">500+</span>
              <span className="text-xs text-brand-accent uppercase tracking-wider font-semibold">Clients Served</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">4.9/5</span>
              <span className="text-xs text-brand-accent uppercase tracking-wider font-semibold">Google Rating</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">100%</span>
              <span className="text-xs text-brand-accent uppercase tracking-wider font-semibold">Satisfaction</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Image with Decorative Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Decorative Blob Shapes — Super Cleaners style */}
          <div className="absolute inset-0 -m-8">
            {/* Main large blob */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] bg-brand-primary/40 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-sm"
            />
            {/* Secondary blob */}
            <div
              className="absolute top-[10%] right-[5%] w-[85%] h-[80%] bg-brand-primary/30 rounded-[40%_60%_70%_30%/40%_70%_30%_60%] blur-sm"
            />
            {/* Accent blob */}
            <div
              className="absolute bottom-[5%] left-[10%] w-[70%] h-[60%] bg-brand-accent/15 rounded-[50%_50%_40%_60%/60%_40%_50%_50%] blur-md"
            />
          </div>

          {/* Decorative Sparkle Elements */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 right-8 z-20"
          >
            <Sparkles className="w-8 h-8 text-brand-accent drop-shadow-lg" />
          </motion.div>
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-16 left-0 z-20"
          >
            <Sparkles className="w-6 h-6 text-brand-accent/70 drop-shadow-lg" />
          </motion.div>
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-4 z-20"
          >
            <div className="w-4 h-4 bg-brand-accent/50 rounded-full blur-[2px]" />
          </motion.div>
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 -right-2 z-20"
          >
            <div className="w-3 h-3 bg-white/40 rounded-full blur-[1px]" />
          </motion.div>

          {/* Small decorative circles */}
          <div className="absolute top-12 left-12 w-5 h-5 bg-brand-accent/40 rounded-full z-20" />
          <div className="absolute bottom-20 right-16 w-3 h-3 bg-white/30 rounded-full z-20" />
          <div className="absolute top-1/3 right-0 w-4 h-4 border-2 border-brand-accent/40 rounded-full z-20" />

          {/* Main Hero Image */}
          <div className="relative z-10 rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl aspect-[3/4] w-[85%]">
            <img
              src="/hero-worker.png"
              alt="Professional Cleaning Staff"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Trust Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 -left-12 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-slate-100 z-20"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">Fully Insured</p>
              <p className="text-xs text-slate-500">Bonded & Protected</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute top-4 -right-4 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-slate-100 z-20"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">After-Hours Service</p>
              <p className="text-xs text-slate-500">Zero Business Disruption</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
