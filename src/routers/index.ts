import { Router } from 'express';
import authRouter from './authRouter.js';
import ongsRouter from './ongRouter.js';
import postRouter from './postRouter.js';

const router = Router();

router.use(authRouter);
router.use(ongsRouter);
router.use(postRouter);

export default router;
