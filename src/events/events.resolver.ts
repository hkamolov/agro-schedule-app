// src/events/events.resolver.ts

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EventsService } from './events.service';
import { Event } from './events.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Resolver('Event')
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  @Query('events')
  async getEvents(): Promise<Event[]> {
    return this.eventsService.findAll();
  }

  // Define other queries and mutations as needed
}
