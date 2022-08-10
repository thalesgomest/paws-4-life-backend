import { Router } from 'express';
import authRouter from './authRouter.js';
import ongsRouter from './ongsRouter.js';

const router = Router();

router.use(authRouter);
router.use('/register', ongsRouter);

export default router;
