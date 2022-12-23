interface AddressAPI {
  status: number,
  ok: boolean,
  statusText: string
}

export interface AddressAPICorrect extends AddressAPI {
  code: string,
  state: string,
  city: string,
  district: string,
  address: string,
}

export interface AddressAPIIncorrect extends AddressAPI {
  message: string,
}