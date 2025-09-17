
import { cn } from '@/lib/utils';
import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-6">
              <a href="#home" className="text-xl font-medium tracking-tight">
                AYOKANMI ADEJOLA
              </a>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
            Dedicated to creating exceptional digital experiences through thoughtful design, meticulous attention to detail, and innovative solutions.


            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Ayokanmi-Adejola" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
               <Github size={17} />
              <small>GitHub</small></a>
              <a 
                href="https://www.linkedin.com/in/ayokanmiadejola/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              <small>Linkedin</small></a>
              <a 
                href="https://x.com/AyoAdejola100" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={17} />
              <small>Twitter</small></a>
              <a 
                href="https://www.youtube.com/@Ayokanmi_Adejola" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={17} />
              <small>YouTube</small></a>
            </div>
          </div>
          
          

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navigate
            </h3>
            <ul className="space-y-3">
              {['Home', 'Skills', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Privacy Policy', href: '' },
                { name: 'Terms of Service', href: '' },
                { name: 'Cookie Policy', href: '' },
                { name: 'Help Center', href: '' },
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ayokanmi Adejola, All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Built with React & Typescript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
