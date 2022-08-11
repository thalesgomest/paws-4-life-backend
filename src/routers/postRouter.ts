import { Router } from 'express';
import validadeSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import validateBearerTokenMiddleware from '../middlewares/validateBearerTokenMiddleware.js';
import { postSchema } from '../schemas/postSchema.js';
import * as postController from '../controllers/postController.js';

const postRouter = Router();

postRouter.use(validateBearerTokenMiddleware);
postRouter.post(
	'/post',
	validadeSchemaMiddleware(postSchema),
	postController.createPost
);
postRouter.get('/post', postController.getPosts);

export default postRouter;
