export default function Header() {
    return (
      <header className="flex items-center justify-between border-b border-b-[#f0f2f4] dark:border-b-gray-700 px-6 py-4">
        <div className="flex items-center gap-3 text-primary dark:text-white">
          <span className="material-symbols-outlined text-2xl">insights</span>
          <h1 className="font-bold text-lg">Quantitative Analytics Leader</h1>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-secondary dark:text-gray-300">
          {["Home", "About", "Expertise", "Insights", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary">
              {item}
            </a>
          ))}
        </nav>
        <button className="hidden md:flex bg-accent hover:bg-accent/90 text-white text-sm font-semibold rounded-lg px-4 py-2">
          Connect with Me
        </button>
      </header>
    )
  }
  