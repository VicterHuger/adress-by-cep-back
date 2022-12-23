import { AddressAPICorrect, AddressAPIIncorrect } from '../types/addressTypes';
import cepApi from '../utils/cepApiUtils';
import { badRequestError, generateThrowErrorMessages } from '../utils/errorUtils';
import { excludeProperty } from '../utils/excludePropertiesUtils';

async function getAddressByCep(cep: string) {
  if (isNaN(Number(cep))) badRequestError("CEP input must contains only numbers!");

  if (cep.length > 8) badRequestError("CEP length must be not bigger than 8 numbers!");

  const apiInfo = await getAddressByAPi(cep);

  if (!apiInfo.ok) {
    generateThrowErrorMessages(apiInfo.statusText, (apiInfo as AddressAPIIncorrect).message);
  }

  if (apiInfo.ok) {
    return excludeProperty(apiInfo as AddressAPICorrect, "ok", "status", "statusText");
  }
}

async function getAddressByAPi(cep: string): Promise<AddressAPICorrect | AddressAPIIncorrect> {
  const response = await cepApi.get<AddressAPICorrect | AddressAPIIncorrect>('/cep.json', {
    params: {
      code: cep,
    }
  });
  return response.data

}

export const addressService = {
  getAddressByCep,
  getAddressByAPi
}