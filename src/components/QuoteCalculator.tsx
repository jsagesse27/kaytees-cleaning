import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Bath, Square, Sparkles, Calculator, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function QuoteCalculator() {
  const [rooms, setRooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);
  const [sqft, setSqft] = useState(1000);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const basePrice = 50;
    const roomPrice = rooms * 25;
    const bathPrice = bathrooms * 35;
    const sqftPrice = (sqft / 1000) * 20;
    setTotal(Math.round(basePrice + roomPrice + bathPrice + sqftPrice));
  }, [rooms, bathrooms, sqft]);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-brand-primary/20">
              <Calculator className="w-4 h-4" />
              <span>Instant Quote</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Honest Pricing, <br />
              <span className="text-brand-accent italic">No Surprises.</span>
            </h3>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              We believe in transparency. Use our interactive tool to get an instant estimate for your space. No email required, no waiting for callbacks.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-brand-primary">
                  <Sparkles className="w-6 h-6" />
                </div>
                <p className="font-bold text-slate-800">Customized to your home size</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-brand-primary">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <p className="font-bold text-slate-800">Lock in your price today</p>
              </div>
            </div>
          </div>

          {/* Right Column: Calculator Widget */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-dark rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative border border-brand-primary/30 shadow-brand-primary/10"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-[3rem] border border-brand-primary/50 blur-sm pointer-events-none" />
              
              <div className="space-y-8 relative z-10">
                {/* Sliders Container */}
                <div className="space-y-8 p-6 bg-brand-primary/10 rounded-3xl border border-white/10">
                  {/* Rooms Slider */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="flex items-center gap-2 font-bold text-slate-300 text-sm uppercase tracking-wider">
                        <Home className="w-4 h-4 text-brand-accent" />
                        Bedrooms
                      </label>
                      <span className="text-brand-accent font-bold text-2xl">{rooms}</span>
                    </div>
                    <div className="relative h-2 bg-brand-primary/20 rounded-full">
                      <input
                        type="range"
                        min="1"
                        max="8"
                        value={rooms}
                        onChange={(e) => setRooms(parseInt(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                      />
                      <div 
                        className="absolute h-full bg-brand-accent rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                        style={{ width: `${((rooms - 1) / 7) * 100}%` }}
                      />
                      <div 
                        className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-4 border-brand-accent shadow-lg z-10"
                        style={{ left: `calc(${((rooms - 1) / 7) * 100}% - 12px)` }}
                      />
                    </div>
                  </div>

                  {/* Bathrooms Slider */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="flex items-center gap-2 font-bold text-slate-300 text-sm uppercase tracking-wider">
                        <Bath className="w-4 h-4 text-brand-accent" />
                        Bathrooms
                      </label>
                      <span className="text-brand-accent font-bold text-2xl">{bathrooms}</span>
                    </div>
                    <div className="relative h-2 bg-brand-primary/20 rounded-full">
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={bathrooms}
                        onChange={(e) => setBathrooms(parseInt(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                      />
                      <div 
                        className="absolute h-full bg-brand-accent rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                        style={{ width: `${((bathrooms - 1) / 4) * 100}%` }}
                      />
                      <div 
                        className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-4 border-brand-accent shadow-lg z-10"
                        style={{ left: `calc(${((bathrooms - 1) / 4) * 100}% - 12px)` }}
                      />
                    </div>
                  </div>

                  {/* Sqft Slider */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="flex items-center gap-2 font-bold text-slate-300 text-sm uppercase tracking-wider">
                        <div className="relative w-4 h-4 border-2 border-brand-accent rounded-sm">
                          <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-brand-accent rounded-full" />
                          <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-brand-accent rounded-full" />
                          <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-brand-accent rounded-full" />
                          <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-brand-accent rounded-full" />
                        </div>
                        Sq Ft
                      </label>
                      <span className="text-brand-accent font-bold text-2xl">{sqft}</span>
                    </div>
                    <div className="relative h-2 bg-brand-primary/20 rounded-full">
                      <input
                        type="range"
                        min="500"
                        max="5000"
                        step="100"
                        value={sqft}
                        onChange={(e) => setSqft(parseInt(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                      />
                      <div 
                        className="absolute h-full bg-brand-accent rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                        style={{ width: `${((sqft - 500) / 4500) * 100}%` }}
                      />
                      <div 
                        className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-4 border-brand-accent shadow-lg z-10"
                        style={{ left: `calc(${((sqft - 500) / 4500) * 100}% - 12px)` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Result Display */}
                <div className="text-center pt-4">
                  <p className="text-slate-400 uppercase tracking-widest text-xs font-bold mb-2">Estimated Total</p>
                  <div className="flex items-center justify-center gap-1 mb-6">
                    <span className="text-2xl font-bold text-brand-accent self-start mt-2">$</span>
                    <motion.span 
                      key={total}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-7xl font-bold tracking-tighter"
                    >
                      {total}
                    </motion.span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-2 group"
                  >
                    Book now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <p className="mt-4 text-[10px] text-slate-500 italic">
                    *Final price may vary based on specific home conditions and requirements.
                  </p>
                </div>
              </div>

              {/* Background Glows */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 blur-3xl -z-0" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-accent/10 blur-3xl -z-0" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
