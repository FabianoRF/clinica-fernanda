import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateClientService from '../services/CreateClientService';
import DeleteClientService from '../services/DeleteClientService';
import ListClientsService from '../services/ListClientsService';
import ShowClientDetailsService from '../services/ShowClientDetailsService';
import UpdateClientService from '../services/UpdateClientService';

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
      history,
      facial_evaluation,
      anotations,
    } = request.body;

    const createClient = container.resolve(CreateClientService);

    const client = await createClient.execute({
      name,
      personal_data,
      habits,
      history,
      facial_evaluation,
      anotations,
    });

    return response.json(client);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteClient = container.resolve(DeleteClientService);

    await deleteClient.execute(id);

    return response.status(200).send();
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showClient = container.resolve(ShowClientDetailsService);

    const client = await showClient.execute(id);

    return response.json(client);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const {
      personal_data,
      habits,
      history,
      facial_evaluation,
      anotations,
    } = request.body;

    const updateClient = container.resolve(UpdateClientService);

    const client = await updateClient.execute({
      client_id: id,
      personal_data,
      habits,
      history,
      facial_evaluation,
      anotations,
    });

    return response.json(client);
  }
}
