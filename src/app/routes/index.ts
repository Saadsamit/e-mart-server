import { Router } from 'express';
import basicRoute from '../modules/basic';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router