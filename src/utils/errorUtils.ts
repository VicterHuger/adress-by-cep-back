import { ErrorApp } from "../types/errorTypes";

export function badRequestError(message: string = ""): ErrorApp {
  const error = {
    code: "bad_request",
    message
  }
  throw (error);
}

export function notFoundError(message: string = ""): ErrorApp {
  const error = {
    code: "not_found",
    message
  }
  throw (error);
}

export function internalServerError(message: string = ""): ErrorApp {
  const error = {
    code: "internal_server",
    message
  }
  throw (error)
}

export function generateThrowErrorMessages(code: string, message: string = ""): ErrorApp {
  const error = {
    code,
    message
  }
  throw (error)
}