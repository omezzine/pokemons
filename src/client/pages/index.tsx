import React from 'react';
import { NextPage } from 'next';
import { PokemonCard } from '@components/pokemon-card';
import { Pagination } from '@components/pagination';
import { Spinner } from '@components/spinner';
import { usePokemons } from '@hooks/usePokemons';
import useTitle from '@hooks/useTitle';

const Home: NextPage = () => {
  useTitle('Pokemons');
  const { data, isLoading, setOffset } = usePokemons({
    offset: 0,
    limit: 16,
  });
  const onPaginationchange = (offset: number) => {
    setOffset(offset);
  };

  if (!data) {
    return null;
  }
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center display-3">Pokemons</h1>
      </div>
      <div className="pokemons-container">
        {isLoading && <Spinner />}
        {data.data.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination
        count={data.count}
        limit={data.limit}
        offset={data.offset}
        onChange={onPaginationchange}
      />
    </div>
  );
};

export default Home;
