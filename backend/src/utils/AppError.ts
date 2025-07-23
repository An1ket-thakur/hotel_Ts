export class AppError extends Error {
  public statusCode: number;
  public status: string;
  public isOperational: boolean;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      next(err);
    });
  };
};
