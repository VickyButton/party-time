export interface Reservation {
  /** The unique identifier for the reservation. */
  id: string;
  /** The ID of the party of which the reservation belongs to. */
  partyId: string;
  /** The attendee's full name. */
  attendeeName: string;
  /** The attendee's email address. */
  attendeeEmail: string;
  /** The time in which the reservation was submitted, as a UNIX timestamp. */
  submittedOn: number;
}
