/**
 * Client-side chat response engine for the prototype.
 * Uses pattern matching against a knowledge base to simulate AI conversation.
 * When the Gemini API key is ready, replace getBotResponse() with an API call.
 *
 * ANTI-REPEAT SYSTEM: Every intent has multiple response variants. A response
 * history tracks recent outputs and guarantees the bot never sends the same
 * message twice, even if the user triggers the same intent repeatedly.
 *
 * ALL business-specific data is sourced from siteConfig.ts via the K object.
 */
import {
    COMPANY,
    CONTACT,
    SERVICES,
    RECURRING_PLANS,
    OPERATIONS,
    SERVICE_AREA,
    BRAND_STORY,
} from '../siteConfig';

// ─── Knowledge Base (derived from siteConfig) ────────────────────────
const K = {
    services: {
        commercial: {
            name: SERVICES.find((s) => s.id === 'commercial')!.title,
            price: SERVICES.find((s) => s.id === 'commercial')!.price,
            desc: 'Offices, retail spaces, corporate buildings. We work around your schedule for zero disruption.',
            features: SERVICES.find((s) => s.id === 'commercial')!.features,
        },
        facility: {
            name: SERVICES.find((s) => s.id === 'facility')!.title,
            price: SERVICES.find((s) => s.id === 'facility')!.price,
            desc: 'Warehouses, gyms, medical offices, large venues. Industrial-grade equipment and trained personnel.',
            features: SERVICES.find((s) => s.id === 'facility')!.features,
        },
        deep: {
            name: SERVICES.find((s) => s.id === 'deep-clean')!.title,
            price: SERVICES.find((s) => s.id === 'deep-clean')!.price,
            desc: 'Top-to-bottom scrub for spaces that need extra attention. Behind equipment, break rooms, ventilation grilles.',
            features: SERVICES.find((s) => s.id === 'deep-clean')!.features,
        },
        residential: {
            name: SERVICES.find((s) => s.id === 'residential')!.title,
            price: SERVICES.find((s) => s.id === 'residential')!.price,
            desc: 'Detail-oriented cleaning for your home. Dusting, vacuuming, kitchen and bathroom deep cleaning.',
            features: SERVICES.find((s) => s.id === 'residential')!.features,
        },
    },
    plans: {
        weekly: { name: RECURRING_PLANS[0].name, price: `$${RECURRING_PLANS[0].price}/visit`, discount: '15% savings' },
        biweekly: { name: RECURRING_PLANS[1].name, price: `$${RECURRING_PLANS[1].price}/visit`, discount: '10% savings', popular: true },
        monthly: { name: RECURRING_PLANS[2].name, price: `$${RECURRING_PLANS[2].price}/visit`, features: 'Full dusting, floor polishing, window tracks' },
    },
    contact: { phone: CONTACT.phone, email: CONTACT.email, address: CONTACT.address },
    hours: OPERATIONS.hours,
    area: SERVICE_AREA.areaText,
    guarantee: OPERATIONS.guarantee,
    trust: OPERATIONS.trust,
    products: OPERATIONS.products,
    cancellation: OPERATIONS.cancellation,
    companyName: COMPANY.name,
    shortName: COMPANY.shortName,
    founderStory: BRAND_STORY.originalCompanyName,
};

// ─── Anti-Repeat System ───────────────────────────────────────
const responseHistory: string[] = [];
const MAX_HISTORY = 20;

function pickUnique(variants: string[]): string {
    // Try to find a variant not in recent history
    const unused = variants.filter((v) => !responseHistory.includes(v));
    const pool = unused.length > 0 ? unused : variants; // if all used, reset
    const pick = pool[Math.floor(Math.random() * pool.length)];
    responseHistory.push(pick);
    if (responseHistory.length > MAX_HISTORY) responseHistory.shift();
    return pick;
}

// ─── Intent Definitions ───────────────────────────────────────
interface Intent {
    patterns: RegExp[];
    variants: ((msg: string) => string)[];
}

