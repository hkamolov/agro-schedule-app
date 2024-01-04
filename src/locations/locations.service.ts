// src/locations/locations.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.entity';
import { CreateLocationDto, UpdateLocationDto } from './dto';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private readonly locationsRepository: Repository<Location>,
  ) {}

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    const location = this.locationsRepository.create(createLocationDto);
    return await this.locationsRepository.save(location);
  }

  async findAll(): Promise<Location[]> {
    return await this.locationsRepository.find();
  }

  async findOne(id: number): Promise<Location> {
    return await this.locationsRepository.findOne(id);
  }

  async update(id: number, updateLocationDto: UpdateLocationDto): Promise<Location> {
    await this.locationsRepository.update(id, updateLocationDto);
    return await this.locationsRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.locationsRepository.delete(id);
  }
}
