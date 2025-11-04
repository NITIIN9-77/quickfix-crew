import React from 'react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

const YouTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
);

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-background border-t border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-primary">QuickFix Crew</h3>
            <p className="text-textSecondary">Your trusted partner for all home appliance needs. Quality service, guaranteed.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-textSecondary">
              <li>Email: support@quickfixcrew.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Service Lane, Your City</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Operating Hours</h3>
            <ul className="space-y-2 text-textSecondary">
              <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
              <li>Sat: 9:00 AM - 5:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
           <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary transition-colors animate-subtle-glow rounded-full p-1">
                    <InstagramIcon className="w-7 h-7" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary transition-colors animate-subtle-glow rounded-full p-1">
                    <FacebookIcon className="w-7 h-7" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary transition-colors animate-subtle-glow rounded-full p-1">
                    <YouTubeIcon className="w-7 h-7" />
                </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-textSecondary/80">
          <p>&copy; {new Date().getFullYear()} QuickFix Crew. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;