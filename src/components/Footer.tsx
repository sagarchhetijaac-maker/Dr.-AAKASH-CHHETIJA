import { Plus, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-medical-600 rounded-lg">
                <Plus className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                Lumina <span className="text-medical-500 font-sans font-medium">Wellness</span>
              </span>
            </div>
            <p className="leading-relaxed">
              Providing premium healthcare solutions with a patient-centric approach since 2005. Your health is our lifelong commitment.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-medical-600 hover:border-medical-600 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#home" className="hover:text-medical-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-medical-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-medical-400 transition-colors">Treatments</a></li>
              <li><a href="#contact" className="hover:text-medical-400 transition-colors">Location</a></li>
              <li><a href="#appointment" className="hover:text-medical-400 transition-colors">Booking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">Treatments</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-medical-400 transition-colors">Cardiology</a></li>
              <li><a href="#" className="hover:text-medical-400 transition-colors">Neurology</a></li>
              <li><a href="#" className="hover:text-medical-400 transition-colors">Pediatrics</a></li>
              <li><a href="#" className="hover:text-medical-400 transition-colors">Diagnostics</a></li>
              <li><a href="#" className="hover:text-medical-400 transition-colors">Emergency Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="mb-6">Stay updated with health tips and clinic news.</p>
            <form className="relative">
              <input type="email" placeholder="Your Email" className="w-full bg-slate-800 border-none rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-medical-600" />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-medical-600 rounded-lg text-white font-bold text-sm hover:bg-medical-700 transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-sm font-medium">© 2024 Lumina Wellness Clinic. All rights reserved.</p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all shadow-lg">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
