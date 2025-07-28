export default function EventDisplay({ event }) {
  return (
    <div className="max-w-xl mx-auto text-left px-4 mb-10">
      <div className="mb-2 text-sm text-gray-400 tracking-wide uppercase">
        {event.date} {event.endDate ? `– ${event.endDate}` : ''}
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">{event.title}</h2>
      <p className="text-gray-300">{event.description}</p>
    </div>
  );
}
