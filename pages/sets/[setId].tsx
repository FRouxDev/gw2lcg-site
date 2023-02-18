import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
import { Table } from 'flowbite-react';
import setsJson from '../../data/sets.json';
import cardsJson from '../../data/cards.json';
import { Card } from '../../data/types/card.type';
import { CardSet } from '../../data/types/cardSet.type';

const sets = setsJson as CardSet[];
const cards = cardsJson as Card[];

export default function CardSetView() {
  const router = useRouter();
  const { setId } = router.query;
  const cardSet = sets.find((s) => s.uuid === setId);

  if (cardSet) {
    const cardsFromSet = cardSet.cards.map((cardId) => cards.find((c) => c.uuid === cardId));

    const dataRows = cardsFromSet.map((row, index) => {
      return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <Link href={`/cards/${row?.uuid}`}>{row?.name}</Link>
          </Table.Cell>
          <Table.Cell>{cardSet.name}</Table.Cell>
          <Table.Cell>{row?.type}</Table.Cell>
          <Table.Cell>{row?.sphere}</Table.Cell>
        </Table.Row>
      );
    });

    return (
      <>
        <Head>
          <title>{cardSet.name} - Guild Wars 2, le Jeu de Cartes</title>
        </Head>
        <h1>{cardSet.name} - Liste des cartes</h1>
        <Table>
          <Table.Head>
            <Table.HeadCell>Nom de la carte</Table.HeadCell>
            <Table.HeadCell>Set</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell>Sphère</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">{dataRows}</Table.Body>
        </Table>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Set non trouvé - Guild Wars 2, le Jeu de Cartes</title>
        </Head>
        <h1>Set non trouvé</h1>
      </>
    );
  }
}
