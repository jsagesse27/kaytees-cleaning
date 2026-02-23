import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { RECURRING_PLANS } from '../constants';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Pricing() {
  return (
    <section id="services" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">Service Plans</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Simple, Transparent <br />
            <span className="text-brand-accent italic">Service Plans</span>
          </h3>
          <p className="text-lg text-slate-600">
            Choose a plan that fits your business or home. No hidden fees, no long-term contracts. Just a clean space, guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {RECURRING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative p-8 rounded-[2.5rem] flex flex-col transition-all duration-300 cursor-pointer group hover:-translate-y-2",
                plan.popular
                  ? "bg-brand-primary text-white shadow-2xl shadow-brand-primary/30 scale-105 z-10 hover:shadow-brand-primary/50"
                  : "bg-white text-slate-900 border border-slate-100 hover:shadow-2xl hover:border-brand-primary/20"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-slate-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className={cn("text-sm", plan.popular ? "text-white/70" : "text-slate-500")}>/visit</span>
                </div>
                <p className={cn("mt-4 text-sm leading-relaxed", plan.popular ? "text-white/80" : "text-slate-600")}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center",
                      plan.popular ? "bg-white/20 text-white" : "bg-brand-primary/10 text-brand-primary"
                    )}>
                      <Check className="w-3 h-3" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/book"
                className={cn(
                  "w-full py-4 rounded-2xl font-bold text-center transition-all flex items-center justify-center gap-2 group",
                  plan.popular
                    ? "bg-white text-brand-primary hover:bg-slate-100"
                    : "bg-brand-primary text-white hover:bg-brand-secondary"
                )}
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
