export interface Validator<T> {
  /**
   * Validates a value and returns a validated copy of it.
   * @param value The value to validate.
   * @returns The validated copy of the value.
   * @throws An error if the value is invalid.
   */
  validate(value: unknown): T;
}
