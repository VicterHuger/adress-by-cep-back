import { jest } from '@jest/globals';

import { hugeCepGenerator, nonNumericCepGenerator, notValidCepGenerator, validCepGenerator } from '../../factories/cepFactory';

import { addressService } from '../../../src/services/addressService';
import { badRequestError, notFoundError } from '../../../src/utils/errorUtils';

beforeEach(async () => {
  jest.clearAllMocks();
});

describe('address service function()', () => {
  it('should return status 400 if the zip code contains non numeric characters', () => {
    const CEP = nonNumericCepGenerator();

    const promise = addressService.getAddressByCep(CEP);

    expect(promise).rejects.toEqual(badRequestError('CEP must not contains non numerics characters'));
    expect(addressService.getAddressByAPi).not.toBeCalled();
  });

  it('should return status 400 if the zip code contains length bigger than 8 characteres', () => {
    const CEP = hugeCepGenerator();

    const promise = addressService.getAddressByCep(CEP);

    expect(promise).rejects.toEqual(badRequestError('CEP length must be not bigger than 8 numbers'));
    expect(addressService.getAddressByAPi).not.toBeCalled();
  });
})