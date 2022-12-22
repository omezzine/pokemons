import { ResponseBase } from '@common/api/response.base';

export class PokemonResponseDto extends ResponseBase {
  id: string;
  name: string;
  image: string;
}
