import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full h-[85dvh] md:h-[90dvh] text-primary-foreground overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Elegant jewellery on display"
          data-ai-hint="jewellery display"
          fill
          className="object-cover"
          priority
        />
        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto flex flex-col items-center justify-center h-full text-center space-y-8 px-4">
        {/* Decorative Element */}
        <div className="w-24 h-1 bg-accent rounded-full mb-4 opacity-80" />
        
        {/* Main Heading */}
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
          <span className="text-gradient">Ashtekar & Pathrikar</span>
          <br />
          <span className="text-white">Jewellers</span>
        </h1>
        
        {/* Subtitle */}
        <p className="max-w-3xl text-xl md:text-2xl font-body text-white/90 leading-relaxed">
          Where tradition meets contemporary design. Each piece tells a story of craftsmanship, 
          heritage, and the art of creating heirlooms that transcend generations.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button 
            asChild 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 px-10 rounded-full elegant-shadow transition-all duration-300 hover:scale-105"
          >
            <Link href="#gallery">Explore Collections</Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/10 text-lg py-6 px-10 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            <Link href="#about">Our Story</Link>
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
