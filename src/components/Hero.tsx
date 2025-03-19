
import { CountdownTimer } from "./CountdownTimer";
import { ChevronDown } from "lucide-react";
import { WebGLBackground } from "./WebGLBackground";

export function Hero() {
  const eventDate = "2025-03-29T09:00:00"; // Format: YYYY-MM-DDTHH:MM:SS
  
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background z-10"></div>
      
      {/* Interactive WebGL Background */}
      <div className="absolute inset-0 z-0">
        <WebGLBackground />
      </div>
      
      {/* Content */}
      <div className="container relative z-20 px-6 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="chip stagger-1 animate-fade-in backdrop-blur-sm bg-white/10 dark:bg-black/10 shadow-lg border border-white/20 hover:scale-105 transition-all">September 15-17, 2023</span>
          </div>
          
          <h1 className="heading-xl mb-6 stagger-2 animate-fade-in text-primary dark:text-white drop-shadow-lg">
            Reinz' <span className="text-primary">2025</span>
          </h1>
          
          <p className="subtitle mb-8 max-w-2xl mx-auto stagger-3 animate-fade-in backdrop-blur-sm bg-white/10 dark:bg-black/10 p-4 rounded-lg shadow-lg text-foreground hover:bg-white/20 dark:hover:bg-black/20 transition-all">
            Join us for an immersive experience exploring cutting-edge AI technologies, innovations, 
            and opportunities. Connect with industry experts and fellow enthusiasts.
          </p>
          
          <div className="mb-10 stagger-4 animate-fade-in">
            <CountdownTimer targetDate={eventDate} />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 stagger-5 animate-fade-in">
            <a 
              href="#events" 
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:opacity-90 hover:scale-105 backdrop-blur-sm"
            >
              Explore Events
            </a>
            
            <a 
              href="https://forms.gle/5TzQnWDahhKXhR1A8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm text-foreground font-medium border border-border transition-all hover:shadow-lg hover:bg-white hover:scale-105 dark:bg-black/30 dark:hover:bg-black/50 dark:text-white"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator - Centered */}
      <a 
        href="#about" 
        className="absolute left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-bounce md:bottom-8 bottom-4"
        aria-label="Scroll to About section"
      >
        <span className="text-sm text-foreground/70 mb-2">Scroll</span>
        <ChevronDown size={20} className="text-foreground/70" />
      </a>
    </section>
  );
}
