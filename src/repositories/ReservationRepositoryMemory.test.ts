import { ReservationRepositoryMemory } from './ReservationRepositoryMemory';
import { describe, expect, it } from 'vitest';

const testReservation = {
  id: 'RESERVATION_ID',
  partyId: 'RESERVATION_PARTY_ID',
  attendeeName: 'RESERVATION_ATTENDEE_NAME',
  attendeeEmail: 'RESERVATION_ATTENDEE_EMAIL',
  submittedOn: -1,
};

describe('ReservationRepositoryMemory', () => {
  it('should retrieve a party from memory by ID', async () => {
    const repository = new ReservationRepositoryMemory();

    await repository.addReservation(testReservation);

    const result = await repository.getReservationById(testReservation.id);

    expect(result).toBe(testReservation);
  });

  it('should delete a party from memory', async () => {
    const repository = new ReservationRepositoryMemory();

    await repository.addReservation(testReservation);

    const result = await repository.deleteReservation(testReservation.id);

    expect(result).toBe(true);
  });
});
