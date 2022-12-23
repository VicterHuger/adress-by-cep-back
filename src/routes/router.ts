import { Router } from "express";

import addressRouter from './addressRouter';

const router: Router = Router();

router.use('/addresses', addressRouter);

export default router;