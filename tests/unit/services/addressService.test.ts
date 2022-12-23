import { jest } from '@jest/globals';

import { hugeCepGenerator, nonNumericCepGenerator, notValidCepGenerator, validCepGenerator } from '../../factories/cepFactory';

import { addressService } from '../../../src/services/addressService';
import { badRequestError, notFoundError } from '../../../src/utils/errorUtils';

beforeEach(async () => {
  jest.clearAllMocks();
});

describe('address service function()', () => {
  it('should return status 400 if the zip code contains non numeric characters', async () => {
    const CEP = nonNumericCepGenerator();

    const promise = addressService.getAddressByCep(CEP);

    expect(promise).rejects.toEqual(badRequestError("CEP input must contains only numbers!"));
    expect(addressService.getAddressByAPi).not.toBeCalled();
  });

  it('should return status 400 if the zip code contains length bigger than 8 characteres', async () => {
    const CEP = hugeCepGenerator();

    const promise = addressService.getAddressByCep(CEP);

    expect(promise).rejects.toEqual(badRequestError('CEP length must be not bigger than 8 numbers'));
    expect(addressService.getAddressByAPi).not.toBeCalled();
  });

  it('should return status 404 if the zip code is not valid', async () => {
    const CEP = notValidCepGenerator();

    jest.spyOn(addressService, 'getAddressByAPi').mockImplementationOnce((): any => { });

    const promise = addressService.getAddressByCep(CEP);

    expect(promise).rejects.toEqual(notFoundError('CEP não encontrado'));
    expect(addressService.getAddressByAPi).toBeCalledWith(CEP);


  });

  it('should return status 200 and the correct address if the zip code is correct', async () => {
    const CEP = validCepGenerator();

    jest.spyOn(addressService, 'getAddressByAPi').mockResolvedValueOnce({ status: 200, ok: true, code: `${CEP}`, state: "", city: "", district: "", address: "", statusText: "ok" });

    const result = await addressService.getAddressByCep(CEP);

    expect(addressService.getAddressByAPi).toBeCalledWith(CEP);
    expect(result).toMatchObject(expect.objectContaining({
      status: 200,
      ok: true,
      code: CEP,
      state: expect.any(String),
      city: expect.any(String),
      district: expect.any(String),
      address: expect.any(String),
      statusText: expect.any(String)
    }));

  });

})