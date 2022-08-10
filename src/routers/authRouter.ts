import { Router } from 'express';
import * as authController from '../controllers/authController.js';
import validadeSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import { signInSchema, signUpSchema } from '../schemas/authSchema.js';

const authRouter = Router();

authRouter.post(
	'/signin',
	validadeSchemaMiddleware(signInSchema),
	authController.signIn
);
authRouter.post(
	'/signup',
	validadeSchemaMiddleware(signUpSchema),
	authController.signUp
);

export default authRouter;
