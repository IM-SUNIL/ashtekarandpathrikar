import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Gem, Hammer, Award, Heart } from "lucide-react";

const craftsmanshipFeatures = [
  {
    icon: Gem,
    title: "Traditional Techniques",
    description: "We preserve age-old jewellery-making techniques passed down through generations, ensuring each piece carries the essence of our heritage.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Hammer,
    title: "Handcrafted Excellence",
    description: "Every piece is meticulously crafted by skilled artisans who pour their heart and soul into creating jewellery that tells a story.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "We maintain the highest standards of purity and craftsmanship, with every piece certified for quality and authenticity.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Heart,
    title: "Family Legacy",
    description: "Three generations of expertise, trust, and dedication to creating jewellery that becomes cherished family heirlooms.",
    color: "from-green-500 to-emerald-500"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Design & Inspiration",
    description: "Each piece begins with inspiration from traditional motifs, cultural heritage, and contemporary aesthetics."
  },
  {
    step: "02", 
    title: "Material Selection",
    description: "We carefully select the finest gold, silver, and precious stones, ensuring purity and quality."
  },
  {
    step: "03",
    title: "Artisan Crafting",
    description: "Skilled craftsmen bring designs to life using traditional techniques and modern precision."
  },
  {
    step: "04",
    title: "Quality Check",
    description: "Every piece undergoes rigorous quality checks before being presented to our valued customers."
  }
];

export function CraftsmanshipSection() {
  return (
    <section id="craftsmanship" className="py-20 md:py-32 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6 opacity-80" />
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary font-bold mb-6">
            Craftsmanship &{" "}
            <span className="text-gradient">Heritage</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Discover the artistry behind every piece. Our traditional techniques and modern precision 
            create jewellery that transcends time and becomes part of your family's legacy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {craftsmanshipFeatures.map((feature, index) => (
            <Card key={index} className="group overflow-hidden elegant-shadow hover:elegant-shadow-lg transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-headline text-xl text-primary font-semibold mb-4 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Process Steps */}
          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-3xl text-primary font-bold mb-6">
                Our Crafting{" "}
                <span className="text-gradient">Process</span>
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                From concept to creation, every piece follows our time-honored process that ensures 
                quality, beauty, and lasting value.
              </p>
            </div>
            
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-headline text-xl text-primary font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-foreground/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden elegant-shadow">
              <Image
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Jewellery crafting process"
                width={600}
                height={700}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-accent">50+</div>
                      <div className="text-xs text-foreground/70">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">1000+</div>
                      <div className="text-xs text-foreground/70">Pieces Created</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">100%</div>
                      <div className="text-xs text-foreground/70">Handcrafted</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
            Experience the difference that three generations of expertise makes. 
            Visit our showroom to see our craftsmanship in person.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-accent to-primary text-white font-semibold rounded-full hover:from-accent/90 hover:to-primary/90 transition-all duration-300 elegant-shadow hover:scale-105 mb-12">
            Visit Our Showroom
          </button>
          
          {/* Mini Map */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 elegant-shadow border border-accent/20">
              <h4 className="font-headline text-2xl text-primary font-semibold mb-4 text-center">
                Find Our Showroom
              </h4>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Map */}
                <div className="relative rounded-xl overflow-hidden elegant-shadow">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2657891234567!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-64"
                    title="Ashtekar & Pathrikar Jewellers Location"
                  ></iframe>
                  
                  {/* Map Overlay with Location Pin */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg animate-pulse">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-accent"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Location Details */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-primary mb-1">Our Location</h5>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        123 Heritage Lane, Jewellers Market<br />
                        Pune, Maharashtra 411001, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-primary mb-1">Business Hours</h5>
                      <p className="text-foreground/70 text-sm">
                        Monday - Saturday: 10:30 AM - 8:30 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-primary mb-1">Contact</h5>
                      <p className="text-foreground/70 text-sm">
                        Phone: +91 987 654 3210<br />
                        Email: contact@apjewellers.com
                      </p>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 px-4 py-2 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent/90 transition-colors duration-300">
                      Get Directions
                    </button>
                    <button className="flex-1 px-4 py-2 border border-accent text-accent text-sm font-semibold rounded-full hover:bg-accent/10 transition-colors duration-300">
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 