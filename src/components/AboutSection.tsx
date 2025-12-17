import { useRef, useEffect, useState } from 'react';
import InteractiveBlob from './InteractiveBlob';

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
      id="about-us" 
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
              We craft digital experiences that matter
            </h2>
          </div>

          <div className="space-y-8">
            <p 
              className={`text-lg text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Our studio brings together strategists, designers, and technologists 
              to create impactful digital solutions. We believe in the power of 
              thoughtful design to transform businesses and connect with audiences.
            </p>

            <div 
              className={`grid grid-cols-3 gap-8 pt-8 border-t border-border transition-all duration-1000 delay-400 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div>
                <p className="text-4xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">12</p>
                <p className="text-sm text-muted-foreground mt-1">Team Members</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">8</p>
                <p className="text-sm text-muted-foreground mt-1">Years</p>
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
                  Start a project
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
