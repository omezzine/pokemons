export interface Pokemon {
  id: string;
  name: string;
  image: string;
}

export interface FindPokemonsApiResponse {
  count: string | number;
  offset: string | number;
  limit: string | number;
  data: Pokemon[];
}
