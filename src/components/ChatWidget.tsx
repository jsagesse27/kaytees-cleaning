import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Sparkles, DollarSign, Brush, MapPin } from 'lucide-react';
import { getBotResponse, resetChat } from '../lib/chatEngine';
import { CHATBOT } from '../siteConfig';

interface Message {
    id: number;
    role: 'user' | 'bot';
    text: string;
}

const QUICK_CHIPS = [
    { label: 'Get a Quote', msg: 'I want to get a quote', icon: DollarSign },
    { label: 'See Services', msg: 'What services do you offer?', icon: Brush },
    { label: 'Check Availability', msg: 'Do you serve my area?', icon: MapPin },
];

const GREETING = CHATBOT.greeting;

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [hasGreeted, setHasGreeted] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    let nextId = useRef(0);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    // Focus input when opening
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    const handleOpen = () => {
        setIsOpen(true);
        if (!hasGreeted) {
            setHasGreeted(true);
            setIsTyping(true);
            setTimeout(() => {
                setMessages([{ id: nextId.current++, role: 'bot', text: GREETING }]);
                setIsTyping(false);
            }, 800);
        }
    };

    const sendMessage = async (text: string) => {
        if (!text.trim()) return;
        const userMsg: Message = { id: nextId.current++, role: 'user', text: text.trim() };
        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        const response = await getBotResponse(text);

        setIsTyping(false);
        setMessages((prev) => [...prev, { id: nextId.current++, role: 'bot', text: response }]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
    };

    const handleChip = (msg: string) => {
        sendMessage(msg);
    };

    // Format bot message markdown-style bold
    const formatText = (text: string) => {
        return text.split('\n').map((line, i) => {
            const parts = line.split(/(\*\*[^*]+\*\*)/).map((part, j) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={j} className="font-bold">{part.slice(2, -2)}</strong>;
                }
                return <span key={j}>{part}</span>;
            });
            return (
                <span key={i}>
                    {parts}
                    {i < text.split('\n').length - 1 && <br />}
                </span>
            );
        });
    };

    return (
        <>
            {/* ── Chat Bubble (collapsed) ────────────────────── */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        onClick={handleOpen}
                        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-brand-primary text-white shadow-xl shadow-brand-primary/30 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform group"
                        aria-label="Open chat"
                    >
                        <MessageCircle className="w-6 h-6" />
                        {/* Pulse ring */}
                        <span className="absolute inset-0 rounded-full bg-brand-primary/40 animate-ping" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* ── Chat Panel (expanded) ──────────────────────── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        className="fixed bottom-6 right-6 z-50 w-[380px] h-[560px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-5rem)] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden"
                    >
                        {/* ── Header ──────────────────────────────── */}
                        <div className="flex items-center gap-3 px-5 py-4 bg-brand-primary text-white border-b border-brand-secondary">
                            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-sm">{CHATBOT.assistantName}</p>
                                <p className="text-[11px] text-white/70">
                                    {isTyping ? 'Typing...' : 'Online'}
                                </p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
                                aria-label="Close chat"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* ── Messages Area ───────────────────────── */}
                        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                            ? 'bg-brand-accent text-slate-900 rounded-br-md'
                                            : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-md'
                                            }`}
                                    >
                                        {formatText(msg.text)}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Quick chips (show after greeting, before first user message) */}
                            {messages.length === 1 && messages[0].role === 'bot' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-wrap gap-2"
                                >
                                    {QUICK_CHIPS.map((chip) => (
                                        <button
                                            key={chip.label}
                                            onClick={() => handleChip(chip.msg)}
                                            className="px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold hover:bg-brand-primary/20 transition-colors cursor-pointer border border-brand-primary/20 flex items-center gap-1.5"
                                        >
                                            <chip.icon className="w-3.5 h-3.5" />
                                            {chip.label}
                                        </button>
                                    ))}
                                </motion.div>
                            )}

                            {/* Typing indicator */}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-bl-md flex gap-1.5 items-center">
                                        <motion.span
                                            className="w-2 h-2 bg-slate-400 rounded-full"
                                            animate={{ y: [0, -4, 0] }}
                                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                                        />
                                        <motion.span
                                            className="w-2 h-2 bg-slate-400 rounded-full"
                                            animate={{ y: [0, -4, 0] }}
                                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
                                        />
                                        <motion.span
                                            className="w-2 h-2 bg-slate-400 rounded-full"
                                            animate={{ y: [0, -4, 0] }}
                                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                                        />
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* ── Input Bar ───────────────────────────── */}
                        <form
                            onSubmit={handleSubmit}
                            className="px-4 py-3 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary border-none"
                                    disabled={isTyping}
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isTyping}
                                    className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center hover:bg-brand-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                                    aria-label="Send message"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
