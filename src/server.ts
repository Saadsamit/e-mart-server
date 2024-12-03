import app from './app';

const port = 3000;

async function Main() {
  try {
    app.listen(port);
  } catch (error) {
    console.log(error);
  }
}

Main();
