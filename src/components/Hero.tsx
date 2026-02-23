import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Interior Cleaning"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-dark/90 backdrop-blur-[1px]" />
      </div>

      {/* Background Pattern/Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/20 blur-[120px] z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-accent/20 text-brand-accent px-4 py-1.5 rounded-full text-sm font-bold mb-8 backdrop-blur-sm border border-brand-accent/30">
            <Star className="w-4 h-4 fill-current" />
            <span>Voted #1 Cleaning Service in the City</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
            A Spotless Home, <br />
            <span className="text-brand-accent italic">Without the Stress.</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
            Premium residential and commercial cleaning trusted by over 10,000+ happy clients. We don't just clean; we care for your space with professional precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/book"
              className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-brand-primary/30 flex items-center justify-center gap-2 group"
            >
              Book Your Instant Clean
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#services"
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-full text-lg font-bold transition-all border border-white/30 flex items-center justify-center"
            >
              View Our Services
            </a>
          </div>

          {/* Social Proof Badges */}
          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-brand-accent">10k+</span>
              <span className="text-xs text-brand-accent/80 uppercase tracking-wider font-semibold">Homes Cleaned</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-brand-accent">4.9/5</span>
              <span className="text-xs text-brand-accent/80 uppercase tracking-wider font-semibold">Google Rating</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-brand-accent">100%</span>
              <span className="text-xs text-brand-accent/80 uppercase tracking-wider font-semibold">Satisfaction</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Main Hero Image */}
          <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1000"
              alt="Professional Cleaning Staff in Action"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Floating Trust Cards - Repositioned to avoid overlapping text and next section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 -left-16 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-slate-100 z-20"
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
            className="absolute top-4 -right-8 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-slate-100 z-20"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">24h Guarantee</p>
              <p className="text-xs text-slate-500">Quality Assured</p>
            </div>
          </motion.div>

          {/* Decorative Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/10 rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
