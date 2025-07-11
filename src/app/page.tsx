import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { AboutSection } from "@/components/sections/about-section";
import { ArtistrySection } from "@/components/sections/artistry-section";
import { SocialSection } from "@/components/sections/social-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ArtistrySection />
        <SocialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
