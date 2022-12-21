import { ErrorApp } from "../types/errorType";

export function badRequestError(message: string = ""): ErrorApp {
  const error = {
    code: "bad_request",
    message
  }
  return error;
}
