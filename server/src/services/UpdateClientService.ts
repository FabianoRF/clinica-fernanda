import { inject, injectable } from 'tsyringe';

import ClientDataRepository from '../repositories/ClientDataRepository';

interface IRequest {
  client_id: string;
  personal_data: object;
  habits: object;
  c_history: object;
  e_history: object;
  facial_evaluation: object;
  anotations: object;
}

interface IResponse {
  personal_data: object;
  habits: object;
  c_history: object;
  e_history: object;
  facial_evaluation: object;
  anotations: object;
}

@injectable()
class UpdateClientService {
  constructor(
    @inject('ClientDataRepository')
    private clientDataRepository: ClientDataRepository,
  ) {}

  public async execute({
    client_id,
    personal_data,
    habits,
    c_history,
    e_history,
    facial_evaluation,
    anotations,
  }: IRequest): Promise<IResponse> {
    const clientData = await this.clientDataRepository.update({
      client_id,
      anotations: JSON.stringify(anotations),
      c_history: JSON.stringify(c_history),
      facial_evaluation: JSON.stringify(facial_evaluation),
      e_history: JSON.stringify(e_history),
      habits: JSON.stringify(habits),
      personal_data: JSON.stringify(personal_data),
    });

    if (!clientData) {
      throw new Error('Client data does not exists.');
    }

    const responseClient = {
      personal_data: JSON.parse(clientData.personal_data),
      habits: JSON.parse(clientData.habits),
      c_history: JSON.parse(clientData.c_history),
      e_history: JSON.parse(clientData.e_history),
      facial_evaluation: JSON.parse(clientData.facial_evaluation),
      anotations: JSON.parse(clientData.anotations),
    };

    return responseClient;
  }
}

export default UpdateClientService;
