import api from './api';
import express from 'express';
import path from 'path';
import httpProxy from 'http-proxy';

const app = express();
const proxy = httpProxy.createProxyServer({
  target: 'http://localhost:' + 3030
});

app.use('/api', function (req, res) {
  proxy.web(req, res);
});

app.use(express.static(__dirname));

app.get('/', (req, res) => res.sendFile('index.html'));

app.use(require('serve-static')(path.join(__dirname, 'static')));

var port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.log('err', err);
  } else {
    console.log('listening on port ', port)
    api().then(() => {
      console.log('api server is listening on port 3030');
    });
  }
});
