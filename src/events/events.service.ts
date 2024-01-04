// src/events/events.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from '../events/events.entity';
import { CreateEventDto } from '../events/dto/create-event.dto';
import { UpdateEventDto } from '../events/dto/update-event.dto';

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

    async findOne(id: number): Promise<Event | undefined> {
        return await this.eventsRepository.findOne(id);
    }

    async update(id: number, updateEventDto: UpdateEventDto): Promise<Event | undefined> {
        const existingEvent = await this.eventsRepository.findOne(id);

        if (!existingEvent) {
            return undefined;
        }

        const updatedEvent = { ...existingEvent, ...updateEventDto };

        return await this.eventsRepository.save(updatedEvent);
    }

    async remove(id: number): Promise<void> {
        await this.eventsRepository.delete(id);
    }
}
