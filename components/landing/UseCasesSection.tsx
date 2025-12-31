'use client';

import { Plane, Film, Building, Calendar } from 'lucide-react';

const useCases = [
  {
    icon: Plane,
    title: 'Travel & Logistics',
    description: 'Coordinate transfers, accommodation, and travel for groups. Perfect for corporate travel managers and logistics coordinators.',
    examples: ['F1 team logistics', 'Corporate group travel', 'VIP transport coordination'],
  },
  {
    icon: Film,
    title: 'Production Companies',
    description: 'Manage talent, vendors, and production schedules. Keep every project, contact, and supplier organised.',
    examples: ['Film production', 'Event production', 'Creative agencies'],
  },
  {
    icon: Building,
    title: 'Professional Services',
    description: 'Track client relationships, projects, and third-party providers. From consultants to contractors.',
    examples: ['Consulting firms', 'Legal practices', 'Architecture studios'],
  },
  {
    icon: Calendar,
    title: 'Event Management',
    description: 'Coordinate venues, suppliers, and clients for complex events. One view of everything happening.',
    examples: ['Corporate events', 'Conferences', 'Private functions'],
  },
];

const UseCasesSection = () => {
  return (
    <section id="usecases" className="section-padding relative">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for <span className="niner-gradient-text">Service Businesses</span>
          </h2>
          <p className="text-niner-muted-foreground max-w-2xl mx-auto">
            Any business that manages client relationships with suppliers and third parties.
            If you&apos;re the middleman making things happen, Niner is for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="niner-card p-8 relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"
                style={{ background: 'hsl(190 90% 50%)' }}
              />

              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-niner-primary/40 to-niner-accent/30 flex items-center justify-center mb-5">
                  <useCase.icon className="w-7 h-7 text-niner-accent" />
                </div>

                <h3 className="text-xl font-semibold text-niner-foreground mb-3">
                  {useCase.title}
                </h3>

                <p className="text-niner-muted-foreground mb-4">
                  {useCase.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {useCase.examples.map((example) => (
                    <span
                      key={example}
                      className="text-xs px-3 py-1 rounded-full bg-niner-muted text-niner-muted-foreground"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
