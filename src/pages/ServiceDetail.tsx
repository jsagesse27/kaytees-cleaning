import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowLeft, Calendar, Phone } from 'lucide-react';
import BookingCTA from '../components/BookingCTA';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  if (!service) return <Navigate to="/" />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link to="/#services" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-primary mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">{service.title}</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              {service.longDescription}
            </p>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-10">
              <h3 className="text-xl font-bold mb-6">What's Included:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                    {feature}
                  </div>
                ))}
                <div className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                  Eco-Friendly Products
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                  Satisfaction Guarantee
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book"
                className="bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/20"
              >
                <Calendar className="w-5 h-5" />
                Book This Service
              </Link>
              <a
                href="tel:5551234567"
                className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Get a Custom Quote
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-brand-accent p-8 rounded-3xl shadow-xl max-w-[240px]">
              <p className="text-slate-900 font-bold text-lg mb-1">Starting at</p>
              <p className="text-4xl font-bold text-slate-900">{service.price}</p>
              <p className="text-slate-900/60 text-xs mt-2 font-medium uppercase tracking-wider">No hidden fees. Ever.</p>
            </div>
          </div>
        </div>
      </div>
      <BookingCTA />
    </motion.div>
  );
}
