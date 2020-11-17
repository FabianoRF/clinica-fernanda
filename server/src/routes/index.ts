import { Router } from 'express';

import ClientsController from '../controllers/ClientsController';

const clientRouter = Router();
const clientController = new ClientsController();

clientRouter.get('/clients', clientController.index);
clientRouter.post('/clients', clientController.create);
clientRouter.delete('/clients/:id', clientController.delete);

export default clientRouter;
