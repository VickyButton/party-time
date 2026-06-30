import type { PartyRepository } from './PartyRepository';
import type { Party } from '../domain/Party';

export class PartyRepositoryMemory implements PartyRepository {
  private readonly parties = new Map<string, Party>();

  public addParty(party: Party) {
    this.parties.set(party.id, party);

    return Promise.resolve(party);
  }

  public getPartyById(id: string) {
    const result = this.parties.get(id) ?? null;

    return Promise.resolve(result);
  }

  public deleteParty(id: string) {
    const result = this.parties.delete(id);

    return Promise.resolve(result);
  }
}
