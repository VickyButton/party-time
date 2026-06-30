import { PartyRepositoryMemory } from './PartyRepositoryMemory';
import { describe, expect, it } from 'vitest';

const testParty = {
  id: 'PARTY_ID',
  name: 'PARTY_NAME',
  startTime: -1,
};

describe('PartyRepositoryMemory', () => {
  it('should retrieve a party from memory by ID', async () => {
    const repository = new PartyRepositoryMemory();

    await repository.addParty(testParty);

    const result = await repository.getPartyById(testParty.id);

    expect(result).toBe(testParty);
  });

  it('should delete a party from memory', async () => {
    const repository = new PartyRepositoryMemory();

    await repository.addParty(testParty);

    const result = await repository.deleteParty(testParty.id);

    expect(result).toBe(true);
  });
});
