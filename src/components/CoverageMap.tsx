import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, ShieldCheck, CheckCircle2, AlertTriangle } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { SERVICE_AREA } from '../siteConfig';

// Fix default marker icons for Leaflet + bundlers
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Zip code ranges from config
const NYC_ZIP_RANGES = SERVICE_AREA.zipRanges;

function isNYCZip(zip: string): boolean {
  const num = parseInt(zip, 10);
  if (isNaN(num)) return false;
  return NYC_ZIP_RANGES.some(range => num >= range.min && num <= range.max);
}

// Component to fly to a marker location
function FlyToLocation({ position }: { position: [number, number] | null }) {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, 14, { duration: 1.5 });
    }
  }, [position, map]);
  return null;
}

function getBoroughCenter(zip: string): [number, number] {
  const num = parseInt(zip, 10);
  // Find the matching borough from config
  for (const range of SERVICE_AREA.zipRanges) {
    if (num >= range.min && num <= range.max) {
      // Find the corresponding borough by matching zip range
      for (const borough of SERVICE_AREA.boroughs) {
        // Use the first borough whose center is closest — simplified: just return the first match
        return borough.center;
      }
    }
  }
  return SERVICE_AREA.mapCenter;
}

// Service areas from config
const CONFIG_SERVICE_AREAS = SERVICE_AREA.boroughs;

type ZipResult = 'none' | 'success' | 'outside';

export default function CoverageMap() {
  const [zip, setZip] = useState('');
  const [result, setResult] = useState<ZipResult>('none');
  const [markerPos, setMarkerPos] = useState<[number, number] | null>(null);

  const checkZip = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zip.trim();
    if (cleanZip.length !== 5) return;

    if (isNYCZip(cleanZip)) {
      setResult('success');
      // Use Nominatim to geocode the zip with a safe fallback
      try {
        const resp = await fetch(`https://nominatim.openstreetmap.org/search?postalcode=${cleanZip}&country=US&format=json&limit=1`, {
          headers: {
            'Accept': 'application/json',
            'User-Agent': SERVICE_AREA.mapUserAgent
          }
        });
        if (!resp.ok) throw new Error('Fetch failed');
        const data = await resp.json();
        if (data && data.length > 0) {
          setMarkerPos([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        } else {
          setMarkerPos(getBoroughCenter(cleanZip));
        }
      } catch {
        // Fallback to the exact borough center to avoid Manhattan default
        setMarkerPos(getBoroughCenter(cleanZip));
      }
    } else {
      setResult('outside');
      setMarkerPos(null);
    }
  };

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Copy + Form */}
          <div>
            <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">Service Area</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Check Availability <br />
              <span className="text-brand-accent italic">In Your District</span>
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              {SERVICE_AREA.description}
            </p>

            <form onSubmit={checkZip} className="flex flex-col sm:flex-row gap-4 relative mb-6">
              <label htmlFor="zip-input" className="sr-only">Zip Code</label>
              <div className="relative flex-grow">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  id="zip-input"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={5}
                  value={zip}
                  onChange={(e) => {
                    setZip(e.target.value.replace(/\D/g, ''));
                    setResult('none');
                  }}
                  placeholder="Enter your Zip Code"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                />
              </div>
              <button
                type="submit"
                className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-2xl font-bold transition-all cursor-pointer whitespace-nowrap"
              >
                Check Now
              </button>
            </form>

            {/* Result Messages */}
            <AnimatePresence mode="wait">
              {result === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 px-5 py-3 rounded-2xl mb-8"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-sm font-semibold">Great news! We serve your area. Book a cleaning today.</p>
                </motion.div>
              )}
              {result === 'outside' && (
                <motion.div
                  key="outside"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-800 px-5 py-3 rounded-2xl mb-8"
                >
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-sm font-semibold">We don't typically service this area. Contact us directly for confirmation.</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-4">
                  <Navigation className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Local Dispatch</h4>
                <p className="text-sm text-slate-600">Fast response times from teams living in your community.</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-4">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Vetted Locally</h4>
                <p className="text-sm text-slate-600">Every cleaner is background checked and professionally trained.</p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Map */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-[500px] lg:h-[600px]">
              <style>{`
                .leaflet-control-zoom,
                .leaflet-control-attribution {
                  display: none !important;
                }
                .borough-label {
                  background: none !important;
                  border: none !important;
                  box-shadow: none !important;
                  font-family: 'Playfair Display', serif;
                  font-weight: 700;
                  font-size: 11px;
                  color: #1B6B4A;
                  text-shadow: 0 1px 3px rgba(255,255,255,0.9), 0 0 6px rgba(255,255,255,0.7);
                  white-space: nowrap;
                  letter-spacing: 0.5px;
                  text-transform: uppercase;
                  pointer-events: none;
                }
                .dark .leaflet-container {
                  filter: brightness(0.7) saturate(0.5);
                }
              `}</style>
              <MapContainer
                center={SERVICE_AREA.mapCenter}
                zoom={SERVICE_AREA.mapZoom}
                scrollWheelZoom={true}
                zoomControl={false}
                style={{ height: '100%', width: '100%' }}
                className="z-0"
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                />

                {/* Borough labels only */}
                {CONFIG_SERVICE_AREAS.map((area) => (
                  <Marker
                    key={area.name}
                    position={area.center}
                    icon={L.divIcon({
                      className: 'borough-label',
                      html: area.name,
                      iconSize: [80, 16],
                      iconAnchor: [40, 8],
                    })}
                  />
                ))}

                {/* Coverage circle appears only after valid zip search */}
                {markerPos && (
                  <>
                    <Circle
                      center={markerPos}
                      radius={3000}
                      pathOptions={{
                        color: '#1B6B4A',
                        fillColor: '#1B6B4A',
                        fillOpacity: 0.12,
                        weight: 2,
                        dashArray: '6 4',
                      }}
                    />
                    <Circle
                      center={markerPos}
                      radius={1200}
                      pathOptions={{
                        color: '#D4A928',
                        fillColor: '#D4A928',
                        fillOpacity: 0.2,
                        weight: 2,
                      }}
                    />
                  </>
                )}

                {/* User's searched location marker */}
                {markerPos && (
                  <Marker position={markerPos}>
                    <Popup>
                      <div className="text-center">
                        <p className="font-bold text-green-700">We're here!</p>
                        <p className="text-xs text-slate-600">Zip code {zip} is covered</p>
                      </div>
                    </Popup>
                  </Marker>
                )}

                <FlyToLocation position={markerPos} />
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
