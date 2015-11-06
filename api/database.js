import pg from 'pg';
import pins from './data';
export const connectionString = process.env.DATABASE_URL ||  'postgres://localhost:5432/pinterestdemo';

// var client = new pg.Client(connectionString);
// client.connect();
// var query = client.query('create table pins(id serial primary key, description text not null, image varchar(150) not null)');
// query.on('end', function() { client.end(); });
// pg.connect(connectionString, (err, client, done) => {
//   if (err) { done();return console.log(err); }
//   pins.forEach(pin => {
//     client.query("insert into pins(image, description) values($1, $2)", [pin.image, pin.description]);
//   });
//   done();
// });
