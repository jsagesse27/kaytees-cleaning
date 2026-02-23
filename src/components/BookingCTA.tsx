import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function BookingCTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-primary/40"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-bold mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-brand-accent" />
              <span>Limited Time: 20% Off Your First Deep Clean</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to Experience the <br />
              <span className="text-brand-accent italic">Kaytee's Difference?</span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Join thousands of satisfied homeowners and businesses. Book your professional clean in under 60 seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/book"
                className="bg-brand-accent hover:bg-brand-accent/90 text-slate-900 px-10 py-5 rounded-full text-xl font-bold transition-all shadow-xl flex items-center justify-center gap-3 group"
              >
                <Calendar className="w-6 h-6" />
                Book Your Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:5551234567"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-10 py-5 rounded-full text-xl font-bold transition-all border border-white/30 flex items-center justify-center"
              >
                Call (555) 123-4567
              </a>
            </div>

            <p className="mt-12 text-sm text-white/60 font-medium">
              No long-term contracts • Fully insured • 100% Satisfaction Guarantee
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
