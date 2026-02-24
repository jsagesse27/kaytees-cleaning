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
    description: 'Boost employee productivity and impress your clients with an immaculate workspace.',
    longDescription: 'A clean workspace translates directly to higher productivity and better first impressions. We provide reliable commercial cleaning services that work around your schedule to ensure zero disruption. Keep your team healthy and focused on what matters most.',
    image: '/service-commercial.png',
    price: 'Custom Quote',
    features: ['Office Sanitization', 'Floor Maintenance', 'Window Cleaning', 'Waste Management']
  },
  {
    id: 'facility',
    title: 'Facility Maintenance',
    description: 'Ensure safety and compliance while extending the lifespan of your physical assets.',
    longDescription: 'Large spaces require specialized expertise. Our facility maintenance crews handle the heavy-duty cleaning your warehouse, gym, or medical office demands. Reduce liability and create a safer environment with our trained personnel and industrial-grade equipment.',
    image: '/service-facility.png',
    price: 'Custom Quote',
    features: ['Industrial Floor Care', 'High-Ceiling Dusting', 'Loading Area Wash', 'Restroom Deep Clean']
  },
  {
    id: 'deep-clean',
    title: 'Deep Cleaning',
    description: 'Hit the reset button on your space. Perfect for seasonal cleaning or moving into a new location.',
    longDescription: 'Our deep cleaning service targets the hidden grime that regular cleanings miss, completely resetting your environment. We tackle high-touch surfaces, behind equipment, and inside vents so you can enjoy absolute peace of mind and the healthiest possible space.',
    image: '/service-deepclean.png',
    price: 'From $250',
    features: ['Inside Appliances', 'Baseboard Scrubbing', 'Wall Washing', 'Grout Cleaning']
  },
  {
    id: 'residential',
    title: 'Residential Cleaning',
    description: 'Reclaim your weekends and return to a sanctuary that feels as good as it looks.',
    longDescription: 'Your time is your most valuable asset. Stop spending hours scrubbing and dusting. Our residential cleaning service gives you back your free time to spend with family or relaxing. Walk into a spotless, fresh-smelling home without lifting a finger.',
    image: '/service-residential.png',
    price: 'From $120',
    features: ['Dusting & Polishing', 'Vacuuming & Mopping', 'Kitchen Sanitization', 'Bathroom Deep Clean']
  }
];

export const TESTIMONIALS = [
  {
    name: 'David Park',
    role: 'Office Manager, TechVault Inc.',
    content: 'Since hiring Kaytee\'s, employee complaints about the restrooms and break room have completely stopped. It saves me hours of headache every week.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150'
  },
  {
    name: 'Lisa Romero',
    role: 'Facility Director, GreenField Mall',
    content: 'Kaytee\'s gives me absolute peace of mind. I never have to micro-manage them or worry about missed spots before a big inspection. Truly a set-and-forget service.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
  },
  {
    name: 'James Whitfield',
    role: 'Property Manager',
    content: 'Their 100% satisfaction guarantee isn\'t just a marketing line. They deliver reliable, consistent results every single time. It completely changed how we manage our properties.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
  }
];
