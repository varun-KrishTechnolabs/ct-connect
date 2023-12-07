import { Router } from 'express';
import { logger } from '../utils/logger.utils.js';

const serviceRouter = Router();

serviceRouter.post('/', async (req, res) => {
  logger.info('Cart update extension executed');
  res.status(200);
  res.send();
});

serviceRouter.get('/', async (req, res) => {
  logger.info('Cart update extension executed');
  res.status(200);
  res.send("Hello world");
});

export default serviceRouter;
