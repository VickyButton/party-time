import type { Reservation } from '../domain/Reservation';

export interface ReservationRepository {
  /**
   * Adds a reservation to the repository.
   * @param reservation The reservation being added.
   * @returns The added reservation.
   */
  addReservation(reservation: Reservation): Promise<Reservation>;
  /**
   * Retrieves a reservation from the repository by ID.
   * @param id The ID of the reservation to retrieve.
   * @returns The reservation if found, null if not.
   */
  getReservationById(id: string): Promise<Reservation | null>;
  /**
   * Deletes a reservation from the repository.
   * @param id The ID of the reservation to delete.
   * @returns True if the reservation was deleted, false if not.
   */
  deleteReservation(id: string): Promise<boolean>;
}
