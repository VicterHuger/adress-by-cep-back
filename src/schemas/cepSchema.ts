import joi from 'joi';

const cep = joi.string().pattern(/^[0-9]+$/, 'numbers').length(8).required().label('CEP').messages({
  'string.required': '{#label} must be provided!',
  'string.empty': '{#label} must not be empty!',
  'string.pattern.name': '{#label} must contains only {#name}',
  'string.base': '{#label} must be a valid string',
  'string.length': '{#label} must have {#limit} numbers'
});

export const cepSchema: joi.ObjectSchema<{ cep: string }> = joi.object().keys({
  cep
});