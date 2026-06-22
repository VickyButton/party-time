import type { PartyRepository } from './PartyRepository';
import type { Party } from '../domain/Party';

export class PartyRepositoryMemory implements PartyRepository {
  private readonly parties = new Map<string, Party>();

  public create(party: Party) {
    this.parties.set(party.id, party);

    return Promise.resolve(party);
  }

  public findById(id: string) {
    const result = this.parties.get(id) ?? null;

    return Promise.resolve(result);
  }

  public delete(id: string) {
    const result = this.parties.delete(id);

    return Promise.resolve(result);
  }
}
