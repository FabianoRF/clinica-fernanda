import { container } from 'tsyringe';

import IClientRepository from '../repositories/models/IClientRepository';
import ClientRepository from '../repositories/ClientRepository';

import IClientDataRepository from '../repositories/models/IClientDataRepository';
import ClientDataRepository from '../repositories/ClientDataRepository';

container.registerSingleton<IClientRepository>(
  'ClientRepository',
  ClientRepository,
);

container.registerSingleton<IClientDataRepository>(
  'ClientDataRepository',
  ClientDataRepository,
);
