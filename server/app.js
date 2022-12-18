const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/express_api', async (req, res) => {
    const { status, data } = await getComments(req);
    res.status(status);
    if (data) res.json(data);
    else res.end();
})

const port = 3000;
app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})

async function getComments(req) {
    let status = 500, data = null;
    try {
        const oid = req.query.oid;

        if (oid
            && oid.length > 0 && oid.length <= 32
            && oid.match(/^[a-z0-9]+$/i)) {

            const sql = 'SELECT name, comment FROM comments WHERE oid=?';
            const rows = await db.query(sql, [oid]);

            if (rows) {
                status = 200;
                data = {
                    'oid': oid,
                    'comments': rows
                };
            } else {
                status = 204;
            }
        } else {
            status = 400;
        }
    } catch (e) {
        console.error(e);
    }
    return { status, data };
}

