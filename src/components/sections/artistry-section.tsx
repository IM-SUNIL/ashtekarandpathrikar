'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateDescriptionAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  jewelleryType: z.string().min(2, { message: 'Jewellery type must be at least 2 characters.' }).default("Necklace"),
  material: z.string().min(3, { message: 'Material must be at least 3 characters.' }).default("22k Gold with uncut diamonds"),
  craftsmanshipDetails: z.string().min(10, { message: 'Details must be at least 10 characters.' }).default("Traditional Kundan setting with intricate meenakari work on the reverse side."),
  storyInspiration: z.string().min(10, { message: 'Inspiration must be at least 10 characters.' }).default("Inspired by the royal gardens of the Mughal era, representing eternal bloom and prosperity."),
});

type FormValues = z.infer<typeof formSchema>;

export function ArtistrySection() {
    const [isLoading, setIsLoading] = useState(false);
    const [generatedDescription, setGeneratedDescription] = useState('');
    const { toast } = useToast();

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            jewelleryType: "Necklace",
            material: "22k Gold with uncut diamonds",
            craftsmanshipDetails: "Traditional Kundan setting with intricate meenakari work on the reverse side.",
            storyInspiration: "Inspired by the royal gardens of the Mughal era, representing eternal bloom and prosperity.",
        }
    });

    async function onSubmit(values: FormValues) {
        setIsLoading(true);
        setGeneratedDescription('');
        const result = await generateDescriptionAction(values);
        setIsLoading(false);
        if (result.success && result.description) {
            setGeneratedDescription(result.description);
        } else {
            toast({
                variant: 'destructive',
                title: 'Error Generating Description',
                description: result.error || 'An unknown error occurred. Please try again.',
            });
        }
    }

    return (
        <section id="artistry" className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold">Discover the Story Behind Your Jewellery</h2>
                    <p className="text-lg text-foreground/70 mt-4 max-w-3xl mx-auto">
                        Use our AI-powered tool to craft a compelling narrative for any piece, highlighting its unique artistry and emotional significance.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl flex items-center gap-2">
                                <Wand2 className="text-accent" />
                                Generate a Story
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField control={form.control} name="jewelleryType" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Jewellery Type</FormLabel>
                                            <FormControl><Input placeholder="e.g., Necklace, Ring" {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    <FormField control={form.control} name="material" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Materials Used</FormLabel>
                                            <FormControl><Input placeholder="e.g., Gold, Silver, Diamonds" {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    <FormField control={form.control} name="craftsmanshipDetails" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Craftsmanship Details</FormLabel>
                                            <FormControl><Textarea placeholder="Describe the crafting process..." {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    <FormField control={form.control} name="storyInspiration" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Inspiration or Story</FormLabel>
                                            <FormControl><Textarea placeholder="What is the story behind this piece?" {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90">
                                        {isLoading ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</>) : "Generate Description"}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>

                    <div className="flex items-center justify-center">
                        {isLoading ? (
                             <div className="w-full space-y-4">
                                <div className="h-8 w-3/4 rounded-md bg-muted animate-pulse" />
                                <div className="h-4 w-full rounded-md bg-muted animate-pulse" />
                                <div className="h-4 w-full rounded-md bg-muted animate-pulse" />
                                <div className="h-4 w-5/6 rounded-md bg-muted animate-pulse" />
                            </div>
                        ) : generatedDescription ? (
                            <Alert>
                                <Wand2 className="h-4 w-4" />
                                <AlertTitle className="font-headline text-xl">Your Jewellery's Story</AlertTitle>
                                <AlertDescription className="mt-2 text-base text-foreground/80 leading-relaxed whitespace-pre-wrap">
                                    {generatedDescription}
                                </AlertDescription>
                            </Alert>
                        ) : (
                             <div className="text-center p-8 border-2 border-dashed rounded-lg">
                                <p className="text-muted-foreground">The generated description will appear here.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
