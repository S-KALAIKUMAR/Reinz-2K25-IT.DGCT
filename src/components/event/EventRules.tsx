
import { X, ScrollText } from 'lucide-react';
import { EventType } from '@/utils/eventData';

interface EventRulesProps {
  currentEvent: EventType;
  editMode: boolean;
  setEditedEvent: (event: EventType) => void;
}

export const EventRules = ({ currentEvent, editMode, setEditedEvent }: EventRulesProps) => {
  if (!currentEvent.rules) return null;
  
  return (
    <div className="mb-6">
      <h2 className="heading-md mb-4 text-primary border-b border-primary/20 pb-2">
        <div className="flex items-center">
          <ScrollText size={18} className="mr-2 text-primary" />
          <span>Rules & Guidelines</span>
          {editMode && (
            <button
              onClick={() => setEditedEvent({ 
                ...currentEvent, 
                rules: [...(currentEvent.rules || []), ''] 
              })}
              className="ml-2 px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
            >
              + Add Rule 
            </button>
          )}
        </div>
      </h2>
      
      {!editMode ? (
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          {currentEvent.rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-2">
          {currentEvent.rules.map((rule, index) => (
            <li key={index} className="flex items-center">
              <input
                type="text"
                value={rule}
                onChange={(e) => {
                  const updatedRules = [...currentEvent.rules];
                  updatedRules[index] = e.target.value;
                  setEditedEvent({ ...currentEvent, rules: updatedRules });
                }}
                className="flex-1 p-2 text-sm border rounded"
                placeholder="Rule description"
              />
              <button
                onClick={() => {
                  const updatedRules = currentEvent.rules.filter((_, i) => i !== index);
                  setEditedEvent({ ...currentEvent, rules: updatedRules });
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
 