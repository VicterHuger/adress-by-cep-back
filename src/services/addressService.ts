async function getAddressByCep(cep: string) {
  const apiInfo = await getAddressByAPi(cep);
  return apiInfo;
}

async function getAddressByAPi(cep: string) {
  return { "status": 200, "ok": true, "code": "20785-355", "state": "RJ", "city": "Rio de Janeiro", "district": "Maria da Graça", "address": "Rua Domingos de Magalhães - de 534 ao fim - lado par", "statusText": "ok" }


}

export const addressService = {
  getAddressByCep,
  getAddressByAPi
}