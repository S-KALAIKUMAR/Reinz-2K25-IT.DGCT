
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="glass-card p-10 text-center max-w-lg animate-fade-in">
        <h1 className="heading-xl mb-4">404</h1>
        <p className="subtitle mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:opacity-90"
        >
          <ArrowLeft size={18} className="mr-2" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
