/*
import { Logo } from './Logo';

export function CollegeLogo() {
  return (
    <div className="flex items-center space-x-4">
      <div className="logo-container bg-background">
        <Logo 
          src="/college-logo.png" 
          alt="College Logo"
          className="h-12 w-12 object-contain"
        />
      </div>
      <div className="hidden md:block">
        <h2 className="text-sm font-medium leading-tight">Dhirajlal Gandhi College of Technology</h2>
        <p className="text-xs text-muted-foreground">Autonomous, Salem, Tamil Nadu</p>
      </div>
    </div>
  );
}*/
import { Logo } from './Logo';

export function CollegeLogo() {
  return (
    <div className="flex items-center space-x-4">
      <div className="rounded-full border-2 border-primary/20">
        <Logo 
          src="/images/pic.jpg" 
          alt="College Logo"
          className="h-16 w-16 rounded-full object-cover"
        />
      </div>
      <div className="hidden md:block">
        <h2 className="text-sm font-medium leading-tight">Dhirajlal Gandhi College of Technology</h2>
        <p className="text-xs text-muted-foreground">Autonomous, Salem, Tamil Nadu</p>
      </div>
    </div>
  );
}
export default CollegeLogo;