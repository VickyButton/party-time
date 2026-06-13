import type { PartyCreationDataValidator } from './PartyCreationDataValidator';
import { PartyCreationDataSchemaZod } from '../schemas/PartyCreationDataSchemaZod';

export class PartyCreationDataValidatorZod implements PartyCreationDataValidator {
  public validate(value: unknown) {
    // TODO: Implement error handling.
    return PartyCreationDataSchemaZod.parse(value);
  }
}
