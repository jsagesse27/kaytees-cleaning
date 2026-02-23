import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, ArrowRight } from 'lucide-react';

export default function AboutSection() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/about-mother.png"
                                alt="Our founder caring for a client's home"
                                className="w-full h-[400px] lg:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                        {/* Decorative accent */}
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-accent/10 rounded-full -z-10" />
                        <div className="absolute -top-4 -left-4 w-20 h-20 bg-brand-primary/10 rounded-full -z-10" />
                    </motion.div>

                    {/* Copy side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-brand-primary/20">
                            <Heart className="w-4 h-4" />
                            <span>Our Story</span>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Built on Love, <br />
                            <span className="text-brand-accent italic">Driven by Legacy.</span>
                        </h3>

                        <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                            Kaytee's Cleaning Service was born from a mother's lifelong commitment to treating every client's space as sacred. She didn't just clean homes and offices. She created sanctuaries where families could breathe and businesses could thrive.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            After we lost her, we chose to carry her legacy forward. Today, every detail we get right and every promise we keep honors the standard she set.
                        </p>

                        <Link
                            to="/about"
                            className="inline-flex items-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold text-lg group hover:-translate-y-0.5 transition-transform"
                        >
                            Read Her Story
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
