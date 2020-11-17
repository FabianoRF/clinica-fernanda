import ClientData from '../../database/schemas/ClientData';

import ICreateClientDataDTO from '../dtos/ICreateClientDataDTO';

export default interface IClientDataRepository {
  create(data: ICreateClientDataDTO): Promise<ClientData>;
  findById(id: string): Promise<ClientData | undefined>;
  update(data: ICreateClientDataDTO): Promise<ClientData | undefined>;
  delete(client_id: string): Promise<void>;
}
