'use client';
import timelineData from '../data/timelineData';
import { motion, AnimatePresence } from 'framer-motion';

export default function Timeline({ index, setIndex, filter }) {
  const categoryMap = {
    Education: 'text-yellow-400 bg-yellow-400',
    Work: 'text-green-400 bg-green-400',
    Clubs: 'text-pink-400 bg-pink-400',
    Sports: 'text-orange-400 bg-orange-400',
  };

  const filteredData = filter === 'All' ? timelineData : timelineData.filter((e) => e.category === filter);
  const total = filteredData.length;

  const selectEvent = (i) => setIndex(i);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[150px] bg-black/95 backdrop-blur border-t border-neutral-800 z-40">
      <div className="relative h-full px-8">
        {/* Timeline Track */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#2a2a2a] -translate-y-1/2" />

        {/* Duration Bars */}
        {filteredData.map((event, i) => {
          if (!event.endDate) return null;

          const start = new Date(event.date).getTime();
          const end = new Date(event.endDate).getTime();
          const duration = end - start;
          const totalRange = new Date(filteredData[total - 1].date).getTime() - new Date(filteredData[0].date).getTime();
          const leftPercent = ((start - new Date(filteredData[0].date).getTime()) / totalRange) * 100;
          const widthPercent = (duration / totalRange) * 100;

          return (
            <div
              key={`bar-${i}`}
              className={`absolute h-1 top-[calc(50%-1px)] rounded-full opacity-60 ${categoryMap[event.category]?.split(' ')[1]}`}
              style={{
                left: `${leftPercent}%`,
                width: `${widthPercent}%`,
              }}
            />
          );
        })}

        {/* Event Ticks */}
        <div className="relative h-full flex items-center justify-between px-4 overflow-x-auto">
          <AnimatePresence mode="wait">
            {filteredData.map((event, i) => {
              const date = new Date(event.date);
              const label =
                date.getFullYear() >= 2022
                  ? date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                  : date.getFullYear();

              return (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: i === index ? 1.6 : 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex flex-col items-center cursor-pointer"
                  onClick={() => selectEvent(i)}
                >
                  <div
                    className={`w-[2px] mb-2 rounded-sm transition-all ${
                      i === index
                        ? 'bg-white h-9 shadow-[0_0_10px_#4a9eff]'
                        : `${categoryMap[event.category]?.split(' ')[1] || 'bg-gray-600'} h-5`
                    }`}
                  />
                  <div
                    className={`text-xs transition-colors ${
                      i === index ? 'text-white font-semibold' : 'text-gray-400'
                    }`}
                  >
                    {label}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
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
