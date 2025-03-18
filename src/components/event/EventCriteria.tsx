
import { X, Award } from 'lucide-react';
import { EventType } from '@/utils/eventData';

interface EventCriteriaProps {
  currentEvent: EventType;
  editMode: boolean;
  setEditedEvent: (event: EventType) => void;
}

export const EventCriteria = ({ currentEvent, editMode, setEditedEvent }: EventCriteriaProps) => {
  if (!currentEvent.criteria) return null;
  
  return (
    <div className="mb-6">
      <h2 className="heading-md mb-4 text-primary border-b border-primary/20 pb-2">
        <div className="flex items-center">
          <Award size={18} className="mr-2 text-primary" />
          <span>Judging Criteria</span>
          {editMode && (
            <button
              onClick={() => setEditedEvent({ 
                ...currentEvent, 
                criteria: [...(currentEvent.criteria || []), ''] 
              })}
              className="ml-2 px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
            >
              + Add Criterion
            </button>
          )}
        </div>
      </h2>
      
      {!editMode ? (
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          {currentEvent.criteria.map((criterion, index) => (
            <li key={index}>{criterion}</li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-2">
          {currentEvent.criteria.map((criterion, index) => (
            <li key={index} className="flex items-center">
              <input
                type="text"
                value={criterion}
                onChange={(e) => {
                  const updatedCriteria = [...currentEvent.criteria];
                  updatedCriteria[index] = e.target.value;
                  setEditedEvent({ ...currentEvent, criteria: updatedCriteria });
                }}
                className="flex-1 p-2 text-sm border rounded"
                placeholder="Criterion description"
              />
              <button
                onClick={() => {
                  const updatedCriteria = currentEvent.criteria.filter((_, i) => i !== index);
                  setEditedEvent({ ...currentEvent, criteria: updatedCriteria });
                }}
                className="ml-2 p-1 text-red-500"
              >
                <X size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
