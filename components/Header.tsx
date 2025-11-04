import React, { useState, useEffect, useRef } from 'react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

const YouTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
);


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSocialsOpen, setIsSocialsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsSocialsOpen(false);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-surface/80 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center group cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L4 5v6.09c0 4.97 3.58 9.38 8 10.91C16.42 20.47 20 16.06 20 11.09V5l-8-3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 10V5l-4 6h4v5l4-6h-4z" />
            </svg>
            <span className="ml-3 text-2xl font-bold text-textPrimary transition-transform duration-300 group-hover:scale-105">QuickFix Crew</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-textSecondary hover:text-primary transition-colors duration-200">Services</a>
            <a href="#footer" className="text-textSecondary hover:text-primary transition-colors duration-200">Contact</a>
            <div className="relative" ref={dropdownRef}>
                <button 
                    onClick={() => setIsSocialsOpen(!isSocialsOpen)}
                    className="flex items-center text-textSecondary hover:text-primary transition-colors duration-200 animate-subtle-glow rounded-full px-3 py-1"
                >
                    Follow Us
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transition-transform duration-200 ${isSocialsOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                {isSocialsOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-surface rounded-md shadow-lg py-1 z-50 animate-fade-in">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 text-textSecondary hover:bg-background hover:text-primary">
                            <InstagramIcon className="w-5 h-5 mr-3" />
                            Instagram
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 text-textSecondary hover:bg-background hover:text-primary">
                            <FacebookIcon className="w-5 h-5 mr-3" />
                            Facebook
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 text-textSecondary hover:bg-background hover:text-primary">
                            <YouTubeIcon className="w-5 h-5 mr-3" />
                            YouTube
                        </a>
                    </div>
                )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;