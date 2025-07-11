import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const galleryItems = [
    { title: "Emerald Grandeur Necklace", src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", hint: "necklace diamond", category: "Necklaces" },
    { title: "Royal Ruby Earrings", src: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", hint: "earrings ruby", category: "Earrings" },
    { title: "The Sovereign Ring", src: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", hint: "ring gold", category: "Rings" },
    { title: "Sun-kissed Gold Bangle", src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", hint: "bangle gold", category: "Bangles" },
    { title: "Celestial Diamond Pendant", src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", hint: "pendant diamond", category: "Pendants" },
    { title: "Heirloom Pearl Bracelet", src: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", hint: "bracelet pearl", category: "Bracelets" },
];

export function GallerySection() {
    return (
        <section id="gallery" className="py-20 md:py-32 bg-gradient-to-br from-background via-secondary/30 to-background">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6 opacity-80" />
                    <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary font-bold mb-6">
                        Our Exquisite{" "}
                        <span className="text-gradient">Collection</span>
                    </h2>
                    <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                        Each piece is a testament to our commitment to quality and artistry. 
                        Discover the perfect blend of tradition and contemporary design.
                    </p>
                </div>
                
                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map((item, index) => (
                        <Card key={item.title} className="group overflow-hidden elegant-shadow hover:elegant-shadow-lg transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                            <CardContent className="p-0">
                                {/* Image Container */}
                                <div className="relative aspect-square overflow-hidden">
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        data-ai-hint={item.hint}
                                        width={400}
                                        height={400}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-semibold rounded-full backdrop-blur-sm">
                                            {item.category}
                                        </span>
                                    </div>
                                    
                                    {/* View Details Button */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <button className="px-6 py-3 bg-white/90 text-primary font-semibold rounded-full backdrop-blur-sm hover:bg-white transition-colors duration-300">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="p-6 bg-white">
                                    <h3 className="font-headline text-xl text-primary font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-foreground/70 text-sm">
                                        Handcrafted with precision and care, this piece embodies the perfect balance of tradition and modernity.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                
                {/* Call to Action */}
                <div className="text-center mt-16">
                    <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors duration-300 elegant-shadow">
                        View All Collections
                    </button>
                </div>
            </div>
        </section>
    );
}
