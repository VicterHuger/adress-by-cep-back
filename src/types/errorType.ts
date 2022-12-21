export interface ErrorApp {
  code: string,
  message: string
}

export interface ErrorCustomized extends Error {
  code?: string,
};

export interface ErrorStatus {
  [key: string]: number;
}