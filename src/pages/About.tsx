import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, Shield, Clock, CheckCircle2, Phone, Star, ArrowRight, Quote } from 'lucide-react';
import { CONTACT } from '../constants';

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* ═══════════════════════════════════════════════════
          HERO — Full-bleed dark with dramatic typography
      ═══════════════════════════════════════════════════ */}
            <section className="relative min-h-[90vh] flex items-center bg-brand-dark overflow-hidden">
                {/* Background image with heavy overlay */}
                <div className="absolute inset-0">
                    <img
                        src="/about-mother.png"
                        alt=""
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/70" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-6"
                        >
                            The Promise That Started Everything
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-8"
                        >
                            Born from <br />
                            <span className="text-brand-accent italic">Love,</span> <br />
                            Loss, <span className="text-brand-accent italic">&</span> <br />
                            <span className="text-brand-accent italic">Legacy.</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center gap-6 mt-12"
                        >
                            <div className="w-16 h-[2px] bg-brand-accent" />
                            <p className="text-slate-400 text-lg italic max-w-sm">
                                "I will treat your space the way I treat my own family's home."
                            </p>
                        </motion.div>
                    </div>

                    {/* Floating portrait */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="hidden lg:block"
                    >
                        <div className="relative">
                            <img
                                src="/about-mother.png"
                                alt="Our founder, the heart of Keely's Cleaning Services"
                                className="rounded-3xl shadow-2xl w-full max-w-md ml-auto object-cover h-[550px]"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-brand-accent text-slate-900 px-6 py-4 rounded-2xl shadow-xl">
                                <p className="font-bold text-lg">Keely's Cleaning Services</p>
                                <p className="text-sm opacity-80">Where it all began</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
          SECTION 1 — The Origin Story
      ═══════════════════════════════════════════════════ */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <p className="text-2xl md:text-3xl text-slate-800 leading-relaxed font-serif">
                            Our mother built her cleaning business with her bare hands and an unshakeable belief that caring for someone's space was <span className="text-brand-primary font-bold italic">sacred work.</span>
                        </p>

                        <div className="w-20 h-[3px] bg-brand-accent" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-slate-600 leading-relaxed">
                            <div className="space-y-6">
                                <p>
                                    She didn't just clean homes and offices. She created sanctuaries. She gave exhausted parents one less thing to worry about. She helped small business owners walk into a fresh, organized space every morning so they could focus on what they did best.
                                </p>
                                <p>
                                    She understood something most people miss: a clean environment isn't about appearances. It's about dignity, peace of mind, and the ability to breathe.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <p>
                                    When she opened Keely's Cleaning Services, she made a promise to every client: <span className="font-bold text-slate-800">"I will treat your space the way I treat my own family's home."</span> And she meant it.
                                </p>
                                <p>
                                    She noticed the details others overlooked. She remembered which client needed hypoallergenic products because of their child's asthma. She knew who was going through a difficult season and needed extra grace. She showed up on time, every time, even when her own body was tired.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
          FULL-WIDTH STATEMENT — Dark dramatic band
      ═══════════════════════════════════════════════════ */}
            <section className="bg-brand-dark py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <p className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Cleaning wasn't just her job. <br />
                        <span className="text-brand-accent italic">It was her ministry.</span>
                    </p>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════════════
          SECTION 2 — The Choice / Carrying Forward
      ═══════════════════════════════════════════════════ */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                After we lost her, <br />we faced <span className="text-brand-accent italic">a choice.</span>
                            </h2>

                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    We could let her business quietly close and move on, or we could honor what she built by doing it even better.
                                </p>
                                <p className="text-2xl font-bold text-brand-primary font-serif">
                                    We chose to carry her forward.
                                </p>
                                <p>
                                    When we relaunched as Kaytee's Cleaning Service, we didn't just inherit a business. We inherited a standard. Our mother taught us that people don't hire cleaners because they're lazy. They hire help because they're overwhelmed, stretched too thin, or going through something hard.
                                </p>
                                <p>
                                    Maybe they just had a baby. Maybe they're caring for an aging parent. Maybe they're running a business that demands everything they have. Maybe they just want their home to feel like a refuge again instead of another item on an endless to-do list.
                                </p>
                                <p className="font-semibold text-slate-800">
                                    Whatever the reason, they deserve someone who shows up with competence, care, and respect.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="/about-team.png"
                                alt="The team carrying the legacy forward"
                                className="rounded-3xl shadow-2xl w-full h-[550px] object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
          SECTION 3 — Values in Action (Cards)
      ═══════════════════════════════════════════════════ */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            What Our Mother's Values <br />
                            <span className="text-brand-accent italic">Look Like in Action</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Clock,
                                title: 'Honesty Means Keeping Your Word',
                                desc: 'We guarantee our arrival time and confirm every appointment 24 hours in advance. If we say we\'ll be there at 9 AM, we will be there at 9 AM.'
                            },
                            {
                                icon: Shield,
                                title: 'Reliability Means Consistency',
                                desc: 'For recurring clients, you get the same team every visit. They learn your home, your priorities, and your preferences. No strangers. No surprises.'
                            },
                            {
                                icon: CheckCircle2,
                                title: 'Hard Work Means Doing It Right',
                                desc: 'Every service includes a quality check before we leave. If something doesn\'t meet our standards, we fix it before you ever notice.'
                            },
                            {
                                icon: Heart,
                                title: 'Genuine Care Means Listening',
                                desc: 'We customize every cleaning plan around your needs, not a one-size-fits-all checklist. You tell us what matters most, and we make sure it gets done.'
                            }
                        ].map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                                    <value.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Satisfaction guarantee callout */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 bg-brand-primary rounded-3xl p-10 text-center text-white"
                    >
                        <Star className="w-10 h-10 text-brand-accent mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-3">100% Satisfaction Guarantee</h3>
                        <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
                            She believed integrity meant standing behind your work. If you're not completely happy with any part of our service, we will return within 24 hours to make it right at no additional charge. No excuses. No runaround.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
          SECTION 4 — Testimonial Quotes (Editorial style)
      ═══════════════════════════════════════════════════ */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            The Families & Businesses <br />
                            <span className="text-brand-accent italic">Who Trust Us</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Every client has a story. Every space has meaning.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 relative"
                        >
                            <Quote className="w-10 h-10 text-brand-accent/30 absolute top-6 right-6" />
                            <p className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                                "You gave me my Saturdays back. I didn't realize how much stress I was carrying until I stopped spending my weekends scrubbing toilets and vacuuming stairs. Now I actually get to enjoy my home."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary font-bold text-sm">R</div>
                                <div>
                                    <p className="font-bold text-slate-900">Residential Client</p>
                                    <p className="text-sm text-slate-500">Weekly Cleaning Member</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 relative"
                        >
                            <Quote className="w-10 h-10 text-brand-accent/30 absolute top-6 right-6" />
                            <p className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                                "Walking into a clean office every Monday sets the tone for my whole week. I never have to worry about whether the team showed up or if the job got done right. It's one less thing on my mind, and that's priceless."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent font-bold text-sm">B</div>
                                <div>
                                    <p className="font-bold text-slate-900">Small Business Owner</p>
                                    <p className="text-sm text-slate-500">Bi-Weekly Office Cleaning</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-2xl font-bold text-brand-primary font-serif mt-16"
                    >
                        That is why we do this.
                    </motion.p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
          SECTION 5 — More Than a Cleaning Company
      ═══════════════════════════════════════════════════ */}
            <section className="py-24 px-6 bg-brand-dark text-white">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                            More Than a Cleaning Company. <br />
                            <span className="text-brand-accent italic">A Family Keeping a Promise.</span>
                        </h2>
                        <p className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                            When you hire us, you're not just getting a service. You're becoming part of our mother's continuing story. You're supporting a legacy built on the belief that how you treat people's homes and workplaces says everything about who you are.
                        </p>
                        <p className="text-lg text-white/60 leading-relaxed max-w-3xl mx-auto">
                            She trained us. She showed us what excellence looks like. And even though she's no longer here to greet clients at the door, her presence is in every detail we get right, every promise we keep, and every space we leave better than we found it.
                        </p>
                        <p className="text-2xl font-bold text-brand-accent font-serif pt-4">
                            We carry her name differently now, but we carry her values exactly the same.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
          CTA — Let Us Serve You
      ═══════════════════════════════════════════════════ */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Let Us Serve You <br />
                            <span className="text-brand-accent italic">the Way She Would Have</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            If you're looking for a cleaning team that will show up on time, respect your space, and treat your home or business with the same care they'd give their own, we'd be honored to serve you.
                        </p>
                        <p className="text-2xl font-bold text-brand-primary font-serif">
                            We don't just clean. We create peace of mind.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Link
                                to="/book"
                                className="inline-flex items-center gap-3 bg-brand-accent text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg group hover:-translate-y-1 transition-transform shadow-xl shadow-brand-accent/20"
                            >
                                Get Your Free Quote
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}
                                className="inline-flex items-center gap-3 border-2 border-brand-primary text-brand-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-primary hover:text-white transition-all"
                            >
                                <Phone className="w-5 h-5" />
                                Call Us: {CONTACT.phone}
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-6 justify-center text-sm text-slate-500 font-semibold pt-6">
                            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-primary" /> Licensed</span>
                            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-primary" /> Insured</span>
                            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-primary" /> Background-Checked Teams</span>
                            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-primary" /> 100% Satisfaction Guarantee</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
          MEMORIAL — In Memory Of
      ═══════════════════════════════════════════════════ */}
            <section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center space-y-6"
                >
                    <div className="w-24 h-[1px] bg-brand-accent mx-auto" />

                    <img
                        src="/about-memorial.png"
                        alt="In memory"
                        className="w-40 h-40 rounded-full object-cover mx-auto shadow-lg border-4 border-white"
                    />

                    <div>
                        <p className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2">In Loving Memory</p>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">Our Mother</h3>
                        <p className="text-slate-500 italic">Founder of Keely's Cleaning Services</p>
                    </div>

                    <p className="text-slate-600 leading-relaxed max-w-lg mx-auto">
                        Whose love, work ethic, and dedication to others continue to inspire everything we do.
                    </p>

                    <div className="flex items-center justify-center gap-4 pt-4">
                        <div className="w-8 h-[1px] bg-slate-300" />
                        <Heart className="w-5 h-5 text-brand-accent" />
                        <div className="w-8 h-[1px] bg-slate-300" />
                    </div>
                </motion.div>
            </section>
        </motion.div>
    );
}
