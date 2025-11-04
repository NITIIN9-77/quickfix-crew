import React from 'react';

interface HeroProps {
    onBookNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1626802393233-04b3be975240?q=80&w=2070&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight bg-gradient-to-r from-slate-50 via-cyan-300 to-slate-50 bg-clip-text text-transparent bg-[length:200%_auto] animate-fade-in animate-shine">
          Reliable Home Services, On-Demand.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-textSecondary animate-fade-in [animation-delay:0.3s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          Cutting-edge solutions for all your home appliance needs. Book a certified technician in seconds.
        </p>
        <button
          onClick={onBookNow}
          className="bg-primary text-slate-900 font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 transform hover:scale-105 shadow-lg animate-glow animate-fade-in [animation-delay:0.6s] opacity-0"
          style={{ animationFillMode: 'forwards' }}
        >
          Explore Our Services
        </button>
      </div>
    </section>
  );
};

export default Hero;