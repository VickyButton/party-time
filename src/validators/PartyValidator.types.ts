import type { Validator } from '../types/Validator';

export type PartyCreationValidator = Validator<{
  name: string;
  description?: string;
  startTime: number;
  stopTime?: number;
}>;
