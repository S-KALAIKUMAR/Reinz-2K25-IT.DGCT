
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavLinks, NavLink } from './NavLinks';
import { ThemeToggle } from './ThemeToggle';
import { DepartmentLogo } from './DepartmentLogo';

interface MobileNavProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  navLinks: NavLink[];
  isHomePage: boolean;
  handleNavigation: (href: string) => void;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function MobileNav({
  isMenuOpen,
  toggleMenu,
  navLinks,
  isHomePage,
  handleNavigation,
  setIsMenuOpen
}: MobileNavProps) {
  return (
    <>
      <div className="md:hidden flex items-center space-x-3">
        {/* Department Logo for Mobile */}
        <DepartmentLogo isMobile />
        
        <ThemeToggle />
        
        {/* Only show menu button when menu is closed */}
        {!isMenuOpen && (
          <button 
            onClick={toggleMenu} 
            className="p-2 z-50 transition-transform duration-300"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        'fixed top-0 right-0 h-auto max-h-screen w-4/5 bg-background/95 backdrop-blur-md shadow-lg rounded-bl-2xl transition-transform duration-300 ease-in-out md:hidden',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <div className="py-16 px-6 flex flex-col items-start max-h-screen overflow-auto">
          {/* Single close button at the top - only shown when menu is open */}
          {isMenuOpen && (
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 p-2 mobile-menu-close transition-transform duration-300 hover:rotate-90"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          )}
          
          {/* Add mobile department info */}
          <div className="mb-6 text-left">
            <h3 className="text-sm font-medium">Department of Information Technology</h3>
            <p className="text-xs text-muted-foreground">Elite Association</p>
          </div>
          
          <NavLinks 
            links={navLinks} 
            isHomePage={isHomePage} 
            handleNavigation={handleNavigation} 
            setIsMenuOpen={setIsMenuOpen}
            isMobile
          />
        </div>
      </div>
    </>
  );
}
export default MobileNav;