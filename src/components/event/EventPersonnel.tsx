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
          { name: "Ms.A.Malathi", role: "AP/IT" }
        ];
      case 'cook-with-prompt':
        return [
          { name: "Ms.M.Sathya", role: "AP/IT" }
        ];
      case 'bug-bounty':
        return [
          { name: "Ms.M.Narmatha", role: "AP/IT" }
        ];
      case 'meme-media':
        return [
          { name: "Ms.N.Jothi", role: "AP/IT" }
          
        ];
      case 'ai-photography':
        return [
          { name: "Ms.K.Karthi", role: "AP/IT" }
        ];
      case 'ai-workshop':
        return [
          { name: "Ms.J.Gulzar Begam", role: "AP/IT" }
        ];
      default:
        return [
          { name: "Ms.S.M.Nivetha", role: "AP/IT" }
        ];
    }
  };

  // Define coordinators for each event
  const getEventCoordinators = (id: string) => {
    switch (id) {
      case 'ideathon':
        return [
          { name: "P.Aathish Kumar"},
          { name: "S.Karthikeyan"},
          { name: ".Aryan Bhaskar sooryavanshi "},
          { name: "Srinidhi"}
        ];
      case 'cook-with-prompt':
        return [
          { name: "S.Akash"},
          { name: "L.G.Gopika"},
          { name: "Mugilan"},
          { name: "shrimathi"}
        ];
      case 'bug-bounty':
        return [
          { name: "M.Suresh"},
          { name: "M.Sandhiya"},
          { name: "Afra Fatima"},
          { name: " Meiyalagan"}
        ];
      case 'meme-media':
        return [
          { name: "R.Arun Eshwar"},
          { name: "S.Arun prasath"},
          { name: "Aryan Bhaskar sooryavanshi"},
          { name: "Deepak"}
        ];
      case 'ai-photography':
        return [
          { name: "G.Divyadharshini"},
          { name: "A.B.Mohammad Zaffer"},
          { name: "Balasubramaniam"},
          { name: "shantha Sri"}
        ];
      case 'ai-workshop':
        return [
          { name: "S.Gokul Dharshan"},
          { name: "M.Subham Kumar "},
          { name: ".premalatha"},
          { name: "Guru"}
        ];
      default:
        return [
          { name: "S.Sivaramakrishnan", contact: "86818 10801" },
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
