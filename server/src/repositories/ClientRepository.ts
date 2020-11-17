import { getMongoRepository, MongoRepository } from 'typeorm';

import Client from '../database/schemas/Client';
import IClientRepository from './models/IClientRepository';
import ICreateClientDTO from './dtos/ICreateClientDTO';

class ClientRepository implements IClientRepository {
  private ormRepository: MongoRepository<Client>;

  constructor() {
    this.ormRepository = getMongoRepository(Client);
  }

  public async create({ name }: ICreateClientDTO): Promise<Client> {
    const client = this.ormRepository.create({ name });

    await this.ormRepository.save(client);

    return client;
  }

  public async findAll(): Promise<Client[] | undefined> {
    const clients = this.ormRepository.find();

    return clients;
  }

  public async delete(id: string): Promise<void> {
    const client = await this.ormRepository.findOne(id);

    if (client) {
      await this.ormRepository.remove(client);
    }
  }
}

export default ClientRepository;
