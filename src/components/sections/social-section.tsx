import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const socialPosts = [
  { src: "https://placehold.co/400x400.png", alt: "Golden necklace on a model", hint: "jewellery model" },
  { src: "https://placehold.co/400x400.png", alt: "Close-up of diamond ring", hint: "diamond ring" },
  { src: "https://placehold.co/400x400.png", alt: "Woman wearing traditional earrings", hint: "woman jewellery" },
  { src: "https://placehold.co/400x400.png", alt: "Artisan crafting a piece of jewellery", hint: "jewellery making" },
  { src: "https://placehold.co/400x400.png", alt: "A full set of bridal jewellery", hint: "bridal jewellery" },
  { src: "https://placehold.co/400x400.png", alt: "Elegant silver bracelet", hint: "silver bracelet" },
];

export function SocialSection() {
  return (
    <section id="social" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold">Follow Our Journey</h2>
          <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
            Stay updated with our latest collections, behind-the-scenes, and special offers on our social media.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialPosts.map((post, index) => (
            <Link key={index} href="#" target="_blank" rel="noopener noreferrer" className="group block overflow-hidden aspect-square">
                <Image
                    src={post.src}
                    alt={post.alt}
                    data-ai-hint={post.hint}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full text-lg py-6 px-10">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5"/>
                    Follow on Instagram
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
