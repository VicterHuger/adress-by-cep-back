import '@jest/globals';
import supertest from 'supertest';

import { hugeCepGenerator, nonNumericCepGenerator, notValidCepGenerator, validCepGenerator } from '../factories/cepFactory';
import app from '../../src/app';

const server = supertest(app);

describe('/GET addresses', () => {
  it('should return status 400 if a non numerical cep be informed in body', async () => {

    const cep = nonNumericCepGenerator();
    console.log(cep);

    const { status } = await server.get('/addresses').send({ cep });

    expect(status).toBe(400);

  });

  it('should return status 400 if a cep with length bigger than 8 be informed in body', async () => {
    const cep = hugeCepGenerator();

    const { status } = await server.get('/addresses').send({ cep });

    expect(status).toBe(400)

  });

  it('should return status 404 if a cep invalid be informed in body', async () => {
    const cep = notValidCepGenerator();

    const { status } = await server.get('/addresses').send({ cep });

    expect(status).toBe(404);
  });

  it('should return status 200 and the addres of a valid cep informed in the body', async () => {
    const cep = validCepGenerator();

    const result = await server.get('/addresses').send({ cep });

    expect(result.status).toBe(200);
    expect(result.body).toMatchObject({
      code: expect.any(String),
      state: expect.any(String),
      city: expect.any(String),
      address: expect.any(String)
    });
  })
})