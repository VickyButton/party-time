import { UNIX_TIMESTAMP_MIN, UNIX_TIMESTAMP_MAX } from './UnixTimestampSchema';
import z from 'zod';

export const UnixTimestampSchemaZod = z.number().int().min(UNIX_TIMESTAMP_MIN).max(UNIX_TIMESTAMP_MAX);
