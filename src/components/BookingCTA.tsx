import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Sparkles, Phone } from 'lucide-react';
import { CONTACT, BOOKING_CTA } from '../siteConfig';

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
            {BOOKING_CTA.promoBanner && (
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-bold mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-brand-accent" />
                <span>{BOOKING_CTA.promoBanner}</span>
              </div>
            )}

            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              {BOOKING_CTA.headline} <br />
              <span className="text-brand-accent italic">{BOOKING_CTA.headlineAccent}</span>
            </h2>

            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              {BOOKING_CTA.body}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/book"
                className="bg-brand-accent hover:bg-brand-accent/90 text-slate-900 px-10 py-5 rounded-full text-xl font-bold transition-transform shadow-xl flex items-center justify-center gap-3 group hover:-translate-y-1 cursor-pointer"
              >
                <Calendar className="w-6 h-6" />
                {BOOKING_CTA.ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-10 py-5 rounded-full text-xl font-bold transition-transform border border-white/30 flex items-center justify-center gap-2 hover:-translate-y-1 cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                {CONTACT.phone}
              </a>
            </div>

            <p className="mt-12 text-sm text-white/60 font-medium">
              {BOOKING_CTA.trustLine}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
