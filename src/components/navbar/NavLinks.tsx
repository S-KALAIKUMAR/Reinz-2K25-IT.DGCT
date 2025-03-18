
import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface NavLink {
  name: string;
  href: string;
}

interface NavLinksProps {
  links: NavLink[];
  isHomePage: boolean;
  handleNavigation: (href: string) => void;
  setIsMenuOpen?: (isOpen: boolean) => void;
  isMobile?: boolean;
}

export const NavLinks = memo(function NavLinks({ 
  links, 
  isHomePage, 
  handleNavigation, 
  setIsMenuOpen,
  isMobile = false 
}: NavLinksProps) {
  const location = useLocation();
  
  // Function to check if link is active
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    if (href.startsWith('#')) {
      const currentHash = location.hash || window.location.hash;
      return currentHash === href;
    }
    return location.pathname === href;
  };
  
  return (
    <div className={cn(
      'hidden md:flex items-center space-x-2',
      isMobile && 'flex flex-col items-start space-x-0 space-y-4 w-full'
    )}>
      {links.map((link) => (
        <div 
          key={link.name}
          className={cn(
            !isMobile && 'px-3 py-2 rounded-md transition-colors',
            isMobile && 'w-full',
            isActiveLink(link.href) 
              ? 'text-primary font-medium' 
              : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
          )}
        >
          <button
            onClick={() => {
              handleNavigation(link.href);
              if (setIsMenuOpen) setIsMenuOpen(false);
            }}
            className={cn(
              'text-sm transition-all',
              isMobile && 'text-base w-full text-left px-2 py-2'
            )}
          >
            {link.name}
          </button>
        </div>
      ))}
    </div>
  );
});
export default NavLinks;