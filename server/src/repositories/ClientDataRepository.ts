import { getMongoRepository, MongoRepository } from 'typeorm';

import ClientData from '../database/schemas/ClientData';
import IClientDataRepository from './models/IClientDataRepository';
import ICreateClientDataDTO from './dtos/ICreateClientDataDTO';

class ClientDataRepository implements IClientDataRepository {
  private ormRepository: MongoRepository<ClientData>;

  constructor() {
    this.ormRepository = getMongoRepository(ClientData);
  }

  public async create({
    client_id,
    personal_data,
    habits,
    history,
    facial_evaluation,
    anotations,
  }: ICreateClientDataDTO): Promise<ClientData> {
    const clientData = this.ormRepository.create({
      client_id,
      personal_data,
      habits,
      history,
      facial_evaluation,
      anotations,
    });

    await this.ormRepository.save(clientData);

    return clientData;
  }

  public async findById(client_id: string): Promise<ClientData | undefined> {
    const client = this.ormRepository.findOne({ where: { client_id } });

    return client;
  }

  public async update({
    client_id,
    personal_data,
    habits,
    history,
    facial_evaluation,
    anotations,
  }: ICreateClientDataDTO): Promise<ClientData | undefined> {
    let clientData = await this.ormRepository.findOne({
      where: { client_id },
    });

    if (clientData) {
      clientData = {
        ...clientData,
        personal_data,
        habits,
        history,
        facial_evaluation,
        anotations,
      };

      await this.ormRepository.update(clientData?.id, clientData);
    }

    return clientData;
  }

  public async delete(client_id: string): Promise<void> {
    const clientData = await this.ormRepository.findOne({
      where: { client_id },
    });

    if (clientData) {
      await this.ormRepository.remove(clientData);
    }
  }
}

export default ClientDataRepository;
