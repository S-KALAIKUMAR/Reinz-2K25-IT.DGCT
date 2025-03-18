
import { useEffect, useState, memo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAdmin } from '@/contexts/AdminContext';
import { eventData, EventType } from '@/utils/eventData';
import { toast } from '@/components/ui/use-toast';
import { Navbar } from '@/components/navbar';
import { EventHero } from '@/components/event/EventHero';
import { EventInfo } from '@/components/event/EventInfo';
import { EventContent } from '@/components/event/EventContent';
import { WebGLBackground } from '@/components/WebGLBackground';

// Memoize components for performance
const MemoizedEventHero = memo(EventHero);
const MemoizedEventInfo = memo(EventInfo);
const MemoizedEventContent = memo(EventContent);

const EventDetails = () => {
  const { eventId } = useParams();
  const { isAdminMode } = useAdmin();
  const navigate = useNavigate();
  
  const [currentEvent, setCurrentEvent] = useState<EventType | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editedEvent, setEditedEvent] = useState<EventType | null>(null);
  
  // Load event data
  useEffect(() => {
    const event = eventData.find((e) => e.id === eventId);
    if (event) {
      setCurrentEvent(event);
      setEditedEvent(event);
    } else {
      // Redirect to 404 if event not found
      navigate('/not-found', { replace: true });
    }
  }, [eventId, navigate]);
  
  // Performance optimization: only save to localStorage if in edit mode
  const handleSaveChanges = () => {
    if (!editedEvent) return;
    
    // Update event in localStorage for persistence
    const allEvents = JSON.parse(localStorage.getItem('event-data') || JSON.stringify(eventData));
    const updatedEvents = allEvents.map((e: EventType) => 
      e.id === editedEvent.id ? editedEvent : e
    );
    
    localStorage.setItem('event-data', JSON.stringify(updatedEvents));
    
    // Update current event and exit edit mode
    setCurrentEvent(editedEvent);
    setEditMode(false);
    
    toast({
      title: "Event Updated",
      description: "The event details have been saved.",
    });
  };
  
  const handleCancelEdit = () => {
    // Reset edited event to current event and exit edit mode
    setEditedEvent(currentEvent);
    setEditMode(false);
    
    toast({
      title: "Edit Cancelled",
      description: "No changes were made to the event."
    });
  };
  
  // Return loading or no event message
  if (!currentEvent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading event details...</p>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Fixed WebGL Background */}
      <div className="fixed inset-0 z-0">
        <WebGLBackground />
      </div>
      
      <Navbar />
      
      <div className="relative z-10 pt-24 pb-16">
        <div className="section-container">
          {/* Hero Section with Event Title */}
          <div className="glass-card p-6 md:p-10 mb-10 animate-on-scroll opacity-0">
            <MemoizedEventHero 
              event={currentEvent}
              isAdminMode={isAdminMode}
              editMode={editMode}
              editedEvent={editedEvent}
              setEditMode={setEditMode}
              setEditedEvent={setEditedEvent}
              handleSaveChanges={handleSaveChanges}
              handleCancelEdit={handleCancelEdit}
            />
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event Content (Description, Rules, etc.) */}
            <MemoizedEventContent 
              currentEvent={currentEvent}
              editMode={editMode}
              setEditedEvent={editedEvent ? setEditedEvent : undefined}
            />
            
            {/* Event Details Sidebar */}
            <div className="md:col-span-1">
              <MemoizedEventInfo 
                event={currentEvent} 
                editMode={editMode}
                editedEvent={editedEvent}
                setEditedEvent={editedEvent ? setEditedEvent : undefined}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
