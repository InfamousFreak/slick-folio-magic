const Footer = () => {
  return (
    <footer id="contact" className="px-6 py-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 border-2 border-foreground rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">SC</span>
              </div>
              <span className="font-medium text-sm tracking-wide">Smarak Choudhury</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Full-stack developer crafting digital experiences with modern technologies.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="mailto:smkchoudhury@yahoo.com" className="block hover:text-foreground transition-colors">
                smkchoudhury@yahoo.com
              </a>
              <p>Open to opportunities</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="space-y-2 text-sm">
              {[
                { name: 'GitHub', url: 'https://github.com/InfamousFreak/' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/smarak-choudhury-423b39280/' },
                { name: 'Twitter', url: '#' },
                { name: 'Resume', url: 'https://drive.google.com/file/d/1_8dlHa1aPL7a0cz3HVdtM5N-WamRW1E5/view?usp=sharing'}
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.url} 
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Smarak Choudhury. Built with React & Tailwind.
          </p>
          <p className="text-xs text-muted-foreground">
            Currently seeking new opportunities
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
