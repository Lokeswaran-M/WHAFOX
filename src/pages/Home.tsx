import { AnnouncementBar } from '../components/sections/AnnouncementBar';
import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ProductsSection } from '../components/sections/ProductsSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { VisionSection } from '../components/sections/VisionSection';
import { ComingSoonSection } from '../components/sections/ComingSoonSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Footer } from '../components/layout/Footer';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#17191D]">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ServicesSection />
        <VisionSection />
        <ComingSoonSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
