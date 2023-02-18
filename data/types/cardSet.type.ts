import { Card } from './card.type';

export interface CardSet {
  uuid: string;
  name: string;
  type: 'player' | 'encounter';
  cards: Card[];
}
