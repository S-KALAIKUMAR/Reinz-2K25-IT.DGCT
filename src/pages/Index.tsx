import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/Hero';
import { EditableAbout } from '@/components/EditableAbout';
import { EventCard } from '@/components/EventCard';
import { useState, useEffect, useMemo } from 'react';
import { WebGLBackground } from '@/components/WebGLBackground';
import { DepartmentSection } from '@/components/DepartmentSection';
import { ContactSection } from '@/components/ContactSection';
import { eventData } from '@/utils/eventData';

const Index = () => {
  const [allEvents, setAllEvents] = useState(eventData);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        if (elementPosition.top < viewportHeight * 0.85) {
          element.classList.add('animate-slide-up');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Include all events
    setAllEvents(eventData);
  }, []);

  // Adjust scroll offset for navigation
  useEffect(() => {
    const handleNavLinks = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (!targetId) return;
          
          const target = document.querySelector(targetId);
          if (target) {
            // Adjust the scroll position to be closer to the top
            const offset = 100; // Smaller offset value
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    };
    
    handleNavLinks();
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Fixed WebGL Background */}
      <div className="fixed inset-0 z-0">
        <WebGLBackground />
      </div>
      
      <Navbar />
      
      {/* Content with relative z-index */}
      <div className="relative z-10">
        <Hero />
        
        {/* About Section */}
        <div id="about" className="pt-10 md:pt-16">
          <EditableAbout />
        </div>
        
        {/* All Events Section - Combined */}
        <section id="events" className="py-16 w-full">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="chip mb-4 animate-on-scroll opacity-0">Events</span>
              <h2 className="heading-lg mb-6 animate-on-scroll opacity-0">
                Our Events
              </h2>
              <p className="subtitle animate-on-scroll opacity-0">
                Explore our exciting lineup of events and workshops. From technical challenges to creative competitions, there's something for everyone.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Register Section */}
        <section id="register" className="py-16 w-full">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="chip mb-4 animate-on-scroll opacity-0">Registration</span>
              <h2 className="heading-lg mb-6 animate-on-scroll opacity-0">
                Join The Symposium
              </h2>
              <p className="subtitle animate-on-scroll opacity-0 mb-8">
                Register now to participate in our exciting events and workshops!
              </p>
              <a 
                href="https://forms.gle/5TzQnWDahhKXhR1A8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Register Now
              </a>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
        
        {/* Footer */}
        <footer className="py-10 border-t border-border w-full bg-background/80 backdrop-blur-sm">
         <div className="container px-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © 2025 Information Technology & Elite Association. All rights reserved.
              </p>
           </div>
         

              
              {/*<div className="flex space-x-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
              </div>*/}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Index;
