
import { Users, Target, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const teamMembers = [
  {
    name: 'Alice Chen',
    role: 'Event Coordinator',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop'
  },
  {
    name: 'David Park',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2187&auto=format&fit=crop'
  },
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop'
  },
  {
    name: 'Michael Zhang',
    role: 'Workshop Facilitator',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187&auto=format&fit=crop'
  }
];

const sponsors = [
  {
    name: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop'
  },
  {
    name: 'Innovate AI',
    logo: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Future Labs',
    logo: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=2101&auto=format&fit=crop'
  },
  {
    name: 'Data Dynamics',
    logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?q=80&w=2072&auto=format&fit=crop'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-radial from-background to-secondary/40">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="chip mb-4 opacity-0 animate-fade-in">About Us</span>
          <h2 className="heading-lg mb-6 opacity-0 animate-fade-in stagger-1">
            Exploring the Future of AI
          </h2>
          <p className="subtitle opacity-0 animate-fade-in stagger-2">
            Our symposium brings together the brightest minds in AI to discuss innovations, 
            challenges, and the future of technology. Join us for an unforgettable journey 
            of discovery and collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <FeatureCard 
            icon={<Target className="h-10 w-10 text-primary" />}
            title="Our Mission"
            description="To foster innovation and collaboration in the AI community by providing a platform for knowledge sharing and networking."
            delay="stagger-1"
          />
          
          <FeatureCard 
            icon={<Award className="h-10 w-10 text-primary" />}
            title="Excellence"
            description="We're committed to delivering high-quality content and experiences that inspire and educate participants at all levels."
            delay="stagger-2"
          />
          
          <FeatureCard 
            icon={<Users className="h-10 w-10 text-primary" />}
            title="Community"
            description="Building a diverse and inclusive community of AI enthusiasts, researchers, developers, and industry professionals."
            delay="stagger-3"
          />
        </div>

        <div className="mb-20">
          <h3 className="heading-md text-center mb-12 opacity-0 animate-fade-in">Meet Our Team</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name} 
                className={cn(
                  "glass-card p-4 text-center opacity-0 animate-fade-in",
                  `stagger-${index + 1}`
                )}
              >
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-medium mb-1">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="heading-md text-center mb-12 opacity-0 animate-fade-in">Our Sponsors</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsors.map((sponsor, index) => (
              <div 
                key={sponsor.name} 
                className={cn(
                  "glass-card p-6 flex items-center justify-center opacity-0 animate-fade-in",
                  `stagger-${index + 1}`
                )}
              >
                <div className="h-16 w-full">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: string;
}

function FeatureCard({ icon, title, description, delay = '' }: FeatureCardProps) {
  return (
    <div className={cn(
      "glass-card p-6 opacity-0 animate-fade-in",
      delay
    )}>
      <div className="mb-4">{icon}</div>
      <h3 className="heading-sm mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
