'use client';

import {
  Users,
  Building2,
  Truck,
  BookOpen,
  Briefcase,
  CalendarCheck
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Contact Management',
    description: 'Every person, every interaction, in one place. Full contact history with notes, calls, and relationship context.',
  },
  {
    icon: Building2,
    title: 'Client Profiles',
    description: 'Deep client views with active work, completed projects, billing history, and key contacts. Know your clients inside out.',
  },
  {
    icon: Truck,
    title: 'Supplier Network',
    description: 'Manage your suppliers and third parties. Track capabilities, rates, and performance all in one view.',
  },
  {
    icon: BookOpen,
    title: 'Activity Journals',
    description: 'Complete audit trail for every relationship. Notes, emails, meetings, and milestones - nothing gets lost.',
  },
  {
    icon: Briefcase,
    title: 'Work Management',
    description: 'See all active jobs, bookings, and projects at a glance. From quote to completion in one workflow.',
  },
  {
    icon: CalendarCheck,
    title: 'Booking Engine',
    description: 'Handle complex bookings with multiple suppliers. Perfect for travel logistics, events, and service coordination.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding relative">
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: 'linear-gradient(180deg, transparent 0%, hsl(230 35% 14%) 50%, transparent 100%)' }}
      />

      <div className="container relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need, <span className="niner-gradient-text">Nothing You Don&apos;t</span>
          </h2>
          <p className="text-niner-muted-foreground max-w-2xl mx-auto">
            High-cost CRMs give you a hundred features you&apos;ll never use.
            Niner gives you the nine that matter - contacts, clients, suppliers, journals,
            and work management that actually works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="niner-card niner-card-hover p-6 relative group"
            >
              <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-niner-primary to-niner-accent rounded-r opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-niner-primary/30 to-niner-accent/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-niner-accent" />
              </div>

              <h3 className="text-lg font-semibold text-niner-foreground mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-niner-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
