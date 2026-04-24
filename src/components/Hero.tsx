import { motion } from 'motion/react';
import { ChevronRight, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-medical-50 rounded-full blur-3xl opacity-50 z-0" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-healing-50 rounded-full blur-3xl opacity-30 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-medical-100 text-medical-700 text-sm font-bold tracking-wide uppercase mb-6">
              Trusted Medical Professionals
            </span>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-8">
              Compassionate Care for a <span className="text-medical-600">Healthier You</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              Experience world-class healthcare at Lumina Wellness. From routine checkups to specialized treatments, your well-being is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-medical-600 hover:bg-medical-700 text-white rounded-2xl text-lg font-bold transition-all shadow-xl shadow-medical-600/20"
              >
                Book Appointment
                <Calendar className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-100 hover:border-medical-200 text-slate-700 rounded-2xl text-lg font-bold transition-all"
              >
                Our Services
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200&h=800"
                alt="Clinic Reception"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Stats Card Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-healing-100 rounded-2xl flex items-center justify-center">
                  <div className="w-4 h-4 bg-healing-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">15k+</p>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Happy Patients</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
