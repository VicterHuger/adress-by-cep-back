import { faker } from '@faker-js/faker';

export function nonNumericCepGenerator() {
  return faker.random.alpha(8);
}

export function hugeCepGenerator() {
  return faker.random.numeric(10);
}

export function notValidCepGenerator() {
  return faker.random.numeric(8, {
    allowLeadingZeros: true
  });
};

export function validCepGenerator() {
  return '18147000';
}