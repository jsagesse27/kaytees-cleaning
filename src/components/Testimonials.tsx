import { motion } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">Client Love</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">
              Don't Just Take Our Word For It. <br />
              <span className="text-brand-accent italic">Hear From Our Happy Clients.</span>
            </h3>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex text-brand-accent">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="font-bold text-slate-900">4.9/5 Average Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-50 group-hover:text-brand-primary/5 transition-colors" />
              <div className="flex text-brand-accent mb-6">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-700 mb-8 italic leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
