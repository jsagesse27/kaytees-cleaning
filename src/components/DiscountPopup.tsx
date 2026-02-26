import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DiscountPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem('hasSeenDiscountPopup');
        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 3000); // 3s delay
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem('hasSeenDiscountPopup', 'true');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            setError('Please enter a valid email.');
            return;
        }

        setIsSubmitted(true);
        setError('');

        setTimeout(() => {
            handleClose();
        }, 3500);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    {/* Backdrop - Subtle blur and slight dimming */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
                    />

                    {/* Modal - Compact and Elegant */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative w-full max-w-sm bg-white rounded-[2rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.2)]"
                    >
                        {/* Elegant background accents */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />

                        <button
                            onClick={handleClose}
                            className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-100/50 text-slate-400 hover:bg-slate-200 hover:text-slate-900 transition-colors z-10"
                        >
                            <X size={16} />
                        </button>

                        <div className="p-8 sm:p-10 relative z-10 text-center">
                            {!isSubmitted ? (
                                <>
                                    <div className="inline-flex items-center gap-2 bg-brand-accent/15 text-brand-accent px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-brand-accent/20">
                                        <Sparkles className="w-3 h-3" />
                                        <span>Welcome Gift</span>
                                    </div>

                                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 leading-tight">
                                        Take <span className="text-brand-primary">20% Off</span> <br />
                                        Your First Cleaning
                                    </h2>

                                    <p className="text-sm text-slate-500 mb-8 px-2 leading-relaxed">
                                        Enter your email below to receive your exclusive NYC cleaning discount code.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-3">
                                        <div className="relative">
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                autoFocus
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className={`w-full px-5 py-3.5 rounded-2xl bg-slate-50 border text-sm transition-all text-slate-900 focus:outline-none focus:ring-2 ${error
                                                        ? 'border-red-200 focus:ring-red-100'
                                                        : 'border-slate-100 focus:ring-brand-primary/20 focus:border-brand-primary'
                                                    }`}
                                            />
                                        </div>
                                        {error && (
                                            <p className="text-red-500 text-[11px] font-medium text-left ml-1">
                                                {error}
                                            </p>
                                        )}
                                        <button
                                            type="submit"
                                            className="w-full bg-brand-primary hover:bg-brand-secondary text-white px-6 py-4 rounded-2xl font-bold text-sm shadow-lg shadow-brand-primary/10 transition-all flex items-center justify-center gap-2 group hover:-translate-y-0.5 active:translate-y-0"
                                        >
                                            Claim My Discount
                                            <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </button>
                                    </form>

                                    <p className="mt-6 text-[10px] text-slate-400">
                                        Valid for new commercial & residential clients only.
                                    </p>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-4"
                                >
                                    <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Success!</h3>
                                    <p className="text-sm text-slate-500 mb-6">
                                        Your <strong>20% discount code</strong> is on its way to your inbox.
                                    </p>
                                    <p className="text-xs text-brand-primary font-bold">
                                        Redirecting...
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
