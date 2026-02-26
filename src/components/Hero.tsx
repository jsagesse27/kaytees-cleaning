import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Clock, PhoneCall, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT, COMPANY, IMAGES, HERO, STATS } from '../siteConfig';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-[clamp(8rem,15vh,12rem)] pb-[clamp(4rem,10vh,8rem)] overflow-hidden bg-brand-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBg}
          alt="Professional Cleaning Crew in Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/85" />
      </div>

      {/* Background Pattern/Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/20 blur-[120px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,5vw,5rem)] items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-wrap gap-4 mb-[clamp(1.5rem,4vh,2.5rem)]">
            <div className="inline-flex items-center gap-2 bg-brand-accent/20 text-brand-accent px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-sm border border-brand-accent/30">
              <Star className="w-4 h-4 fill-current" />
              <span>{COMPANY.tagline}</span>
            </div>
            <a href={`tel:${CONTACT.phone.replace(/\D/g, '')}`} className="inline-flex items-center gap-2 bg-white/10 text-white hover:bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-sm border border-white/20 transition-colors">
              <PhoneCall className="w-4 h-4" />
              <span>{CONTACT.phone}</span>
            </a>
          </div>

          <h1 className="font-bold text-white leading-[1.1] mb-[clamp(1.5rem,4vh,2.5rem)] text-[clamp(2.5rem,5vw+1rem,4.5rem)]">
            {HERO.headline} <br />
            <span className="text-brand-accent italic">{HERO.headlineAccent}</span>
          </h1>

          <p className="text-slate-300 leading-relaxed max-w-xl mb-[clamp(2rem,5vh,3rem)] text-[clamp(1.125rem,2vw,1.25rem)]">
            {HERO.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-[clamp(2rem,5vh,3rem)]">
            <Link
              to="/book"
              className="bg-brand-accent hover:bg-brand-accent/90 text-slate-900 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-brand-accent/30 flex items-center justify-center gap-2 group cursor-pointer"
            >
              {HERO.ctaPrimary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#services"
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-full text-lg font-bold transition-all border border-white/30 flex items-center justify-center cursor-pointer"
            >
              {HERO.ctaSecondary}
            </a>
          </div>

          {/* Social Proof Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">{STATS.clientsServed}</span>
              <span className="text-xs text-brand-accent uppercase tracking-wider font-semibold">{STATS.clientsServedLabel}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">{STATS.googleRating}</span>
              <span className="text-xs text-brand-accent uppercase tracking-wider font-semibold">{STATS.googleRatingLabel}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">{STATS.satisfaction}</span>
              <span className="text-xs text-brand-accent uppercase tracking-wider font-semibold">{STATS.satisfactionLabel}</span>
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
          {/* Decorative Blob Shapes */}
          <div className="absolute inset-0 -m-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] bg-brand-primary/40 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-sm" />
            <div className="absolute top-[10%] right-[5%] w-[85%] h-[80%] bg-brand-primary/30 rounded-[40%_60%_70%_30%/40%_70%_30%_60%] blur-sm" />
            <div className="absolute bottom-[5%] left-[10%] w-[70%] h-[60%] bg-brand-accent/15 rounded-[50%_50%_40%_60%/60%_40%_50%_50%] blur-md" />
          </div>

          {/* Decorative Sparkle Elements */}
          <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-4 right-8 z-20">
            <Sparkles className="w-8 h-8 text-brand-accent drop-shadow-lg" />
          </motion.div>
          <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-16 left-0 z-20">
            <Sparkles className="w-6 h-6 text-brand-accent/70 drop-shadow-lg" />
          </motion.div>
          <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 -left-4 z-20">
            <div className="w-4 h-4 bg-brand-accent/50 rounded-full blur-[2px]" />
          </motion.div>
          <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/4 -right-2 z-20">
            <div className="w-3 h-3 bg-white/40 rounded-full blur-[1px]" />
          </motion.div>

          {/* Small decorative circles */}
          <div className="absolute top-12 left-12 w-5 h-5 bg-brand-accent/40 rounded-full z-20" />
          <div className="absolute bottom-20 right-16 w-3 h-3 bg-white/30 rounded-full z-20" />
          <div className="absolute top-1/3 right-0 w-4 h-4 border-2 border-brand-accent/40 rounded-full z-20" />

          {/* Main Hero Image */}
          <div className="relative z-10 rounded-[clamp(1.5rem,3vw,3rem)] overflow-hidden border-4 border-white/10 shadow-2xl aspect-[3/4] w-full max-w-[clamp(280px,35vw,480px)] mx-auto">
            <img
              src={IMAGES.heroWorker}
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
              <p className="font-bold text-slate-900 text-sm">{HERO.trustCards[0].title}</p>
              <p className="text-xs text-slate-500">{HERO.trustCards[0].subtitle}</p>
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
              <p className="font-bold text-slate-900 text-sm">{HERO.trustCards[1].title}</p>
              <p className="text-xs text-slate-500">{HERO.trustCards[1].subtitle}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
