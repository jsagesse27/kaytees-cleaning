export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  price: string;
  features: string[];
}

export const RECURRING_PLANS = [
  {
    id: 'weekly',
    name: 'Weekly Sparkle',
    price: '99',
    description: 'Perfect for busy families who want a consistently pristine home.',
    features: ['Priority Scheduling', 'Dedicated Cleaner', 'Eco-Friendly Supplies', '15% Savings Included'],
    popular: false
  },
  {
    id: 'bi-weekly',
    name: 'Bi-Weekly Fresh',
    price: '129',
    description: 'Our most popular choice for maintaining a healthy, clean balance.',
    features: ['Flexible Rescheduling', 'Deep Kitchen Clean', 'Bathroom Sanitization', '10% Savings Included'],
    popular: true
  },
  {
    id: 'monthly',
    name: 'Monthly Deep',
    price: '189',
    description: 'A thorough monthly refresh to keep the big stuff under control.',
    features: ['Full Dusting', 'Floor Polishing', 'Window Tracks', 'Baseboard Detail'],
    popular: false
  }
];

export const SERVICES: Service[] = [
  {
    id: 'residential',
    title: 'Residential Cleaning',
    description: 'Meticulous cleaning for your home, tailored to your lifestyle.',
    longDescription: 'Our residential cleaning service is designed to give you back your time. We cover everything from dusting and vacuuming to deep cleaning kitchens and bathrooms. Whether you need a weekly touch-up or a monthly deep clean, Kaytee\'s team ensures your sanctuary remains spotless.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800',
    price: 'From $120',
    features: ['Dusting & Polishing', 'Vacuuming & Mopping', 'Kitchen Sanitization', 'Bathroom Deep Clean']
  },
  {
    id: 'commercial',
    title: 'Commercial Cleaning',
    description: 'Professional cleaning solutions for offices and retail spaces.',
    longDescription: 'A clean workspace is a productive workspace. We provide comprehensive commercial cleaning services for offices, retail stores, and medical facilities. Our team works around your schedule to ensure minimal disruption to your business operations.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    price: 'Custom Quote',
    features: ['Office Sanitization', 'Floor Maintenance', 'Window Cleaning', 'Waste Management']
  },
  {
    id: 'deep-clean',
    title: 'Deep Cleaning',
    description: 'A thorough, top-to-bottom refresh for neglected spaces.',
    longDescription: 'Our deep cleaning service goes beyond the surface. We target the areas that are often missed during regular cleanings, including baseboards, inside appliances, and behind furniture. Perfect for spring cleaning or preparing for a special event.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800',
    price: 'From $250',
    features: ['Inside Appliances', 'Baseboard Scrubbing', 'Wall Washing', 'Grout Cleaning']
  },
  {
    id: 'move-in-out',
    title: 'Move In/Out Cleaning',
    description: 'Seamless transitions with a perfectly clean new start.',
    longDescription: 'Moving is stressful enough without having to worry about cleaning. Our move-in/out service ensures that your old place is ready for its next occupants or that your new home is pristine and welcoming from day one.',
    image: 'https://images.unsplash.com/photo-1603712726238-2fd57bddf182?auto=format&fit=crop&q=80&w=800',
    price: 'From $300',
    features: ['Cabinet Sanitization', 'Closet Cleaning', 'Full House Disinfection', 'Window Tracks']
  }
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Kaytee\'s team is incredible. I\'ve tried several services, but none match their attention to detail. My house has never felt cleaner!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Office Manager',
    content: 'Reliable, professional, and thorough. They transformed our office environment. Highly recommend for any business owner.',
    rating: 5
  },
  {
    name: 'Emily Davis',
    role: 'Real Estate Agent',
    content: 'I use Kaytee\'s for all my move-out cleanings. They help my listings shine and always show up on time.',
    rating: 5
  }
];
