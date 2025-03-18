
import { EventType } from '@/utils/eventData';
import { cn } from '@/lib/utils';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  event: EventType;
  className?: string;
}

export function EventCard({ event, className }: EventCardProps) {
  const typeColor = {
    technical: 'from-blue-50 to-lavender-100 border-lavender-200',
    'non-technical': 'from-lavender-50 to-lavender-100 border-lavender-200',
    workshop: 'from-emerald-50 to-emerald-100 border-emerald-200',
  };

  const typeTextColor = {
    technical: 'bg-lavender-100 text-lavender-700',
    'non-technical': 'bg-lavender-100 text-lavender-700',
    workshop: 'bg-emerald-100 text-emerald-700',
  };

  const typeTitle = {
    technical: 'Technical Event',
    'non-technical': 'Non-Technical Event',
    workshop: 'Workshop',
  };

  return (
    <div 
      className={cn(
        'glass-card overflow-hidden transition-all duration-300 ease-in-out flex flex-col h-full',
        'event-card',
        className
      )}
    >
      <div className="relative event-card-image">
        <Link to={`/event/${event.id}`}>
          <div className="h-full overflow-hidden">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
        </Link>
        
        <div className="absolute top-4 right-4">
          <span className={cn(
            'chip text-xs font-medium px-2 py-1 rounded-full',
            'bg-primary/10 text-primary'
          )}>
            {typeTitle[event.type]}
          </span>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow event-card-content">
        <Link to={`/event/${event.id}`} className="hover:text-primary transition-colors">
          <h3 className="heading-sm mb-2">{event.title}</h3>
        </Link>
        
        <p className="text-muted-foreground mb-3 event-card-description">
          {event.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex items-center text-sm text-muted-foreground mb-1">
            <Calendar size={16} className="mr-2 text-primary" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <Clock size={16} className="mr-2 text-primary" />
            <span>{event.time}</span>
          </div>
          
          <Link 
            to={`/event/${event.id}`}
            className="inline-block py-2 px-4 text-sm bg-primary/10 text-primary font-medium rounded-full hover:bg-primary/20 transition-colors w-full text-center hover:scale-105"
          >
            {event.type === 'workshop' ? 'Register Now' : 'View Details'}
          </Link>
        </div>
      </div>
    </div>
  );
}



