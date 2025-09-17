
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AnimatedText from './AnimatedText';
import ProjectCard from './ProjectCard';
import { FileCode2, Github } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive, dynamically scalable, and globally accessible full-stack e-commerce application, meticulously engineered to provide a seamless and personalized shopping experience, featuring robust user authentication protocols for secure access.",
      image: "https://chatcenter.net/wp-content/uploads/2022/03/Ecommerce-Thumbnail.jpg",
      tags: ["React", "Typescript", "Supabase", "Tailwind CSS"],
      demoUrl: "https://adejola-global-giant.netlify.app/",
      codeUrl: "https://github.com/Ayokanmi-Adejola/Ecommerce-Platform",
    },
    {
      title: "Healthcare Hub",
      description: "A Digital Healthcare hub designed to provide advanced preventative disease analysis. Key features include advanced algorithmic analysis of health data, personalized risk assessment, and tailored treatment recommendations.",
      image: "https://media.istockphoto.com/id/929350030/photo/doctor-suggesting-hospital-program-to-patient.webp?a=1&b=1&s=612x612&w=0&k=20&c=dVntmpAc5rb-HakZ8j1XXc6T_KH4tKJq2ThVkGinDFU=",
      tags: ["React", "Typescript", "Tailwind CSS", "Firebase"],
      demoUrl: "https://ayokanmi-adejola-healthcare-hub.netlify.app/",
      codeUrl: "https://github.com/Ayokanmi-Adejola/Heathcare-Hub",
    },
    {
      title: "Task Management App",
      description: "A comprehensive, cloud-based collaborative task management tool, meticulously designed to foster seamless teamwork and enhance project efficiency, featuring a dynamic system of real-time updates that ensure team members are consistently synchronized.",
      image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FuYmFufGVufDB8fDB8fHww",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      demoUrl: "https://ayokanmi-adejola-kanban.netlify.app/",
      codeUrl: "https://github.com/Ayokanmi-Adejola/Task-management",
    },
    {
      title: "Real Estate Platform",
      description: "A modern real estate platform leveraging cutting-edge technology, to not only deliver an intuitive and seamless property search experience, coupled with real-time market insights, but to revolutionize the way people find and interact with real estate.",
      image: "https://media.istockphoto.com/id/1426844573/photo/home-sell-and-real-estate-concept.jpg?s=612x612&w=0&k=20&c=tjH5IKW3qOBUw5OnDm9dbm6JTqSKFxha-orP729SfSc=",
      tags: ["React", "Typescript", "Shadcn UI", "Tailwind CSS",],
      demoUrl: "https://ayokanmi-adejola-real-estate.netlify.app/",
      codeUrl: "https://github.com/Ayokanmi-Adejola/Real-Estate",
    },
    {
      title: "Brainstorm Quiz",
      description: "Delve into meticulously curated question sets that probe the depths of historical events, unravel the mysteries of scientific phenomena, illuminate the contributions of influential tech innovators, and trace the routes of legendary explorers across territories.",
      image: "https://media.istockphoto.com/id/1458345040/photo/online-survey-form-or-answer-test-questions-results-analysis-discovery-orders-products-or.jpg?s=612x612&w=0&k=20&c=cCgk6oswSO9lzn_2XbmwG_tSIYd56kk6oxpnXd8BNqI=",
      tags: ["React", "TypeScript", "Tailwind CSS", "Open Trivia API"],
      demoUrl: "https://ayokanmi-adejola-brainstorm-quiz.netlify.app/",
      codeUrl: "https://github.com/Ayokanmi-Adejola/Brainstorm-Quiz",
    },
    {
      title: "Dictionary App",
      description: "A comprehensive online dictionary delivering instant access to detailed definitions, comprehensive synonym and antonym results, and a diverse range of related language resources, such as audio pronunciations and example sentences.",
      image: "https://media.istockphoto.com/id/865088348/photo/e-learning-mobile-dictionary-learning-languages-online-smartphone-with-books.webp?a=1&b=1&s=612x612&w=0&k=20&c=cvbFsiSuCa1z5vWmQl81SsKwRtkqpQmMSOC3JsyiFKE=",
      tags: ["React", "TypeScript", "Tailwind CSS", "Wikitionary API"],
      demoUrl: "https://ayokanmi-adejola-dictionary.netlify.app/",
      codeUrl: "https://github.com/Ayokanmi-Adejola/Dictionary-App",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 bg-secondary relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-white text-sm font-medium tracking-wide text-primary">
              <FileCode2 className="w-4 h-4 inline-block mr-2" />
              Recent Projects
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
              text="Here are some of my recent projects that showcase my skills and approach to problem-solving."
              once
              delay={400}
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isVisible={isVisible}
              delay={300 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
