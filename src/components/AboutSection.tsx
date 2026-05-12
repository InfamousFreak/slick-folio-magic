import { useRef, useEffect, useState } from 'react';
import InteractiveBlob from './InteractiveBlob';
import { Zap, Heart, BookOpen, GraduationCap } from 'lucide-react';

const highlights = [
  {
    icon: Zap,
    title: 'Builder Mindset',
    description: 'I enjoy turning vague ideas into concrete work, focusing on impact over perfection.'
  },
  {
    icon: Heart,
    title: 'Problem-Driven Projects',
    description: 'My projects are a humble effort to solve real problems rather than just showcase tech.'
  },
  {
    icon: BookOpen,
    title: 'Relentless Learning',
    description: 'I learn best by building. I constantly experiment with new tools and frameworks.'
  }
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-7xl font-bold text-primary mb-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            About Me
          </h2>
          <p
            className={`text-muted-foreground transition-all duration-1000 delay-100 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Driven by curiosity and powered by code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <h3
              className={`text-2xl md:text-3xl font-bold text-foreground leading-tight transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              One word which drives me - "Curiosity"
            </h3>

            <div
              className={`space-y-4 text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <p>
                I’m a full time Mechanical Engineering and part time CS student who enjoys building systems end-to-end, backend APIs
                and databases from National Institute Of Technology, Durgapur. With a strong foundation in backend
                development and applied machine learning, I focus on creating scalable, real-world
                solutions rather than isolated demos.
              </p>
              <p>
                Alongside engineering, I also work as a UI/UX and graphic designer with 1+ years of experience.
                I enjoy designing clean, functional interfaces and visual systems, which helps me build products
                where engineering and user experience are tightly aligned.
              </p>

            </div>

            <div
              className={`flex items-center gap-2 text-sm text-muted-foreground pt-4 transition-all duration-1000 delay-400 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>NIT Durgapur</span>
              <span className="text-border">•</span>
              <span>Mechanical Engineering</span>
            </div>
          </div>

          {/* Right Column - Highlight Cards */}
          <div className="space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-6 border border-border bg-transparent backdrop-blur-sm hover:border-primary/50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-primary/30 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
