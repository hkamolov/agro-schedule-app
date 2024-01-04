// src/events/event.entity.js

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Location } from '../locations/locations.entity';

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startDate: Date;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(() => Location, (location) => location.events)
    location: Location;
}