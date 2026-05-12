import { useEffect, useState } from 'react';
import InteractiveBlob from './InteractiveBlob';
import { Linkedin, Github, Instagram, Code2, FileCode2 } from 'lucide-react';
import { Sun, Moon } from 'lucide-react'; 

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/smarak-choudhury-423b39280/' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/InfamousFreak' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/akasmarak14/' },
  { name: 'LeetCode', icon: Code2, url: 'https://leetcode.com/u/csmarak141/' },
  { name: 'Resume', icon: FileCode2, url: ' https://drive.google.com/file/d/1_8dlHa1aPL7a0cz3HVdtM5N-WamRW1E5/view?usp=sharing' },
];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden pt-24 px-6">
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
          Full-Stack Developer & Creative Technologist
        </p>

        {/* Main Typography */}
        <div className="mt-12 md:mt-20">
          <h1 className="text-[10vw] md:text-[10vw] font-bold leading-[0.85] tracking-tight text-primary">
            <span 
              className={`block transition-all duration-1000 delay-200 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              SMARAK
            </span>
            <span 
              className={`block transition-all duration-1000 delay-400 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              CHOUDHURY
            </span>
          </h1>
        </div>

        {/* Social Buttons */}
        <div 
          className={`flex flex-wrap gap-3 mt-12 transition-all duration-1000 delay-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 border border-border bg-transparent backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
                <span className="text-sm text-foreground group-hover:text-accent-foreground transition-colors">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* CTA Box */}
        <div 
          className={`absolute top-28 right-6 md:right-12 lg:right-24 max-w-xs transition-all duration-1000 delay-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="p-4 border border-border bg-transparent backdrop-blur-sm">
            <p className="text-sm text-foreground leading-relaxed mb-3">
              Actively looking for summer internships. Let's connect and build something amazing together.
            </p>
            <a 
              href="mailto:smkchoudhury@yahoo.com" 
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
            >
              <span className="w-6 h-6 border border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-primary-foreground transition-all duration-300">
                ↗
              </span>
              <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-foreground after:transition-all after:duration-300 group-hover:after:w-full">
                Get in touch
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
