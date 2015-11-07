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
      return res.status(500).json({ success: false, data: err});
    }

    client.query("INSERT INTO pins(image, description) values($1, $2) returning id", [pin.image, pin.description], (err, result) => {
      done();
      if (err) {
        return res.status(500).json({ success: false, data: err});
      }
      res.status(201).json(result.rows[0]);
    });
  });
});

app.put('/pins/:id', (req, res) => {
  const pin = req.body;
  const id = req.params.id;
  pg.connect(connectionString, (err, client, done) => {
    if (err) {
      done();
      return res.status(500).json({ success: false, data: err});
    }

    client.query("UPDATE pins SET image=($1), description=($2) WHERE id=($3)", [pin.image, pin.description, id], (err, result) => {
      done();
      if (err) {
        return res.status(500).json({ success: false, data: err});
      }
      res.json(pin);
    });
  });
});

app.delete('/pins/:id', (req, res) => {
  const id = req.params.id;
  pg.connect(connectionString, (err, client, done) => {
    if (err) {
      done();
      return res.status(500).json({ success: false, data: err});
    }

    client.query("DELETE FROM pins WHERE id=($1)", [id], (err) => {
      done();
      if (err) {
        return res.status(500).json({ success: false, data: err});
      }
      res.status(204).send();
    });
  });
});

app.get('/pins/:id', (req, res) => {
  const id = req.params.id;
  pg.connect(connectionString, (err, client, done) => {
    if (err) {
      done();
      return res.status(500).json({ success: false, data: err});
    }

    client.query('SELECT id, image, description FROM pins WHERE id=($1)', [id], (err, result) => {
      done();
      if (err) {
        return res.status(500).json({ success: false, data: err});
      }
      return res.json(result.rows[0]);
    });
  });
});

app.get('/pins', (req, res) => {
  pg.connect(connectionString, (err, client, done) => {
    if (err) {
      done();
      return res.status(500).json({ success: false, data: err});
    }

    let query = client.query('SELECT id, image, description FROM pins', (err, result) => {
      done();
      if (err) {
        return res.status(500).json({ success: false, data: err});
      }
      res.json(result.rows);
    });
  });
});

export default app;
