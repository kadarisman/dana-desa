const express = require('express');
const bodyParser = require('body-parser');
const Routers = require('./routers/index');
require('dotenv').config();

const app = express();
const port = 9001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '10mb'}));

app.get('/', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.status(200).send(Buffer.from('<h2 style="text-align: center; padding-top:100px">Welcome Rest Api Server Dana Desa</h2>'));
})

app.use(Routers);
app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})