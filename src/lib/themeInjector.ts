/**
 * Injects brand colors from siteConfig as CSS custom properties on :root.
 * Call once at app startup (main.tsx) to override the fallback values in index.css.
 */
import { COLORS, COMPANY } from '../siteConfig';

export function injectTheme() {
    const root = document.documentElement;
    root.style.setProperty('--color-brand-primary', COLORS.primary);
    root.style.setProperty('--color-brand-secondary', COLORS.secondary);
    root.style.setProperty('--color-brand-dark', COLORS.dark);
    root.style.setProperty('--color-brand-accent', COLORS.accent);
    root.style.setProperty('--color-brand-success', COLORS.success);
    root.style.setProperty('--color-brand-bg', COLORS.bg);

    // Also update the page title from config
    document.title = COMPANY.pageTitle;
}
