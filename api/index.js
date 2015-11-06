import express from 'express';
import pins from './pins';
const app = express();

export default function api() {
  return new Promise((resolve) => {
    app.use(pins);
    app.use('/api', pins);
    app.listen(3030);
    resolve();
  });
}
