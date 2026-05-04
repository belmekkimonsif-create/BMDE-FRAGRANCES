export type FragranceVibe = string;

export interface Fragrance {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  description: string;
  vibe: FragranceVibe[];
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  projection: number; // 1-10
  longevity: string;
  image: string;
  gallery: string[];
  story: string;
}

export type Page = 'home' | 'collection' | 'product' | 'story' | 'concierge' | 'account' | 'bag';
