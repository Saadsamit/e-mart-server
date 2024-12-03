import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { TErrorSources } from '../interface/error.interface';
import handleZodError from './handleZodError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let status = err?.status || 500;
  let message = err?.message || 'Something went wrong!';
  let errorMessages: TErrorSources = [
    {
      path: err?.path ? err?.path : '',
      message,
    },
  ];
  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    status = simplifiedError.status;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } 
  if (err) {
    res.json({
      success: false,
      status,
      errorMessages,
      message,
    });
  }
};

export default globalErrorHandler;