import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Regular Patient",
    content: "The level of care at Lumina is unmatched. Dr. Bennett took the time to explain everything clearly. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Michael Chen",
    role: "Cardiac Patient",
    content: "Excellent facilities and very professional staff. The online booking system made it super easy to schedule my follow-ups.",
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    name: "Emma Rodriguez",
    role: "Mother of two",
    content: "The pediatric wing is so child-friendly. My kids actually look forward to their checkups now. Thank you, Lumina!",
    avatar: "https://i.pravatar.cc/150?u=emma"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-medical-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-medical-100 uppercase tracking-widest mb-4">Patient Voices</h2>
          <h3 className="text-4xl font-display font-bold mb-6 italic">What our community says</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-[40px]">
              <div className="flex gap-1 mb-6 text-healing-500">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-lg text-slate-200 leading-relaxed mb-8 italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-medical-600" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-medical-200 uppercase tracking-tighter font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
