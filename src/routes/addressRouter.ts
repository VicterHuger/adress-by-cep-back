import { Router } from "express";

import { adressesController } from '../controllers/addressesController';
import { validateSchema } from "../middlewares/validateSchema";
import { cepSchema } from "../schemas/cepSchema";

const router: Router = Router();

router.post('/', validateSchema<{ cep: string }>(cepSchema), adressesController.getAddressByCep);

export default router;