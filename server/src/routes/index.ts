import { Router } from 'express';

import ClientsController from '../controllers/ClientsController';

const clientRouter = Router();
const clientController = new ClientsController();

clientRouter.get('/clients', clientController.index);
clientRouter.post('/clients', clientController.create);
clientRouter.delete('/clients/:id', clientController.delete);
clientRouter.get('/clients/:id/details', clientController.show);
clientRouter.put('/clients/:id', clientController.update);

export default clientRouter;
