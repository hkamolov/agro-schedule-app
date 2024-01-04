// src/events/events.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';
import { CreateEventDto, UpdateEventDto } from './dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventsRepository: Repository<Event>,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const event = this.eventsRepository.create(createEventDto);
    return await this.eventsRepository.save(event);
  }

  async findAll(): Promise<Event[]> {
    return await this.eventsRepository.find();
  }

  async findOne(id: number): Promise<Event> {
    return await this.eventsRepository.findOne(id);
  }

  async update(id: number, updateEventDto: UpdateEventDto): Promise<Event> {
    await this.eventsRepository.update(id, updateEventDto);
    return await this.eventsRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.eventsRepository.delete(id);
  }
}
