import { motion } from 'motion/react';
import { Award, Clock, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-bold text-medical-600 uppercase tracking-widest mb-4">Our History & Mission</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
              A Legacy of Care, A Future of <span className="text-medical-600 italic">Well-being</span>
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Founded in 2005, Lumina Wellness began with a simple mission: to provide high-quality healthcare that's accessible and personalized. Over two decades, we've grown into a leading multi-specialty hub in the heart of the city.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Award, title: "Excellence", desc: "Consistently recognized as one of the top specialized clinics." },
                { icon: ShieldCheck, title: "Integrity", desc: "Transparent treatments and patient-first approach always." },
                { icon: Clock, title: "Efficiency", desc: "Minimal wait times with advanced digital scheduling." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition-hover hover:shadow-md">
                  <div className="flex-shrink-0 w-12 h-12 bg-medical-50 rounded-xl flex items-center justify-center text-medical-600">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-medical-600 rounded-[60px] rotate-3 scale-105 opacity-10 group-hover:rotate-6 transition-transform" />
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71f1539127?auto=format&fit=crop&q=80&w=800&h=1000"
                alt="Our Main Facility"
                className="relative rounded-[50px] w-full aspect-[4/5] object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Doctor Profile Mini-Card */}
              <motion.div 
                whileInView={{ y: [20, 0], opacity: [0, 1] }}
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-xs"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200&h=200" 
                    alt="Dr. Adrian Bennett" 
                    className="w-16 h-16 rounded-2xl object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-bold text-slate-900">Dr. Adrian Bennett</p>
                    <p className="text-xs font-semibold text-medical-600 uppercase tracking-wider">Chief Medical Officer</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "At Lumina, we don't just treat symptoms; we care for the whole person. Our goal is to empower you with health."
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
