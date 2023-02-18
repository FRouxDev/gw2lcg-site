export interface Card {
  uuid: string;
  name: string;
  set?: string;
  cardNumber: number | null;
  unique?: boolean;
  cost?: number;
  attack?: number;
  defense?: number;
  willpower?: number;
  health?: number;
  cardImage?: string;
  traits?: string[];
  text?: string;
  keywords?: string[];
  type: 'Ally' | 'Hero' | 'Attachment' | 'Location' | 'Enemy' | 'Quest' | 'Perish';
  sphere?: 'Spirit' | 'Tactics' | 'Leadership' | 'Lore' | 'Neutral';
}
