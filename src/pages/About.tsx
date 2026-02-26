import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Heart, Shield, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import {
    COMPANY,
    IMAGES,
    BRAND_STORY,
    ABOUT_TESTIMONIALS,
    CONTACT,
} from '../siteConfig';

const iconMap = { Heart, Shield, CheckCircle2, Clock } as const;

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* ─── Hero ──────────────────────────────────────────────── */}
            <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 bg-brand-dark overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/50 to-brand-dark z-0" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] z-0" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] z-0" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 bg-brand-accent/20 text-brand-accent px-4 py-1.5 rounded-full text-sm font-bold mb-8 backdrop-blur-sm border border-brand-accent/30">
                        <Heart className="w-4 h-4" />
                        <span>{BRAND_STORY.heroSubtitle}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
                        {BRAND_STORY.heroHeadline[0]}{' '}
                        <span className="text-brand-accent italic">{BRAND_STORY.heroHeadline[1]}</span>
                        <br />
                        {BRAND_STORY.heroHeadline[2]}{' '}
                        <span className="text-brand-accent italic">{BRAND_STORY.heroHeadline[3]}</span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        {COMPANY.name} is not just another cleaning company.
                        It is a family promise — made to a mother who showed us that caring for
                        someone's space is one of the most meaningful things you can do.
                    </p>
                </motion.div>
            </section>

            {/* ─── Origin Story ─────────────────────────────────────── */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative">
                            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                                <img
                                    src={IMAGES.aboutFounder}
                                    alt={`${BRAND_STORY.founderName}`}
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-accent/10 rounded-full -z-10" />
                            <div className="absolute -top-4 -left-4 w-20 h-20 bg-brand-primary/10 rounded-full -z-10" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p
                            className="text-2xl md:text-3xl font-semibold text-slate-900 leading-relaxed mb-12"
                            dangerouslySetInnerHTML={{
                                __html: BRAND_STORY.originLead.replace(
                                    /<accent>(.*?)<\/accent>/g,
                                    '<span class="text-brand-accent italic">$1</span>'
                                ),
                            }}
                        />

                        <div className="space-y-6">
                            {BRAND_STORY.originParagraphs.map((p, i) => (
                                <p
                                    key={i}
                                    className="text-lg text-slate-600 leading-relaxed"
                                    dangerouslySetInnerHTML={{
                                        __html: p
                                            .replace(
                                                /<bold>(.*?)<\/bold>/g,
                                                '<strong class="text-slate-900 font-bold">$1</strong>'
                                            )
                                            .replace(
                                                /<accent>(.*?)<\/accent>/g,
                                                '<span class="text-brand-accent italic">$1</span>'
                                            ),
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Dramatic Statement Band ─────────────────────────── */}
            <section className="py-24 px-6 bg-brand-dark">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <p className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        {BRAND_STORY.dramaticStatement}
                        <br />
                        <span className="text-brand-accent italic">
                            {BRAND_STORY.dramaticAccent}
                        </span>
                    </p>
                </motion.div>
            </section>

            {/* ─── The Choice ───────────────────────────────────────── */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-1"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
                            {BRAND_STORY.choiceHeadline}
                            <br />
                            we faced{' '}
                            <span className="text-brand-accent italic">
                                {BRAND_STORY.choiceAccent}
                            </span>
                        </h2>

                        <div className="space-y-6">
                            {BRAND_STORY.choiceParagraphs.map((p, i) => (
                                <p
                                    key={i}
                                    className={`text-lg leading-relaxed ${i === 1
                                            ? 'text-brand-primary font-bold text-xl'
                                            : 'text-slate-600'
                                        }`}
                                >
                                    {p}
                                </p>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-2"
                    >
                        <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                            <img
                                src={IMAGES.aboutTeam}
                                alt={`The ${COMPANY.name} team`}
                                className="w-full h-[460px] object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Values ───────────────────────────────────────────── */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            {BRAND_STORY.valuesHeadline}{' '}
                            <span className="text-brand-accent italic">
                                {BRAND_STORY.valuesAccent}
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {BRAND_STORY.values.map((v, i) => {
                            const Icon = iconMap[v.icon];
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1"
                                >
                                    <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                                        {v.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">{v.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Guarantee */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-brand-primary rounded-3xl p-10 text-center"
                    >
                        <Shield className="w-12 h-12 text-brand-accent mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Our Guarantee
                        </h3>
                        <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
                            {BRAND_STORY.guaranteeText}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ─── About-Page Testimonials ──────────────────────────── */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            {BRAND_STORY.aboutTestimonialsHeadline}{' '}
                            <span className="text-brand-accent italic">
                                {BRAND_STORY.aboutTestimonialsAccent}
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            {BRAND_STORY.aboutTestimonialsSubtitle}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {ABOUT_TESTIMONIALS.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-white p-10 rounded-3xl border border-slate-100 shadow-lg"
                            >
                                <p className="text-lg text-slate-700 leading-relaxed italic mb-8">
                                    "{t.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary font-bold">
                                        {t.initial}
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">{t.name}</p>
                                        <p className="text-sm text-slate-500">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Mission ──────────────────────────────────────────── */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 leading-tight">
                            {BRAND_STORY.missionHeadline}
                            <br />
                            <span className="text-brand-accent italic">
                                {BRAND_STORY.missionAccent}
                            </span>
                        </h2>

                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            {BRAND_STORY.missionParagraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── CTA ──────────────────────────────────────────────── */}
            <section className="py-24 px-6 bg-brand-dark">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            {BRAND_STORY.ctaHeadline}{' '}
                            <span className="text-brand-accent italic">
                                {BRAND_STORY.ctaAccent}
                            </span>
                        </h2>

                        <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                            {BRAND_STORY.ctaBody}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                            <Link
                                to="/book"
                                className="bg-brand-accent hover:bg-brand-accent/90 text-slate-900 px-10 py-5 rounded-full text-xl font-bold transition-transform shadow-xl flex items-center justify-center gap-3 group hover:-translate-y-1"
                            >
                                Get Started Today
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}
                                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-10 py-5 rounded-full text-xl font-bold transition-transform border border-white/30 hover:-translate-y-1"
                            >
                                Call {CONTACT.phone}
                            </a>
                        </div>

                        <p className="text-brand-accent font-bold text-lg italic">
                            {BRAND_STORY.ctaTagline}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ─── Memorial ─────────────────────────────────────────── */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm text-brand-primary font-bold uppercase tracking-widest mb-6">
                            {BRAND_STORY.memorialLabel}
                        </p>

                        <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-brand-primary/20 shadow-xl">
                            <img
                                src={IMAGES.aboutMemorial}
                                alt={BRAND_STORY.memorialName}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                            {BRAND_STORY.memorialName}
                        </h3>
                        <p className="text-slate-500 italic mb-6">
                            {BRAND_STORY.memorialTitle}
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            {BRAND_STORY.memorialBody}
                        </p>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}
