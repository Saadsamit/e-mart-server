import { Router } from 'express';
import basicRoute from '../modules/basic';
import { authRoute } from '../modules/auth/auth.route';

interface routeInterface {
  path: string;
  route: Router;
}

const router = Router();

const moduleRoutes: routeInterface[] = [
  {
    path: '/',
    route: basicRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
