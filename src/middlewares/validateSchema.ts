import { Response, NextFunction } from 'express';
import joi from 'joi';

import { CustomRequestBody } from "../types/requestTypes";
import { sanitizeObject } from '../utils/sanitizeUtils';

export function validateSchema<T>(schema: joi.ObjectSchema<T>) {
  return (req: CustomRequestBody<T>, res: Response, next: NextFunction) => {
    const body = req.body;

    sanitizeObject<T>(body);

    const { error }: { error: joi.ValidationError } = schema.validate(body, { abortEarly: false, errors: { label: 'key', wrap: { label: false } } });

    if (error) {
      const errorText: string = error.details.reduce((prev: string, curr: joi.ValidationErrorItem) => {
        return `${prev} \n ${curr.message}`;
      }, "");

      return res.status(400).send(errorText);
    }
    res.locals.body = body;

    return next();

  }

}