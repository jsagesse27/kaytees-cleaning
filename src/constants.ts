/**
 * Backward-compatibility barrel file.
 * All data now lives in siteConfig.ts — this file re-exports
 * the values that existing components already import by name.
 */
export type { Service } from './siteConfig';
export {
  CONTACT,
  SERVICES,
  RECURRING_PLANS,
  TESTIMONIALS,
} from './siteConfig';
