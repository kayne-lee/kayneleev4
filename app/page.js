// File: app/page.jsx
'use client';
import { useState, useEffect } from 'react';
import timelineData from './data/timelineData';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import EventDisplay from './components/EventDisplay';
import Sections from './components/Sections';

export default function Home() {
  const [index, setIndex] = useState(0);
  const [view, setView] = useState('timeline');
  const [filter, setFilter] = useState('All');

  const filteredData = filter === 'All' ? timelineData : timelineData.filter((e) => e.category === filter);
  const event = filteredData[index] || filteredData[0];

  useEffect(() => {
    const handleKey = (e) => {
      if (view !== 'timeline') return;
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(i + 1, filteredData.length - 1));
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [view, filteredData.length]);

  const categories = ['All', 'Education', 'Work', 'Clubs', 'Sports'];

  return (
    <div className="min-h-screen font-sans">
      <Header setView={setView} />
      <main className="pt-20 pb-10 text-center">
        {view === 'timeline' ? (
          <>
            <Hero />
            <EventDisplay event={event} />
            <div className="flex justify-center gap-4 my-6 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setFilter(cat);
                    setIndex(0);
                  }}
                  className={`px-4 py-1 rounded-full border transition ${
                    filter === cat
                      ? 'bg-blue-400 text-white border-blue-400'
                      : 'text-gray-400 border-gray-700 hover:bg-gray-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <Timeline index={index} setIndex={setIndex} filter={filter} />
          </>
        ) : (
          <Sections view={view} setView={setView} />
        )}
      </main>
    </div>
  );
}
