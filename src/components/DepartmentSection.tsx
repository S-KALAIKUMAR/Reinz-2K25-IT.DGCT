
import { useAdmin } from '@/contexts/AdminContext';
import { useState } from 'react';
import { Edit2, Check, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Logo } from '@/components/navbar/Logo';
import { memo } from 'react';

export const DepartmentSection = memo(function DepartmentSection() {
  const { isAdminMode } = useAdmin();
  const { toast } = useToast();
  const [editMode, setEditMode] = useState(false);
  
  // Get department content from localStorage or use default
  const getDefaultDepartmentContent = () => {
    return {
      title: "About the Department",
      subtitle: "Department of Information Technology",
      description: "The Department of Information Technology at our institution is dedicated to academic excellence and innovation. Established with a vision to produce competent professionals, our department offers comprehensive programs that blend theoretical knowledge with practical skills. Our faculty members are experts in various domains including Artificial Intelligence, Machine Learning, Data Science, Cloud Computing, and Cyber Security. The department is equipped with state-of-the-art infrastructure including specialized laboratories, a digital library, and research centers that facilitate hands-on learning and cutting-edge research.",
      vision: "To be a center of excellence in Information Technology education, research, and innovation that prepares students to address the technological challenges of tomorrow.",
      mission: "To provide quality education through innovative teaching methodologies, to promote research and development in emerging areas of technology, and to foster industry-academia collaboration for the advancement of computing knowledge and applications.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop"
    };
  };
  
  const [departmentContent, setDepartmentContent] = useState(() => {
    const savedContent = localStorage.getItem('departmentContent');
    return savedContent ? JSON.parse(savedContent) : getDefaultDepartmentContent();
  });
  
  const [editedContent, setEditedContent] = useState(departmentContent);
  
  const handleSave = () => {
    setDepartmentContent(editedContent);
    localStorage.setItem('departmentContent', JSON.stringify(editedContent));
    setEditMode(false);
    toast({
      title: "Department Content Updated",
      description: "The department section has been updated successfully."
    });
  };
  
  const handleCancel = () => {
    setEditedContent(departmentContent);
    setEditMode(false);
  };
  
  return (
    <section id="department" className="py-20 w-full">
      <div className="container px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="chip mb-4 animate-on-scroll opacity-0">Department</span>
            
            {/* Department Logo instead of title text - ENLARGED */}
            <div className="flex justify-center mb-6">
              <div className="w-28 h-28 md:w-40 md:h-40 logo-container bg-background/80 p-2 overflow-hidden">
                <Logo 
                  src="/department-logo.png" 
                  alt="Department of Information Technology"
                  className="w-full h-full object-contain"
                  fallbackText="IT"
                />
              </div>
            </div>
            
            {!editMode ? (
              <h3 className="heading-sm mb-6 animate-on-scroll opacity-0 text-primary">{departmentContent.subtitle}</h3>
            ) : (
              <input
                type="text"
                className="heading-sm mb-6 w-full text-center bg-transparent border-b border-primary/30 focus:outline-none focus:border-primary text-primary"
                value={editedContent.subtitle}
                onChange={(e) => setEditedContent({...editedContent, subtitle: e.target.value})}
              />
            )}
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-on-scroll opacity-0 glass-card overflow-hidden relative">
              {isAdminMode && (
                <div className="absolute top-4 right-4 z-10 flex space-x-2">
                  {!editMode ? (
                    <button 
                      onClick={() => setEditMode(true)}
                      className="p-2 rounded-full bg-white/80 text-primary hover:bg-white transition-colors"
                    >
                      <Edit2 size={18} />
                    </button>
                  ) : (
                    <>
                      <button 
                        onClick={handleSave}
                        className="p-2 rounded-full bg-white/80 text-green-500 hover:bg-white transition-colors"
                      >
                        <Check size={18} />
                      </button>
                      <button 
                        onClick={handleCancel}
                        className="p-2 rounded-full bg-white/80 text-red-500 hover:bg-white transition-colors"
                      >
                        <X size={18} />
                      </button>
                    </>
                  )}
                </div>
              )}
              
              <div className="p-8">
                {!editMode ? (
                  <>
                    <p className="leading-relaxed text-muted-foreground mb-6">
                      {departmentContent.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-primary mb-2">Vision</h4>
                      <p className="text-muted-foreground">{departmentContent.vision}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-primary mb-2">Mission</h4>
                      <p className="text-muted-foreground">{departmentContent.mission}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-6">
                      <label className="block mb-2 text-sm font-medium">Department Description</label>
                      <textarea
                        className="w-full min-h-[150px] p-4 rounded-md border border-border bg-white/70 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={editedContent.description}
                        onChange={(e) => setEditedContent({...editedContent, description: e.target.value})}
                      ></textarea>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-medium">Vision</label>
                      <textarea
                        className="w-full min-h-[80px] p-4 rounded-md border border-border bg-white/70 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={editedContent.vision}
                        onChange={(e) => setEditedContent({...editedContent, vision: e.target.value})}
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm font-medium">Mission</label>
                      <textarea
                        className="w-full min-h-[80px] p-4 rounded-md border border-border bg-white/70 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={editedContent.mission}
                        onChange={(e) => setEditedContent({...editedContent, mission: e.target.value})}
                      ></textarea>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0 relative">
              {isAdminMode && editMode && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10 rounded-lg">
                  <div className="bg-white p-4 rounded-md">
                    <p className="mb-2 text-sm">Enter a new image URL:</p>
                    <input
                      type="text"
                      className="w-full p-2 border rounded mb-2"
                      value={editedContent.image}
                      onChange={(e) => setEditedContent({...editedContent, image: e.target.value})}
                      placeholder="https://example.com/image.jpg"
                    />
                    <p className="text-xs text-gray-500">
                      Use a direct image URL (e.g., Unsplash, Pexels)
                    </p>
                  </div>
                </div>
              )}
              <div className="glass-card overflow-hidden h-full">
                <img
                  src={departmentContent.image}
                  alt="Department of Computer Science"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 min-h-[350px]"
                  loading="lazy" // Add lazy loading for performance
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
