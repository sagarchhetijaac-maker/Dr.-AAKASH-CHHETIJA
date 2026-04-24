import { motion } from 'motion/react';
import { Phone, Menu, X, Plus } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-medical-600 rounded-lg">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-medical-900 font-display">
              Lumina <span className="text-medical-600 font-sans font-medium">Wellness</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 hover:text-medical-600 transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 px-4 py-2 bg-healing-500 hover:bg-healing-600 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-healing-500/20"
            >
              <Phone className="w-4 h-4" />
              Emergency
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 py-6"
        >
          <div className="flex flex-col space-y-4">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-900"
              >
                {item}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-2 w-full py-3 bg-healing-500 text-white rounded-xl font-bold"
            >
              <Phone className="w-5 h-5" />
              Emergency Call
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
