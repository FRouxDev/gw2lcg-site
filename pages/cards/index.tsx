import { Table } from 'flowbite-react';
import Head from 'next/head';
import Link from 'next/link';
import useSWR, { preload } from 'swr';
import fetcher from '../../lib/fetcher';
import { Card } from '../../data/types/card.type';
import { CardSet } from '../../data/types/cardSet.type';

const API_CARDS_ENDPOINT = 'http://localhost:3000/cards/';
preload(API_CARDS_ENDPOINT, fetcher);

const API_SETS_ENDPOINT = 'http://localhost:3000/sets/';
preload(API_SETS_ENDPOINT, fetcher);

export default function Cards() {
  const { data: setsData } = useSWR(API_SETS_ENDPOINT, fetcher, { suspense: true, fallbackData: { sets: [] } });
  const { sets: cardSets }: { sets: CardSet[] } = setsData;
  const { data: cardsData } = useSWR(API_CARDS_ENDPOINT, fetcher, { suspense: true, fallbackData: { cards: [] } });
  const { cards }: { cards: Card[] } = cardsData;

  const dataRows = cards.map((row, index) => {
    return (
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          <Link href={`/cards/${row.uuid}`}>{row.name}</Link>
        </Table.Cell>
        <Table.Cell>{cardSets.find((set) => set.uuid === row.set)?.name}</Table.Cell>
        <Table.Cell>{row.type}</Table.Cell>
        <Table.Cell>{row.sphere}</Table.Cell>
      </Table.Row>
    );
  });

  return (
    <>
      <Head>
        <title>Liste des cartes - Guild Wars 2, le Jeu de Cartes</title>
      </Head>
      <h1 className="page-title">Liste des cartes</h1>
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
}
