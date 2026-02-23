import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ServicesGrid() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-brand-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Services</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Professional Cleaning for <br />
                        <span className="text-brand-accent italic">Every Workspace</span>
                    </h3>
                    <p className="text-lg text-slate-600">
                        From daily office upkeep to residential deep cleans, our expert teams deliver spotless results every time.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl hover:border-brand-primary/20 transition-all flex flex-col cursor-pointer"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold font-sans">
                                    <Sparkles className="w-3 h-3" />
                                    {service.price}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h4 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-brand-primary transition-colors">{service.title}</h4>
                                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                                    {service.description}
                                </p>
                                <Link
                                    to={`/services/${service.id}`}
                                    className="inline-flex items-center font-bold text-brand-primary hover:text-brand-secondary transition-colors text-sm group-hover:translate-x-1 duration-300"
                                >
                                    View details
                                    <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
