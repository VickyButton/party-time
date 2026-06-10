import type { IdProvider } from '../providers/IdProvider.types';
import type { PartyRepository } from '../repositories/PartyRepository.types';

export class PartyService {
  private readonly idProvider: IdProvider;
  private readonly partyRepository: PartyRepository;

  constructor(idProvider: IdProvider, partyRepository: PartyRepository) {
    this.idProvider = idProvider;
    this.partyRepository = partyRepository;
  }

  /**
   * Creates a party and adds it to the repository.
   * @param data The party information.
   * @returns The created party.
   */
  public async createParty(data: {
    name: string;
    description?: string;
    startTime: number;
    stopTime?: number;
  }) {
    const id = this.idProvider.generateId();

    return await this.partyRepository.create({
      id,
      name: data.name,
      description: data.description,
      startTime: data.startTime,
      stopTime: data.stopTime,
    });
  }

  /**
   * Retrieves a party from the repository.
   * @param id The ID of the party to retrieve.
   * @returns The party if it exists, null if not.
   */
  public async getParty(id: string) {
    return await this.partyRepository.findById(id);
  }

  /**
   * Deletes a party from the repository.
   * @param id The ID of the party to delete.
   * @returns True if the party was deleted, false if not.
   */
  public async deleteParty(id: string) {
    return await this.partyRepository.delete(id);
  }
}
