import { Controller, Get, Query } from '@nestjs/common';
import { routesV1 } from '@config/app.routes';
import { QueryBus } from '@nestjs/cqrs';
import { FindPokemonsQuery } from './queries/find-pokemons/impl';
import { PaginatedQueryRequestDto } from '@common/api/paginated-query.request.dto';

@Controller(routesV1.version)
export class PokemonsController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(routesV1.pokemons.root)
  async findAll(
    @Query() queryParams: PaginatedQueryRequestDto,
  ): Promise<any[]> {
    console.log(queryParams);
    return this.queryBus.execute(new FindPokemonsQuery(queryParams));
  }
}

/* import { Body, Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { routesV1 } from '@config/app.routes';
import { QueryBus } from '@nestjs/cqrs';
import { FindUsersRequestDto } from './find-users.request.dto';
import { FindPokemonsQuery } from './find-pokemons.query-handler';
import { UserMapper } from '@modules/user/user.mapper';
import { Paginated } from '@src/libs/ddd';
import { UserPaginatedResponseDto } from '../../dtos/user.paginated.response.dto';
import { PaginatedQueryRequestDto } from '@common/api/paginated-query.request.dto';
import { UserModel } from '../../database/user.repository';
import { ResponseBase } from '@common/api/response.base';

@Controller(routesV1.version)
export class FindUsersHttpController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly userMapper: UserMapper,
  ) {}

  @Get(routesV1.pokemons.root)
  async findPokemons(
    @Query() queryParams: PaginatedQueryRequestDto,
  ): Promise<UserPaginatedResponseDto> {
    const query = new FindPokemonsQuery({
      ...request,
      limit: queryParams?.limit,
      page: queryParams?.page,
    });
    const result: Result<
      Paginated<UserModel>,
      Error
    > = await this.queryBus.execute(query);

    const paginated = result.unwrap();

    // Whitelisting returned properties
    return new UserPaginatedResponseDto({
      ...paginated,
      data: paginated.data.map((user) => ({
        ...new ResponseBase(user),
        email: user.email,
        country: user.country,
        street: user.street,
        postalCode: user.postalCode,
      })),
    });
  }
} */
