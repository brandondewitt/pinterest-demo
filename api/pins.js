import pg from 'pg';
import express from 'express';
import bodyParser from 'body-parser';
import { connectionString } from './database';
const app = express();
app.use(bodyParser());


app.post('/pins', (req, res) => {
  const pin = req.body;
  pg.connect(connectionString, (err, client, done) => {
    if (err) {
      done();
      return res.status(500).send(json({ success: false, data: err}));
    }

    client.query("INSERT INTO pins(image, description) values($1, $2)", [pin.image, pin.description]);
    done();
    res.json(req.body);
  });
});

app.put('/pins/:id', (req, res) => {
  const pin = req.body;
  const id = req.params.id;
  pg.connect(connectionString, (err, client, done) => {
    if (err) {
      done();
      return res.status(500).send(json({ success: false, data: err}));
    }

    client.query("UPDATE pins SET image=($1), description=($2) WHERE id=($3)", [pin.image, pin.description, id]);
    done();
    res.json(req.body);
  });
});

app.delete('/pins/:id', (req, res) => {
  const id = req.params.id;
  let results = [];
  pg.connect(connectionString, (err, client, done) => {
    if (err) {
      done();
      return res.status(500).send(json({ success: false, data: err}));
    }

    client.query("DELETE FROM pins WHERE id=($1)", [id]);
    let query = client.query('SELECT id, image, description FROM pins');
    query.on('row', row => results.push(row));
    query.on('end', () => {
      done();
      return res.json(results);
    })
  });
});

app.get('/pins/:id', (req, res) => {
  const id = req.params.id;
  pg.connect(connectionString, (err, client, done) => {
    if (err) {
      done();
      return res.status(500).send(json({ success: false, data: err}));
    }

    let query = client.query('SELECT id, image, description FROM pins WHERE id=($1)', [id]);
    query.on('row', row => {
      done();
      return res.json(row);
    })
  });
});

app.get('/pins', (req, res) => {
  let results = [];
  pg.connect(connectionString, (err, client, done) => {
    if (err) {
      done();
      return res.status(500).send(json({ success: false, data: err}));
    }

    let query = client.query('SELECT id, image, description FROM pins');
    query.on('row', row => results.push(row));
    query.on('end', () => {
      done();
      return res.json(results);
    })
  });
});

export default app;
