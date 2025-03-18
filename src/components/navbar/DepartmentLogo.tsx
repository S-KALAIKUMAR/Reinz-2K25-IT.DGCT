/*
import { Logo } from './Logo';

interface DepartmentLogoProps {
  isMobile?: boolean;
}

export function DepartmentLogo({ isMobile = false }: DepartmentLogoProps) {
  return (
    <div className={isMobile 
      ? "md:hidden flex items-center space-x-2" 
      : "hidden md:flex items-center space-x-4"
    }>
      {!isMobile && (
        <div className="text-right">
          <h2 className="text-sm font-medium leading-tight">Department of Information Technology</h2>
          <p className="text-xs text-muted-foreground">Elite Association</p>
        </div>
      )}
      <div className="logo-container bg-background">
        <Logo 
          src="/department-logo.png" 
          alt="Department Logo"
          className={(isMobile ? "h-10 w-10" : "h-12 w-12") + " object-contain"}
          fallbackText="Dept"
        />
      </div>
    </div>
  );
}*/
import { Logo } from './Logo';

interface DepartmentLogoProps {
  isMobile?: boolean;
}

export function DepartmentLogo({ isMobile = false }: DepartmentLogoProps) {
  return (
    <div className={isMobile 
      ? "md:hidden flex items-center space-x-2" 
      : "hidden md:flex items-center space-x-4"
    }>
      {!isMobile && (
        <div className="text-right">
          <h2 className="text-sm font-medium leading-tight">Department of Information Technology</h2>
          <p className="text-xs text-muted-foreground">Elite Association</p>
        </div>
      )}
      <div className="rounded-full border-2 border-primary/20">
        <Logo 
          src="/images/logo2.jpg" 
          alt="Department Logo"
          className={(isMobile ? "h-16 w-16" : "h-20 w-20") + " rounded-full object-cover"}
          fallbackText="Dept"
        />
      </div>
    </div>
  );
}
export default DepartmentLogo;