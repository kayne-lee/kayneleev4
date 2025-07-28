const contentMap = {
  projects: [
    {
      title: 'Project Name',
      year: '2024',
      desc: 'Description of your project and what technologies you used to build it.',
      tech: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Another Project',
      year: '2023',
      desc: 'Another interesting project with different technologies.',
      tech: ['Vue.js', 'Python', 'PostgreSQL'],
    },
  ],
  education: [
    {
      title: 'Bachelor\'s Degree',
      year: '2020–2024',
      desc: 'Major in Computer Science with focus on software engineering and web development.',
    },
  ],
  work: [
    {
      title: 'Software Developer',
      year: '2023–Present',
      desc: 'Full-stack development using modern technologies. Built scalable web applications and APIs.',
    },
  ],
  clubs: [
    {
      title: 'Computer Science Club',
      year: '2022–2024',
      desc: 'Led a team of 50+ members, organized hackathons and tech talks.',
    },
  ],
  hobbies: [
    {
      title: 'Photography',
      desc: 'Love capturing moments and exploring different photography techniques.',
    },
    {
      title: 'Gaming',
      desc: 'Enjoy strategy games and indie titles. Also interested in game development.',
    },
  ],
  tech: [
    {
      title: 'Frontend',
      tech: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'CSS', 'Tailwind'],
    },
    {
      title: 'Backend',
      tech: ['Node.js', 'Python', 'Express', 'Django', 'MongoDB', 'PostgreSQL'],
    },
    {
      title: 'Tools & Others',
      tech: ['Git', 'Docker', 'AWS', 'Linux', 'Figma'],
    },
  ],
};

export default function Sections({ view, setView }) {
  const section = contentMap[view];

  return (
    <section className="max-w-6xl mx-auto px-6 pt-4 pb-40">
      <button
        className="fixed top-4 right-6 bg-blue-400/10 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-4 py-2 rounded-md transition z-50"
        onClick={() => setView('timeline')}
      >
        ← Back to Timeline
      </button>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white capitalize">{view}</h2>
        <p className="text-gray-400 mt-2">Details about {view}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.map((item, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a99] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#4a9eff] transition-all hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
            {item.year && <p className="text-sm text-blue-400 mb-2">{item.year}</p>}
            <p className="text-gray-300">{item.desc}</p>
            {item.tech && (
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tech.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-400/10 border border-blue-400/20 text-blue-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
