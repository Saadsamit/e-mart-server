import { NextFunction, Request, Response } from 'express';

const notFound = (_req: Request, res: Response, _next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: 'API Not Found !',
    error: 'API Not Found !',
  });
};

export default notFound;
