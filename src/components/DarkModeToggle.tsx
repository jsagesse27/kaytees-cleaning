import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun } from 'lucide-react';

export default function DarkModeToggle() {
    const [dark, setDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark';
        }
        return false;
    });
    const [visible, setVisible] = useState(true);

    // Apply theme
    useEffect(() => {
        const root = document.documentElement;
        if (dark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [dark]);

    // Auto-hide on scroll
    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        const handleScroll = () => {
            setVisible(false);
            clearTimeout(timeout);
            timeout = setTimeout(() => setVisible(true), 1200);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => setDark(!dark)}
                    className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-slate-900 dark:bg-white shadow-lg shadow-black/20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform border border-slate-700 dark:border-slate-300"
                    aria-label="Toggle dark mode"
                    title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    {dark ? (
                        <Sun className="w-5 h-5 text-amber-500" />
                    ) : (
                        <Moon className="w-5 h-5 text-slate-300" />
                    )}
                </motion.button>
            )}
        </AnimatePresence>
    );
}
