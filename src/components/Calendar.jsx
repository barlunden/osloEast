import { useState } from "react";

const events = [
  {
    date: "2025-09-10",
    title: "Oppstartsamling",
    time: "18:00",
    location: "Kulturhuset, Oslo øst",
    description: "Første samling for høstsemesteret. Velkommen!"
  },
  {
    date: "2025-10-05",
    title: "Helgeseminar",
    time: "10:00-16:00",
    location: "Øvingslokale, Oslo øst",
    description: "Intensiv øving og sosialt. Lunsj inkludert."
  },
  {
    date: "2025-11-15",
    title: "Høstkonsert",
    time: "19:00",
    location: "Konsertsalen, Oslo øst",
    description: "Åpen konsert for familie og venner."
  }
];

export default function Calendar() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="calendar" className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-4">Aktivitetskalender</h2>
      <ul className="grid gap-6 md:grid-cols-2">
        {events.map((event, idx) => (
          <li key={idx} className="bg-white rounded shadow p-6 hover:bg-korps1/10 transition cursor-pointer" onClick={() => setSelected(idx)}>
            <div className="font-semibold text-lg mb-1">{event.title}</div>
            <div className="text-sm text-korps2 mb-2">{event.date} kl. {event.time}</div>
            <div className="text-sm text-gray-600 mb-2">{event.location}</div>
            <div className="text-gray-700">{event.description}</div>
          </li>
        ))}
      </ul>
      {selected !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-lg p-8 max-w-md shadow-lg relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-xl" onClick={() => setSelected(null)}>&times;</button>
            <div className="font-bold text-2xl mb-2">{events[selected].title}</div>
            <div className="mb-1 text-korps2">{events[selected].date} kl. {events[selected].time}</div>
            <div className="mb-2 text-gray-600">{events[selected].location}</div>
            <div>{events[selected].description}</div>
          </div>
        </div>
      )}
    </section>
  );
}
