import type { Party } from '../domain/Party';

export interface PartyRepository {
  /**
   * Adds a party to the repository.
   * @param party The party being added.
   * @returns The added party.
   */
  addParty(party: Party): Promise<Party>;
  /**
   * Retrieves a party from the repository by ID.
   * @param id The ID of the party to retrieve.
   * @returns The party if found, null if not.
   */
  getPartyById(id: string): Promise<Party | null>;
  /**
   * Deletes a party from the repository.
   * @param id The ID of the party to delete.
   * @returns True if the party was deleted, false if not.
   */
  deleteParty(id: string): Promise<boolean>;
}
