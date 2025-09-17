
import { useEffect, useState } from 'react';
import AnimatedText from './AnimatedText';
import { cn } from '@/lib/utils';
import { Code, Github, ExternalLink, Hand, Handshake } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div 
          className={cn(
            "absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 blur-3xl transition-all duration-3000 ease-in-out",
            isLoaded ? "opacity-70" : "opacity-0 translate-y-10"
          )}
        />
        <div 
          className={cn(
            "absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 blur-3xl transition-all duration-3000 ease-in-out",
            isLoaded ? "opacity-70 delay-300" : "opacity-0 translate-y-10"
          )}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 overflow-hidden">
          <div 
            className={cn(
              "inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium tracking-wide text-primary transition-all duration-700 ease-out",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Welcome to my portfolio <Handshake className="w-4 h-4 inline-block mr-2" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 leading-tight">
          <AnimatedText
            text="Hello, I'm Ayokanmi Adejola"
            className="block"
            delay={300}
            once
          />
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          <AnimatedText
            text="a passionate developer crafting elegant, high-performance, and accessible web applications using cutting-edge technologies."
            delay={600}
            once
          />
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <div 
            className={cn(
              "transition-all duration-700 ease-out",
              isLoaded ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-4"
            )}
          >
            <a 
              href="#projects" 
              className="group inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:opacity-90 transition-all duration-300"
            >
              <span>View My Projects</span>
              <ExternalLink 
                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
          
          <div 
            className={cn(
              "transition-all duration-700 ease-out",
              isLoaded ? "opacity-100 translate-y-0 delay-800" : "opacity-0 translate-y-4"
            )}
          >
            <a 
              href="https://github.com/Ayokanmi-Adejola" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-3 rounded-full bg-secondary text-primary text-sm font-medium hover:bg-secondary/80 transition-all duration-300"
            >
              <Github className="mr-2 w-4 h-4" />
              <span>View My GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={cn(
          "absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out cursor-pointer",
          isLoaded ? "opacity-70 delay-1000" : "opacity-0"
        )}
      >
        <a href="#skills" className="flex flex-col items-center">
          <span className="text-xs text-muted-foreground mb-2">Scroll Down</span>
          <div className="w-0.5 h-8 bg-primary/20 relative">
            <div className="w-0.5 h-2 bg-primary absolute animate-float" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
