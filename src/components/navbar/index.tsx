
import { useState, useEffect, useCallback, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { NavLinks, NavLink } from './NavLinks';
import { CollegeLogo } from './CollegeLogo';
import { DepartmentLogo } from './DepartmentLogo';
import { ThemeToggle } from './ThemeToggle';
import { MobileNav } from './MobileNav';
 
export { default as navbar } from './NavLinks'; // Adjust based on where `Navbar` is defined
export { default as MobileNav } from './MobileNav';
export { default as Logo } from './Logo';
export { default as CollegeLogo } from './CollegeLogo';
export { default as DepartmentLogo } from './DepartmentLogo';
export { default as ThemeToggle } from './ThemeToggle';


const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Register', href: '#register' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = memo(function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Improved navigation handling function
  const handleNavigation = useCallback((href: string) => {
    setIsMenuOpen(false);
    
    if (href === '/') {
      // Navigate to home page
      navigate('/');
      window.scrollTo(0, 0);
      return;
    }
    
    if (href.startsWith('#')) {
      if (isHomePage) {
        // On home page, just scroll to the section
        const element = document.querySelector(href);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        // On other pages, navigate to home and then to the section
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    } else {
      // Navigate to other routes
      navigate(href);
    }
  }, [navigate, isHomePage]);

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-8 w-full',
        isScrolled ? 'py-2 glass shadow-subtle' : 'py-4 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - College Logo and Name */}
        <CollegeLogo />

        {/* Desktop Navigation */}
        <NavLinks 
          links={navLinks} 
          isHomePage={isHomePage} 
          handleNavigation={handleNavigation}
        />
        
        {/* Desktop - Theme Toggle */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* Right side - Department Logo and Name (Desktop) */}
        <DepartmentLogo />

        {/* Mobile Navigation */}
        <MobileNav 
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          navLinks={navLinks}
          isHomePage={isHomePage}
          handleNavigation={handleNavigation}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </nav>
  );
});