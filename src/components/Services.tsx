import { motion } from 'motion/react';
import { HeartPulse, Baby, Activity, Brain, Microscope, Pill } from 'lucide-react';

const services = [
  {
    icon: HeartPulse,
    title: "Cardiology",
    desc: "Comprehensive heart care including diagnostics, hypertension management, and echocardiograms.",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: Activity,
    title: "General Medicine",
    desc: "Routine wellness exams, internal medicine, and chronic disease management for all ages.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Baby,
    title: "Pediatrics",
    desc: "Specialized care for children, including vaccinations, growth monitoring, and developmental assessments.",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: Brain,
    title: "Neurology",
    desc: "Expert diagnosis and treatment for nervous system disorders, migraines, and cognitive health.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Microscope,
    title: "Diagnostic Lab",
    desc: "State-of-the-art laboratory testing with fast and accurate results reported digitally.",
    color: "bg-teal-50 text-teal-600"
  },
  {
    icon: Pill,
    title: "Pharmacy Services",
    desc: "In-house pharmacy ensuring you have immediate access to your prescribed medications.",
    color: "bg-healing-50 text-healing-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-medical-600 uppercase tracking-widest mb-4">Our Services</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Expert Healthcare Solutions for Every Stage of Life</h3>
          <p className="text-lg text-slate-600">
            We provide a wide range of specialized medical services tailored to meet your unique needs. Our multi-disciplinary team is here to support your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[32px] bg-white border border-slate-100 hover:border-medical-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <button className="text-medical-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <span className="text-lg">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
