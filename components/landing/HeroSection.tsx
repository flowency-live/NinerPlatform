'use client';

import { ArrowRight, Users, Briefcase, LayoutGrid } from 'lucide-react';

const HeroSection = () => {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, hsl(230 60% 45% / 0.4) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(190 90% 50% / 0.3) 0%, transparent 70%)' }}
      />

      <div className="container relative">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-niner-accent animate-pulse" />
            <span className="text-niner-muted-foreground text-sm">Contextual CRM for Service Businesses</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="block">Your Relationships.</span>
            <span className="block niner-gradient-text">Your Operations.</span>
            <span className="block">One Platform.</span>
          </h1>

          <p className="text-lg md:text-xl text-niner-muted-foreground mb-8 max-w-2xl">
            Stop juggling spreadsheets and scattered tools. Niner brings your clients, suppliers,
            contacts, and active work together in one intelligent workspace. See everything, miss nothing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button onClick={handleContactClick} className="btn-primary inline-flex items-center justify-center gap-2">
              Book a Demo
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-niner-primary/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-niner-primary/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-niner-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-niner-foreground">Contacts</p>
                <p className="text-xs text-niner-muted-foreground">All in One</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-niner-primary/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-niner-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-niner-foreground">Active Work</p>
                <p className="text-xs text-niner-muted-foreground">At a Glance</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-niner-primary/20 flex items-center justify-center">
                <LayoutGrid className="w-5 h-5 text-niner-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-niner-foreground">9 Views</p>
                <p className="text-xs text-niner-muted-foreground">Your Way</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
