import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import { DiamondIcon, WhatsAppIcon } from "@/components/ui/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { href: "#about", label: "About Us" },
    { href: "#gallery", label: "Gallery" },
    { href: "#craftsmanship", label: "Craftsmanship" },
    { href: "#contact", label: "Contact" },
  ];

  const services = [
    { label: "Gold Jewellery" },
    { label: "Silver Jewellery" },
    { label: "Diamond Jewellery" },
    { label: "Custom Designs" },
    { label: "Jewellery Repair" },
    { label: "Valuation Services" },
  ];

  const socialLinks = [
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "https://wa.me/919876543210", icon: WhatsAppIcon, label: "WhatsApp" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
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
                <span className="text-xs text-primary-foreground/60 font-body tracking-wider uppercase">
                  Jewellers
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              A legacy of trust and craftsmanship since 1950. We create timeless jewellery that becomes cherished family heirlooms.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>Trusted by 1000+ families</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline text-xl font-semibold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-headline text-xl font-semibold mb-6 text-accent">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <span className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center gap-2 group cursor-pointer">
                    <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-headline text-xl font-semibold mb-6 text-accent">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
                    123 Heritage Lane, Jewellers Market<br />
                    Pune, Maharashtra 411001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    +91 987 654 3210
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    contact@apjewellers.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    Mon-Sat: 10:30 AM - 8:30 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Newsletter Section */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Social Links */}
            <div>
              <h4 className="font-headline text-lg font-semibold mb-4 text-accent">Follow Our Journey</h4>
              <p className="text-primary-foreground/70 text-sm mb-4">
                Stay updated with our latest collections and exclusive offers.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-headline text-lg font-semibold mb-4 text-accent">Stay Connected</h4>
              <p className="text-primary-foreground/70 text-sm mb-4">
                Subscribe to receive updates about new collections and special offers.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-primary-foreground/20 rounded-full text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-accent transition-colors duration-300"
                />
                <button className="px-6 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent/90 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-primary-foreground/60">
                &copy; {currentYear} Ashtekar & Pathrikar Jewellers. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <Link href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</Link>
              <Link href="#" className="hover:text-accent transition-colors duration-300">Terms of Service</Link>
              <Link href="#" className="hover:text-accent transition-colors duration-300">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
