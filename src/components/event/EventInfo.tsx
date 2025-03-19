import { Calendar, Clock, MapPin } from 'lucide-react';
import { EventType } from '@/utils/eventData';

interface EventInfoProps {
  event: EventType;
  editMode?: boolean;
  editedEvent?: EventType;
  setEditedEvent?: (event: EventType) => void;
}

export const EventInfo = ({ event, editMode = false, editedEvent, setEditedEvent }: EventInfoProps) => {
  const currentEvent = editMode && editedEvent ? editedEvent : event;

  // Event-specific venue information
  const getVenueInfo = (eventId: string) => {
    switch (eventId) {
      case 'ideathon':
        return  "Centre For Information Technology Lab , First floor (Main Block)";
      case 'cook-with-prompt':
        return "Centre For Information Technology Lab , First floor (Main Block)";
      case 'bug-bounty':
        return "Centre For Information Technology Lab , First floor (Main Block)";
      case 'meme-media':
        return "Centre For Information Technology Lab , First floor (Main Block)";
      case 'ai-photography':
        return "Centre For Information Technology Lab , First floor (Main Block)";
      case 'ai-workshop':
        return "Placement Seminar Hall, Admin Block";
      default:
        return "Placement Seminar Hall, Admin Block";
    }
  };

  // Registration links for each event
// Registration links for each event
const getRegistrationLink = (eventId: string) => {
  const registrationLinks: Record<string, string> = {
    'ideathon': "https://forms.gle/5TzQnWDahhKXhR1A8", 
    'cook-with-prompt': "https://forms.gle/5TzQnWDahhKXhR1A8",
    'bug-bounty': "https://forms.gle/5TzQnWDahhKXhR1A8",
    'meme-media': "https://forms.gle/5TzQnWDahhKXhR1A8",
    'ai-photography': "https://forms.gle/5TzQnWDahhKXhR1A8",
    'ai-workshop': "https://forms.gle/5TzQnWDahhKXhR1A8",
  };

  return registrationLinks[eventId] || "https://forms.gle/5TzQnWDahhKXhR1A8"; 
};


  // Limit info for each event
  const getLimitInfo = (eventId: string) => {
    switch (eventId) {
      case 'ideathon':
        return " Register early to secure your participation.";
      case 'cook-with-prompt':
        return " Registration is first-come, first-served.";
      case 'bug-bounty':
        return " Register early to secure your spot.";
      case 'meme-media':
        return "Open to all students..";
      case 'ai-photography':
        return " Bring your own camera if possible.";
      case 'ai-workshop':
        return "Workshop limited to 50 participants. Laptop Mandatory.";
      default:
        return "Limited spots available. Register early to secure your participation.";
    }
  };

  // Button text based on event type
  const getButtonText = (eventType: string) => {
    return eventType === 'workshop' ? "View Details" : "Register Now";
  };

  return (
    <div className="glass-card overflow-hidden bg-white/30 dark:bg-black/30 p-6 rounded-xl sticky top-24">
      <h3 className="font-medium text-lg mb-4 text-center text-primary">Event Details</h3>
      
      {/* Date and Time */}
      <div className="mb-6">
        <div className="flex items-center mb-4 p-3 bg-white/50 dark:bg-black/10 rounded-lg">
          <Calendar size={20} className="mr-3 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Date</p>
            {!editMode ? (
              <p className="font-medium">{new Date(currentEvent.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric',
                year: 'numeric'
              })}</p>
            ) : (
              <input
                type="date"
                value={currentEvent.date}
                onChange={(e) => setEditedEvent && setEditedEvent({ ...currentEvent, date: e.target.value })}
                className="p-1 border rounded w-full mt-1"
              />
            )}
          </div>
        </div>
        
        <div className="flex items-center mb-4 p-3 bg-white/50 dark:bg-black/10 rounded-lg">
          <Clock size={20} className="mr-3 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Time</p>
            {!editMode ? (
              <p className="font-medium">{currentEvent.time}</p>
            ) : (
              <input
                type="text"
                value={currentEvent.time}
                onChange={(e) => setEditedEvent && setEditedEvent({ ...currentEvent, time: e.target.value })}
                className="p-1 border rounded w-full mt-1"
                placeholder="10:00 AM - 2:00 PM"
              />
            )}
          </div>
        </div>
        
        <div className="flex items-center mb-4 p-3 bg-white/50 dark:bg-black/10 rounded-lg">
          <MapPin size={20} className="mr-3 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Venue</p>
            <p className="font-medium">{getVenueInfo(currentEvent.id)}</p>
          </div>
        </div>
      </div>
      
      <a 
        href={getRegistrationLink(currentEvent.id)} 
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:opacity-90 mb-4"
      >
        {getButtonText(currentEvent.type)}
      </a>
      
      <p className="text-xs text-center text-muted-foreground">
        {getLimitInfo(currentEvent.id)}
      </p>
    </div>
  );
};