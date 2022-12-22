import { PokemonResponseDto } from './pokemon.response.dto';

export class PokemonsPaginatedResponseDto {
  readonly count: number;
  readonly limit: number;
  readonly offset: number;
  readonly data: readonly PokemonResponseDto[];
  constructor({ offset, limit, data, count }: PokemonsPaginatedResponseDto) {
    this.offset = offset;
    this.limit = limit;
    this.data = data;
    this.count = count;
  }
}
