import { config } from './app/config';
import app from './app';

async function Main() {
  try {
    await app.listen(config?.port);
    console.log('connected');
  } catch (error) {
    console.log(error);
  }
}

Main();
