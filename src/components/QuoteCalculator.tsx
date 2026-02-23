import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Bath, Square, Sparkles, Calculator, ArrowRight, Building2, Droplets, CheckCircle2, User, Mail, Phone, MapPin, Calendar, Clock, FileText, PartyPopper } from 'lucide-react';
import { cn } from '../lib/utils';

type SpaceType = 'office' | 'home' | 'facility';
type CleanType = 'standard' | 'deep' | 'move';
type Frequency = 'one-time' | 'weekly' | 'bi-weekly' | 'monthly';

export default function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [spaceType, setSpaceType] = useState<SpaceType>('office');
  const [cleanType, setCleanType] = useState<CleanType>('standard');
  const [frequency, setFrequency] = useState<Frequency>('one-time');
  const [rooms, setRooms] = useState(4);
  const [bathrooms, setBathrooms] = useState(2);
  const [sqft, setSqft] = useState(1500);
  const [total, setTotal] = useState(0);
  const [bubbles, setBubbles] = useState<{ id: number; x: number; y: number; size: number; delay: number }[]>([]);

  // Contact info
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Scheduling
  const [address, setAddress] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 6;

  // Generate floating cleaning bubbles
  useEffect(() => {
    const newBubbles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 4 + Math.random() * 12,
      delay: Math.random() * 5,
    }));
    setBubbles(newBubbles);
  }, []);

  // Calculate price
  useEffect(() => {
    let base = 0;
    const sqftRate = spaceType === 'facility' ? 0.12 : spaceType === 'office' ? 0.1 : 0.08;
    base += sqft * sqftRate;
    base += rooms * 15;
    base += bathrooms * 25;

    if (cleanType === 'deep') base *= 1.5;
    if (cleanType === 'move') base *= 1.8;

    if (frequency === 'weekly') base *= 0.75;
    else if (frequency === 'bi-weekly') base *= 0.85;
    else if (frequency === 'monthly') base *= 0.9;

    setTotal(Math.round(base));
  }, [rooms, bathrooms, sqft, spaceType, cleanType, frequency]);

  const spaceOptions = [
    { value: 'office' as SpaceType, label: 'Office / Retail', icon: Building2 },
    { value: 'home' as SpaceType, label: 'Home', icon: Home },
    { value: 'facility' as SpaceType, label: 'Facility', icon: Square },
  ];

  const cleanOptions = [
    { value: 'standard' as CleanType, label: 'Standard Clean', desc: 'Regular maintenance' },
    { value: 'deep' as CleanType, label: 'Deep Clean', desc: 'Top-to-bottom scrub' },
    { value: 'move' as CleanType, label: 'Move In/Out', desc: 'Full property reset' },
  ];

  const freqOptions = [
    { value: 'one-time' as Frequency, label: 'One-Time', discount: '' },
    { value: 'weekly' as Frequency, label: 'Weekly', discount: '25% off' },
    { value: 'bi-weekly' as Frequency, label: 'Bi-Weekly', discount: '15% off' },
    { value: 'monthly' as Frequency, label: 'Monthly', discount: '10% off' },
  ];

  const SliderTrack = ({ value, min, max, onChange, label, icon: Icon }: { value: number; min: number; max: number; onChange: (v: number) => void; label: string; icon: React.ElementType }) => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="flex items-center gap-2 font-bold text-slate-300 text-sm uppercase tracking-wider">
          <Icon className="w-4 h-4 text-brand-accent" />
          {label}
        </label>
        <motion.span
          key={value}
          initial={{ scale: 1.3, color: '#D4A928' }}
          animate={{ scale: 1, color: '#D4A928' }}
          className="text-brand-accent font-bold text-2xl"
        >
          {value.toLocaleString()}
        </motion.span>
      </div>
      <div className="relative h-2 bg-brand-primary/20 rounded-full">
        <input
          type="range"
          min={min}
          max={max}
          step={label === 'Sq Ft' ? 10 : 1}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
        />
        <motion.div
          className="absolute h-full bg-brand-accent rounded-full shadow-[0_0_10px_rgba(212,169,40,0.5)]"
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
          layout
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-4 border-brand-accent shadow-lg z-10"
          style={{ left: `calc(${((value - min) / (max - min)) * 100}% - 12px)` }}
          layout
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      </div>
    </div>
  );

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-brand-primary/20">
              <Calculator className="w-4 h-4" />
              <span>Instant Quote</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Honest Pricing, <br />
              <span className="text-brand-accent italic">No Surprises.</span>
            </h3>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              We believe in transparency. Use our interactive tool to get an instant estimate for your facility or home. No email required, no waiting for callbacks.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-brand-primary">
                  <Sparkles className="w-6 h-6" />
                </div>
                <p className="font-bold text-slate-800">Customized to your space, office or home</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-brand-primary">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <p className="font-bold text-slate-800">Lock in your price today</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Calculator */}
          <div className="relative">
            {/* Floating bubbles VFX */}
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] pointer-events-none z-0">
              {bubbles.map((bubble) => (
                <motion.div
                  key={bubble.id}
                  className="absolute rounded-full bg-white/10 border border-white/10"
                  style={{
                    left: `${bubble.x}%`,
                    top: `${bubble.y}%`,
                    width: bubble.size,
                    height: bubble.size,
                  }}
                  animate={{
                    y: [-20, -60, -20],
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4 + bubble.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: bubble.delay,
                  }}
                />
              ))}
            </div>

            <motion.div
              className="relative z-10 bg-brand-dark rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-brand-primary/10"
              layout
            >
              {/* Step indicator */}
              <div className="flex items-center gap-2 mb-8">
                {Array.from({ length: totalSteps }, (_, i) => i + 1).map((s) => (
                  <motion.div
                    key={s}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      s === step ? "bg-brand-accent w-10" : s < step ? "bg-brand-accent/50 w-5" : "bg-white/10 w-5"
                    )}
                    layout
                  />
                ))}
                <span className="text-xs text-slate-400 ml-2">Step {step} of {totalSteps}</span>
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h4 className="text-white font-bold text-lg mb-2">What kind of space?</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {spaceOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => setSpaceType(opt.value)}
                          className={cn(
                            "flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all cursor-pointer",
                            spaceType === opt.value
                              ? "border-brand-accent bg-brand-accent/10 text-brand-accent"
                              : "border-white/10 text-slate-400 hover:border-white/30"
                          )}
                        >
                          <opt.icon className="w-6 h-6" />
                          <span className="text-xs font-bold">{opt.label}</span>
                        </button>
                      ))}
                    </div>

                    <h4 className="text-white font-bold text-lg mt-6 mb-2">Type of clean</h4>
                    <div className="space-y-3">
                      {cleanOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => setCleanType(opt.value)}
                          className={cn(
                            "w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer text-left",
                            cleanType === opt.value
                              ? "border-brand-accent bg-brand-accent/10"
                              : "border-white/10 hover:border-white/30"
                          )}
                        >
                          <div>
                            <span className={cn("font-bold text-sm", cleanType === opt.value ? "text-brand-accent" : "text-white")}>{opt.label}</span>
                            <p className="text-xs text-slate-400">{opt.desc}</p>
                          </div>
                          {cleanType === opt.value && <CheckCircle2 className="w-5 h-5 text-brand-accent" />}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setStep(2)}
                      className="w-full bg-brand-accent text-slate-900 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 group hover:-translate-y-0.5 transition-transform cursor-pointer mt-4"
                    >
                      Next: Space Details
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="space-y-8 p-6 bg-brand-primary/10 rounded-3xl border border-white/10">
                      <SliderTrack value={rooms} min={1} max={20} onChange={setRooms} label={spaceType === 'home' ? 'Bedrooms' : 'Offices / Rooms'} icon={Home} />
                      <SliderTrack value={bathrooms} min={1} max={10} onChange={setBathrooms} label={spaceType === 'home' ? 'Bathrooms' : 'Restrooms'} icon={Bath} />
                      <SliderTrack value={sqft} min={200} max={10000} onChange={setSqft} label="Sq Ft" icon={Square} />
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setStep(1)}
                        className="px-6 py-4 rounded-2xl border-2 border-white/20 text-white font-bold hover:border-white/40 transition-all cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        className="flex-1 bg-brand-accent text-slate-900 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 group hover:-translate-y-0.5 transition-transform cursor-pointer"
                      >
                        Next: Frequency
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h4 className="text-white font-bold text-lg mb-2">How often?</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {freqOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => setFrequency(opt.value)}
                          className={cn(
                            "flex flex-col items-center gap-1 p-4 rounded-2xl border-2 transition-all cursor-pointer",
                            frequency === opt.value
                              ? "border-brand-accent bg-brand-accent/10"
                              : "border-white/10 hover:border-white/30"
                          )}
                        >
                          <span className={cn("font-bold text-sm", frequency === opt.value ? "text-brand-accent" : "text-white")}>{opt.label}</span>
                          {opt.discount && <span className="text-xs text-green-400 font-bold">{opt.discount}</span>}
                        </button>
                      ))}
                    </div>

                    {/* Animated bubbles around the price */}
                    <div className="relative py-8">
                      <motion.div
                        className="absolute top-2 left-8 w-3 h-3 bg-brand-accent/30 rounded-full"
                        animate={{ y: [-5, 5, -5], opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute bottom-2 right-12 w-4 h-4 bg-brand-accent/20 rounded-full"
                        animate={{ y: [5, -5, 5], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute top-6 right-6"
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <Droplets className="w-5 h-5 text-brand-accent/30" />
                      </motion.div>

                      <p className="text-xs text-center text-brand-accent/70 uppercase tracking-widest font-bold mb-2">Estimated Total</p>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-2xl text-brand-accent font-bold">$</span>
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={total}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            className="text-7xl font-bold text-white"
                          >
                            {total}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                      {frequency !== 'one-time' && (
                        <p className="text-xs text-center text-green-400 font-bold mt-1">per visit</p>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setStep(2)}
                        className="px-6 py-4 rounded-2xl border-2 border-white/20 text-white font-bold hover:border-white/40 transition-all cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setStep(4)}
                        className="flex-1 bg-brand-accent text-slate-900 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand-accent/20 flex items-center justify-center gap-2 group hover:-translate-y-1 transition-transform cursor-pointer"
                      >
                        Book now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                    <p className="mt-3 text-[10px] text-slate-500 italic text-center">
                      *Final price may vary based on specific conditions and requirements.
                    </p>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                  >
                    <h4 className="text-white font-bold text-lg mb-2">Your Contact Info</h4>
                    <div className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => setStep(3)}
                        className="px-6 py-4 rounded-2xl border-2 border-white/20 text-white font-bold hover:border-white/40 transition-all cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setStep(5)}
                        disabled={!fullName.trim() || !email.trim() || !phone.trim()}
                        className="flex-1 bg-brand-accent text-slate-900 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 group hover:-translate-y-0.5 transition-transform cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        Next: Schedule
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                  >
                    <h4 className="text-white font-bold text-lg mb-2">Service Details</h4>
                    <div className="space-y-4">
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Service Address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="date"
                            value={preferredDate}
                            onChange={(e) => setPreferredDate(e.target.value)}
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent [color-scheme:dark]"
                          />
                        </div>
                        <div className="relative">
                          <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <select
                            value={timeSlot}
                            onChange={(e) => setTimeSlot(e.target.value)}
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-slate-900">Time</option>
                            <option value="morning" className="bg-slate-900">Morning (8am–12pm)</option>
                            <option value="afternoon" className="bg-slate-900">Afternoon (12pm–5pm)</option>
                            <option value="evening" className="bg-slate-900">Evening (5pm–9pm)</option>
                          </select>
                        </div>
                      </div>
                      <div className="relative">
                        <FileText className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                        <textarea
                          placeholder="Any special requests or notes (optional)"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          rows={3}
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent resize-none"
                        />
                      </div>
                    </div>

                    {/* Summary bar */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-400">Estimated Total</span>
                        <span className="text-2xl font-bold text-brand-accent">${total}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setStep(4)}
                        className="px-6 py-4 rounded-2xl border-2 border-white/20 text-white font-bold hover:border-white/40 transition-all cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => { setSubmitted(true); setStep(6); }}
                        disabled={!address.trim() || !preferredDate || !timeSlot}
                        className="flex-1 bg-brand-accent text-slate-900 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 group hover:-translate-y-0.5 transition-transform cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        Confirm Booking
                        <CheckCircle2 className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 6 && (
                  <motion.div
                    key="step6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 space-y-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
                      className="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto"
                    >
                      <PartyPopper className="w-10 h-10 text-brand-accent" />
                    </motion.div>

                    <div>
                      <h4 className="text-white font-bold text-2xl mb-2">You're All Set!</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Thank you, {fullName.split(' ')[0]}! A Kaytee's representative will reach out within 24 hours to confirm your cleaning and finalize the details.
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-5 border border-white/10 text-left space-y-3">
                      <div className="flex justify-between">
                        <span className="text-xs text-slate-400 uppercase tracking-wider">Service</span>
                        <span className="text-sm text-white font-semibold">{cleanType === 'standard' ? 'Standard' : cleanType === 'deep' ? 'Deep Clean' : 'Move In/Out'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-slate-400 uppercase tracking-wider">Frequency</span>
                        <span className="text-sm text-white font-semibold">{freqOptions.find(f => f.value === frequency)?.label}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-slate-400 uppercase tracking-wider">Date</span>
                        <span className="text-sm text-white font-semibold">{preferredDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-slate-400 uppercase tracking-wider">Time</span>
                        <span className="text-sm text-white font-semibold capitalize">{timeSlot}</span>
                      </div>
                      <div className="border-t border-white/10 pt-3 flex justify-between">
                        <span className="text-xs text-slate-400 uppercase tracking-wider">Estimated Total</span>
                        <span className="text-xl font-bold text-brand-accent">${total}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 italic">
                      A confirmation email has been sent to {email}.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
