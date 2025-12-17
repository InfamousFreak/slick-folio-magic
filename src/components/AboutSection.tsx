import { useRef, useEffect, useState } from 'react';
import InteractiveBlob from './InteractiveBlob';

const skills = [
  'React', 'TypeScript', 'Node.js', 'Python', 'Next.js', 'PostgreSQL', 
  'MongoDB', 'AWS', 'Docker', 'GraphQL', 'Tailwind CSS', 'Git'
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="min-h-screen px-6 py-24 relative overflow-hidden"
    >
      {/* Interactive background */}
      <div className="absolute left-0 bottom-0 w-1/2 h-2/3 pointer-events-none">
        <InteractiveBlob className="pointer-events-auto opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 
              className={`text-5xl md:text-7xl font-bold text-primary leading-tight transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Turning ideas into reality through code
            </h2>
          </div>

          <div className="space-y-8">
            <p 
              className={`text-lg text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Hi, I'm Smarak — a full-stack developer passionate about building 
              scalable applications and crafting intuitive user experiences. 
              I thrive on solving complex problems and transforming concepts 
              into polished, production-ready products.
            </p>

            <div 
              className={`grid grid-cols-3 gap-8 pt-8 border-t border-border transition-all duration-1000 delay-400 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div>
                <p className="text-4xl font-bold text-primary">4+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Coding</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">20+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Built</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground mt-1">Technologies</p>
              </div>
            </div>

            {/* Skills */}
            <div 
              id="skills"
              className={`pt-8 transition-all duration-1000 delay-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-sm font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-xs font-mono border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div 
              className={`pt-8 transition-all duration-1000 delay-600 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a 
                href="#contact"
                className="inline-flex items-center gap-3 text-foreground group"
              >
                <span className="w-12 h-12 border-2 border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-primary-foreground transition-all duration-300">
                  ↗
                </span>
                <span className="text-lg font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-foreground after:transition-all after:duration-300 group-hover:after:w-full">
                  Let's collaborate
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
