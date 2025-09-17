
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AnimatedText from './AnimatedText';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-secondary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-t from-secondary/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium tracking-wide text-primary">
                <AnimatedText
                  text="About Me"
                  once
                />
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">
              <AnimatedText
                text=""
                once
                delay={200}
              />
            </h2>

            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                <AnimatedText
                  text="I'm an experienced web developer proficient in building modern web applications, my passion lies in creating clean, efficient, and accessible websites that provide exceptional user experiences."
                  once
                  delay={400}
                />
              </p>
              <p className="leading-relaxed">
                <AnimatedText
                  text="With a background in both design and development, I bridge the gap between aesthetic appeal and technical functionality. I'm constantly learning new technologies and methodologies to stay at the forefront of web development."
                  once
                  delay={600}
                />
              </p>
              <p className="leading-relaxed">
                <AnimatedText
                  text="When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers, sharing my knowledge and insights."
                  once
                  delay={800}
                />
              </p>
            </div>

            <div className={cn(
              "mt-8 transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-4"
            )}>
              <a
                href="#contact"
                className="group inline-flex items-center text-primary font-medium hover:underline"
              >
                <span>Get in touch</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className={cn(
              "relative aspect-square max-w-md mx-auto transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <img
                  src="ayokanmi.jpg"
                  alt="Developer working on code"
                  className="object-cover w-full h-full transition-transform duration-700 ease-out hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="w-12 h-1 bg-primary mb-4" />
                    <p className="text-sm font-medium text-primary">Ayokanmi Adejola</p>
                  </div>
                  <p className="text-muted-foreground text-sm">"Great web development isn't just about writing code; it's about creating digital solutions that address real-world challenges and empower people"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
