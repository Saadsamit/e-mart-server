import prisma, { config } from '../../config';
import AppError from '../../errors/AppError';
import isUserExist from '../../utils/isUserExist';
import { TLogin, TUser } from './auth.interface';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const creartUserDB = async (payload: TUser) => {
  const isExist = await prisma.user.findUnique({
    where: { email: payload.email },
  });
  if (isExist?.email) {
    throw new AppError(403,"User Already  Exist")
  }
  const hashedPassword = await bcrypt.hash(
    payload.password,
    Number(config.bcryptRound),
  );
  payload.password = hashedPassword;
  const result = await prisma.user.create({
    data: payload,
  });

  return result;
};

const loginUserDB = async (payload: TLogin) => {
  const isExist = await isUserExist(payload.email);

  if (!(await bcrypt.compare(payload.password, isExist.password))) {
    throw new AppError(401, 'You enter wrong password');
  }

  const userData = {
    userId: isExist.userId,
    email: isExist.email,
    role: isExist.role,
  };

  const token = jwt.sign(userData, config.jwtAccessSecret as string, {
    expiresIn: config.jwtAccessExpiresIn,
  });

  return token;
};

export const authService = {
  creartUserDB,
  loginUserDB,
};
