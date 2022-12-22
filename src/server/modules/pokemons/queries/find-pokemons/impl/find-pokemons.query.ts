export class FindPokemonsQuery {
  readonly offset?: number;
  readonly limit?: number;
  constructor(props: FindPokemonsQuery) {
    this.limit = props.limit;
    this.offset = props.offset;
  }
}
