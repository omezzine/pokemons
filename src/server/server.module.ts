import { Module } from '@nestjs/common';

import { ViewModule } from 'src/server/view/view.module';
import { PokemonsModule } from 'src/server/modules/pokemons/pokemons.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ViewModule,
    PokemonsModule,
  ],
})
export class ServerModule {}
