import { Card } from '../../../data/types/card.type';
import Image from 'next/image';

interface CardPanelProps {
  card: Card;
}

export default function CardImage(props: CardPanelProps) {
  const { card } = props;
  return (
    <>
      <div className="m-auto">
        <Image src={card.cardImage as string} alt={card.name} width={320} height={462} />
      </div>
    </>
  );
}
