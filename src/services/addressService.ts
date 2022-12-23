async function getAddressByCep(cep: string) {
  if (isNaN(Number(cep))) badRequestError("CEP input must contains only numbers!");

  if (cep.length > 8) badRequestError("CEP length must be not bigger than 8 numbers!");

  const apiInfo = await getAddressByAPi(cep);
  if (!apiInfo.ok) {
    generateThrowErrorMessages(apiInfo.statusText, (apiInfo as AddressAPIIncorrect).message);
}

async function getAddressByAPi(cep: string) {
  return { "status": 200, "ok": true, "code": "20785-355", "state": "RJ", "city": "Rio de Janeiro", "district": "Maria da Graça", "address": "Rua Domingos de Magalhães - de 534 ao fim - lado par", "statusText": "ok" }

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