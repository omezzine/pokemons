import { Controller, Get, Query } from '@nestjs/common';
import { routesV1 } from '@config/app.routes';
import { QueryBus } from '@nestjs/cqrs';
import { FindPokemonsQuery } from './queries/find-pokemons/impl';
import { PaginatedQueryRequestDto } from '@common/api/paginated-query.request.dto';
import { PokemonsPaginatedResponseDto } from './dtos/pokemons.paginated.response.dto';

@Controller(routesV1.version)
export class PokemonsController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(routesV1.pokemons.root)
  async findAll(
    @Query() queryParams: PaginatedQueryRequestDto,
  ): Promise<PokemonsPaginatedResponseDto> {
    const data = await this.queryBus.execute(
      new FindPokemonsQuery(queryParams),
    );
    return new PokemonsPaginatedResponseDto(data);
  }
}
