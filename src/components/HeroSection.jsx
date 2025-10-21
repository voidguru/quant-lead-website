import FadeInSection from "./FadeInSection";

export default function HeroSection() {
  return (
    <section id="home" className="relative py-32 md:py-48 hero-parallax">
      <div className="absolute inset-0 bg-background-light/70 dark:bg-background-dark/80"></div>
      <FadeInSection className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-accent font-display mb-4">John Doe</p>
            <h1 className="text-5xl md:text-7xl font-black text-primary dark:text-white font-display leading-tight tracking-tighter">
              Innovating at the Intersection of Data & Capital Markets.
            </h1>
            <p className="mt-8 text-xl text-text-light dark:text-text-dark-muted">
              Architecting the future of quantitative finance through advanced analytics, machine learning, and data-driven alpha generation.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-transform hover:scale-105 transform font-display shadow-lg">
                View Projects
              </a>
              <a href="#contact" className="bg-transparent border-2 border-primary text-primary dark:text-white dark:border-white font-bold py-3 px-8 rounded-lg hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary transition-all font-display shadow-lg">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
            </div>
            <img className="relative rounded-full w-80 h-80 object-cover border-8 border-section-light dark:border-section-dark shadow-2xl"
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQVa1JeM5SXFhaYw0ECby_tuCqVR7ndEgs1j66lSEkY4kgJqarss9E0wE-3Tjle-8X7naQO2VlIeixB3389AiHB1NUgWKoHPEWuyccM4ceZlt7e44n_KNDJsA4kFmz-pZn_Q4EbLu1SjtomMT8gsEbDHaGZf3pncr_ipWmNOL4xgyqup6Ru_tXbjIjsB4OyCKHnz81OpG0JCmyapZGxcM-ya2A7EBBAFLDTHM3Hj55zhWdQqgHv4naM-04NrOpk2jALOqu4-iZO0s"
                 alt="Professional headshot of John Doe"
            />
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
