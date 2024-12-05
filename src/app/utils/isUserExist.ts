import prisma from '../config';
import AppError from '../errors/AppError';

const isUserExist = async (email: string) => {
  const isExist = await prisma.user.findUnique({
    where: { email: email, status: { notIn: ['suspend', 'delete'] } },
  });

  if (!isExist) {
    throw new AppError(401, 'User not Exist');
  }

  return isExist;
};

export default isUserExist