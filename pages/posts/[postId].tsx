import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

export default function Post() {
  const router = useRouter();
  const { postId } = router.query;
  return (
    <>
      <Head>
        <title>Guild Wars 2, le Jeu de Cartes - Un projet amateur</title>
      </Head>
      <h1>Détail de l&apos;article {postId}</h1>
    </>
  );
}
