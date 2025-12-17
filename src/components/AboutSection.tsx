import { useRef, useEffect, useState } from 'react';
import InteractiveBlob from './InteractiveBlob';
import { Zap, Heart, BookOpen, GraduationCap } from 'lucide-react';

const highlights = [
  {
    icon: Zap,
    title: 'Innovation Focus',
    description: 'Building cutting-edge AI agents and automation tools that streamline complex workflows and enhance user experiences.'
  },
  {
    icon: Heart,
    title: 'Passion Projects',
    description: 'From geospatial analysis tools to voice AI systems, I love tackling diverse challenges that push the boundaries of technology.'
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies and methodologies to stay at the forefront of AI/ML and software development.'
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
            className={`text-5xl md:text-7xl font-bold text-primary mb-4 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            About Me
          </h2>
          <p 
            className={`text-muted-foreground transition-all duration-1000 delay-100 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Driven by curiosity and powered by code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <h3 
              className={`text-2xl md:text-3xl font-bold text-foreground leading-tight transition-all duration-1000 delay-200 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              One word which drives me - "Curiosity"
            </h3>
            
            <div 
              className={`space-y-4 text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p>
                I'm an aspiring software engineer currently pursuing academics in AI and 
                Robotics at IIT Mandi. With a strong foundation in full-stack development and 
                applied machine learning, I thrive on building real-world applications that make a 
                difference.
              </p>
              <p>
                From voice bots to AI agents, I enjoy creating intelligent solutions that solve 
                complex problems. My passion for automation drives me to build systems that 
                not only work efficiently but also continuously improve themselves.
              </p>
            </div>

            <div 
              className={`flex items-center gap-2 text-sm text-muted-foreground pt-4 transition-all duration-1000 delay-400 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>IIT Mandi</span>
              <span className="text-border">•</span>
              <span>AI & Robotics</span>
            </div>
          </div>

          {/* Right Column - Highlight Cards */}
          <div className="space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-6 border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
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
