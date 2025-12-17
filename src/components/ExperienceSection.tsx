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
    company: 'HyperQube Ionic',
    role: 'SDE Intern',
    location: 'Remote',
    period: 'June 2025 - July 2025',
    achievements: [
      'Architected a scalable analytics system with Amplitude and Clerk integration, engineered to capture live user events across various org segments and drive insights from 5K+ monthly actions.',
      'Built a native meeting feature directly into the platform using Nylas and Twilio APIs, reducing manual scheduling time by 30% and increasing user retention by 50%.'
    ],
    technologies: ['Data/Business Analytics', 'Amplitude Integration', 'Event Tracking', 'REST APIs', 'Twilio API', 'Nylas Calendar API']
  },
  {
    company: 'VectorX DB (prev. LaunchX Labs)',
    role: 'SDE Intern',
    location: 'Bengaluru, Karnataka',
    period: 'Dec. 2024 - Jan. 2025',
    achievements: [
      'Designed AI agents (LLM Agent & RAG Agent) with PGVectorStore and GPT-4o-mini, reducing response time by 50% and improving retrieval accuracy',
      'Built a metadata extraction pipeline with LangChain\'s LLM, automating document processing for 1M+ documents monthly',
      'Developed a dynamic filter system with FilterAgent and Claude 3.5 Sonnet, generating 100K+ JSON filters daily and boosting DB query efficiency by 40%'
    ],
    technologies: ['Python', 'LangChain', 'GPT-4o-mini', 'Claude 3.5 Sonnet', 'PGVectorStore', 'AI Agents', 'RAG']
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
            className={`text-5xl md:text-7xl font-bold text-primary mb-4 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Experience
          </h2>
          <p 
            className={`text-muted-foreground transition-all duration-1000 delay-100 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
                className={`relative pl-8 md:pl-12 transition-all duration-700 ease-out ${
                  visibleItems.includes(index) 
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
                <div className="border-l-2 border-primary/50 bg-card/30 backdrop-blur-sm p-6 hover:border-primary transition-colors duration-300">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 border border-border bg-card flex items-center justify-center flex-shrink-0">
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
                          className="px-2.5 py-1 text-xs font-mono border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
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
