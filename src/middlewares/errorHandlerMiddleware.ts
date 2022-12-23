import { Request, Response, NextFunction } from "express";

import { ErrorApp, ErrorCustomized, ErrorStatus } from "../types/errorTypes";

export function errorHandlerMiddleware(err: ErrorCustomized | ErrorApp, _req: Request, res: Response, _next: NextFunction) {
  const errorStatus: ErrorStatus = {
    "bad_request": 400,
    "not_found": 404,
    "internal_server": 500
  };

  console.log(err);

  return res.status(errorStatus[err?.code] || 500).send(err.message);
}
