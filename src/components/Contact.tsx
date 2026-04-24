import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-medical-600 uppercase tracking-widest mb-4">Get In Touch</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-8 leading-tight">We're here to help you <span className="text-healing-600 italic">wherever you are</span></h3>
            <p className="text-lg text-slate-600 mb-12">
              Our patient support center is available 24/7 for emergencies. For general inquiries, please visit us during business hours or call our front desk.
            </p>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Our Location", content: "123 Healthcare Ave, Medical District, City Center, ST 54321" },
                { icon: Phone, title: "Phone Support", content: "+1 (555) 000-HEALTH", sub: "+1 (555) 111-EMRG" },
                { icon: Mail, title: "Email Us", content: "care@luminawellness.com", sub: "appointments@luminawellness.com" },
                { icon: Clock, title: "Clinic Timings", content: "Mon-Sat: 08:00 - 20:00", sub: "Sun: Emergency Only" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-medical-50 rounded-2xl flex items-center justify-center text-medical-600">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600 font-medium">{item.content}</p>
                    {item.sub && <p className="text-slate-400 text-sm">{item.sub}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-50 min-h-[400px] relative group">
            {/* Google Maps Placeholder - In a real app, use Google Maps Embed API or an iframe */}
            <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-500 font-medium tracking-wide border-t border-slate-300 pt-4 px-8">
                  Google Maps Interactive Interface<br/>
                  <span className="text-xs uppercase font-bold text-slate-400">123 Healthcare Ave, Medical District</span>
                </p>
              </div>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.5515321345!2d-96.7970!3d32.7767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQ2JzM2LjEiTiA5Niw0Nyc0OS4yIlc!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              className="absolute inset-0 w-full h-full border-0 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
