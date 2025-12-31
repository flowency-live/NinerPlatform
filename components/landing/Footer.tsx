'use client';

import { Mail } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const links = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Use Cases', href: '#usecases' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#') && href !== '#') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative border-t py-16" style={{ borderColor: 'hsl(230 60% 45% / 0.2)' }}>
      <div className="absolute inset-0 bg-niner-background" />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'hsl(230 60% 45% / 0.05)' }}
      />

      <div className="container relative">
        <div className="max-w-5xl">
          <div className="grid md:grid-cols-4 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <div className="mb-4">
                <a
                  href="https://www.opstack.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/images/powered-by-opstack-dark.png"
                    alt="Powered by OpStack"
                    width={200}
                    height={60}
                    className="h-16 w-auto"
                  />
                </a>
              </div>
              <p className="text-sm text-niner-muted-foreground mb-6 max-w-sm">
                Niner is the contextual CRM built by OpStack. Intelligent relationship and operations management for service businesses that need to see everything in one place.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="mailto:niner@opstack.uk"
                  className="w-10 h-10 rounded-lg bg-niner-muted flex items-center justify-center hover:bg-niner-primary/20 border border-transparent hover:border-niner-primary/30 transition-all duration-300 group"
                >
                  <Mail className="w-4 h-4 text-niner-muted-foreground group-hover:text-niner-accent transition-colors" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-niner-foreground">Product</h4>
              <ul className="space-y-3">
                {links.product.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-sm text-niner-muted-foreground hover:text-niner-accent transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-niner-foreground">Legal</h4>
              <ul className="space-y-3">
                {links.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-niner-muted-foreground hover:text-niner-accent transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ borderColor: 'hsl(230 60% 45% / 0.15)' }}>
            <p className="text-sm text-niner-muted-foreground">
              2025 OpStack Ltd. All rights reserved.
            </p>
            <p className="text-sm text-niner-muted-foreground">
              Built with care. <span className="niner-gradient-text">Powered by humans.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
