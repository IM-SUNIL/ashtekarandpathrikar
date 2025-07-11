import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const socialPosts = [
  { src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", alt: "Golden necklace on a model", hint: "jewellery model" },
  { src: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", alt: "Close-up of diamond ring", hint: "diamond ring" },
  { src: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", alt: "Woman wearing traditional earrings", hint: "woman jewellery" },
  { src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", alt: "Artisan crafting a piece of jewellery", hint: "jewellery making" },
  { src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", alt: "A full set of bridal jewellery", hint: "bridal jewellery" },
  { src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", alt: "Elegant silver bracelet", hint: "silver bracelet" },
];

export function SocialSection() {
  return (
    <section id="social" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6 opacity-80" />
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary font-bold mb-6">
            Follow Our{" "}
            <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest collections, behind-the-scenes moments, and exclusive offers. 
            Join our community of jewellery enthusiasts.
          </p>
        </div>
        
        {/* Social Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {socialPosts.map((post, index) => (
            <Link 
              key={index} 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block overflow-hidden aspect-square rounded-2xl elegant-shadow hover:elegant-shadow-lg transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative w-full h-full">
                <Image
                  src={post.src}
                  alt={post.alt}
                  data-ai-hint={post.hint}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Instagram Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Instagram className="w-4 h-4 text-primary" />
                  </div>
                </div>
                
                {/* View Text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white font-semibold text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    View Post
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full text-lg py-6 px-10 elegant-shadow transition-all duration-300 hover:scale-105"
          >
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-3 h-5 w-5"/>
              Follow on Instagram
            </Link>
          </Button>
          
          {/* Social Stats */}
          <div className="flex justify-center items-center gap-8 mt-8 text-center">
            <div>
              <div className="text-2xl font-bold text-accent">10K+</div>
              <div className="text-sm text-foreground/70">Followers</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <div className="text-2xl font-bold text-accent">500+</div>
              <div className="text-sm text-foreground/70">Posts</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <div className="text-2xl font-bold text-accent">4.9★</div>
              <div className="text-sm text-foreground/70">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
