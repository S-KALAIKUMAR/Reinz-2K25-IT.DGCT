
import { Edit2, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { EventType } from '@/utils/eventData';

interface EventHeroProps {
  event: EventType;
  isAdminMode: boolean;
  editMode?: boolean;
  editedEvent?: EventType;
  setEditMode?: (value: boolean) => void;
  setEditedEvent?: (event: EventType) => void;
  handleSaveChanges?: () => void;
  handleCancelEdit?: () => void;
}

export const EventHero = ({ 
  event, 
  editMode = false, 
  editedEvent, 
  isAdminMode,
  setEditMode,
  setEditedEvent,
  handleSaveChanges,
  handleCancelEdit
}: EventHeroProps) => {
  const currentEvent = editMode && editedEvent ? editedEvent : event;
  
  const typeColors = {
    technical: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-700',
      light: 'bg-blue-100'
    },
    'non-technical': {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
      light: 'bg-purple-100'
    },
    workshop: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-700',
      light: 'bg-emerald-100'
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto">            
      <div className="flex justify-between items-center mb-4">
        <span className={cn(
          'chip text-sm',
          typeColors[currentEvent.type].light,
          typeColors[currentEvent.type].text
        )}>
          {currentEvent.type === 'technical' ? 'Technical Event' : 
          currentEvent.type === 'non-technical' ? 'Non-Technical Event' : 'Workshop'}
        </span>
        
        {isAdminMode && (
          <div>
            {!editMode ? (
              <button 
                onClick={() => setEditMode && setEditMode(true)}
                className="flex items-center py-1 px-3 rounded-full bg-primary/10 text-primary text-sm"
              >
                <Edit2 size={14} className="mr-1" />
                Edit Event
              </button>
            ) : (
              <div className="flex space-x-2">
                <button 
                  onClick={handleSaveChanges}
                  className="flex items-center py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm"
                >
                  <Check size={14} className="mr-1" />
                  Save
                </button>
                <button 
                  onClick={handleCancelEdit}
                  className="flex items-center py-1 px-3 rounded-full bg-red-100 text-red-700 text-sm"
                >
                  <X size={14} className="mr-1" />
                  Cancel
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      
      {!editMode ? (
        <h1 className="heading-xl text-white mb-6 shadow-text">{currentEvent.title}</h1>
      ) : (
        <input
          type="text"
          value={currentEvent.title}
          onChange={(e) => setEditedEvent && setEditedEvent({ ...currentEvent, title: e.target.value })}
          className="heading-xl mb-6 w-full bg-white/90 rounded px-4 py-2"
          placeholder="Event Title"
        />
      )}
    </div>
  );
};
