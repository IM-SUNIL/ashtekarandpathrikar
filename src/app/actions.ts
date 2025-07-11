'use server';

import { generateJewelleryDescription } from '@/ai/flows/generate-jewellery-description';
import { z } from 'zod';

const formSchema = z.object({
  jewelleryType: z.string(),
  material: z.string(),
  craftsmanshipDetails: z.string(),
  storyInspiration: z.string(),
});

type ActionResponse = {
  success: boolean;
  description?: string;
  error?: string;
}

export async function generateDescriptionAction(
  values: z.infer<typeof formSchema>
): Promise<ActionResponse> {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return { 
        success: false,
        error: 'Invalid input data.' 
    };
  }

  try {
    const result = await generateJewelleryDescription(validatedFields.data);
    return {
      success: true,
      description: result.description,
    };
  } catch (error) {
    console.error('Error generating jewellery description:', error);
    return {
      success: false,
      error: 'Failed to generate description from AI. Please try again later.',
    };
  }
}
