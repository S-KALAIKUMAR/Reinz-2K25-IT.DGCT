import { User, Users } from 'lucide-react';
import { useParams } from 'react-router-dom';

interface EventPersonnelProps {
  editMode: boolean;
}

export const EventPersonnel = ({ editMode }: EventPersonnelProps) => {
  const { eventId } = useParams<{ eventId: string }>();

  // Define judges for each event
  const getEventJudges = (id: string) => {
    switch (id) {
      case 'ideathon':
        return [
          { name: "Prof. Rajesh Kumar", role: "AI Specialist" },
          { name: "Dr. Meena K", role: "Product Innovation Expert" }
        ];
      case 'cook-with-prompt':
        return [
          { name: "Dr. Anitha S", role: "Industry Expert" },
          { name: "Mr. Govind R", role: "Prompt Engineer" }
        ];
      case 'bug-bounty':
        return [
          { name: "Prof. Venkat N", role: "Security Specialist" },
          { name: "Ms. Shreya T", role: "Debug Expert" }
        ];
      case 'meme-media':
        return [
          { name: "Dr. Priya S", role: "Digital Media Faculty" },
          { name: "Mr. Karthik R", role: "Content Creator" }
        ];
      case 'ai-photography':
        return [
          { name: "Prof. Sanjay M", role: "Visual Arts Faculty" },
          { name: "Ms. Deepika L", role: "Professional Photographer" }
        ];
      case 'ai-workshop':
        return [
          { name: "Dr. Ramesh V", role: "AI Researcher" },
          { name: "Ms. Sarah J", role: "ML Engineer" }
        ];
      default:
        return [
          { name: "Prof. Rajesh Kumar", role: "AI Specialist" },
          { name: "Dr. Anitha S", role: "Industry Expert" }
        ];
    }
  };

  // Define coordinators for each event
  const getEventCoordinators = (id: string) => {
    switch (id) {
      case 'ideathon':
        return [
          { name: "Alyushra A", contact: "6369548280" },
          { name: "Rahul S", contact: "9876543210" }
        ];
      case 'cook-with-prompt':
        return [
          { name: "Peranandha KL", contact: "8148537603" },
          { name: "Kavya R", contact: "9988776655" }
        ];
      case 'bug-bounty':
        return [
          { name: "Arjun K", contact: "7788996655" },
          { name: "Meera P", contact: "8899775544" }
        ];
      case 'meme-media':
        return [
          { name: "Divya S", contact: "7766554433" },
          { name: "Akash M", contact: "8877665544" }
        ];
      case 'ai-photography':
        return [
          { name: "Vikram J", contact: "9988776655" },
          { name: "Lakshmi N", contact: "8877665544" }
        ];
      case 'ai-workshop':
        return [
          { name: "Karthikeyan P", contact: "7788996655" },
          { name: "Sona L", contact: "8877665544" }
        ];
      default:
        return [
          { name: "Alyushra A", contact: "6369548280" },
          { name: "Peranandha KL", contact: "8148537603" }
        ];
    }
  };

  const judges = getEventJudges(eventId || '');
  const coordinators = getEventCoordinators(eventId || '');

  return (
    <>
      {/* Judges Section */}
      <div className="mb-6">
        <h2 className="heading-md mb-4 text-primary border-b border-primary/20 pb-2">
          <div className="flex items-center">
            <User size={18} className="mr-2 text-primary" />
            <span>Event Judges</span>
          </div>
        </h2>
        
        {!editMode ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {judges.map((judge, index) => (
              <div key={index} className="flex items-center p-3 bg-white/50 dark:bg-black/10 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-medium">{judge.name}</h4>
                  <p className="text-sm text-muted-foreground">{judge.role}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/60 dark:bg-black/20 p-4 rounded-lg">
            <p className="text-sm">Judge information is editable by administrators only</p>
          </div>
        )}
      </div>
      
      {/* Student Coordinators */}
      <div className="mb-6">
        <h2 className="heading-md mb-4 text-primary border-b border-primary/20 pb-2">
          <div className="flex items-center">
            <Users size={18} className="mr-2 text-primary" />
            <span>Student Coordinators</span>
          </div>
        </h2>
        
        {!editMode ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coordinators.map((coordinator, index) => (
              <div key={index} className="flex items-center p-3 bg-white/50 dark:bg-black/10 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-medium">{coordinator.name}</h4>
                  <p className="text-sm text-muted-foreground">{coordinator.contact}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/60 dark:bg-black/20 p-4 rounded-lg">
            <p className="text-sm">Coordinator information is editable by administrators only</p>
          </div>
        )}
      </div>
    </>
  );
};
