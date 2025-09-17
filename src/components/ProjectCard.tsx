
import { cn } from '@/lib/utils';
import { ExternalLink, Code2, Github } from 'lucide-react';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoUrl: string;
    codeUrl: string;
  };
  isVisible?: boolean;
  delay?: number;
}

const ProjectCard = ({ project, isVisible = false, delay = 0 }: ProjectProps) => {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-xl bg-white border border-border transition-all duration-700 ease-out",
        isVisible ? `opacity-100 translate-y-0 delay-[${delay}ms]` : "opacity-0 translate-y-12"
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-secondary text-primary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-medium mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

        <div className="flex items-center space-x-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-primary hover:underline"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Live Demo
          </a>

          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-primary hover:underline"
          >
            <Github className="w-4 h-4 mr-1" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
