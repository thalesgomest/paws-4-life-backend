import { Router } from 'express';
import validadeSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import { ongSchema } from '../schemas/ongSchema.js';
import * as ongController from '../controllers/ongController.js';

const ongsRouter = Router();

ongsRouter.post(
	'/ong',
	validadeSchemaMiddleware(ongSchema),
	ongController.registerOng
);

export default ongsRouter;
