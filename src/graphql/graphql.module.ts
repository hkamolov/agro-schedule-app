// src/graphql/graphql.module.ts

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { EventsModule } from '../events/events.module'; // Adjust the path based on your project structure
import { LocationsModule } from '../locations/locations.module'; // Adjust the path based on your project structure
import { AuthModule } from '../auth/auth.module'; // Add this import

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      include: [EventsModule, LocationsModule, AuthModule], // Add AuthModule
    }),
  ],
})
export class GraphqlModule {}
