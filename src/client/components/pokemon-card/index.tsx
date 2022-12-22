import React from 'react';
import { Pokemon } from '@common/models/pokemon.model';
import styles from './pokemon-card.module.scss';

interface PokemonCardPropsI {
  pokemon: Pokemon;
}

export const PokemonCard: React.FC<PokemonCardPropsI> = ({ pokemon }) => {
  return (
    <div className={styles.card}>
      <span className={styles['card-name']}>{pokemon.name}</span>
      <img src={pokemon.image} title={pokemon.name} />
    </div>
  );
};
