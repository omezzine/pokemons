import { Injectable } from '@nestjs/common';
import { POKE_API, POKEMON_IMAGE_REPO } from '@config/constants';
import { replace } from '@common/utils/string';
import axios from 'axios';
import { FindPokemonsQuery } from '../queries/find-pokemons/impl';
import { FindPokemonsApiResponse } from '@common/models/pokemon.model';

export interface PokeApiBase {
  count: number;
  next: null | string;
  previous: null | string;
}
export interface PokeApiResultBase {
  name: string;
  url: string;
}
export interface PokemonSpeciesApiResponse extends PokeApiBase {
  results: PokeApiResultBase[];
}

const defaultHeader = {
  'Accept-Encoding': 'gzip,deflate,compress',
};

@Injectable()
export class PokemonRepository {
  async findAll(query: FindPokemonsQuery): Promise<FindPokemonsApiResponse> {
    const resp = await axios.get<PokemonSpeciesApiResponse>(
      `${POKE_API.root}${POKE_API.species}`,
      {
        headers: { ...defaultHeader },
        params: {
          offset: query.offset === 0 ? null : query.offset,
          limit: query.limit || 10,
        },
      },
    );
    const result = resp.data.results;
    const data = result.map((item: PokeApiResultBase) => {
      const id = this.extractIdFromUrl(item.url);
      return {
        name: item.name,
        id,
        image: replace(POKEMON_IMAGE_REPO, { id }),
      };
    });
    return {
      data,
      count: resp.data.count,
      offset: query.offset || 0,
      limit: query.limit || 10,
    };
  }

  private extractIdFromUrl(url: string) {
    const arrUrl = url.split('/');
    return arrUrl[arrUrl.length - 2];
  }
}
