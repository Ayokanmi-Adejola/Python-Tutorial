
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SkillCard from './SkillCard';
import AnimatedText from './AnimatedText';
import { CodeXml, Database, Figma, Layout, Workflow } from 'lucide-react';

const Skills = () => {
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

  const skills = [
    {
      icon: <CodeXml />,
      title: "Frontend Development",
      description: "Building responsive, accessible interfaces with React, Next.js, TypeScript, and modern CSS frameworks like Tailwind CSS."
    },
    {
      icon: <Database />,
      title: "Backend Development",
      description: "Creating robust server-side applications with Node.js, Express, MongoDB, PostgreSQL, and RESTful/GraphQL APIs."
    },
    {
      icon: <Figma />,
      title: "UI/UX Design",
      description: "Designing seamless and engaging intuitive user experiences with a focus on usability, accessibility and aesthetics, ensuring user satisfaction."
    },
    {
      icon: <Workflow />,
      title: "Tools & Deployment",
      description: "Proficient with Git(GitHub, GitLab), Docker, AWS, Netlify, Vercel, CI/CD Pipelines, and performance optimization techniques."
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium tracking-wide text-primary">
              <AnimatedText 
                text="Technical Skills"
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

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <AnimatedText 
              text="I specialize in modern web technologies and best practices to create fast, accessible, and user-friendly applications."
              once
              delay={400}
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              isVisible={isVisible}
              delay={200 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
