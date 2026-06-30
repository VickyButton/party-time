import { PartyService } from './PartyService';
import { afterEach, describe, expect, it, vi } from 'vitest';

const idProvider = {
  generateId: vi.fn(),
};
const partyCreationValidator = {
  validate: vi.fn(),
};
const partyRepository = {
  addParty: vi.fn(),
  getPartyById: vi.fn(),
  deleteParty: vi.fn(),
};

describe('PartyService', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should add a party to the repository', async () => {
    const data = {
      name: 'PARTY_NAME',
      description: 'PARTY_DESCRIPTION',
      location: 'PARTY_LOCATION',
      startTime: 0,
      stopTime: 1,
    };
    const id = 'PARTY_ID';
    const expectedResult = {
      id,
      name: 'PARTY_NAME',
      description: 'PARTY_DESCRIPTION',
      location: 'PARTY_LOCATION',
      startTime: 0,
      stopTime: 1,
    };

    idProvider.generateId.mockReturnValueOnce(id);
    partyCreationValidator.validate.mockReturnValueOnce(data);
    partyRepository.addParty.mockReturnValueOnce(expectedResult);

    const service = new PartyService(idProvider, partyCreationValidator, partyRepository);
    const result = await service.createParty(data);

    expect(partyRepository.addParty).toHaveBeenCalledWith(expectedResult);
    expect(result).toBe(expectedResult);
  });

  it('should retrieve a party from the repository by ID', async () => {
    const id = 'PARTY_ID';
    const expectedResult = {
    };
    partyRepository.getPartyById.mockResolvedValueOnce(expectedResult);

    const service = new PartyService(idProvider, partyCreationValidator, partyRepository);
    const result = await service.getParty(id);

    expect(partyRepository.getPartyById).toHaveBeenCalledWith(id);
    expect(result).toBe(expectedResult);
  });

  it('should delete a party from the repository', async () => {
    const id = 'PARTY_ID';
    const expectedResult = true;

    partyRepository.deleteParty.mockResolvedValueOnce(expectedResult);

    const service = new PartyService(idProvider, partyCreationValidator, partyRepository);
    const result = await service.deleteParty(id);

    expect(partyRepository.deleteParty).toHaveBeenCalledWith(id);
    expect(result).toBe(expectedResult);
  });
});
