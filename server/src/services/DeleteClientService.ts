import { inject, injectable } from 'tsyringe';
import Client from '../database/schemas/Client';
import ClientData from '../database/schemas/ClientData';
import ClientRepository from '../repositories/ClientRepository';
import ClientDataRepository from '../repositories/ClientDataRepository';

@injectable()
class CreateClientService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: ClientRepository,
    @inject('ClientDataRepository')
    private clientDataRepository: ClientDataRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    await this.clientRepository.delete(id);

    await this.clientDataRepository.delete(id);
  }
}

export default CreateClientService;
