export interface Party {
  /** The unique identifier for the party. */
  id: string;
  /** The name of the party. */
  name: string;
  /** A description of what the party is for. */
  description?: string;
  /** The time in which the party starts, as a UNIX timestamp. */
  startTime: number;
  /** The time in which the party stops, as a UNIX timestamp. */
  stopTime?: number;
}
