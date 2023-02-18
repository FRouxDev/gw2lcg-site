import { Table } from 'flowbite-react';
import Head from 'next/head';
import Link from 'next/link';
import useSWR, { preload } from 'swr';
import fetcher from '../../lib/fetcher';
import { CardSet } from '../../data/types/cardSet.type';

const API_SETS_ENDPOINT = 'http://localhost:3000/sets/';
preload(API_SETS_ENDPOINT, fetcher);

export default function Sets() {
  const { data } = useSWR(API_SETS_ENDPOINT, fetcher, { suspense: true, fallbackData: { sets: [] } });
  const { sets }: { sets: CardSet[] } = data;

  const dataRows = sets.map((row, index) => {
    return (
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          <Link href={`/sets/${row.uuid}`}>{row.name}</Link>
        </Table.Cell>
        <Table.Cell>{row.type}</Table.Cell>
        <Table.Cell>{row.cards?.length || '0'}</Table.Cell>
      </Table.Row>
    );
  });

  return (
    <>
      <Head>
        <title>Liste des extensions - Guild Wars 2, le Jeu de Cartes</title>
      </Head>
      <h1 className="page-title">Liste des sets</h1>
      <Table>
        <Table.Head>
          <Table.HeadCell>Nom du Set</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Nb. Cartes</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">{dataRows}</Table.Body>
      </Table>
    </>
  );
}
