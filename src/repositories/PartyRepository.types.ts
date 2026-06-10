import type { Party } from '../domain/Party';

export interface PartyRepository {
  /**
   * Creates a party in the repository.
   * @param party The party being created.
   * @returns The created party.
   */
  create(party: Party): Promise<Party>;
  /**
   * Finds a party by ID.
   * @param id The ID of the party to find.
   * @returns The party if found, null if not.
   */
  findById(id: string): Promise<Party | null>;
  /**
   * Deletes a party from the repository.
   * @param id The ID of the party to delete.
   * @returns True if the party was deleted, false if not.
   */
  delete(id: string): Promise<boolean>;
}
