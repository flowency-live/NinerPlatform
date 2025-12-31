import { Navbar, HeroSection, FeaturesSection, UseCasesSection, ContactSection, Footer } from '@/components/landing';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
