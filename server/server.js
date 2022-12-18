const cors = require('cors');
const PORT = 4000;
const db = require('./db');
const express = require('express');
//const { default: App } = require('../client/src/App');
const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/accessories', async (req, res) => {

    const temperature = req.query.temperature;

    const sql = 'SELECT * FROM tAccessories WHERE minTemp <= ? AND maxTemp >= ? ;';
    const rows = await db.query(sql, [temperature, temperature]);

    if (rows) res.json(rows);
    else res.send('Error!');

});

app.get('/trousers', async (req, res) => {

    const temperature = req.query.temperature;

    const sql = 'SELECT * FROM tTrousers WHERE minTemp <= ? AND maxTemp >= ? ;';
    const rows = await db.query(sql, [temperature, temperature]);

    if (rows) res.json(rows);
    else res.send('Error!');

});

app.get('/shoes', async (req, res) => {

    const temperature = req.query.temperature;

    const sql = 'SELECT * FROM tShoes WHERE minTemp <= ? AND maxTemp >= ? LIMIT 1;';
    const rows = await db.query(sql, [temperature, temperature]);

    if (rows) res.json(rows);
    else res.send('Error!');

});

app.get('/coats', async (req, res) => {

    const temperature = req.query.temperature;

    const sql = 'SELECT * FROM tCoats WHERE minTemp <= ? AND maxTemp >= ? LIMIT 1;';
    const rows = await db.query(sql, [temperature, temperature]);

    if (rows) res.json(rows);
    else res.send('Error!');

});

app.get('/tops', async (req, res) => {

    const temperature = req.query.temperature;

    const sql = 'SELECT * FROM tTops WHERE minTemp <= ? AND maxTemp >= ? ;';
    const rows = await db.query(sql, [temperature, temperature]);

    if (rows) res.json(rows);
    else res.send('Error!');

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});