'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.opstack.uk/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'niner',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="niner-card p-12">
              <div className="w-16 h-16 rounded-full bg-niner-primary/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-niner-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
              <p className="text-niner-muted-foreground mb-6">
                We&apos;ve received your enquiry and will be in touch within 24 hours to discuss how Niner can transform your operations.
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="text-niner-accent hover:underline"
              >
                Send another message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding relative">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(230 60% 45% / 0.5) 0%, transparent 70%)' }}
      />

      <div className="container relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="niner-gradient-text">Simplify</span>?
          </h2>
          <p className="text-niner-muted-foreground max-w-2xl mx-auto">
            Let&apos;s talk about how Niner can bring order to your client relationships and operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-niner-muted border border-niner-primary/20 text-niner-foreground placeholder-niner-muted-foreground focus:outline-none focus:border-niner-accent transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-niner-muted border border-niner-primary/20 text-niner-foreground placeholder-niner-muted-foreground focus:outline-none focus:border-niner-accent transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-niner-muted border border-niner-primary/20 text-niner-foreground placeholder-niner-muted-foreground focus:outline-none focus:border-niner-accent transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-niner-muted border border-niner-primary/20 text-niner-foreground placeholder-niner-muted-foreground focus:outline-none focus:border-niner-accent transition-colors"
                    placeholder="07123 456789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell us about your business *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-niner-muted border border-niner-primary/20 text-niner-foreground placeholder-niner-muted-foreground focus:outline-none focus:border-niner-accent transition-colors resize-none"
                  placeholder="What industry are you in? What's your biggest challenge with managing clients and suppliers?"
                />
              </div>

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  <span>Something went wrong. Please try again or email us directly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="niner-card p-6">
              <h3 className="font-semibold mb-4">What happens next?</h3>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-niner-primary/30 flex items-center justify-center flex-shrink-0 text-sm font-medium text-niner-accent">1</div>
                  <p className="text-sm text-niner-muted-foreground">We&apos;ll review your enquiry and get back to you within 24 hours</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-niner-primary/30 flex items-center justify-center flex-shrink-0 text-sm font-medium text-niner-accent">2</div>
                  <p className="text-sm text-niner-muted-foreground">Schedule a discovery call to understand your specific workflow needs</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-niner-primary/30 flex items-center justify-center flex-shrink-0 text-sm font-medium text-niner-accent">3</div>
                  <p className="text-sm text-niner-muted-foreground">Get a personalised demo showing how Niner fits your business</p>
                </li>
              </ol>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Or reach us directly</h3>
              <a
                href="mailto:niner@opstack.uk"
                className="flex items-center gap-3 text-niner-muted-foreground hover:text-niner-accent transition-colors"
              >
                <Mail size={18} />
                <span>niner@opstack.uk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
