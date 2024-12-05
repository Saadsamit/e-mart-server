import catchAsync from '../utils/catchAsync';
import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { config } from '../config';
import AppError from '../errors/AppError';
import { TUserRole } from '../modules/auth/auth.interface';
import isUserExist from '../utils/isUserExist';

const auth = (...roles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(401, 'you dont have access token');
    }

    const decode = jwt.verify(
      token,
      config.jwtAccessSecret as string,
    ) as JwtPayload;

    const { email, role } = decode;

    const isExist = await isUserExist(email);

    if (roles.length && !roles.includes(role)) {
      throw new AppError(401, 'You have no access to this route');
    }
    
    if (role !== isExist.role) {
      throw new AppError(401, 'Login Again');
    }

    req.user = {
      userId: isExist.userId,
      email,
      role,
      name: isExist?.name,
    };
    next();
  });
};

export default auth;
