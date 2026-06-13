import { PARTY_DESCRIPTION_MAX_LENGTH, PARTY_DESCRIPTION_MIN_LENGTH, PARTY_NAME_MAX_LENGTH, PARTY_NAME_MIN_LENGTH } from './PartyCreationDataSchema';
import z from 'zod';

export const PartyCreationDataSchemaZod = z.object({
  name: z.string().trim().min(PARTY_NAME_MIN_LENGTH).max(PARTY_NAME_MAX_LENGTH),
  description: z.string().trim().min(PARTY_DESCRIPTION_MIN_LENGTH).max(PARTY_DESCRIPTION_MAX_LENGTH).optional(),
  startTime: z.number().int(),
  stopTime: z.number().int().optional(),
});
