import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Booking from './pages/Booking';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import DarkModeToggle from './components/DarkModeToggle';
import ChatWidget from './components/ChatWidget';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';

export default function App() {
  return (
    <Router>
      <MotionConfig reducedMotion="user">
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/book" element={<Booking />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <div className="hidden">
            <DarkModeToggle />
          </div>
          <ChatWidget />
        </div>
      </MotionConfig>
    </Router>
  );
}
