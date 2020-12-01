import { inject, injectable } from 'tsyringe';

import ClientDataRepository from '../repositories/ClientDataRepository';

interface IRequest {
  client_id: string;
  personal_data: object;
  habits: object;
  history: object;
  facial_evaluation: object;
  anotations: object;
}

interface IResponse {
  personal_data: object;
  habits: object;
  history: object;
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
    history,
    facial_evaluation,
    anotations,
  }: IRequest): Promise<IResponse> {
    const clientData = await this.clientDataRepository.update({
      client_id,
      anotations: JSON.stringify(anotations),
      history: JSON.stringify(history),
      facial_evaluation: JSON.stringify(facial_evaluation),
      habits: JSON.stringify(habits),
      personal_data: JSON.stringify(personal_data),
    });

    if (!clientData) {
      throw new Error('Client data does not exists.');
    }

    const responseClient = {
      personal_data: JSON.parse(clientData.personal_data),
      habits: JSON.parse(clientData.habits),
      history: JSON.parse(clientData.history),
      facial_evaluation: JSON.parse(clientData.facial_evaluation),
      anotations: JSON.parse(clientData.anotations),
    };

    return responseClient;
  }
}

export default UpdateClientService;
