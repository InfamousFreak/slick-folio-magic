const Footer = () => {
  return (
    <footer id="contact" className="px-6 py-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 border-2 border-foreground rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">S</span>
              </div>
              <span className="font-medium text-sm tracking-wide">Studio/Name™</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Creating digital experiences that connect brands with their audiences.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>hello@studio.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Social</h4>
            <div className="space-y-2 text-sm">
              {['Instagram', 'Twitter', 'LinkedIn', 'Dribbble'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Studio/Name. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
