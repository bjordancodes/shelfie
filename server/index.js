const express = require('express');
const {json} = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express();
const port = process.env.PORT || 3001;
app.use(json());

massive(process.env.CONNECTION_STRING)
.then(db => app.set('db', db))
.catch(err=> console.log(err));

app.get('/api/products', controller.read)
app.put('/api/products/:id', controller.update)
app.post('/api/products', controller.create)
app.delete('/api/products/:id', controller.delete)

app.listen(port, ()=>{console.log(`Listening on port ${port}!`)})