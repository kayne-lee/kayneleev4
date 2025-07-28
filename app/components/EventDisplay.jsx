export default function EventDisplay({ event }) {
  return (
    <div className="bg-[#1a1a1acc] border border-[#2a2a2a] rounded-xl p-8 mt-12 max-w-xl mx-auto transition-all">
      <div className="text-blue-400 text-sm font-medium mb-2">
        {new Date(event.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </div>
      <h2 className="text-2xl font-semibold text-white mb-2">{event.title}</h2>
      <p className="text-gray-300 text-base">{event.description}</p>
    </div>
  );
}
