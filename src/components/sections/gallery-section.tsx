import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const galleryItems = [
    { title: "Emerald Grandeur Necklace", src: "https://placehold.co/400x400.png", hint: "necklace diamond" },
    { title: "Royal Ruby Earrings", src: "https://placehold.co/400x400.png", hint: "earrings ruby" },
    { title: "The Sovereign Ring", src: "https://placehold.co/400x400.png", hint: "ring gold" },
    { title: "Sun-kissed Gold Bangle", src: "https://placehold.co/400x400.png", hint: "bangle gold" },
    { title: "Celestial Diamond Pendant", src: "https://placehold.co/400x400.png", hint: "pendant diamond" },
    { title: "Heirloom Pearl Bracelet", src: "https://placehold.co/400x400.png", hint: "bracelet pearl" },
];

export function GallerySection() {
    return (
        <section id="gallery" className="py-16 md:py-24">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold">Our Exquisite Collection</h2>
                    <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
                        Each piece is a testament to our commitment to quality and artistry.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map((item) => (
                        <Card key={item.title} className="overflow-hidden group transition-shadow duration-300 hover:shadow-xl">
                            <CardContent className="p-0">
                                <div className="aspect-square overflow-hidden">
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    data-ai-hint={item.hint}
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                />
                                </div>
                                <div className="p-4 bg-background">
                                    <h3 className="font-headline text-xl text-primary font-semibold">{item.title}</h3>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
