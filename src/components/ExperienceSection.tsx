import { useRef, useEffect, useState } from 'react';
import { Building2, MapPin, Calendar, TrendingUp } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: 'LogicBoots',
    role: 'Application Development Intern',
    location: 'India',
    period: '2025',
    achievements: [
      'Built a full-stack geospatial tracking application with Flutter and Supabase, featuring secure authentication, role-based access, and dynamic map rendering.',
      'Integrated PostGIS for efficient GeoJSON storage and real-time visualization on Google Maps.',
      'Engineered an offline-capable GPS tracking system for field staff with real-time proximity calculations.',
      'Migrated heavy computations such as nearest-point analysis to server-side PostgreSQL RPCs, improving scalability and reducing latency.'
    ],
    technologies: [
      'Flutter',
      'Supabase',
      'PostgreSQL',
      'PostGIS',
      'Google Maps API'
    ]
  },
  {
    company: 'LogicBoots',
    role: 'AI Development Intern',
    location: 'India',
    period: '2025',
    achievements: [
      'Developed a Retrieval-Augmented Generation (RAG) system with a FastAPI backend and Next.js frontend, supporting persistent chat history.',
      'Implemented FAISS-based vector search with MongoDB Atlas for hybrid semantic retrieval, achieving sub-second query performance.',
      'Automated pipelines for PDF and DOCX ingestion, embedding generation, and persistent vector storage using Sentence Transformers.',
      'Containerized services with Docker and resolved deployment issues including SSL/TLS, CORS, and dependency conflicts.',
      'Deployed the system on cloud platforms with CI/CD pipelines enabling zero-downtime updates.'
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Next.js',
      'FAISS',
      'MongoDB Atlas',
      'Sentence Transformers',
      'Docker'
    ]
  }
];


const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const itemObserver = new IntersectionObserver(
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
    items?.forEach((item) => itemObserver.observe(item));

    return () => itemObserver.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen px-6 py-24 relative"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-7xl font-bold text-primary mb-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Experience
          </h2>
          <p
            className={`text-muted-foreground transition-all duration-1000 delay-100 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Building innovative solutions and driving measurable impact
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                data-index={index}
                className={`relative pl-8 md:pl-12 transition-all duration-700 ease-out ${visibleItems.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background" />

                {/* Timeline connector */}
                <div className="absolute left-0 md:left-4 top-2 -translate-x-1/2 w-3 h-3 bg-primary/30 rounded-full animate-ping" />

                {/* Card */}
                <div className="border-l-2 border-primary/50 bg-transparent backdrop-blur-sm p-6 hover:border-primary transition-colors duration-300">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 border border-border bg-transparent flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                      <p className="text-sm text-muted-foreground">{exp.role}</p>
                    </div>
                  </div>

                  {/* Location & Period */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-4">
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono border border-border bg-transparent hover:bg-white/10 hover:text-white transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
