import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT, COMPANY, SOCIAL, IMAGES, SERVICES } from '../siteConfig';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <img src={IMAGES.logo} alt={`${COMPANY.name} Logo`} className="w-10 h-10 object-contain" />
            <span className="font-serif text-2xl font-bold text-white">{COMPANY.name}</span>
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            {COMPANY.description}
          </p>
          <div className="flex gap-4">
            <a href={SOCIAL.facebook} aria-label="Facebook" className="hover:text-brand-accent transition-colors cursor-pointer"><Facebook className="w-5 h-5" /></a>
            <a href={SOCIAL.instagram} aria-label="Instagram" className="hover:text-brand-accent transition-colors cursor-pointer"><Instagram className="w-5 h-5" /></a>
            <a href={SOCIAL.twitter} aria-label="Twitter" className="hover:text-brand-accent transition-colors cursor-pointer"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="/#services" className="hover:text-white transition-colors cursor-pointer">Our Services</a></li>
            <li><a href="/#testimonials" className="hover:text-white transition-colors cursor-pointer">Testimonials</a></li>
            <li><a href="/#about" className="hover:text-white transition-colors cursor-pointer">About Us</a></li>
            <li><Link to="/book" className="hover:text-white transition-colors cursor-pointer">Book a Clean</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link to={`/services/${s.id}`} className="hover:text-white transition-colors cursor-pointer">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-accent" />
              <span>{CONTACT.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-accent" />
              <span>{CONTACT.email}</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-brand-accent" />
              <span>{CONTACT.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-brand-primary/20 flex flex-col sm:grid-cols-2 md:flex-row justify-between items-center gap-4 text-xs">
        <p>© {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white cursor-pointer">Privacy Policy</a>
          <a href="#" className="hover:text-white cursor-pointer">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
