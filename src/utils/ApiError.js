export class ApiError extends Error {
  constructor(
    StatusCode,
    Message = "Something went Wrong",
    errors = [],
    stack = ""
  ) {
    super(Message);
    this.StatusCode = StatusCode;
    this.Data = null;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
