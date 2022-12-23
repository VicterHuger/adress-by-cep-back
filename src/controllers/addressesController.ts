import { Request, Response } from "express";
import { addressService } from '../services/addressService';

async function getAddressByCep(_req: Request, res: Response) {
  const { cep }: { cep: string } = res.locals.body;

  const address = await addressService.getAddressByCep(cep);

  return res.status(200).send(address);
}

export const adressesController = {
  getAddressByCep
};
