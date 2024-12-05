import { Router } from 'express';
import { authController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import {
  loginSchemaValidation,
  signupSchemaValidation,
} from './auth.validation';

const route = Router();

route.post(
  '/signup',
  validateRequest(signupSchemaValidation),
  authController.creartUser,
);

route.post(
  '/login',
  validateRequest(loginSchemaValidation),
  authController.loginUser,
);

export const authRoute = route;
