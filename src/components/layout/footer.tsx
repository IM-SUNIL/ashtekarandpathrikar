import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { DiamondIcon, WhatsAppIcon } from "@/components/ui/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
                <DiamondIcon className="h-8 w-8 text-accent" />
                <span className="font-headline text-2xl font-bold">
                    Ashtekar & Pathrikar
                </span>
            </Link>
            <p className="text-center md:text-left text-sm text-primary-foreground/80">
                A legacy of trust, since 1950.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-center">
                <li><Link href="#about" className="hover:text-accent transition-colors">About Us</Link></li>
                <li><Link href="#gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
                <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end">
             <h3 className="font-headline text-lg font-semibold mb-4">Follow Us</h3>
             <div className="flex space-x-4">
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-6 w-6 hover:text-accent transition-colors" />
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="h-6 w-6 hover:text-accent transition-colors" />
                </Link>
                 <Link href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <WhatsAppIcon className="h-6 w-6 hover:text-accent transition-colors" />
                </Link>
             </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; {currentYear} Ashtekar & Pathrikar Jewellers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
