import Image from "next/image";

export function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="https://placehold.co/600x700.png"
                            alt="Craftsman at work"
                            data-ai-hint="jewellery craftsman"
                            width={600}
                            height={700}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="space-y-6 text-center md:text-left">
                        <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold">
                            A Legacy of Trust & Craftsmanship
                        </h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            For over three generations, Ashtekar & Pathrikar Jewellers has been a hallmark of purity, trust, and exquisite design. Our journey began with a passion for creating not just ornaments, but heirlooms that are cherished for a lifetime.
                        </p>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            We blend timeless traditions with contemporary aesthetics, ensuring every piece from our collection is a masterpiece of art. Our skilled artisans pour their heart and soul into crafting jewellery that tells a story and celebrates the most precious moments of your life.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
