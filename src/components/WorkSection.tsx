import { useRef, useEffect, useState } from 'react';
import InteractiveBlob from './InteractiveBlob';

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
}

const projects: Project[] = [
  { id: 1, title: 'Brand Identity', category: 'Branding', year: '2024' },
  { id: 2, title: 'Digital Experience', category: 'Web Design', year: '2024' },
  { id: 3, title: 'Product Launch', category: 'Campaign', year: '2023' },
  { id: 4, title: 'Visual System', category: 'Identity', year: '2023' },
];

const WorkSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="our-work"
      className="min-h-screen px-6 py-24 relative"
    >
      {/* Background interactive element */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 pointer-events-none opacity-50">
        <InteractiveBlob className="pointer-events-auto" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-baseline gap-4 mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-primary">Selected Work</h2>
          <span className="text-sm text-muted-foreground font-mono">(04)</span>
        </div>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-index={index}
              className={`group border-t border-border py-8 cursor-pointer transition-all duration-700 ease-out ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <span className="text-sm text-muted-foreground font-mono w-8">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-sm text-muted-foreground hidden md:block">
                    {project.category}
                  </span>
                  <span className="text-sm text-muted-foreground font-mono">
                    {project.year}
                  </span>
                  <span className="w-10 h-10 border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-primary-foreground transition-all duration-300">
                    ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
