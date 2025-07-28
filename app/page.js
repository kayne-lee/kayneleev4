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
  const event = timelineData[index];

  useEffect(() => {
    const handleKey = (e) => {
      if (view !== 'timeline') return;
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(i + 1, timelineData.length - 1));
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [view]);

  return (
    <div className="min-h-screen font-sans">
      <Header setView={setView} />
      <main className="pt-20 pb-60 text-center">
        {view === 'timeline' ? (
          <>
            <Hero />
            <EventDisplay event={event} />
          </>
        ) : (
          <Sections view={view} setView={setView} />
        )}
      </main>
      <Timeline index={index} setIndex={setIndex} />
    </div>
  );
}
