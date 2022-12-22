import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PokemonsController } from './pokemons.controller';
import { QueryHandlers } from './queries/find-pokemons/handlers';
import { PokemonRepository } from './repository/pokemon.repository';

@Module({
  imports: [CqrsModule],
  controllers: [PokemonsController],
  providers: [PokemonRepository, ...QueryHandlers],
})
export class PokemonsModule {}
