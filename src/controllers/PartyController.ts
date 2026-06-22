export interface PartyController<T> {
  handleCreateParty(args: T): Promise<unknown>;
  handleGetParty(args: T): Promise<unknown>;
  handleDeleteParty(args: T): Promise<unknown>;
}
