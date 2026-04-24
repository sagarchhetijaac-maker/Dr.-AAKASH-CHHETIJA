import { motion } from 'motion/react';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="appointment" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[48px] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-16 bg-medical-600 text-white flex flex-col justify-center">
              <h3 className="text-4xl lg:text-5xl font-display font-bold mb-8">Ready to book your visit?</h3>
              <p className="text-xl text-medical-100 leading-relaxed mb-12">
                Fill out the form and our coordinator will contact you within 2 hours to confirm your time slot.
              </p>
              
              <div className="space-y-6">
                {[
                  "Choose your preferred specialist",
                  "Pick a convenient date and time",
                  "Receive instant confirmation via SMS",
                  "Expert medical consultation"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-medical-50">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 lg:p-16">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-healing-100 text-healing-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-3xl font-bold text-slate-900">Request Sent!</h4>
                  <p className="text-slate-600 text-lg">Thank you for choosing Lumina. We'll be in touch very soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Full Name</label>
                    <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-medical-600 transition-all font-medium" placeholder="E.g. John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Phone Number</label>
                    <input required type="tel" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-medical-600 transition-all font-medium" placeholder="+1 (234) 567-890" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Select Service</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-medical-600 transition-all font-medium appearance-none">
                      <option>General Checkup</option>
                      <option>Cardiology Specialist</option>
                      <option>Pediatric Consultation</option>
                      <option>Neurology</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Preferred Date</label>
                    <input required type="date" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-medical-600 transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Preferred Time</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-medical-600 transition-all font-medium appearance-none">
                      <option>Morning (09:00 - 12:00)</option>
                      <option>Afternoon (14:00 - 17:00)</option>
                      <option>Evening (18:00 - 20:00)</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Message (Optional)</label>
                    <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-medical-600 transition-all font-medium" placeholder="Any specific concerns?"></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button type="submit" className="w-full py-5 bg-medical-600 hover:bg-medical-700 text-white rounded-2xl text-lg font-bold flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] shadow-xl shadow-medical-600/20">
                      Submit Request
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
