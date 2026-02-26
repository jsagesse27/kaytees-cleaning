import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { COMPANY } from '../siteConfig';
import { CheckCircle2, Calendar, Clock, User, Mail, Phone, MapPin, Sparkles, Shield } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    frequency: 'one-time',
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4); // Success step
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 bg-slate-50 min-h-screen"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Request a Quote</h1>
          <p className="text-slate-600">Complete the form below to schedule your professional cleaning, commercial or residential.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-bold relative z-10 transition-all duration-300",
                step >= s ? "bg-brand-primary text-white scale-110 shadow-lg shadow-brand-primary/20" : "bg-white text-slate-400 border border-slate-200"
              )}
            >
              {s}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Sparkles className="text-brand-accent" />
                Select Your Service
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setFormData({ ...formData, service: service.id })}
                    className={cn(
                      "p-6 rounded-2xl border-2 text-left transition-all",
                      formData.service === service.id
                        ? "border-brand-primary bg-brand-primary/5 shadow-md"
                        : "border-slate-100 hover:border-slate-200 bg-slate-50"
                    )}
                  >
                    <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                    <p className="text-sm text-slate-500">{service.price}</p>
                  </button>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-8">Frequency</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                {['one-time', 'weekly', 'bi-weekly'].map((freq) => (
                  <button
                    key={freq}
                    onClick={() => setFormData({ ...formData, frequency: freq })}
                    className={cn(
                      "p-4 rounded-xl border-2 text-center capitalize font-medium transition-all",
                      formData.frequency === freq
                        ? "border-brand-primary bg-brand-primary/5"
                        : "border-slate-100 hover:border-slate-200 bg-slate-50"
                    )}
                  >
                    {freq.replace('-', ' ')}
                    {freq !== 'one-time' && <span className="block text-[10px] text-brand-primary font-bold uppercase mt-1">Save 15%</span>}
                  </button>
                ))}
              </div>

              <button
                disabled={!formData.service}
                onClick={() => setStep(2)}
                className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-secondary transition-colors"
              >
                Next Step
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <User className="text-brand-accent" />
                Your Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-bold text-slate-700">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      id="fullName"
                      type="text"
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      id="email"
                      type="email"
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                      placeholder="john@example.com"

                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      id="phone"
                      type="tel"
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-bold text-slate-700">Service Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      id="address"
                      type="text"
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                      placeholder="123 Main St, City, ST"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 bg-slate-100 text-slate-600 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                >
                  Back
                </button>
                <button
                  disabled={!formData.name || !formData.email || !formData.address}
                  onClick={() => setStep(3)}
                  className="flex-[2] bg-brand-primary text-white py-4 rounded-xl font-bold disabled:opacity-50 hover:bg-brand-secondary transition-colors"
                >
                  Next Step
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Calendar className="text-brand-accent" />
                Schedule Your Clean
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="space-y-2">
                  <label htmlFor="prefDate" className="text-sm font-bold text-slate-700">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      id="prefDate"
                      type="date"
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="prefTime" className="text-sm font-bold text-slate-700">Preferred Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select
                      id="prefTime"
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none appearance-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    >
                      <option value="">Select a time</option>
                      <option value="morning">Morning (8am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 4pm)</option>
                      <option value="evening">Evening (4pm - 8pm)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-12">
                <h3 className="font-bold mb-4">Booking Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Service:</span>
                    <span className="font-bold text-slate-900 capitalize">{formData.service.replace('-', ' ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Frequency:</span>
                    <span className="font-bold text-slate-900 capitalize">{formData.frequency.replace('-', ' ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Address:</span>
                    <span className="font-bold text-slate-900">{formData.address}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 bg-slate-100 text-slate-600 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-[2] bg-brand-primary text-white py-4 rounded-xl font-bold hover:bg-brand-secondary transition-colors shadow-lg shadow-brand-primary/20"
                >
                  Confirm Booking
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Booking Confirmed!</h2>
              <p className="text-slate-600 mb-12 max-w-md mx-auto">
                Thank you for choosing {COMPANY.shortName}. We've sent a confirmation email to <span className="font-bold text-slate-900">{formData.email}</span> with all the details.
              </p>
              <button
                onClick={() => window.location.href = '/'}
                className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-secondary transition-colors"
              >
                Return Home
              </button>
            </motion.div>
          )}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-50">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Fully Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
