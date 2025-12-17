import { useEffect, useRef, useState } from 'react';
import InteractiveBlob from './InteractiveBlob';
import heroProject from '@/assets/hero-project.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden pt-24 px-6">
      {/* Interactive background */}
      <div className="absolute inset-0 pointer-events-none">
        <InteractiveBlob className="pointer-events-auto" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Tagline */}
        <p 
          className={`text-sm md:text-base text-muted-foreground max-w-xs mt-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          A Strategic Design and Technology Agency
        </p>

        {/* Main Typography */}
        <div className="mt-12 md:mt-20">
          <h1 className="text-[15vw] md:text-[18vw] font-bold leading-[0.85] tracking-tight text-primary">
            <span 
              className={`block transition-all duration-1000 delay-200 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              NEW
            </span>
            <span 
              className={`block transition-all duration-1000 delay-400 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              WORK
            </span>
          </h1>
        </div>

        {/* Featured Project Card */}
        <div 
          className={`absolute top-28 right-6 md:right-12 lg:right-24 w-[45vw] max-w-md transition-all duration-1000 delay-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative group cursor-pointer">
            <div className="overflow-hidden">
              <img 
                src={heroProject}
                alt="Featured project - Fashion editorial"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            
            {/* Floating overlay card */}
            <div className="absolute bottom-8 left-4 right-4 bg-card/95 backdrop-blur-sm p-4 transform transition-all duration-500 group-hover:translate-y-[-4px]">
              <p className="text-xs text-muted-foreground mb-1 font-mono">FINTEK</p>
              <h3 className="text-lg font-semibold text-card-foreground leading-tight">
                FROM VISION TO GLOBAL IMPACT
              </h3>
              <div className="mt-3 px-3 py-2 bg-accent text-accent-foreground text-xs font-medium inline-block">
                View Project →
              </div>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div 
          className={`absolute top-20 right-6 md:right-12 lg:right-24 max-w-xs transition-all duration-1000 delay-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="p-4 border border-border bg-card/50 backdrop-blur-sm">
            <p className="text-sm text-foreground leading-relaxed mb-3">
              Tell us about your project. Let's collaborate and make real results.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
            >
              <span className="w-6 h-6 border border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-primary-foreground transition-all duration-300">
                ↗
              </span>
              <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-foreground after:transition-all after:duration-300 group-hover:after:w-full">
                Send us your thoughts
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
