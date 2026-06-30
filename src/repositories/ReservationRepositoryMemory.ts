import type { ReservationRepository } from './ReservationRepository';
import type { Reservation } from '../domain/Reservation';

export class ReservationRepositoryMemory implements ReservationRepository {
  private readonly reservations = new Map<string, Reservation>();

  public addReservation(reservation: Reservation) {
    this.reservations.set(reservation.id, reservation);

    return Promise.resolve(reservation);
  }

  public getReservationById(id: string) {
    const result = this.reservations.get(id) ?? null;

    return Promise.resolve(result);
  }

  public deleteReservation(id: string) {
    const result = this.reservations.delete(id);

    return Promise.resolve(result);
  }
}
