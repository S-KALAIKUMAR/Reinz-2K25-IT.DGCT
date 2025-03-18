/*
import { cn } from '@/lib/utils';

interface LogoProps {
  src: string;
  alt: string;
  fallbackText?: string;
  className?: string;
}

export function Logo({ src, alt, fallbackText = "Logo", className }: LogoProps) {
  return (
    <div className={cn("overflow-hidden rounded-full border-2 border-primary/20 hover:scale-105 transition-all duration-300", className)}>
      <img 
        src={src} 
        alt={alt} 
        className="h-full w-full object-cover"
        onError={(e) => {
          // Fallback if image doesn't exist yet
          const target = e.target as HTMLImageElement;
          target.src = `https://placehold.co/100x100?text=${fallbackText}`;
        }}
      />
    </div>
  );
}*/
import { cn } from '@/lib/utils';

interface LogoProps {
  src: string;
  alt: string;
  fallbackText?: string;
  className?: string;
}

export function Logo({ src, alt, fallbackText = "Logo", className }: LogoProps) {
  return (
    <div className={cn("flex items-center justify-center w-32 h-32 rounded-full border-2 border-primary/20", className)}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full rounded-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = `https://placehold.co/100x100?text=${fallbackText}`;
        }}
      />
    </div>
  );
}
export default Logo;