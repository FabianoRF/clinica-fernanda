import { inject, injectable } from 'tsyringe';

import ClientDataRepository from '../repositories/ClientDataRepository';

interface IResponse {
  personal_data: object;
  habits: object;
  history: object;
  facial_evaluation: object;
  anotations: object;
}

@injectable()
class ShowClientDetailsService {
  constructor(
    @inject('ClientDataRepository')
    private clientDataRepository: ClientDataRepository,
  ) {}

  public async execute(client_id: string): Promise<IResponse> {
    const clientData = await this.clientDataRepository.findById(client_id);

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

export default ShowClientDetailsService;
