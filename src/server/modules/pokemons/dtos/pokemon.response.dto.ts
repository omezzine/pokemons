import { ResponseBase } from '@common/api/response.base';

export class PokemonResponseDto extends ResponseBase {
  readonly id: string;
  readonly name: string;
  readonly image: string;
}
