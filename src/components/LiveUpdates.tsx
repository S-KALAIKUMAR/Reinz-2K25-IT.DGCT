
import { useState, useEffect } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { BellRing, X } from 'lucide-react';

type Announcement = {
  id: string;
  message: string;
  timestamp: number;
  isImportant: boolean;
};

export function LiveUpdates() {
  const { isAdminMode } = useAdmin();
  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    const saved = localStorage.getItem('symposium-announcements');
    return saved ? JSON.parse(saved) : [
      {
        id: '1',
        message: 'Welcome to the symposium! Stay tuned for live updates.',
        timestamp: Date.now(),
        isImportant: true
      }
    ];
  });
  const [newAnnouncement, setNewAnnouncement] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem('symposium-announcements', JSON.stringify(announcements));
  }, [announcements]);

  useEffect(() => {
    // Ticker effect for multiple announcements
    if (announcements.length > 1) {
      const interval = setInterval(() => {
        setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [announcements.length]);

  const addAnnouncement = () => {
    if (newAnnouncement.trim()) {
      const announcement: Announcement = {
        id: Date.now().toString(),
        message: newAnnouncement,
        timestamp: Date.now(),
        isImportant
      };
      setAnnouncements([announcement, ...announcements]);
      setNewAnnouncement('');
      setIsImportant(false);
    }
  };

  const deleteAnnouncement = (id: string) => {
    setAnnouncements(announcements.filter(a => a.id !== id));
  };

  return (
    <section id="updates" className="py-16 w-full relative">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="chip mb-4">Live Updates</span>
          <h2 className="heading-md mb-4">
            Latest Announcements
          </h2>
        </div>
        
        {/* Live ticker for announcements */}
        {announcements.length > 0 && (
          <div className="bg-primary/10 p-4 rounded-lg mb-8 overflow-hidden">
            <div className="flex items-center space-x-3">
              <BellRing className="text-primary h-5 w-5" />
              <p className="font-medium truncate transition-all">
                {announcements[currentAnnouncement].message}
              </p>
            </div>
          </div>
        )}
        
        {/* Admin controls for adding announcements */}
        {isAdminMode && (
          <div className="mb-8 p-4 border border-border rounded-lg">
            <h3 className="text-lg font-medium mb-4">Add Announcement</h3>
            <div className="flex flex-col space-y-3">
              <textarea
                className="w-full p-3 border rounded-md"
                rows={3}
                value={newAnnouncement}
                onChange={(e) => setNewAnnouncement(e.target.value)}
                placeholder="Enter announcement text..."
              />
              <div className="flex items-center">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isImportant}
                    onChange={() => setIsImportant(!isImportant)}
                    className="rounded"
                  />
                  <span>Mark as important</span>
                </label>
                <button
                  onClick={addAnnouncement}
                  className="ml-auto px-4 py-2 bg-primary text-white rounded-md"
                >
                  Post Announcement
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* List of all announcements */}
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div 
              key={announcement.id}
              className={`p-4 rounded-lg flex justify-between ${
                announcement.isImportant 
                  ? 'bg-primary/10 border border-primary/30' 
                  : 'bg-secondary'
              }`}
            >
              <div>
                <p className="mb-2">{announcement.message}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(announcement.timestamp).toLocaleString()}
                </p>
              </div>
              {isAdminMode && (
                <button 
                  onClick={() => deleteAnnouncement(announcement.id)}
                  className="text-muted-foreground hover:text-destructive transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
