import type { Validator } from '../types/Validator';

export type PartyCreationDataValidator = Validator<{
  name: string;
  description?: string;
  location?: string;
  startTime: number;
  stopTime?: number;
}>;
