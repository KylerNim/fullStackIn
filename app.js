//////////////////////////////////////// IMPORTS ////////////////////////////////////////////
import express from 'express';
const app = express();

import pg from 'pg';
const { Pool } = pg;

import 'dotenv/config';
const databaseURL = process.env.DATABASE_URL;

const db = new Pool({
    connectionString: databaseURL,
});
await db.connect();

/////////////////////////////////////// REQUEST HANDLERS //////////////////////////////////
app.use(express.json());
app.use(express.static('public'));

app.get('/rocks', (req, res) => {
    db.query('SELECT * FROM myRC;')
    .then((result) => { res.status(200).send(result.rows); })
    .catch((error) => { res.status(404).send(error); })
});
app.get('/rocks/:id', (req, res) => {
    let id = req.params.id;
    db.query('SELECT * FROM rocksRC WHERE owner_id = $1;', [id])
    .then((result) => { res.status(200).send(result.rows); })
    .catch((error) => { res.status(404).send(error); })
});

app.listen(8000, ()=> {
    console.log('Server listening on Port 8000')
});