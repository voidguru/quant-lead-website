// ProjectCard.jsx
export default function ProjectCard({ children }) {
    const ref = useRef();
  
    const handleMouseMove = (e) => {
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      ref.current.style.setProperty("--ripple-x", `${x}%`);
      ref.current.style.setProperty("--ripple-y", `${y}%`);
    };
  
    return (
      <div ref={ref} className="group relative" onMouseMove={handleMouseMove}>
        {children}
        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" style={{ "--ripple-x": "50%", "--ripple-y": "50%" }} />
      </div>
    );
  }
  