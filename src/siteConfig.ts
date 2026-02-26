/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║                     SITE CONFIGURATION                          ║
 * ║  Edit ONLY this file to rebrand the entire site for a new       ║
 * ║  cleaning company. Then swap the images in /public.             ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

// ─── 1. Company Identity ─────────────────────────────────────────────
export const COMPANY = {
    name: "Kaytee's Cleaning Service",
    legalName: "Kaytee's Cleaning Service",
    /** Used in chatbot header, short references */
    shortName: "Kaytee's",
    tagline: "NYC's Trusted Cleaning Partner",
    description:
        'Premium cleaning services for offices, facilities, and homes. We deliver spotless results and total peace of mind, commercial or residential.',
    /** Appears in browser tab */
    pageTitle: "Kaytee's Cleaning Service",
};

// ─── 2. Contact Information ──────────────────────────────────────────
export const CONTACT = {
    phone: '(555) 123-4567',
    email: 'hello@kayteescleaning.com',
    address: '123 Sparkle Way, Clean City, ST 12345',
};

// ─── 3. Social Media Links ───────────────────────────────────────────
export const SOCIAL = {
    facebook: '#',
    instagram: '#',
    twitter: '#',
};

// ─── 4. Brand Colors ────────────────────────────────────────────────
/** These get injected as CSS custom properties at runtime.
 *  The index.css file has fallback values, but these always win. */
export const COLORS = {
    primary: '#1B6B4A',     // Forest Green — logo primary
    secondary: '#15573C',   // Deeper Green — hover states
    dark: '#0D3B28',        // Darkest Green — hero overlay / footer
    accent: '#D4A928',      // Gold — logo accent / CTAs
    success: '#22C55E',     // Confirmations
    bg: '#F6FBF8',          // Very light green tint — page bg
};

// ─── 5. Image Paths (all relative to /public) ────────────────────────
export const IMAGES = {
    logo: '/logo.png',
    heroBg: '/hero-bg.png',
    heroWorker: '/hero-worker.png',
    aboutFounder: '/about-mother.png',
    aboutTeam: '/about-team.png',
    aboutMemorial: '/about-memorial.png',
    serviceCommercial: '/service-commercial.png',
    serviceFacility: '/service-facility.png',
    serviceDeepClean: '/service-deepclean.png',
    serviceResidential: '/service-residential.png',
};

// ─── 6. Social Proof Stats ───────────────────────────────────────────
export const STATS = {
    clientsServed: '500+',
    clientsServedLabel: 'Clients Served',
    googleRating: '4.9/5',
    googleRatingLabel: 'Google Rating',
    satisfaction: '100%',
    satisfactionLabel: 'Satisfaction',
};

// ─── 7. Hero Section Copy ────────────────────────────────────────────
export const HERO = {
    headline: 'The Clean You Expect.',
    headlineAccent: 'The Reliability You Deserve.',
    subheadline:
        'Stop stressing about the mess. Get premium, fully-insured commercial and residential cleaning in NYC. Reclaim your time and space with our 100% Satisfaction Guarantee.',
    ctaPrimary: 'Get a Free Quote',
    ctaSecondary: 'View Our Services',
    /** Floating trust cards on hero image */
    trustCards: [
        { title: 'Fully Insured', subtitle: 'Bonded & Protected', variant: 'shield' as const },
        { title: 'After-Hours Service', subtitle: 'Zero Business Disruption', variant: 'clock' as const },
    ],
};

// ─── 8. Problem Statement (Home page) ────────────────────────────────
export const PROBLEM_STATEMENT = {
    headline: 'Stop letting a messy space',
    headlineAccent: 'cost you Time and Peace of Mind.',
    body: "Whether it's an office that fails to impress clients, or a home that feels like a second job, dirt and clutter drain your energy. It's time to hand the scrubbing over to the professionals. We deliver meticulous, reliable cleaning so you can finally relax and focus on what truly matters.",
};

