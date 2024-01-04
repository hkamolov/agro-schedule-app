// src/events/dto/create-event.dto.ts

export class CreateEventDto {
    startDate: Date;
    endDate: Date;
    name: string;
    description: string;
    locationId: number; // Assuming you want to link an event to a location
  }
  