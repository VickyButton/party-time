import { PartyService } from './PartyService';
import { afterEach, describe, expect, it, vi } from 'vitest';

const idProvider = {
  generateId: vi.fn(),
};
const partyRepository = {
  create: vi.fn(),
  findById: vi.fn(),
  delete: vi.fn(),
};

describe('PartyService', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should create a party in the repository', async () => {
    idProvider.generateId.mockReturnValueOnce('PARTY_ID');

    const service = new PartyService(idProvider, partyRepository);
    await service.createParty({
      name: 'PARTY_NAME',
      description: 'PARTY_DESCRIPTION',
      startTime: 0,
      stopTime: 1,
    });

    expect(partyRepository.create).toHaveBeenCalledWith({
      id: 'PARTY_ID',
      name: 'PARTY_NAME',
      description: 'PARTY_DESCRIPTION',
      startTime: 0,
      stopTime: 1,
    });
  });

  it('should retrieve a party from the repository', async () => {
    const party = {
      id: 'PARTY_ID',
    };
    partyRepository.findById.mockResolvedValueOnce(party);

    const service = new PartyService(idProvider, partyRepository);
    const result = await service.getParty('PARTY_ID');

    expect(partyRepository.findById).toHaveBeenCalledWith('PARTY_ID');
    expect(result).toBe(party);
  });

  it('should delete a party from the repository', async () => {
    partyRepository.delete.mockResolvedValueOnce(true);

    const service = new PartyService(idProvider, partyRepository);
    await service.deleteParty('PARTY_ID');

    expect(partyRepository.delete).toHaveBeenCalledWith('PARTY_ID');
  });
});