// ─── 9. "Why Us" Features ────────────────────────────────────────────
export const FEATURES = [
    { title: 'Fully Insured', desc: 'Bonded and insured for your total protection and peace of mind.', icon: 'Shield' as const },
    { title: 'Eco-Friendly', desc: 'Non-toxic, green products safe for your employees and customers.', icon: 'Sparkles' as const },
    { title: 'Vetted Pros', desc: 'Rigorous background checks and professional training for every crew member.', icon: 'Heart' as const },
    { title: 'Instant Booking', desc: 'Book online in seconds with real-time availability and pricing.', icon: 'Zap' as const },
    { title: 'Satisfaction', desc: '100% happiness guarantee on every single service visit.', icon: 'ThumbsUp' as const },
    { title: 'After-Hours', desc: "We work around your business hours so there's zero disruption, every time.", icon: 'Clock8' as const },
];

// ─── 10. Services ────────────────────────────────────────────────────
export interface Service {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    price: string;
    features: string[];
}

export const SERVICES: Service[] = [
    {
        id: 'commercial',
        title: 'Commercial Cleaning',
        description: 'Boost employee productivity and impress your clients with an immaculate workspace.',
        longDescription:
            'A clean workspace translates directly to higher productivity and better first impressions. We provide reliable commercial cleaning services that work around your schedule to ensure zero disruption. Keep your team healthy and focused on what matters most.',
        image: IMAGES.serviceCommercial,
        price: 'Custom Quote',
        features: ['Office Sanitization', 'Floor Maintenance', 'Window Cleaning', 'Waste Management'],
    },
    {
        id: 'facility',
        title: 'Facility Maintenance',
        description: 'Ensure safety and compliance while extending the lifespan of your physical assets.',
        longDescription:
            'Large spaces require specialized expertise. Our facility maintenance crews handle the heavy-duty cleaning your warehouse, gym, or medical office demands. Reduce liability and create a safer environment with our trained personnel and industrial-grade equipment.',
        image: IMAGES.serviceFacility,
        price: 'Custom Quote',
        features: ['Industrial Floor Care', 'High-Ceiling Dusting', 'Loading Area Wash', 'Restroom Deep Clean'],
    },
    {
        id: 'deep-clean',
        title: 'Deep Cleaning',
        description: 'Hit the reset button on your space. Perfect for seasonal cleaning or moving into a new location.',
        longDescription:
            'Our deep cleaning service targets the hidden grime that regular cleanings miss, completely resetting your environment. We tackle high-touch surfaces, behind equipment, and inside vents so you can enjoy absolute peace of mind and the healthiest possible space.',
        image: IMAGES.serviceDeepClean,
        price: 'From $250',
        features: ['Inside Appliances', 'Baseboard Scrubbing', 'Wall Washing', 'Grout Cleaning'],
    },
    {
        id: 'residential',
        title: 'Residential Cleaning',
        description: 'Reclaim your weekends and return to a sanctuary that feels as good as it looks.',
        longDescription:
            'Your time is your most valuable asset. Stop spending hours scrubbing and dusting. Our residential cleaning service gives you back your free time to spend with family or relaxing. Walk into a spotless, fresh-smelling home without lifting a finger.',
        image: IMAGES.serviceResidential,
        price: 'From $120',
        features: ['Dusting & Polishing', 'Vacuuming & Mopping', 'Kitchen Sanitization', 'Bathroom Deep Clean'],
    },
];

// ─── 11. Recurring Plans ─────────────────────────────────────────────
export const RECURRING_PLANS = [
    {
        id: 'weekly',
        name: 'Weekly Maintenance',
        price: '199',
        description: 'Perfect for high-traffic offices and retail spaces that need consistent daily upkeep.',
        features: ['Priority Scheduling', 'Dedicated Crew', 'Eco-Friendly Supplies', '15% Savings Included'],
        popular: false,
    },
    {
        id: 'bi-weekly',
        name: 'Bi-Weekly Professional',
        price: '299',
        description: 'Our most popular plan for businesses that want a reliably clean environment.',
        features: ['Flexible Rescheduling', 'Deep Break Room Clean', 'Restroom Sanitization', '10% Savings Included'],
        popular: true,
    },
    {
        id: 'monthly',
        name: 'Monthly Deep Service',
        price: '499',
        description: 'A comprehensive monthly deep clean to keep your facility in top condition.',
        features: ['Full Dusting', 'Floor Polishing', 'Window Tracks', 'Baseboard Detail'],
        popular: false,
    },
];

