import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full h-[70dvh] md:h-[80dvh] text-primary-foreground">
      <div className="absolute inset-0 bg-primary/80 z-10" />
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Elegant jewellery on display"
        data-ai-hint="jewellery display"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 container mx-auto flex flex-col items-center justify-center h-full text-center space-y-6">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Timeless Elegance, Handcrafted with Love
        </h1>
        <p className="max-w-2xl text-lg md:text-xl font-body">
          Explore our exquisite collection of jewellery, where tradition meets contemporary design.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 px-10 rounded-full">
          <Link href="#gallery">Explore Our Collections</Link>
        </Button>
      </div>
    </section>
  );
}
