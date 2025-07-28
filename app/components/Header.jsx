export default function Header({ setView }) {
  const navItems = ['Projects', 'Education', 'Work', 'Clubs', 'Hobbies', 'Tech'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur border-b border-neutral-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">Your Name</div>
        <nav className="flex gap-6 text-sm text-gray-400">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setView(item.toLowerCase())}
              className="hover:text-blue-400 transition"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