// ─── 12. Testimonials ────────────────────────────────────────────────
export const TESTIMONIALS = [
    {
        name: 'David Park',
        role: 'Office Manager, TechVault Inc.',
        content:
            "Since hiring Kaytee's, employee complaints about the restrooms and break room have completely stopped. It saves me hours of headache every week.",
        rating: 5,
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    },
    {
        name: 'Lisa Romero',
        role: 'Facility Director, GreenField Mall',
        content:
            "Kaytee's gives me absolute peace of mind. I never have to micro-manage them or worry about missed spots before a big inspection. Truly a set-and-forget service.",
        rating: 5,
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    {
        name: 'James Whitfield',
        role: 'Property Manager',
        content:
            "Their 100% satisfaction guarantee isn't just a marketing line. They deliver reliable, consistent results every single time. It completely changed how we manage our properties.",
        rating: 5,
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    },
];

/** Extra testimonials used on the About page */
export const ABOUT_TESTIMONIALS = [
    {
        quote:
            "You gave me my Saturdays back. I didn't realize how much stress I was carrying until I stopped spending my weekends scrubbing toilets and vacuuming stairs. Now I actually get to enjoy my home.",
        name: 'Residential Client',
        role: 'Weekly Cleaning Member',
        initial: 'R',
    },
    {
        quote:
            "Walking into a clean office every Monday sets the tone for my whole week. I never have to worry about whether the team showed up or if the job got done right. It's one less thing on my mind, and that's priceless.",
        name: 'Small Business Owner',
        role: 'Bi-Weekly Office Cleaning',
        initial: 'B',
    },
];

// ─── 13. Trust Badges / Client Logos ─────────────────────────────────
export const TRUSTED_CLIENTS = {
    tagline: 'Trusted by 500+ NYC Businesses & Families',
    brands: [
        { name: 'TechVault Inc.', icon: 'Building2' as const },
        { name: 'GreenField Mall', icon: 'Sparkles' as const },
        { name: 'Oasis Properties', icon: 'Home' as const },
        { name: 'Downtown Wellness', icon: 'Star' as const },
        { name: 'Skyline Capital', icon: 'Building2' as const },
    ],
};

// ─── 14. Service Area / Map ──────────────────────────────────────────
export const SERVICE_AREA = {
    description:
        "We're rapidly expanding across the metro area! Enter your zip code to see if our cleaning teams are already serving your neighborhood. We work with both commercial and residential clients.",
    areaText: 'We serve all five NYC boroughs: Manhattan, Brooklyn, Queens, the Bronx, and Staten Island.',
    mapCenter: [40.7128, -74.006] as [number, number],
    mapZoom: 11,
    /** User-Agent for Nominatim geocoding requests */
    mapUserAgent: 'Cleaning-Service-Map-App',
    zipRanges: [
        { min: 10001, max: 10282 }, // Manhattan
        { min: 10451, max: 10475 }, // Bronx
        { min: 11201, max: 11256 }, // Brooklyn
        { min: 11004, max: 11109 }, // Queens
        { min: 11351, max: 11697 }, // Queens
        { min: 10301, max: 10314 }, // Staten Island
    ],
    boroughs: [
        { name: 'Manhattan', center: [40.7831, -73.9712] as [number, number], radius: 3500, color: '#1B6B4A' },
        { name: 'Brooklyn', center: [40.6782, -73.9442] as [number, number], radius: 4500, color: '#22C55E' },
        { name: 'Queens', center: [40.7282, -73.7949] as [number, number], radius: 5000, color: '#15573C' },
        { name: 'Bronx', center: [40.8448, -73.8648] as [number, number], radius: 4000, color: '#D4A928' },
        { name: 'Staten Island', center: [40.5795, -74.1502] as [number, number], radius: 4000, color: '#0D3B28' },
    ],
};

// ─── 15. About / Brand Story ─────────────────────────────────────────
export const BRAND_STORY = {
    founderName: 'Keely',
    originalCompanyName: "Keely's Cleaning Services",
    companyRebrandName: "Kaytee's Cleaning Service",
    founderQuote: "I will treat your space the way I treat my own family's home.",

    // Hero section
    heroSubtitle: 'The Promise That Started Everything',
    heroHeadline: ['Born from', 'Love,', 'Loss, &', 'Legacy.'],

    // Section 1 — Origin
    originLead:
        'Our mother built her cleaning business with her bare hands and an unshakeable belief that caring for someone\'s space was <accent>sacred work.</accent>',
    originParagraphs: [
        "She didn't just clean homes and offices. She created sanctuaries. She gave exhausted parents one less thing to worry about. She helped small business owners walk into a fresh, organized space every morning so they could focus on what they did best.",
        "She understood something most people miss: a clean environment isn't about appearances. It's about dignity, peace of mind, and the ability to breathe.",
        'When she opened Keely\'s Cleaning Services, she made a promise to every client: <bold>"I will treat your space the way I treat my own family\'s home."</bold> And she meant it.',
        "She noticed the details others overlooked. She remembered which client needed hypoallergenic products because of their child's asthma. She knew who was going through a difficult season and needed extra grace. She showed up on time, every time, even when her own body was tired.",
    ],

    // Dramatic band
    dramaticStatement: "Cleaning wasn't just her job.",
    dramaticAccent: 'It was her ministry.',

    // Section 2 — The Choice
    choiceHeadline: 'After we lost her,',
    choiceAccent: 'a choice.',
    choiceParagraphs: [
        'We could let her business quietly close and move on, or we could honor what she built by doing it even better.',
        'We chose to carry her forward.',
        "When we relaunched as Kaytee's Cleaning Service, we didn't just inherit a business. We inherited a standard. Our mother taught us that people don't hire cleaners because they're lazy. They hire help because they're overwhelmed, stretched too thin, or going through something hard.",
        "Maybe they just had a baby. Maybe they're caring for an aging parent. Maybe they're running a business that demands everything they have. Maybe they just want their home to feel like a refuge again instead of another item on an endless to-do list.",
        'Whatever the reason, they deserve someone who shows up with competence, care, and respect.',
    ],

    // Section 3 — Values
    valuesHeadline: "What Our Mother's Values",
    valuesAccent: 'Look Like in Action',
    values: [
        {
            icon: 'Clock' as const,
            title: 'Honesty Means Keeping Your Word',
            desc: "We guarantee our arrival time and confirm every appointment 24 hours in advance. If we say we'll be there at 9 AM, we will be there at 9 AM.",
        },
        {
            icon: 'Shield' as const,
            title: 'Reliability Means Consistency',
            desc: 'For recurring clients, you get the same team every visit. They learn your home, your priorities, and your preferences. No strangers. No surprises.',
        },
        {
            icon: 'CheckCircle2' as const,
            title: 'Hard Work Means Doing It Right',
            desc: "Every service includes a quality check before we leave. If something doesn't meet our standards, we fix it before you ever notice.",
        },
        {
            icon: 'Heart' as const,
            title: 'Genuine Care Means Listening',
            desc: "We customize every cleaning plan around your needs, not a one-size-fits-all checklist. You tell us what matters most, and we make sure it gets done.",
        },
    ],
    guaranteeText:
        "She believed integrity meant standing behind your work. If you're not completely happy with any part of our service, we will return within 24 hours to make it right at no additional charge. No excuses. No runaround.",

    // Section 4 — About testimonials heading
    aboutTestimonialsHeadline: 'The Families & Businesses',
    aboutTestimonialsAccent: 'Who Trust Us',
    aboutTestimonialsSubtitle: 'Every client has a story. Every space has meaning.',

    // Section 5 — Mission statement
    missionHeadline: 'More Than a Cleaning Company.',
    missionAccent: 'A Family Keeping a Promise.',
    missionParagraphs: [
        "When you hire us, you're not just getting a service. You're becoming part of our mother's continuing story. You're supporting a legacy built on the belief that how you treat people's homes and workplaces says everything about who you are.",
        "She trained us. She showed us what excellence looks like. And even though she's no longer here to greet clients at the door, her presence is in every detail we get right, every promise we keep, and every space we leave better than we found it.",
        'We carry her name differently now, but we carry her values exactly the same.',
    ],

    // CTA section
    ctaHeadline: 'Let Us Serve You',
    ctaAccent: 'the Way She Would Have',
    ctaBody:
        "If you're looking for a cleaning team that will show up on time, respect your space, and treat your home or business with the same care they'd give their own, we'd be honored to serve you.",
    ctaTagline: "We don't just clean. We create peace of mind.",

    // Memorial
    memorialLabel: 'In Loving Memory',
    memorialName: 'Keely',
    memorialTitle: "Founder of Keely's Cleaning Services",
    memorialBody:
        'Whose love, work ethic, and dedication to others continue to inspire everything we do.',
};

// ─── 16. Homepage About Snippet ──────────────────────────────────────
export const ABOUT_SNIPPET = {
    headline: 'Built on Love,',
    headlineAccent: 'Driven by Legacy.',
    paragraph1:
        "Kaytee's Cleaning Service was born from a mother's lifelong commitment to treating every client's space as sacred. She didn't just clean homes and offices. She created sanctuaries where families could breathe and businesses could thrive.",
    paragraph2:
        'After we lost her, we chose to carry her legacy forward. Today, every detail we get right and every promise we keep honors the standard she set.',
    ctaText: 'Read Her Story',
};

// ─── 17. Booking CTA Section ─────────────────────────────────────────
export const BOOKING_CTA = {
    promoBanner: '',
    headline: 'What Would You Do With',
    headlineAccent: 'a Spotless Space?',
    body: "Whether it's your office, storefront, or home, stop stressing about the mess. Get a custom quote in under 60 seconds and let us handle the rest.",
    ctaText: 'Book Your Appointment',
    trustLine: 'No long-term contracts • Fully insured • 100% Satisfaction Guarantee',
};

// ─── 18. Quote Calculator Pricing ────────────────────────────────────
export const PRICING = {
    sqftRates: { office: 0.1, home: 0.08, facility: 0.12 },
    roomRate: 15,
    bathroomRate: 25,
    multipliers: { standard: 1, deep: 1.5, move: 1.8 },
    discounts: { 'one-time': 1, weekly: 0.75, 'bi-weekly': 0.85, monthly: 0.9 },
};

// ─── 19. Operational Info ────────────────────────────────────────────
export const OPERATIONS = {
    hours: 'Monday through Saturday, 8 AM to 7 PM. We also offer after-hours cleaning for commercial clients.',
    guarantee:
        "100% satisfaction guarantee. If you're not completely happy, we'll return within 24 hours to make it right at no extra charge.",
    trust:
        'Every team member is background-checked, and we are fully licensed and insured. For recurring clients, you get the same team every visit.',
    products: 'We use eco-friendly, non-toxic cleaning products that are safe for children, pets, and the environment.',
    cancellation: 'You can reschedule or cancel with 24 hours notice at no charge.',
};

// ─── 20. Chatbot Configuration ───────────────────────────────────────
export const CHATBOT = {
    assistantName: "Kaytee's Assistant",
    greeting: `Hi! Welcome to ${COMPANY.name}. I'm here to help you find the perfect cleaning solution. What can I help you with today?`,
};
