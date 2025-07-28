'use client';
import timelineData from '../data/timelineData';

export default function Timeline({ index, setIndex }) {
  const total = timelineData.length;

  const selectEvent = (i) => setIndex(i);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[150px] bg-black/95 backdrop-blur border-t border-neutral-800 z-40">
      <div className="relative h-full px-8">
        {/* Timeline Track */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#2a2a2a] -translate-y-1/2" />

        {/* Progress Bar */}
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-white transition-all"
          style={{ width: `${(index / (total - 1)) * 100}%` }}
        />

        {/* Event Ticks */}
        <div className="relative h-full flex items-center justify-between px-4 overflow-x-auto">
          {timelineData.map((event, i) => {
            const date = new Date(event.date);
            const label =
              date.getFullYear() >= 2022
                ? date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                : date.getFullYear();

            return (
              <div
                key={i}
                className="relative flex flex-col items-center cursor-pointer min-w-[60px]"
                onClick={() => selectEvent(i)}
              >
                <div
                  className={`w-[2px] mb-2 transition-all ${
                    i === index
                      ? 'bg-white h-9 shadow-[0_0_10px_#4a9eff]'
                      : i % 3 === 0
                      ? 'bg-blue-400 h-7'
                      : 'bg-gray-600 h-5'
                  }`}
                />
                <div
                  className={`text-xs transition-colors ${
                    i === index ? 'text-white font-semibold' : 'text-gray-400'
                  }`}
                >
                  {label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2 flex gap-4 items-center z-50">
          <button
            className="w-10 h-10 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white disabled:opacity-30 transition"
            onClick={() => setIndex(index - 1)}
            disabled={index === 0}
          >
            ‹
          </button>
          <div className="text-xs text-gray-400 w-20 text-center">
            {index + 1} / {total}
          </div>
          <button
            className="w-10 h-10 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white disabled:opacity-30 transition"
            onClick={() => setIndex(index + 1)}
            disabled={index === total - 1}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
