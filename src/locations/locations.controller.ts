// src/locations/locations.controller.ts

import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Add this import
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @UseGuards(JwtAuthGuard) // Add this decorator
  @Post()
  async create(@Body() createLocationDto: CreateLocationDto, user: any) {
    return this.locationsService.create(createLocationDto, user.userId);
  }

  // ... other methods

  @UseGuards(JwtAuthGuard) // Add this decorator
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateLocationDto: UpdateLocationDto, user: any) {
    return this.locationsService.update(+id, updateLocationDto, user.userId);
  }

  @UseGuards(JwtAuthGuard) // Add this decorator
  @Delete(':id')
  async remove(@Param('id') id: string, user: any) {
    return this.locationsService.remove(+id, user.userId);
  }
}
