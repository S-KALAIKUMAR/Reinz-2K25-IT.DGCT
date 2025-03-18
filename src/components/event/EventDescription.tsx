
import { ScrollText } from 'lucide-react';
import { EventType } from '@/utils/eventData';
import { useIsMobile } from '@/hooks/use-mobile';

interface EventDescriptionProps {
  currentEvent: EventType;
  editMode: boolean;
  setEditedEvent: (event: EventType) => void;
}

export const EventDescription = ({ currentEvent, editMode, setEditedEvent }: EventDescriptionProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="mb-6">
      <h2 className="heading-md mb-4 text-primary border-b border-primary/20 pb-2 flex items-center">
        <ScrollText className="mr-2" size={isMobile ? 18 : 22} />
        Event Description
      </h2>
      {!editMode ? (
        <p className="text-muted-foreground leading-relaxed">
          {currentEvent.description}
        </p>
      ) : (
        <textarea
          value={currentEvent.description}
          onChange={(e) => setEditedEvent({ ...currentEvent, description: e.target.value })}
          className="w-full min-h-[150px] p-3 border rounded"
          placeholder="Event Description"
        />
      )}
    </div>
  );
};
