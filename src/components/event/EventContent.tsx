
import { EventType } from '@/utils/eventData';
import { EventDescription } from './EventDescription';
import { EventRules } from './EventRules';
import { EventCriteria } from './EventCriteria';
import { EventPersonnel } from './EventPersonnel';

interface EventContentProps {
  currentEvent: EventType;
  editMode: boolean;
  setEditedEvent?: (event: EventType) => void;
}

export const EventContent = ({ currentEvent, editMode, setEditedEvent }: EventContentProps) => {
  return (
    <div className="md:col-span-2">
      <EventDescription 
        currentEvent={currentEvent}
        editMode={editMode}
        setEditedEvent={setEditedEvent}
      />
      
      {currentEvent.rules && (
        <EventRules
          currentEvent={currentEvent}
          editMode={editMode}
          setEditedEvent={setEditedEvent}
        />
      )}
      
      {currentEvent.criteria && (
        <EventCriteria
          currentEvent={currentEvent}
          editMode={editMode}
          setEditedEvent={setEditedEvent}
        />
      )}
      
      <EventPersonnel editMode={editMode} />
    </div>
  );
};
