import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold">Get In Touch</h2>
          <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
            Visit our showroom or contact us for any inquiries. We're here to help you find the perfect piece.
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto shadow-lg">
            <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h3 className="font-headline text-2xl text-primary font-semibold">Contact Information</h3>
                        <div className="flex items-start gap-4">
                            <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold">Our Showroom</h4>
                                <p className="text-muted-foreground">123 Heritage Lane, Jewellers Market, Pune, Maharashtra 411001, India</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold">Email Us</h4>
                                <p className="text-muted-foreground">contact@apjewellers.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold">Call Us</h4>
                                <p className="text-muted-foreground">+91 987 654 3210</p>
                            </div>
                        </div>
                         <div className="flex gap-4 pt-4">
                            <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                                <a href="tel:+919876543210"><Phone className="mr-2 h-4 w-4"/> Call Now</a>
                            </Button>
                             <Button asChild variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                                <Link href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                                    <WhatsAppIcon className="mr-2 h-5 w-5"/> WhatsApp
                                </Link>
                            </Button>
                         </div>
                    </div>
                     <div className="space-y-6">
                        <h3 className="font-headline text-2xl text-primary font-semibold">Business Hours</h3>
                        <div className="space-y-2 text-muted-foreground">
                            <div className="flex justify-between"><span>Monday - Saturday</span><span>10:30 AM - 8:30 PM</span></div>
                            <div className="flex justify-between"><span>Sunday</span><span className="font-semibold text-destructive">Closed</span></div>
                        </div>
                        <div className="w-full aspect-video bg-muted rounded-lg overflow-hidden">
                           <ImageWithMapFallback />
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
    <div className="w-full h-full bg-cover bg-center relative" style={{backgroundImage: "url('https://placehold.co/600x400/800000/F8F8FF.png?text=Our+Location')"} }>
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <Button asChild variant="secondary">
                <Link href="#" target="_blank" rel="noopener noreferrer">View on Map</Link>
            </Button>
        </div>
    </div>
)
