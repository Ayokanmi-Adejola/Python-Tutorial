
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isVisible?: boolean;
  delay?: number;
}

const SkillCard = ({ icon, title, description, isVisible = false, delay = 0 }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, delay);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isVisible, delay]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative h-[280px] p-6 rounded-xl overflow-hidden transition-all duration-500 will-change-transform",
        "border border-border bg-card hover:shadow-lg",
        showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500",
          isHovered && "opacity-100"
        )}
      />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className={cn(
          "text-primary w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-secondary transition-transform duration-500",
          isHovered && "scale-110"
        )}>
          {icon}
        </div>
        
        <h3 className="text-xl font-medium mb-3 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
