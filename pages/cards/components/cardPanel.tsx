import { Card } from '../../../data/types/card.type';

interface CardPanelProps {
  card: Card;
}

export default function CardPanel(props: CardPanelProps) {
  const { card } = props;
  return (
    <>
      <div>
        <div className="p-4 border border-gray-800 dark:border-white">
          <h2>{card.name}</h2>
          <p>Sphère : {card.sphere}</p>
        </div>
      </div>
    </>
  );
}
