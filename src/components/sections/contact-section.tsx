import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-secondary via-background to-secondary/50">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6 opacity-80" />
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary font-bold mb-6">
            Get In{" "}
            <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Visit our showroom or contact us for any inquiries. We're here to help you find the perfect piece 
            that tells your unique story.
          </p>
        </div>
        
        <Card className="max-w-6xl mx-auto elegant-shadow border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-headline text-3xl text-primary font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-primary mb-1">Our Showroom</h4>
                        <p className="text-foreground/70 leading-relaxed">123 Heritage Lane, Jewellers Market, Pune, Maharashtra 411001, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-primary mb-1">Email Us</h4>
                        <p className="text-foreground/70">contact@apjewellers.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-primary mb-1">Call Us</h4>
                        <p className="text-foreground/70">+91 987 654 3210</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    asChild 
                    className="flex-1 bg-primary hover:bg-primary/90 text-lg py-4 rounded-full elegant-shadow transition-all duration-300 hover:scale-105"
                  >
                    <a href="tel:+919876543210">
                      <Phone className="mr-2 h-5 w-5"/> Call Now
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg py-4 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <Link href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="mr-2 h-5 w-5"/> WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Business Hours & Map */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-headline text-3xl text-primary font-bold mb-6">Business Hours</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-primary">Monday - Saturday</span>
                          <span className="text-foreground/70">10:30 AM - 8:30 PM</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                        <Clock className="h-6 w-6 text-red-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-primary">Sunday</span>
                          <span className="font-semibold text-red-500">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map Section */}
                <div className="space-y-4">
                  <h4 className="font-headline text-xl text-primary font-semibold">Visit Our Showroom</h4>
                  <div className="w-full aspect-video bg-muted rounded-2xl overflow-hidden elegant-shadow">
                    <ImageWithMapFallback />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

// Fallback component since maps are not available.
const ImageWithMapFallback = () => (
  <div 
    className="w-full h-full bg-cover bg-center relative rounded-2xl" 
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')"
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
    <div className="absolute inset-0 flex items-center justify-center">
      <Button 
        asChild 
        variant="secondary" 
        className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm rounded-full px-6 py-3 elegant-shadow"
      >
        <Link href="#" target="_blank" rel="noopener noreferrer">
          View on Map
        </Link>
      </Button>
    </div>
  </div>
);
