import type { PartyController } from './PartyController';
import type { PartyService } from '../services/PartyService';
import type { PartyCreationDataValidator } from '../validators/PartyCreationDataValidator';
import type { H3Event } from 'h3';
import { defineHandler, getRouterParams, HTTPError, readBody } from 'h3';

export class PartyControllerH3 implements PartyController<H3Event> {
  private readonly partyCreationValidator: PartyCreationDataValidator;
  private readonly partyService: PartyService;

  constructor(partyCreationValidator: PartyCreationDataValidator, partyService: PartyService) {
    this.partyCreationValidator = partyCreationValidator;
    this.partyService = partyService;
  }

  public handleCreateParty = defineHandler(async (event) => {
    const body = await readBody(event);
    const data = this.partyCreationValidator.validate(body);

    if (!data) {
      throw new HTTPError({
        status: 400,
        message: 'Invalid request body.',
      });
    }

    try {
      const result = await this.partyService.createParty(data);

      return result;
    } catch {
      throw new HTTPError({
        status: 500,
        message: 'Unable to process party creation request.',
      });
    }
  });
  public handleGetParty = defineHandler(async (event) => {
    const params = getRouterParams(event);

    if (!params.id) {
      throw new HTTPError({
        status: 400,
        message: 'Invalid request parameter.',
      });
    }

    try {
      const result = await this.partyService.getParty(params.id);

      if (result === null) {
        throw new HTTPError({
          status: 404,
          message: 'Party with specified ID not found.',
        });
      }

      return result;
    } catch (err) {
      if (err instanceof HTTPError) {
        throw err;
      }

      throw new HTTPError({
        status: 500,
        message: 'Unable to process party retrieval request.',
      });
    }
  });
  public handleDeleteParty = defineHandler(async (event) => {
    const params = getRouterParams(event);

    if (!params.id) {
      throw new HTTPError({
        status: 400,
        message: 'Invalid request parameter.',
      });
    }

    try {
      const result = await this.partyService.deleteParty(params.id);

      return result;
    } catch {
      throw new HTTPError({
        status: 500,
        message: 'Unable to process party deletion request.',
      });
    }
  });
}
