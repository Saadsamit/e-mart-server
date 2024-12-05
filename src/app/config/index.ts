import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

export const config = {
  port: process.env.PORT,
  clientUrl:
    process.env.NODE_ENV === 'production'
      ? process.env.CLIENT_HOST_URL
      : process.env.CLIENT_LOCAL_URL,
  bcryptRound: process.env.BCRYPT_ROUNDS,
  jwtAccessSecret: process.env.BCRYPT_ROUNDS,
  jwtAccessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
};

export default prisma;
