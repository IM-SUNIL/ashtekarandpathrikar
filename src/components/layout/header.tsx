"use client";

import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { DiamondIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#craftsmanship", label: "Craftsmanship" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-500",
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-accent/20" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group" 
            onClick={() => window.scrollTo({ top: 0 })}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center elegant-shadow">
                <DiamondIcon className="h-6 w-6 text-white" />
                <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-white animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-luxury text-2xl font-bold text-gradient leading-none">
                Ashtekar & Pathrikar
              </span>
              <span className="text-xs text-foreground/60 font-body tracking-wider uppercase">
                Jewellers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative font-luxury text-lg font-medium text-primary transition-all duration-300 hover:text-accent"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            
            {/* CTA Button */}
            <Button 
              asChild 
              className="bg-gradient-to-r from-accent to-primary text-white hover:from-accent/90 hover:to-primary/90 px-6 py-2 rounded-full elegant-shadow transition-all duration-300 hover:scale-105 font-luxury"
            >
              <Link href="#contact">Book Appointment</Link>
            </Button>
          </nav>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Menu className="h-6 w-6 text-primary" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] bg-white/95 backdrop-blur-md border-l border-accent/20"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-6 border-b border-accent/20">
                    <Link 
                      href="/" 
                      className="flex items-center gap-2" 
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                        <DiamondIcon className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-luxury text-lg font-bold text-gradient">A&P</span>
                    </Link>
                    <SheetClose asChild>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="w-10 h-10 rounded-full hover:bg-accent/10"
                      >
                        <X className="h-5 w-5 text-primary" />
                        <span className="sr-only">Close navigation menu</span>
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col items-start gap-2 p-6 flex-1">
                    {navLinks.map((link, index) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="w-full text-left font-luxury text-xl font-medium text-primary hover:text-accent transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-accent/5"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                    
                    {/* Mobile CTA */}
                    <div className="w-full mt-8 pt-6 border-t border-accent/20">
                      <Button 
                        asChild 
                        className="w-full bg-gradient-to-r from-accent to-primary text-white hover:from-accent/90 hover:to-primary/90 py-4 rounded-full elegant-shadow font-luxury text-lg"
                      >
                        <Link href="#contact" onClick={() => setIsSheetOpen(false)}>
                          Book Appointment
                        </Link>
                      </Button>
                    </div>
                  </nav>

                  {/* Mobile Footer */}
                  <div className="p-6 border-t border-accent/20">
                    <div className="text-center text-sm text-foreground/60 font-body">
                      <p>Ashtekar & Pathrikar Jewellers</p>
                      <p>Handcrafted with Love</p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
