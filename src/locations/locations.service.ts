// src/locations/locations.service.ts

import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './locations.entity';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private readonly locationsRepository: Repository<Location>,
    private readonly authService: AuthService,
  ) {}

  async create(createLocationDto: CreateLocationDto, userId: number): Promise<Location> {
    // Validate user authentication
    await this.authService.validateUser(userId, password);

    const location = this.locationsRepository.create(createLocationDto);
    return await this.locationsRepository.save(location);
  }

  async update(id: number, updateLocationDto: UpdateLocationDto, userId: number, password: string): Promise<Location | undefined> {
    // Validate user authentication
    await this.authService.validateUser(userId, password);

    // Validate user password
    const isValidPassword = await this.authService.validatePassword(userId, password);

    if (!isValidPassword) {
      throw new UnauthorizedException('Invalid password');
    }

    const existingLocation = await this.locationsRepository.findOne(id);

    if (!existingLocation) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }

    const updatedLocation = { ...existingLocation, ...updateLocationDto };

    return await this.locationsRepository.save(updatedLocation);
  }

  async remove(id: number, userId: number, password: string): Promise<Location | undefined> {
    // Validate user authentication
    await this.authService.validateUser(userId, password);

    // Validate user password
    const isValidPassword = await this.authService.validatePassword(userId, password);

    if (!isValidPassword) {
      throw new UnauthorizedException('Invalid password');
    }

    const locationToRemove = await this.locationsRepository.findOne(id);

    if (!locationToRemove) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }

    return await this.locationsRepository.remove(locationToRemove);
  }

  // ... other methods
}
