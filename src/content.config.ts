import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const evenements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: new URL('./content/evenements', import.meta.url).pathname }),
  schema: z.object({
    titre: z.string(),
    date: z.string(),
    heure: z.string().optional(),
    lieu_nom: z.string().optional(),
    lieu_adresse: z.string().optional(),
    auteur: z.string().optional(),
    categorie: z.string().optional(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    legende_image: z.string().max(80).optional(),
    media_video: z.string().url().optional(),
    legende_video: z.string().optional(),
    media_audio: z.string().url().optional(),
    legende_audio: z.string().optional(),
    lien_externe: z.string().url().optional(),
  }),
});

export const collections = {
  evenements,
};