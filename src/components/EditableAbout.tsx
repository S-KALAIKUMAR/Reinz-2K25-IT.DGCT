import { useState } from 'react';
import { Edit2, Check, X } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';
import { useToast } from "@/components/ui/use-toast";

export function EditableAbout() {
  const { aboutContent, updateAboutContent, isAdminMode } = useAdmin();
  const { toast } = useToast();
  const [editMode, setEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState(aboutContent);

  const handleSave = () => {
    updateAboutContent(editedContent);
    setEditMode(false);
    toast({
      title: "Content Updated",
      description: "The about section has been updated successfully.",
    });
  };

  const handleCancel = () => {
    setEditedContent(aboutContent);
    setEditMode(false);
  };

  return (
    <section id="about" className="py-20 bg-gradient-radial from-background to-secondary/40">
      <div className="section-container">
        {/* About Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
          <span className="chip mb-4">About</span>
          {!editMode ? (
            <h2 className="heading-lg mb-6">{aboutContent.title}</h2>
          ) : (
            <input
              type="text"
              className="heading-lg mb-6 w-full text-center bg-transparent border-b border-primary/30 focus:outline-none focus:border-primary"
              value={editedContent.title}
              onChange={(e) => setEditedContent({...editedContent, title: e.target.value})}
            />
          )}
        </div>
  
        
        
        {/* Department Section */}
<div className="glass-card p-8 mb-10 animate-on-scroll opacity-0 text-center max-w-3xl mx-auto">

{/* Department Logo */}
<div className="flex justify-center">
  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg">
    <img 
      src="/images/logo.jpg" 
      alt="Department Logo" 
      className="w-full h-full object-cover"
    />
  </div>
</div>

{/* Department Name */}
<h2 className="text-3xl font-bold text-primary mt-4">
  Department of Information Technology
</h2>

{/* About the Department */}
<div className="mt-6 text-justify">
  <h3 className="text-2xl font-semibold text-white mb-2 text-center">About Our Department</h3>
  <p className="leading-relaxed text-muted-foreground">
  The Department of Information Technology at Dhirajlal Gandhi College of Technology, established in 2022 is committed to delivering excellence in IT education. It nurtures both technical expertise and responsible citizenship, ensuring students gain a strong foundation in both theoretical and practical aspects of Information Technology.


  </p>
  <p className="leading-relaxed text-muted-foreground mt-2">
    Our department is committed to providing a comprehensive education that blends theoretical 
    knowledge with practical application. Our faculty members are experts in their respective 
    fields, dedicated to nurturing the next generation of computer scientists and engineers.
  </p>
</div>

{/* Vision Section */}
<div className="mt-6 text-justify">
  <h3 className="text-2xl font-semibold text-white mb-2 text-center">Vision</h3>
  <p className="leading-relaxed text-muted-foreground">
  To cultivate a learning environment that seamlessly integrates theoretical knowledge with hands-on experience, upholding a legacy of academic excellence.

  </p>
</div>

{/* Mission Section */}
<div className="mt-6 text-justify">
  <h3 className="text-2xl font-semibold text-white mb-2 text-center">Mission</h3>
  <ul className="list-disc list-inside text-muted-foreground space-y-2">
    <li>To provide quality education in computer science and engineering.</li>
    <li>To enhance research and innovation through collaboration.</li>
    <li>To equip students with industry-relevant skills and ethics.</li>
  </ul>
</div>

</div>


        
        {/* About Event Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center animate-on-scroll opacity-0">
          <div className="order-2 md:order-1">
            <div className="glass-card overflow-hidden relative">
              {isAdminMode && (
                <div className="absolute top-2 right-2 z-10 flex space-x-2">
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
              
              {!editMode ? (
                <div className="p-8">
                  <h3 className="heading-md mb-4 text-primary">About the Event</h3>
                  <p className="leading-relaxed text-muted-foreground mb-4">
                    {aboutContent.description}
                  </p>
                  <p className="leading-relaxed text-muted-foreground mb-4">
                    The symposium features a diverse range of events including technical competitions, workshops, paper presentations, and networking opportunities. Participants will have the chance to demonstrate their skills, learn from industry experts, and connect with peers from various institutions.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    This year's theme focuses on emerging technologies in AI, blockchain, and cloud computing. Join us for an immersive learning experience that will enhance your knowledge and open doors to new opportunities in the IT field.
                  </p>
                </div>
              ) : (
                <div className="p-8">
                  <h3 className="heading-md mb-4 text-primary">About the Event</h3>
                  <textarea
                    className="w-full min-h-[300px] p-4 rounded-md border border-border bg-white/70 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={editedContent.description}
                    onChange={(e) => setEditedContent({...editedContent, description: e.target.value})}
                  />
                </div>
              )}
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="glass-card overflow-hidden relative">
              {isAdminMode && editMode && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
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
              <img
                src="images/broucher.jpg"
                alt="About Symposium"
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}