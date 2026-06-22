import { PartyService } from './PartyService';
import { afterEach, describe, expect, it, vi } from 'vitest';

const idProvider = {
  generateId: vi.fn(),
};
const partyCreationValidator = {
  validate: vi.fn(),
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
    partyRepository.create.mockReturnValueOnce(expectedResult);

    const service = new PartyService(idProvider, partyCreationValidator, partyRepository);
    const result = await service.createParty(data);

    expect(partyRepository.create).toHaveBeenCalledWith(expectedResult);
    expect(result).toBe(expectedResult);
  });

  it('should retrieve a party from the repository', async () => {
    const id = 'PARTY_ID';
    const expectedResult = {
    };
    partyRepository.findById.mockResolvedValueOnce(expectedResult);

    const service = new PartyService(idProvider, partyCreationValidator, partyRepository);
    const result = await service.getParty(id);

    expect(partyRepository.findById).toHaveBeenCalledWith(id);
    expect(result).toBe(expectedResult);
  });

  it('should delete a party from the repository', async () => {
    const id = 'PARTY_ID';
    const expectedResult = true;

    partyRepository.delete.mockResolvedValueOnce(expectedResult);

    const service = new PartyService(idProvider, partyCreationValidator, partyRepository);
    const result = await service.deleteParty(id);

    expect(partyRepository.delete).toHaveBeenCalledWith(id);
    expect(result).toBe(expectedResult);
  });
});
