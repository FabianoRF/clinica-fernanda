import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateClientService from '../services/CreateClientService';
import DeleteClientService from '../services/DeleteClientService';
import ListClientsService from '../services/ListClientsService';

export default class ClientController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listClients = container.resolve(ListClientsService);

    const clients = await listClients.execute();

    return response.json(clients);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      personal_data,
      habits,
      c_history,
      e_history,
      facial_evoluation,
      anotations,
    } = request.body;

    const createClient = container.resolve(CreateClientService);

    const client = await createClient.execute({
      name,
      personal_data,
      habits,
      c_history,
      e_history,
      facial_evoluation,
      anotations,
    });

    return response.json(client);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deleteClient = container.resolve(DeleteClientService);

    await deleteClient.execute(id);

    return response.status(200).send();
  }
}
