import { motion } from 'motion/react';
import { Building2, Home, Sparkles, Star } from 'lucide-react';
import { TRUSTED_CLIENTS } from '../siteConfig';

const iconMap = { Building2, Home, Sparkles, Star } as const;

export default function TrustBadges() {
    return (
        <section className="py-12 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
                        {TRUSTED_CLIENTS.tagline}
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {TRUSTED_CLIENTS.brands.map((brand, index) => {
                            const Icon = iconMap[brand.icon];
                            return (
                                <motion.div
                                    key={brand.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-2 text-slate-400 hover:text-brand-primary transition-colors cursor-default"
                                >
                                    <Icon className="w-8 h-8" />
                                    <span className="text-lg font-bold font-sans">{brand.name}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
