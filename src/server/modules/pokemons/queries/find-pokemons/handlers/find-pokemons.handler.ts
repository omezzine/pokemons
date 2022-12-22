import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { PokemonRepository } from '../../../repository/pokemon.repository';
import { FindPokemonsQuery } from '../impl';

@QueryHandler(FindPokemonsQuery)
export class GetPokemonsHandler implements IQueryHandler<FindPokemonsQuery> {
  constructor(private readonly repository: PokemonRepository) {}

  async execute(query: FindPokemonsQuery) {
    console.log(
      clc.yellowBright('Async FindPokemonsQuery...', JSON.stringify(query)),
    );
    return this.repository.findAll(query);
  }
}
