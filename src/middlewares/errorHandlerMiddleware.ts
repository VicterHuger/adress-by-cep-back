import { Request, Response, NextFunction } from "express";

import { ErrorApp, ErrorCustomized, ErrorStatus } from "../types/errorType";

export async function errorHandlerMiddleware(err: ErrorCustomized | ErrorApp, _req: Request, res: Response, _next: NextFunction) {
  const errorStatus: ErrorStatus = {
    "bad_request": 400,
    "not_found": 401,
    "internal_server_error": 500
  };

  console.log(err);

  return res.status(errorStatus[err?.code] || 500).send(err.message);
}
