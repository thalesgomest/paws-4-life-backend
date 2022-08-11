import { Router } from 'express';
import validadeSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import validateBearerTokenMiddleware from '../middlewares/validateBearerTokenMiddleware.js';
import { ongSchema } from '../schemas/ongSchema.js';
import * as ongController from '../controllers/ongController.js';

const ongsRouter = Router();

ongsRouter.post(
	'/register/ong',
	validadeSchemaMiddleware(ongSchema),
	ongController.registerOng
);

ongsRouter.get('/ongs', validateBearerTokenMiddleware, ongController.getOngs);

export default ongsRouter;
