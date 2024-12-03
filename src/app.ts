import express, { Application } from 'express';
import cors from 'cors';
import router from './app/routes';
import basicRoute from './app/modules/basic';
import globalErrorHandler from './app/errors/globalErrorHandler';
import notFound from './app/errors/notFound';

const app: Application = express();

app.use(cors());

app.use("/", basicRoute)

app.use('/api', router);

app.use(notFound);

app.use(globalErrorHandler);

export default app;
