export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  price: string;
  features: string[];
}

export const CONTACT = {
  phone: '(555) 123-4567',
  email: 'hello@kayteescleaning.com',
  address: '123 Sparkle Way, Clean City, ST 12345'
};

export const RECURRING_PLANS = [
  {
    id: 'weekly',
    name: 'Weekly Maintenance',
    price: '199',
    description: 'Perfect for high-traffic offices and retail spaces that need consistent daily upkeep.',
    features: ['Priority Scheduling', 'Dedicated Crew', 'Eco-Friendly Supplies', '15% Savings Included'],
    popular: false
  },
  {
    id: 'bi-weekly',
    name: 'Bi-Weekly Professional',
    price: '299',
    description: 'Our most popular plan for businesses that want a reliably clean environment.',
    features: ['Flexible Rescheduling', 'Deep Break Room Clean', 'Restroom Sanitization', '10% Savings Included'],
    popular: true
  },
  {
    id: 'monthly',
    name: 'Monthly Deep Service',
    price: '499',
    description: 'A comprehensive monthly deep clean to keep your facility in top condition.',
    features: ['Full Dusting', 'Floor Polishing', 'Window Tracks', 'Baseboard Detail'],
    popular: false
  }
];

export const SERVICES: Service[] = [
  {
    id: 'commercial',
    title: 'Commercial Cleaning',
    description: 'We keep offices, retail spaces, and corporate buildings looking their best, day after day.',
    longDescription: 'A clean workspace is a productive workspace. We provide comprehensive commercial cleaning services for offices, retail stores, and corporate facilities. Our team works around your schedule to make sure there is zero disruption to your business.',
    image: '/service-commercial.png',
    price: 'Custom Quote',
    features: ['Office Sanitization', 'Floor Maintenance', 'Window Cleaning', 'Waste Management']
  },
  {
    id: 'facility',
    title: 'Facility Maintenance',
    description: 'Full-service upkeep for warehouses, gyms, medical offices, and large venues.',
    longDescription: 'From warehouses to convention centers, our facility maintenance crews handle the heavy-duty cleaning your large spaces demand. We bring industrial-grade equipment and trained personnel to keep everything running smoothly.',
    image: '/service-facility.png',
    price: 'Custom Quote',
    features: ['Industrial Floor Care', 'High-Ceiling Dusting', 'Loading Area Wash', 'Restroom Deep Clean']
  },
  {
    id: 'deep-clean',
    title: 'Deep Cleaning',
    description: 'A top-to-bottom scrub for offices, lobbies, kitchens, and common areas that need extra attention.',
    longDescription: 'Our deep cleaning service goes well beyond the surface. We target spots that regular cleanings miss: behind equipment, inside break rooms, ventilation grilles, and high-touch surfaces. Best for seasonal refreshes or pre-inspection prep.',
    image: '/service-deepclean.png',
    price: 'From $250',
    features: ['Inside Appliances', 'Baseboard Scrubbing', 'Wall Washing', 'Grout Cleaning']
  },
  {
    id: 'residential',
    title: 'Residential Cleaning',
    description: 'Careful, detail-oriented cleaning for your home, built around your schedule and preferences.',
    longDescription: 'Our residential cleaning service gives you back your free time. We handle everything from dusting and vacuuming to deep cleaning kitchens and bathrooms. Whether you need a weekly visit or a monthly refresh, our team keeps your home spotless.',
    image: '/service-residential.png',
    price: 'From $120',
    features: ['Dusting & Polishing', 'Vacuuming & Mopping', 'Kitchen Sanitization', 'Bathroom Deep Clean']
  }
];

export const TESTIMONIALS = [
  {
    name: 'David Park',
    role: 'Office Manager, TechVault Inc.',
    content: 'Kaytee\'s team keeps our 3-floor office spotless. They work around our schedule and the crew is always professional. Best commercial cleaners we\'ve ever had.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150'
  },
  {
    name: 'Lisa Romero',
    role: 'Facility Director, GreenField Mall',
    content: 'We switched to Kaytee\'s for our entire facility and haven\'t looked back. The deep cleaning quality is unmatched, and they handle everything from restrooms to food courts.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
  },
  {
    name: 'James Whitfield',
    role: 'Property Manager',
    content: 'I manage 12 commercial properties and Kaytee\'s handles cleaning for all of them. Consistent, reliable, and their pricing is transparent. Highly recommend.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
  }
];
