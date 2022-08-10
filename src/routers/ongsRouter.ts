import { Router } from 'express';
import validadeSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import { ongSchema } from '../schemas/ongSchema.js';

const authRouter = Router();

authRouter.post('/ong', validadeSchemaMiddleware(ongSchema));

export default authRouter;
