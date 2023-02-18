import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import { Card } from '../../data/types/card.type';
import CardImage from './components/cardImage';
import CardPanel from './components/cardPanel';

const API_CARD_ENDPOINT = 'http://localhost:3000/cards/';

export default function CardView() {
  const router = useRouter();
  const { cardId } = router.query;

  const { data } = useSWR(`${API_CARD_ENDPOINT}${cardId}`, fetcher, { suspense: true, fallbackData: { card: null } });
  const { card }: { card: Card | null } = data;

  if (card) {
    return (
      <>
        <Head>
          <title>{card.name} - Guild Wars 2, le Jeu de Cartes</title>
        </Head>
        <h1>{card.name}</h1>
        <div className="grid grid-cols-2 gap-4">
          <CardPanel card={card} />
          <CardImage card={card} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Carte non trouvée - Guild Wars 2, le Jeu de Cartes</title>
        </Head>
        <h1>Carte non trouvée</h1>
      </>
    );
  }
}
