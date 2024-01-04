// src/events/dto/update-event.dto.ts

export class UpdateEventDto {
  startDate?: Date;
  endDate?: Date;
  name?: string;
  description?: string;
  locationId?: number; // Assuming you want to update the linked location
}
