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
		eventType: "samling",
		startDate: "2026-10-10",
		endDate: "2026-15-10",
		title: "Barcelona Wind Festival",
		time: "19:00",
		location: "Barcelona",
		description: "Konkurranse for wind bands.",
	},
];

function formatDate(dateStr) {
	const [year, month, day] = dateStr.split("-");
	return `${day}.${month}.${year}`;
}

export default function Calendar() {
	const [selected, setSelected] = useState(null);

	return (
		<section
			id="calendar"
			className="bg-gradient-to-br from-oebl-900 via-oebl-800 to-oebl-600"
		>
      <div className="container mx-auto max-md:px-4 py-16 ">

			<h2 className="text-4xl font-extrabold mb-8 tracking-wide text-white drop-shadow">
				Aktivitetskalender
			</h2>
			<ul className="grid gap-8 grid-cols-1 md:grid-cols-2">
				{events.map((event, idx) => (
          <li
          key={idx}
          className="bg-white rounded-xl shadow-lg p-6 hover:bg-oebl-100 hover:shadow-2xl transition-all cursor-pointer border border-oebl-300"
          onClick={() => setSelected(idx)}
					>
						<div className="font-bold text-xl tracking-wide mb-2 text-oebl-900">
							{event.title}
						</div>
						<div className="text-sm text-oebl-700 mb-2 font-medium">
							{event.eventType === "samling"
								? `${formatDate(event.startDate)} - ${formatDate(event.endDate)}`
								: `${formatDate(event.date)} kl. ${event.time}`}
						</div>
						<div className="text-sm text-oebl-600 mb-2">
							{event.location}
						</div>
						<div className="text-oebl-800 text-base">
							{event.description}
						</div>
					</li>
				))}
			</ul>
			{selected !== null && (
        <div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-2"
        onClick={() => setSelected(null)}
				>
					<div
						className="bg-oebl-900 text-white rounded-2xl p-8 w-full max-w-md shadow-2xl relative"
						onClick={(e) => e.stopPropagation()}
            >
						<button
							className="absolute top-4 right-4 text-2xl text-white hover:text-oebl-300"
							onClick={() => setSelected(null)}
              >
							&times;
						</button>
						<div className="font-extrabold text-2xl mb-3">
							{events[selected].title}
						</div>
						<div className="mb-2 text-oebl-200 text-base font-medium">
							{events[selected].eventType === "samling"
								? `${formatDate(events[selected].startDate)} - ${formatDate(
                  events[selected].endDate
                )}`
								: `${formatDate(events[selected].date)} kl. ${events[selected].time}`}
						</div>
						<div className="mb-3 text-oebl-300 text-base">
							{events[selected].location}
						</div>
						<div className="text-base">
							{events[selected].description}
						</div>
					</div>
				</div>
			)}
      </div>
		</section>
	);
}
