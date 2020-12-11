import { inject, injectable } from 'tsyringe';
import Client from '../database/schemas/Client';
import ClientRepository from '../repositories/ClientRepository';

@injectable()
class ListClientsService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: ClientRepository,
  ) {}

  public async execute(): Promise<Client[] | undefined> {
    const clients = await this.clientRepository.findAll();

    return clients;
  }
}

export default ListClientsService;
