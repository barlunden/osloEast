import { useState } from "react";

const events = [
  {
    eventType: "samling",
    startDate: "2026-04-24",
    endDate: "2026-04-26",
    title: "Vårsamling",
    time: "18:00",
    location: "Kulturhuset, Oslo øst",
    description: "Første samling for høstsemesteret. Velkommen!",
  },
  {
    eventType: "samling",
    startDate: "2026-06-12",
    endDate: "2026-06-14",
    title: "Helgeseminar",
    time: "10:00-16:00",
    location: "Øvingslokale, Oslo øst",
    description: "Intensiv øving og sosialt. Lunsj inkludert.",
  },
  {
    eventType: "reise",
    startDate: "2026-10-10",
    endDate: "2026-10-15", // Fiksa frå 15. månad til 15. dag
    title: "Barcelona Wind Festival",
    time: "Hele dagen",
    location: "Barcelona",
    description: "Konkurranse for wind bands.",
  },
];

// Betre datoformatering med norske namn
function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("nb-NO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function Calendar() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="calendar" className="py-24 bg-gradient-to-br from-oebl-900 via-oebl-800 to-oebl-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-12 tracking-tight">
            Aktivitetskalender
          </h2>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {events.map((event, idx) => (
              <button
                key={idx}
                onClick={() => setSelected(idx)}
                className="group text-left bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-oer-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    {event.eventType}
                  </span>
                  <span className="text-oebl-300 group-hover:text-white transition-colors">
                    →
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-oebl-200 text-sm font-medium">
                  {formatDate(event.startDate)} {event.endDate && `- ${formatDate(event.endDate)}`}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal / Detaljvisning */}
      {selected !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-oebl-950/90 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <div 
            className="bg-white rounded-[2rem] p-8 sm:p-12 max-w-xl w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-oebl-300 hover:text-oebl-950 text-3xl font-light"
            >
              &times;
            </button>
            
            <span className="inline-block bg-oebl-100 text-oebl-800 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              {events[selected].eventType}
            </span>
            
            <h2 className="text-3xl font-black text-oebl-950 mb-4">{events[selected].title}</h2>
            
            <div className="space-y-6 text-oebl-800">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-oebl-50 flex items-center justify-center text-oer-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-oebl-400">Dato og tid</p>
                  <p className="font-bold">{formatDate(events[selected].startDate)} kl. {events[selected].time}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-oebl-50 flex items-center justify-center text-oer-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-oebl-400">Stad</p>
                  <p className="font-bold">{events[selected].location}</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed pt-4 border-t border-oebl-50">
                {events[selected].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}