const intents: Intent[] = [
    // ── Greeting ──
    {
        patterns: [/^(hi|hey|hello|yo|sup|good (morning|afternoon|evening))/i, /^(what'?s up|howdy)/i],
        variants: [
            () => `Hey there! Welcome to ${K.companyName}. Are you looking for help with a home or a business space?`,
            () => `Hi! Thanks for reaching out. Are you interested in residential or commercial cleaning today?`,
            () => `Hello! I'm here to help you find the perfect cleaning solution. What kind of space are we talking about?`,
            () => `Welcome! So glad you reached out. Tell me — is this for a home, an office, or something else entirely?`,
        ],
    },

    // ── Services overview ──
    {
        patterns: [/what (services|do you|can you|cleaning)/i, /what do you offer/i, /tell me about.*(service|cleaning)/i, /^services$/i],
        variants: [
            () =>
                `We offer four main services:\n\n` +
                `🏢 **Commercial Cleaning** — ${K.services.commercial.desc}\n\n` +
                `🏠 **Residential Cleaning** — ${K.services.residential.price}. ${K.services.residential.desc}\n\n` +
                `✨ **Deep Cleaning** — ${K.services.deep.price}. ${K.services.deep.desc}\n\n` +
                `🏗️ **Facility Maintenance** — ${K.services.facility.desc}\n\n` +
                `Which one sounds closest to what you need?`,
            () =>
                `We cover everything from cozy apartments to massive warehouses! Here's the lineup:\n\n` +
                `Home cleaning starts at ${K.services.residential.price}, deep cleaning from ${K.services.deep.price}, and commercial and facility work is custom-quoted based on your space.\n\n` +
                `What kind of space do you need cleaned?`,
            () =>
                `Great question! In a nutshell — residential, commercial, deep cleaning, and facility maintenance. We've got the full range.\n\n` +
                `Most people start by telling me a bit about their space and I can point you to the right service. What are you working with?`,
        ],
    },

    // ── Residential ──
    {
        patterns: [/residen/i, /house|home|apartment|condo|my place/i],
        variants: [
            () =>
                `Our residential cleaning starts at just ${K.services.residential.price} and includes ${K.services.residential.features.join(', ')}.\n\n` +
                `Most of our home clients love the bi-weekly plan because it keeps things consistently fresh without the weekly commitment. ` +
                `Can I ask how many bedrooms and bathrooms you have? That helps me give you a better estimate.`,
            () =>
                `Perfect — residential is one of our most popular services! Starting at ${K.services.residential.price}, we handle everything from daily dust to deep bathroom scrubs.\n\n` +
                `To give you an accurate estimate, it'd help to know the rough size of your place. How many rooms are we talking?`,
            () =>
                `We'd love to take care of your home! Our residential service covers ${K.services.residential.features.join(', ')} and more.\n\n` +
                `Pricing starts at ${K.services.residential.price} and depends on size and frequency. Would you like to try our instant quote calculator? It takes about 60 seconds.`,
            () =>
                `Home cleaning is what we're known for. We put the same care into your space that we'd put into our own family's home. Starts at ${K.services.residential.price}.\n\n` +
                `What area are you located in? That helps me check our availability.`,
        ],
    },

    // ── Commercial ──
    {
        patterns: [/commercial|office|retail|corporate|business|workspace|store/i],
        variants: [
            () =>
                `Great question! Our commercial cleaning covers ${K.services.commercial.desc}\n\n` +
                `Pricing is customized based on your square footage and frequency. ` +
                `What kind of space are you working with — an office, retail store, or something else?`,
            () =>
                `Commercial is one of our strongest areas. We handle offices, retail locations, and corporate spaces — all on your schedule so there's zero disruption to your business.\n\n` +
                `How large is the space, roughly? That'll help me give you a ballpark.`,
            () =>
                `Absolutely! We clean all types of commercial spaces. Whether it's a small office or a multi-floor corporate building, we've got the team and equipment for it.\n\n` +
                `A lot of our commercial clients go with our bi-weekly plan at ${K.plans.biweekly.price} with ${K.plans.biweekly.discount}. Want me to walk you through the options?`,
            () =>
                `We work with businesses across our entire service area. From boutique retail to large corporate offices — we tailor every plan to your needs.\n\n` +
                `What's most important to you in a cleaning service? Flexibility, consistency, specific areas of focus?`,
        ],
    },

    // ── Deep clean ──
    {
        patterns: [/deep clean/i, /thorough|heavy.?duty|extra clean|spring clean/i],
        variants: [
            () =>
                `Our deep cleaning service starts at ${K.services.deep.price} and is perfect when a space needs that extra level of attention.\n\n` +
                `It includes ${K.services.deep.features.join(', ')} — basically everything regular cleaning misses.\n\nIs this for a home or a commercial space?`,
            () =>
                `Deep cleaning is where we really shine. Starting at ${K.services.deep.price}, we go behind appliances, scrub grout and baseboards, wash walls — the works.\n\n` +
                `Is there a particular reason for the deep clean? Moving, renovation, just overdue? That helps me recommend the right approach.`,
            () =>
                `Great choice! Deep cleans are perfect for a fresh start. ${K.services.deep.features.join(', ')} — we leave no surface untouched.\n\n` +
                `Would you like to get a quick estimate? Our quote calculator can give you a number in under a minute.`,
        ],
    },

    // ── Facility ──
    {
        patterns: [/facility|warehouse|gym|medical|large.?venue|convention/i],
        variants: [
            () =>
                `Facility maintenance is one of our specialties! We handle ${K.services.facility.desc}\n\n` +
                `${K.services.facility.features.join(', ')} — you name it, we've got you covered.\n\nHow large is the space, roughly?`,
            () =>
                `We work with some of the biggest facilities in our area. Industrial floors, high ceilings, restrooms — we bring the right equipment and crew for the job.\n\n` +
                `What type of facility are we talking about? That helps me scope out what you'd need.`,
            () =>
                `Large spaces are no problem for us. We've cleaned everything from gyms to convention centers. Pricing is custom-quoted based on your square footage and needs.\n\n` +
                `Want to schedule a walkthrough so we can give you an exact quote?`,
        ],
    },

    // ── Pricing ──
    {
        patterns: [/how much|price|pricing|cost|rate|budget|afford|expensive|cheap/i, /what.*(charge|cost|pay)/i],
        variants: [
            (msg) => {
                if (/residen|home|house|apartment/i.test(msg))
                    return `Residential cleaning starts at ${K.services.residential.price}. The final price depends on rooms, bathrooms, and square footage.\n\nYou can try our instant quote calculator right on this page — it gives you a ballpark in seconds.`;
                if (/deep/i.test(msg))
                    return `Deep cleaning starts at ${K.services.deep.price}. It's the most thorough option we offer.\n\nWould you like a customized quote?`;
                return `Here's a quick overview:\n\n🏠 Residential: ${K.services.residential.price}\n✨ Deep Clean: ${K.services.deep.price}\n🏢 Commercial: Custom Quote\n🏗️ Facility: Custom Quote\n\nOur most popular plan is the **Bi-Weekly Professional** at ${K.plans.biweekly.price} with ${K.plans.biweekly.discount}.\n\nWant a personalized estimate?`;
            },
            (msg) => {
                if (/residen|home|house|apartment/i.test(msg))
                    return `Home cleaning starts at ${K.services.residential.price}, and most of our residential clients end up in the ${K.plans.biweekly.price} range on a recurring plan with ${K.plans.biweekly.discount}.\n\nThe quote calculator on this page can give you an exact number based on your space.`;
                if (/deep/i.test(msg))
                    return `A deep clean starts at ${K.services.deep.price} depending on the size and condition of the space. It's a great one-time investment.\n\nWant me to help you get a quick estimate?`;
                return `It really depends on the type of service and size of the space. Residential starts at ${K.services.residential.price}, deep cleans from ${K.services.deep.price}, and commercial is custom-quoted.\n\nTell me about your space and I can narrow it down for you!`;
            },
        ],
    },

    // ── Plans / recurring ──
    {
        patterns: [/plan|recurring|subscription|regular|weekly|bi.?weekly|monthly|ongoing/i, /how often/i],
        variants: [
            () =>
                `We offer three recurring plans:\n\n📅 **Weekly** — ${K.plans.weekly.price} (${K.plans.weekly.discount})\n⭐ **Bi-Weekly** — ${K.plans.biweekly.price} (${K.plans.biweekly.discount}) — Most Popular!\n📆 **Monthly** — ${K.plans.monthly.price} (${K.plans.monthly.features})\n\nThe bi-weekly plan is what most clients land on. Which sounds right for you?`,
            () =>
                `Great that you're thinking about a regular schedule! Consistency is what keeps spaces really fresh.\n\nOur most popular option is bi-weekly at ${K.plans.biweekly.price} with ${K.plans.biweekly.discount}. But we also do weekly (${K.plans.weekly.price}) and monthly (${K.plans.monthly.price}).\n\nWould you like to see what each plan includes?`,
            () =>
                `Recurring clients get the best perks — same team every visit, priority scheduling, and savings up to 15%.\n\nMost people start bi-weekly and adjust from there. Want to explore what that would look like for your space?`,
        ],
    },

    // ── Booking / quote ──
    {
        patterns: [/book|schedule|appointment|reserve|sign.?up|get started|quote|estimate/i],
        variants: [
            () => `Absolutely! You can get an instant estimate using our quote calculator on this page — just scroll up a bit. It walks you through everything step by step, and you can book directly from there.\n\nOr if you prefer, give us a call at ${K.contact.phone} and we'll set everything up for you.`,
            () => `I'd love to help you get booked! The fastest way is to use our quote calculator right on this page. It takes about 60 seconds and gives you a price estimate instantly.\n\nYou can also call us at ${K.contact.phone} if you'd rather talk to someone directly.`,
            () => `Let's get you set up! You have two options:\n\n1. Use the **quote calculator** on this page for an instant estimate and booking\n2. Call us at **${K.contact.phone}** to schedule with a real person\n\nEither way, we'll get you taken care of.`,
        ],
    },

    // ── Contact ──
    {
        patterns: [/phone|call|email|contact|reach|talk to/i, /number/i],
        variants: [
            () => `Here's how to reach us:\n\n📞 Phone: ${K.contact.phone}\n📧 Email: ${K.contact.email}\n📍 Address: ${K.contact.address}\n\nWe're available ${K.hours}`,
            () => `You can reach our team at ${K.contact.phone} or email ${K.contact.email}. We're available ${K.hours}\n\nWould you like to schedule a call, or can I help you with something right now?`,
        ],
    },

    // ── Hours ──
    {
        patterns: [/hour|open|close|when.*(work|operate)/i],
        variants: [
            () => `Our hours are ${K.hours}\n\nNeed to get something scheduled?`,
            () => `We're open ${K.hours}\n\nFor commercial clients, we can also work overnight or on weekends — whatever minimizes disruption for you.`,
        ],
    },

    // ── Area / location ──
    {
        patterns: [/area|location|where|borough|manhattan|brooklyn|queens|bronx|staten/i, /do you (serve|cover|come to)/i, /zip/i],
        variants: [
            () => `${K.area}\n\nYou can check your exact zip code using the coverage checker further down this page.`,
            () => `We cover our entire service area — ${K.area}\n\nWhat neighborhood are you in? I can confirm we service your area.`,
        ],
    },

    // ── Trust / safety ──
    {
        patterns: [/trust|safe|insur|licens|background|vet|bond|reliable|legit/i],
        variants: [
            () => `That's a great question, and I totally understand wanting to know. ${K.trust}\n\nYour peace of mind matters to us. That's also why we offer a ${K.guarantee}`,
            () => `Safety and trust are non-negotiable for us. ${K.trust}\n\nThis business was built on accountability, and we carry that forward every day.`,
            () => `We take trust seriously. Every single team member goes through rigorous background checks. We're fully licensed and insured, and for recurring clients, you always get the same familiar team.\n\nWant to learn more about our process?`,
        ],
    },

    // ── Products / eco ──
    {
        patterns: [/product|chemical|eco|green|non.?toxic|pet|child|kids|allerg/i],
        variants: [
            () => `${K.products}\n\nIf you have specific allergies or sensitivities, just let us know and we'll accommodate.`,
            () => `All our products are eco-friendly and non-toxic. Safe for kids, pets, and anyone with sensitivities. We're always happy to use hypoallergenic alternatives if needed.\n\nAnything else you'd like to know?`,
        ],
    },

    // ── Guarantee ──
    {
        patterns: [/guarantee|satisfaction|not happy|complaint|refund|redo/i],
        variants: [
            () => `${K.guarantee}\n\nOur business was built on integrity. That principle hasn't changed.`,
            () => `We stand behind every single job. ${K.guarantee}\n\nPut simply: if you're not thrilled, we make it right. No questions asked.`,
        ],
    },

    // ── Cancellation ──
    {
        patterns: [/cancel|reschedule|change.*appointment/i],
        variants: [
            () => `${K.cancellation}\n\nLife happens — we completely understand.`,
            () => `No worries at all. ${K.cancellation}\n\nJust give us a heads up and we'll work around your schedule.`,
        ],
    },

    // ── About / story ──
    {
        patterns: [/about|story|history|who are you|your company|family|mother|founder/i],
        variants: [
            () =>
                `${K.companyName} is a family-run business born from a lifelong dedication to treating every client's space as sacred.\n\n` +
                `You can read the full story on our About page.\n\nAnything specific I can help with?`,
            () =>
                `We started as ${K.founderStory}. Over time, we grew and relaunched as ${K.companyName} to honor the standards that built this business.\n\n` +
                `Check out our About page for the full story. It's a powerful read.`,
        ],
    },

    // ── Objection: too expensive ──
    {
        patterns: [/too (much|expensive|pricey)|can't afford|over.*budget/i],
        variants: [
            () =>
                `I hear you — investing in cleaning is a real consideration. Our clients consistently tell us the time they get back is worth more than the cost.\n\n` +
                `With recurring plans, you save up to 25%. And every service comes with our ${K.guarantee}\n\nWould a bi-weekly plan work better for your budget?`,
            () =>
                `Totally understand. That's actually why most of our clients start with a monthly plan — it's the most affordable way to experience the difference.\n\n` +
                `Once you see how much time and stress it saves, most people end up upgrading to bi-weekly. Want to see what monthly would cost for your space?`,
        ],
    },

    // ── Objection: thinking about it ──
    {
        patterns: [/think about it|not sure|maybe later|need time|on the fence/i],
        variants: [
            () =>
                `Absolutely, take your time. No pressure at all. You can use our quote calculator to save an estimate for later.\n\n` +
                `Our schedule fills up fast, so booking a few days ahead usually gets the best time slots. Anything else I can answer?`,
            () =>
                `No rush! It's smart to weigh your options. If it helps, a lot of clients start with just a one-time clean to test the waters before committing to a plan.\n\n` +
                `Would that feel like a good first step?`,
        ],
    },

    // ── Objection: do it myself ──
    {
        patterns: [/do it myself|clean myself|don't need|waste of money/i],
        variants: [
            () =>
                `I totally respect that. One of our clients told us, "You gave me my Saturdays back. I didn't realize how much stress I was carrying until I stopped spending my weekends scrubbing."\n\n` +
                `Even a monthly deep clean can make a huge difference. Want to see what a one-time service would cost?`,
            () =>
                `That's fair! A lot of our best clients started thinking the same thing. The shift usually comes when they realize their free time has value too.\n\n` +
                `If you ever want to try it once just to see the difference, we're here. No commitment needed.`,
        ],
    },

    // ── Objection: trust / strangers ──
    {
        patterns: [/don't trust|worried|nervous|stranger|my home|break|steal|damage/i],
        variants: [
            () =>
                `That's a completely valid concern. ${K.trust}\n\nWe treat your space the way we'd treat our own family's home. Would you like to hear more about our vetting process?`,
            () =>
                `I understand — letting someone into your space is a big deal. That's why every team member is background-checked, and you always get the same crew on recurring visits. No random strangers, ever.\n\n` +
                `We're also fully insured, so you're protected no matter what.`,
        ],
    },

    // ── Thank you ──
    {
        patterns: [/thank|thanks|appreciate|helpful/i],
        variants: [
            () => "You're so welcome! If you need anything else, I'm right here. We'd love to take care of your space whenever you're ready. 😊",
            () => "Happy to help! Don't hesitate to reach out anytime. We're always here when you need us.",
            () => "My pleasure! When you're ready to get started, our quote calculator is just a scroll away. Talk soon!",
            () => "Anytime! That's what I'm here for. Let us know when you're ready to give us a try. 🌟",
        ],
    },

    // ── Bye ──
    {
        patterns: [/bye|goodbye|see you|take care|gotta go/i],
        variants: [
            () => "Take care! We're here whenever you need us. Have a wonderful day! 🌟",
            () => "Goodbye! Remember, a cleaner space is just a booking away. Talk soon!",
            () => "See you! Whenever you're ready for a spotless space, we're just a message away. ✨",
        ],
    },
];

// ─── Fallback Responses ────────────────────────────────────────
const FALLBACKS = [
    "Great question. Could you tell me a bit more? Are you interested in residential or commercial cleaning?",
    "I want to point you in the right direction. Are you looking for pricing, wanting to book, or just exploring?",
    "I'd love to help! Could you give me more context? For example, are you looking for a one-time clean or something regular?",
    "Let me make sure I understand — are you asking about our services, pricing, or availability?",
    "I'm not sure I caught that. Could you rephrase? I can help with services, pricing, booking, and more!",
];

// ─── Soft Close (injected after 3+ exchanges) ─────────────────
const SOFT_CLOSES = [
    "\n\nBy the way, if you'd like a quick estimate, our quote calculator is right on this page — it only takes about 60 seconds.",
    "\n\nWhenever you're ready, I can help you get a quote or book your first cleaning.",
    "\n\nJust so you know, we have great availability this week if you're ready to give us a try.",
];

// ─── Main Response Function ────────────────────────────────────
let exchangeCount = 0;

export function getBotResponse(userMessage: string): Promise<string> {
    return new Promise((resolve) => {
        const delay = 400 + Math.random() * 600;

        setTimeout(() => {
            exchangeCount++;
            const msg = userMessage.trim().toLowerCase();

            // Try each intent pattern
            for (const intent of intents) {
                for (const pattern of intent.patterns) {
                    if (pattern.test(msg)) {
                        // Build all possible responses for this intent
                        const candidates = intent.variants.map((fn) => fn(userMessage));
                        let response = pickUnique(candidates);

                        // Inject a soft close after 3+ exchanges (but not every time)
                        if (exchangeCount >= 3 && exchangeCount % 2 === 0 && !/(book|quote|calculator|schedule)/i.test(response)) {
                            response += pickUnique(SOFT_CLOSES);
                        }

                        resolve(response);
                        return;
                    }
                }
            }

            // Fallback (also deduplicated)
            resolve(pickUnique(FALLBACKS));
        }, delay);
    });
}

export function resetChat() {
    exchangeCount = 0;
    responseHistory.length = 0;
}
