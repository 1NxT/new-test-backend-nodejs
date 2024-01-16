import Response from 'express';
class AppError {
  public readonly message: string | {};
  public readonly statusCode: number;
  public readonly adicional: string | {} | [];

  constructor(message: string | {}, statusCode = 400, adicional: string | {} | [] = '') {
    this.message = message;
    this.statusCode = statusCode;
    this.adicional = adicional;
  }
}

export default AppError;
