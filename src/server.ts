import { PartyControllerH3 } from './controllers/PartyControllerH3';
import { IdProviderCrypto } from './providers/IdProviderCrypto';
import { PartyRepositoryMemory } from './repositories/PartyRepositoryMemory';
import { PartyService } from './services/PartyService';
import { PartyCreationDataValidatorZod } from './validators/PartyCreationDataValidatorZod';
import { H3, serve } from 'h3';

function getConfig() {
  return {
    environment: process.env.NODE_ENV ?? 'development',
    port: typeof process.env.PORT === 'string' ? parseInt(process.env.PORT) : 3000,
  };
}

export function createServer() {
  const config = getConfig();

  /* Dependencies */
  const app = new H3();

  /* Providers */
  const idProvider = new IdProviderCrypto();

  /* Validators */
  const partyCreationDataValidator = new PartyCreationDataValidatorZod();

  /* Repositories */
  const partyRepository = new PartyRepositoryMemory();

  /* Services */
  const partyService = new PartyService(idProvider, partyCreationDataValidator, partyRepository);

  /* Controllers */
  const partyController = new PartyControllerH3(partyCreationDataValidator, partyService);

  return {
    setup() {
      /* Parties */
      const PARTIES_COLLECTION_ROUTE = '/parties';
      const PARTIES_SINGLETON_ROUTE = `${PARTIES_COLLECTION_ROUTE}/:id`;

      app.post(PARTIES_COLLECTION_ROUTE, partyController.handleCreateParty);
      app.get(PARTIES_SINGLETON_ROUTE, partyController.handleGetParty);
      app.delete(PARTIES_SINGLETON_ROUTE, partyController.handleDeleteParty);
    },
    start() {
      serve(app, {
        port: config.port,
      });
    },
  };
}
