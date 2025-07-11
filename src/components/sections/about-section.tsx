import Image from "next/image";

export function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-secondary via-background to-secondary/50">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Section */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative rounded-2xl overflow-hidden elegant-shadow">
                            <Image
                                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="Craftsman at work"
                                data-ai-hint="jewellery craftsman"
                                width={600}
                                height={700}
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Decorative Element */}
                        <div className="w-16 h-1 bg-accent rounded-full mx-auto lg:mx-0 opacity-80" />
                        
                        {/* Main Heading */}
                        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary font-bold leading-tight">
                            A Legacy of{" "}
                            <span className="text-gradient">Trust</span>
                            <br />
                            & Craftsmanship
                        </h2>
                        
                        {/* Description */}
                        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                            <p>
                                For over three generations, <span className="font-semibold text-primary">Ashtekar & Pathrikar Jewellers</span> has been a hallmark of purity, trust, and exquisite design. Our journey began with a passion for creating not just ornaments, but heirlooms that are cherished for a lifetime.
                            </p>
                            <p>
                                We blend timeless traditions with contemporary aesthetics, ensuring every piece from our collection is a masterpiece of art. Our skilled artisans pour their heart and soul into crafting jewellery that tells a story and celebrates the most precious moments of your life.
                            </p>
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-accent">3+</div>
                                <div className="text-sm text-foreground/70">Generations</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-accent">50+</div>
                                <div className="text-sm text-foreground/70">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-accent">1000+</div>
                                <div className="text-sm text-foreground/70">Happy Families</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
