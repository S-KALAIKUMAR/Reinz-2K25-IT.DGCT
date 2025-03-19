
import { useAdmin } from '@/contexts/AdminContext';
import { CountdownTimer } from './CountdownTimer';
import { Layers, Calendar, Clock, MapPin, Users, Edit2, Check, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

export function Workshops() {
  const { eventData, updateEvent, isAdminMode } = useAdmin();
  const { toast } = useToast();
  
  const workshop = eventData.find(event => event.type === 'workshop');
  
  const [editMode, setEditMode] = useState(false);
  const [editedWorkshop, setEditedWorkshop] = useState(workshop);
  
  if (!workshop) return null;
  
  const workshop_date = `${workshop.date}T${workshop.time.split(' - ')[0].replace(' AM', '').replace(' PM', '')}`;
  
  const workshopAgenda = [
    {
      time: '10:00 AM - 11:30 AM',
      title: 'Introduction to AI Tools',
      description: 'Overview of modern AI tools and frameworks'
    },
    {
      time: '11:45 AM - 1:00 PM',
      title: 'Building Your First AI Model',
      description: 'Hands-on session to create a basic AI model'
    },
    {
      time: '2:00 PM - 3:30 PM',
      title: 'Advanced Techniques',
      description: 'Exploring advanced AI concepts and implementations'
    },
    {
      time: '3:45 PM - 4:00 PM',
      title: 'Q&A and Networking',
      description: 'Open discussion and networking session'
    }
  ];
  
  const handleSaveChanges = () => {
    if (editedWorkshop) {
      updateEvent(editedWorkshop);
      setEditMode(false);
      toast({
        title: "Workshop Updated",
        description: "The workshop details have been updated successfully."
      });
    }
  };
  
  const handleCancelEdit = () => {
    setEditedWorkshop(workshop);
    setEditMode(false);
  };
  
  const currentWorkshop = editMode ? editedWorkshop : workshop;
  
  return (
    <section id="workshops" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="chip mb-4 opacity-0 animate-fade-in">Workshops</span>
          <h2 className="heading-lg mb-6 opacity-0 animate-fade-in stagger-1">
            Enhance Your Skills
          </h2>
          <p className="subtitle opacity-0 animate-fade-in stagger-2">
            Participate in our hands-on workshops led by industry experts.
            Learn practical skills and gain valuable insights.
          </p>
          
          {isAdminMode && (
            <div className="mt-4">
              {!editMode ? (
                <button 
                  onClick={() => setEditMode(true)}
                  className="flex items-center mx-auto py-1 px-3 rounded-full bg-primary/10 text-primary text-sm"
                >
                  <Edit2 size={14} className="mr-1" />
                  Edit Workshop
                </button>
              ) : (
                <div className="flex justify-center space-x-2">
                  <button 
                    onClick={handleSaveChanges}
                    className="flex items-center py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm"
                  >
                    <Check size={14} className="mr-1" />
                    Save Changes
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
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="opacity-0 animate-fade-in stagger-1">
            <div className="glass-card overflow-hidden">
              <div className="h-64 overflow-hidden relative">
                {editMode && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                    <div className="bg-white p-4 rounded-md max-w-md">
                      <p className="mb-2 text-sm">Enter a new image URL:</p>
                      <input
                        type="text"
                        className="w-full p-2 border rounded mb-2"
                        value={currentWorkshop.image}
                        onChange={(e) => setEditedWorkshop({...currentWorkshop, image: e.target.value})}
                        placeholder="https://example.com/image.jpg"
                      />
                      <p className="text-xs text-gray-500">
                        Use a direct image URL (e.g., Unsplash, Pexels)
                      </p>
                    </div>
                  </div>
                )}
                <img 
                  src={currentWorkshop.image} 
                  alt={currentWorkshop.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-8">
                {!editMode ? (
                  <h3 className="heading-md mb-4">{currentWorkshop.title}</h3>
                ) : (
                  <input
                    type="text"
                    className="heading-md mb-4 w-full p-2 border rounded"
                    value={currentWorkshop.title}
                    onChange={(e) => setEditedWorkshop({...currentWorkshop, title: e.target.value})}
                  />
                )}
                
                {!editMode ? (
                  <p className="text-muted-foreground mb-6">{currentWorkshop.description}</p>
                ) : (
                  <textarea
                    className="w-full min-h-[100px] p-2 border rounded mb-6"
                    value={currentWorkshop.description}
                    onChange={(e) => setEditedWorkshop({...currentWorkshop, description: e.target.value})}
                  />
                )}
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Calendar size={16} className="mr-3 text-primary" />
                    {!editMode ? (
                      <span>{new Date(currentWorkshop.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    ) : (
                      <input
                        type="date"
                        className="p-1 border rounded"
                        value={currentWorkshop.date}
                        onChange={(e) => setEditedWorkshop({...currentWorkshop, date: e.target.value})}
                      />
                    )}
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Clock size={16} className="mr-3 text-primary" />
                    {!editMode ? (
                      <span>{currentWorkshop.time}</span>
                    ) : (
                      <input
                        type="text"
                        className="p-1 border rounded"
                        value={currentWorkshop.time}
                        onChange={(e) => setEditedWorkshop({...currentWorkshop, time: e.target.value})}
                        placeholder="10:00 AM - 4:00 PM"
                      />
                    )}
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <MapPin size={16} className="mr-3 text-primary" />
                    <span>Main Auditorium, Tech Building</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Users size={16} className="mr-3 text-primary" />
                    <span>Limited to 50 participants</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#register"
                    className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium text-center transition-all hover:shadow-lg hover:opacity-90"
                  >
                     View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in stagger-2">
            <div className="glass-card p-8 mb-8">
              <div className="flex items-center mb-6">
                <Layers className="h-6 w-6 text-primary mr-3" />
                <h3 className="heading-sm">Workshop Agenda</h3>
              </div>
              
              <div className="space-y-6">
                {workshopAgenda.map((item, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4 py-1">
                    <p className="text-sm text-primary font-medium mb-1">{item.time}</p>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="heading-sm mb-4">Workshop Countdown</h3>
              <CountdownTimer targetDate={workshop_date} className="justify-start" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
