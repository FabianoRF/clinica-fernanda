import { inject, injectable } from 'tsyringe';
import Client from '../database/schemas/Client';
import ClientData from '../database/schemas/ClientData';
import ClientRepository from '../repositories/ClientRepository';
import ClientDataRepository from '../repositories/ClientDataRepository';

interface IRequest {
  name: string;
  personal_data: object;
  habits: object;
  c_history: object;
  e_history: object;
  facial_evoluation: object;
  anotations: object;
}

interface IClientResponse {
  client: Client;
  clientData: ClientData;
}

@injectable()
class CreateClientService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: ClientRepository,
    @inject('ClientDataRepository')
    private clientDataRepository: ClientDataRepository,
  ) {}

  public async execute({
    name,
    personal_data,
    habits,
    c_history,
    e_history,
    facial_evoluation,
    anotations,
  }: IRequest): Promise<IClientResponse> {
    const client = await this.clientRepository.create({ name });

    const client_id = client.id;

    const clientData = await this.clientDataRepository.create({
      client_id: client_id.toString(),
      anotations: JSON.stringify(anotations),
      c_history: JSON.stringify(c_history),
      e_history: JSON.stringify(e_history),
      facial_evoluation: JSON.stringify(facial_evoluation),
      habits: JSON.stringify(habits),
      personal_data: JSON.stringify(personal_data),
    });

    return { client, clientData };
  }
}

export default CreateClientService;
