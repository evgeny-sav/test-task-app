import { Router } from 'express';

import appController from '../controllers/appController';

const appRouter = {
  get router() {
    const router = new Router();

    router.use('/api/v1', appController.router);

    return router;
  },
};

export default appRouter;
