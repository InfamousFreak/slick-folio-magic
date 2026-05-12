import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';


const Navigation = () => {
  const [time, setTime] = useState(new Date());

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(prev => !prev);
  };


  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between bg-transparent backdrop-blur-sm">
      <div className="flex items-center gap-12">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border-2 border-foreground rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-180">
            <span className="text-xs font-bold">SC</span>
          </div>
          <span className="font-medium text-sm tracking-wide">Smarak.dev</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['Projects', 'Experience', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono">{formatTime(time)}</span>
        </div>
        <span className="text-sm">Available for work</span>
        <button
          onClick={toggleDarkMode}
          className="p-2 border border-border bg-card hover:bg-accent transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-foreground" />
          ) : (
            <Moon className="w-4 h-4 text-foreground" />
          )}
        </button>

      </div>
    </nav>
  );
};

export default Navigation;
