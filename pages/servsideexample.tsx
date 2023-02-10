import { GetServerSideProps } from "next";
import Image from "next/image";

const CharacterPage = ({ character }: { character: Character }) => {
  return (
    <div className={styles.container}>
      <h1>{character.name}</h1>
      <Image
        loader={imageLoader}
        unoptimized
        src={character.image}
        alt={character.name}
        width="400"
        height="400"
      />
      <p>{`Species: ${character.species}`}</p>
      <p>{`Gender: ${character.gender}`}</p>
      <p>{`Status: ${character.status}`}</p>
      <p>{`Character Origin: ${character.origin.name}`}</p>
      <p>{`Current Location: ${character.location.name}`}</p>
    </div>
  );
};

CharacterPage.getLayout = function getLayout(page: typeof CharacterPage) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (something) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${something.query.id}`
  );
  const character = await res.json();
  return {
    props: {
      character,
    },
  };
};

export default CharacterPage;
