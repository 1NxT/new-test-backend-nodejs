import v1Router from '@modules/v1/router';
import { Router } from 'express';

const router = Router();
router.use('/v1', v1Router);
export default router;
