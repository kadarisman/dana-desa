const express = require('express');
const bodyParser = require('body-parser');
const Routers = require('./routers/index');
const dotenv       = require('dotenv');
dotenv.config();
const cors          = require('cors');
const fs            = require('fs');

const swaggerFile   = 'swagger.json';
const swaggerDataJson = JSON.parse(fs.readFileSync(swaggerFile, 'utf8'));
const swaggerUi     = require('swagger-ui-express');

const app = express();
const port = process.env.PORT || 9001;
app.set('view engine', 'ejs');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '10mb'}));
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDataJson));

// app.get('/', (req, res)=>{
//     res.set('Content-Type', 'text/html');
//     res.status(200).send(Buffer.from(`
//     <h2 style="text-align: center; padding-top:100px">Welcome Rest Api Server Dana Desa</h2><br>
// 
//     `));
// })
app.get('/', function(req, res) {
    res.render('index');
  });
app.use(Routers);
app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})