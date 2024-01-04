// src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsModule } from './events/events.module';
import { LocationsModule } from './locations/locations.module';
import { GraphqlModule } from './graphql/graphql.module';
import { AuthModule } from './auth/auth.module'; // Add this import

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // ... your TypeORM configuration
    }),
    EventsModule,
    LocationsModule,
    GraphqlModule, // Add this line to import the GraphQL module
    AuthModule, // Add this line to import the Auth module
  ],
})
export class AppModule {}
