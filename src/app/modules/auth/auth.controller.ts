import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { authService } from './auth.service';

const creartUser: RequestHandler = catchAsync(async (req, res) => {
  const data = await authService.creartUserDB(req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: 'User Sign Up Successfully',
    data: data,
  });
});

const loginUser: RequestHandler = catchAsync(async (req, res) => {
  const token = await authService.loginUserDB(req.body);

  sendResponse(res, {
    success: true,
    status: 200,
    message: 'User Login Successfully',
    token,
  });
});

export const authController = {
  creartUser,
  loginUser,
};
