import { ZodError, ZodIssue } from 'zod';
import { TErrorSources, TGenericErrorResponse } from '../interface/error.interface';

const handleZodError = (err: ZodError): TGenericErrorResponse => {
  const errorMessages: TErrorSources = err.issues.map((issues: ZodIssue) => {
    return {
      path: issues?.path[issues?.path.length - 1],
      message: issues?.message,
    };
  });
  return { status: 400, message: 'Validation Error', errorMessages };
};

export default handleZodError;