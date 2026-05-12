import { useRef, useEffect, useState } from 'react';
import InteractiveBlob from './InteractiveBlob';
import { Github, ExternalLink } from 'lucide-react';


interface Project {
  id: number;
  title: string;
  tech: string;
  description: string;
  year: string;
  sourceUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered ICU Monitoring System',
    tech: 'FastAPI, WebSockets, scikit-learn, Docker',
    description: 'Real-time patient vitals streaming with AI-based sepsis risk scoring',
    year: '2025',
    sourceUrl: 'https://github.com/InfamousFreak/icuserver',
    liveUrl: 'https://icu-control.vercel.app/',
  },
  {
    id: 2,
    title: 'RAG-Based AI Chat System',
    tech: 'FastAPI, Next.js, FAISS, MongoDB, Docker',
    description: 'Retrieval-augmented generation system with semantic search and persistent chat',
    year: '2025',
    sourceUrl: 'https://github.com/InfamousFreak/GPT-railways',
    liveUrl: 'https://ai-chatbot-lime-one.vercel.app/',
  },
  {
    id: 3,
    title: 'Geospatial Field Tracking App',
    tech: 'Flutter, Supabase, PostgreSQL/PostGIS',
    description: 'Offline-capable GPS tracking with role-based access and proximity analysis',
    year: '2025',
    sourceUrl: 'https://github.com/InfamousFreak/Rail_App',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.nerailways.cablerouteplan&hl=en_IN',
  },
  {
    id: 4,
    title: 'Research Monitor : Live ArXiv Intelligence Engine',
    tech: 'Go, Gemma 4B, Ollama, Nomic Embeddings, Vector Search, Goroutines',
    description: 'Engineered a concurrent ArXiv ingestion system in Go using goroutines and bounded worker pools to fetch, parse, and score research papers across multiple category targets in parallel.',
    year: '2025',
    sourceUrl: 'https://github.com/InfamousFreak/Research-Monitor',
    liveUrl: 'https://research-monitor-demo.vercel.app',
  },
  {
    id: 5,
    title: 'Foodium – Food Delivery Platform',
    tech: 'Go Fiber, PostgreSQL, JWT, Docker',
    description: 'Backend system for authentication, orders, and real-time cart management',
    year: '2024',
    sourceUrl: 'https://github.com/InfamousFreak/Tech-Task-24',
    liveUrl: 'https://tech-task-24-1.onrender.com',
  },
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
      id="projects"
      className="min-h-screen px-6 py-24 relative"
    >
      {/* Background interactive element */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 pointer-events-none opacity-50">
        <InteractiveBlob className="pointer-events-auto" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-baseline gap-4 mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-primary">Featured Projects</h2>
          <span className="text-sm text-muted-foreground font-mono">(05)</span>
        </div>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-index={index}
              className={`group border-t border-border py-8 cursor-pointer transition-all duration-700 ease-out ${visibleItems.includes(index)
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
                }`}
              style={{ '--transition-delay': `${index * 100}ms` } as React.CSSProperties}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start md:items-center gap-4 md:gap-8 flex-1">
                  <span className="text-sm text-muted-foreground font-mono w-8 pt-1 md:pt-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-4xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 md:hidden">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-8 ml-12 md:ml-0">
                  <span className="text-xs text-muted-foreground hidden md:block max-w-[200px]">
                    {project.description}
                  </span>
                  <span className="text-xs text-accent font-mono bg-accent/10 px-2 py-1">
                    {project.tech}
                  </span>
                  <span className="text-sm text-muted-foreground font-mono">
                    {project.year}
                  </span>
                  <span>
                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 border border-border bg-card/50 hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-xs font-mono hidden md:inline">View Source</span>
                      </a>
                    )}
                  </span>
                  <span>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 border border-border bg-card/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-xs font-mono hidden md:inline">Live Demo</span>
                      </a>
                    )}
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
