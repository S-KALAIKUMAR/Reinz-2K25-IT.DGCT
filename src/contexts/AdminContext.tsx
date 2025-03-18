
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the event type structure
type EventType = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
  type: 'competition' | 'workshop' | 'talk';
  rules?: string[];
  criteria?: { title: string; description: string }[];
};

// Define the contact info structure
type Coordinator = {
  name: string;
  phone: string;
  email: string;
};

type ContactInfo = {
  facultyCoordinator: Coordinator;
  studentCoordinators: Coordinator[];
};

// Define the about content structure
type AboutContent = {
  title: string;
  description: string;
  image: string;
};

// Define the admin context type with all required properties
interface AdminContextType {
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
  isAdminMode: boolean; // Alias for isAdmin
  
  // About section content
  aboutContent: AboutContent;
  updateAboutContent: (content: AboutContent) => void;
  
  // Contact information
  contactInfo: ContactInfo;
  updateContactInfo: (info: ContactInfo) => void;
  
  // Event data
  eventData: EventType[];
  updateEvent: (event: EventType) => void;
}

// Create default values for the context
const defaultAboutContent: AboutContent = {
  title: "National Level Technical Symposium",
  description: "The Department of Information Technology at Dhirajlal Gandhi College of Technology is proud to host its annual National Level Technical Symposium. This premier event brings together students, researchers, and industry professionals to explore cutting-edge technologies and foster collaboration in the field of information technology.",
  image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2662&auto=format&fit=crop"
};

const defaultContactInfo: ContactInfo = {
  facultyCoordinator: {
    name: "Dr. R. Shankar",
    phone: "+91 9876543210",
    email: "shankar@dgct.ac.in"
  },
  studentCoordinators: [
    {
      name: "Arun Kumar",
      phone: "+91 8765432109",
      email: "arunkumar@dgct.ac.in"
    },
    {
      name: "Priya Sharma",
      phone: "+91 7654321098",
      email: "priyasharma@dgct.ac.in"
    }
  ]
};

const defaultEventData: EventType[] = [
  {
    id: "workshop-ai",
    title: "AI Tools for Modern Development",
    description: "Explore the latest AI tools that are revolutionizing software development. This workshop provides hands-on experience with cutting-edge AI technologies.",
    date: "2023-04-15",
    time: "10:00 AM - 4:00 PM",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=800&auto=format&fit=crop",
    type: "workshop"
  }
];

// Create the context with undefined as default
const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  // Core admin state
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Event data state
  const [eventData, setEventData] = useState<EventType[]>(() => {
    const saved = localStorage.getItem('symposium-event-data');
    return saved ? JSON.parse(saved) : defaultEventData;
  });
  
  // About content state
  const [aboutContent, setAboutContent] = useState<AboutContent>(() => {
    const saved = localStorage.getItem('symposium-about-content');
    return saved ? JSON.parse(saved) : defaultAboutContent;
  });
  
  // Contact info state
  const [contactInfo, setContactInfo] = useState<ContactInfo>(() => {
    const saved = localStorage.getItem('symposium-contact-info');
    return saved ? JSON.parse(saved) : defaultContactInfo;
  });
  
  // Save data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('symposium-event-data', JSON.stringify(eventData));
  }, [eventData]);
  
  useEffect(() => {
    localStorage.setItem('symposium-about-content', JSON.stringify(aboutContent));
  }, [aboutContent]);
  
  useEffect(() => {
    localStorage.setItem('symposium-contact-info', JSON.stringify(contactInfo));
  }, [contactInfo]);
  
  // Function to update event data
  const updateEvent = (updatedEvent: EventType) => {
    setEventData(prev => 
      prev.map(event => 
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };
  
  // Function to update about content
  const updateAboutContent = (content: AboutContent) => {
    setAboutContent(content);
  };
  
  // Function to update contact info
  const updateContactInfo = (info: ContactInfo) => {
    setContactInfo(info);
  };
  
  // Create the context value object with all required properties
  const contextValue: AdminContextType = {
    isAdmin,
    setIsAdmin,
    isAdminMode: isAdmin, // Create alias for isAdmin
    aboutContent,
    updateAboutContent,
    contactInfo,
    updateContactInfo,
    eventData,
    updateEvent
  };

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
