import express, { Application } from 'express';
import cors from 'cors';
import router from './app/routes';
import basicRoute from './app/modules/basic';
import globalErrorHandler from './app/errors/globalErrorHandler';
import notFound from './app/errors/notFound';
import { config } from './app/config';
import cookieParser from 'cookie-parser';

const app: Application = express();

app.use(cors({ origin: config.clientUrl, credentials: true }));
app.use(cookieParser())
app.use(express.json());

app.use('/', basicRoute);

app.use('/api', router);

app.use(notFound);

app.use(globalErrorHandler);

export default app;
