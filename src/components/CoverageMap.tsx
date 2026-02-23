import { motion } from 'motion/react';
import { Navigation, ShieldCheck, MapPin } from 'lucide-react';

export default function ZipCodeCheck() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-slate-100 relative overflow-hidden">
          {/* Decorative Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[100px] -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/5 blur-[100px] -z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">Service Area</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Check Availability <br />
                <span className="text-brand-accent italic">In Your Neighborhood</span>
              </h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We're rapidly expanding! Enter your zip code below to see if our professional cleaning teams are already serving your area.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Enter your Zip Code" 
                    className="w-full bg-slate-50 border border-slate-200 pl-12 pr-4 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-brand-primary transition-all font-medium"
                  />
                </div>
                <button className="bg-brand-primary text-white px-10 py-4 rounded-2xl font-bold hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20">
                  Check Now
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-4">
                  <Navigation className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Local Dispatch</h4>
                <p className="text-sm text-slate-500">Fast response times from teams living in your community.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900">Vetted Locally</h4>
                <p className="text-sm text-slate-500">Every cleaner is background checked and professionally trained.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
