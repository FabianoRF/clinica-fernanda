import Client from '../../database/schemas/Client';

import ICreateClientDTO from '../dtos/ICreateClientDTO';

export default interface IClientRepository {
  create(data: ICreateClientDTO): Promise<Client>;
  findAll(): Promise<Client[] | undefined>;
  delete(id: string): Promise<void>;
}
